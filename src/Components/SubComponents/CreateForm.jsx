import React, {useState} from 'react'
import {FaEye} from "react-icons/fa";
import axios from "../../Config/axios.config.js";
import {useNavigate} from "react-router-dom";
import DuplicateRoomError from "./DuplicateRoomError.jsx";
import Loader from './Loader.jsx'
import RoomCreated from "./RoomCreated.jsx";

const CreateForm = () => {
    const navigate = useNavigate();
    const [room, setRoom] = useState()
    const [duplicateError, setDuplicateError] = useState(false)
    const [activeRoom, setActiveRoom] = useState(null)
    const [passwordType, setPasswordType] = useState(false)
    const [confirmPasswordType, setConfirmPasswordType] = useState(false)
    const [roomName, setRoomName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isNameError, setIsNameError] = useState(false)
    const [isPasswordError, setIsPasswordError] = useState(false)
    const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false)
    const [nameError, setNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [sumbitting, setSumbitting] = useState(false)
    const [roomCreated, setRoomCreated] = useState(false)

    const handleSubmit = async (e) => {
        console.log(roomCreated)
        e.preventDefault();
        setDuplicateError(false)
        setSumbitting(true);

        let hasError = false;

        setIsNameError(false);
        setIsPasswordError(false);
        setIsConfirmPasswordError(false);

        if (roomName.trim().length < 3) {
            setIsNameError(true);
            setNameError("Room name must be at least 3 characters long");
            hasError = true;
            setSumbitting(false);
            return
        } else if (roomName.trim().length > 20) {
            setIsNameError(true);
            setNameError("Room name must be less than 20 characters long");
            hasError = true;
            setSumbitting(false);
            return
        }

        if (password.trim().length < 3) {
            setIsPasswordError(true);
            setPasswordError("Password must be at least 3 characters long");
            hasError = true;
            setSumbitting(false);
            return
        }

        if (password !== confirmPassword) {
            setIsConfirmPasswordError(true);
            setConfirmPasswordError("Passwords do not match");
            hasError = true;
            setSumbitting(false);
            return
        }

        if (hasError) return;

        try {
            const res = await axios.post("/addRoom", {
                roomName,
                password,
            });
            console.log("Room created successfully");
            setRoom(res.data);
            setActiveRoom(res.data)
            console.log(res.data);
            setRoomName("");
            setPassword("");
            setConfirmPassword("");
            setSumbitting(false);
            setRoomCreated(true)
            console.log(roomCreated)
            navigate(`/room/${res.data._id}`);
        } catch (err) {
            console.log(err);
            if (err.response.status === 409) {
                setDuplicateError(true)
            }
        }
        finally {
            setSumbitting(false)
        }
    };


    return (
        <div>
            {
                roomCreated &&
                <RoomCreated/>
            }
            {
                sumbitting &&
                <Loader/>
            }
            {
                duplicateError &&
                <DuplicateRoomError/>
            }
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="roomName"
                        id="roomName"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
          border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600
          dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                    />
                    <label
                        htmlFor="roomName"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
          duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
          peer-focus:text-blue-600 peer-focus:dark:text-blue-500
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Name of your room
                    </label>
                    {
                        isNameError &&
                        <p className='text-red-500'>{nameError}</p>
                    }
                </div>

                {/* Password */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type={passwordType ? 'text' : 'password'}
                        name="password"
                        id="floating_password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
          border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600
          dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
          duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
          peer-focus:text-blue-600 peer-focus:dark:text-blue-500
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Password <sup><b>Remember your password</b></sup>
                    </label>
                    <FaEye
                        className="absolute right-3 top-3 cursor-pointer text-gray-500 dark:text-white"
                        onClick={() => setPasswordType(!passwordType)}
                    />
                    {
                        isPasswordError &&
                        <p className='text-red-500'>{passwordError}</p>
                    }
                </div>

                {/* Confirm password */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type={confirmPasswordType ? 'text' : 'password'}
                        name="repeat_password"
                        id="floating_repeat_password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
          border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600
          dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label
                        htmlFor="floating_repeat_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
          duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
          peer-focus:text-blue-600 peer-focus:dark:text-blue-500
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Confirm password
                    </label>
                    <FaEye
                        className="absolute right-3 top-3 cursor-pointer text-gray-500 dark:text-white"
                        onClick={() => setConfirmPasswordType(!confirmPasswordType)}
                    />
                    {
                        isConfirmPasswordError &&
                        <p className='text-red-500'>{confirmPasswordError}</p>
                    }
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
        focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5
        text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {sumbitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}
export default CreateForm
