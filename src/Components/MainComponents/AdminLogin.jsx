import React, {useState} from 'react'
import {FaEye} from "react-icons/fa";
import axios from '../../Config/axios.config.js'
import Loader from "../SubComponents/Loader.jsx";
import {useNavigate} from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("/admin/add", {username, password})
            setLoading(false);
            navigate('/adminPage')
        }
        catch (e) {
            console.log('An error occurred in adding admin', e)
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <div>
            {
                loading &&
                <Loader/>
            }
            <br/> <br/>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="username"
                        id="roomName"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
          border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600
          dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
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
                    {/*{*/}
                    {/*    isNameError &&*/}
                    {/*    <p className='text-red-500'>{nameError}</p>*/}
                    {/*}*/}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
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
                        // onClick={() => setPasswordType(!passwordType)}
                    />

                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
        focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5
        text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                    {/*{sumbitting ? 'Submitting...' : 'Submit'}*/}
                </button>
            </form>
        </div>
    )
}
export default AdminLogin
