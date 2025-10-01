import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "../../Config/axios.config.js";
import Loader from "../SubComponents/Loader.jsx";

const JoinRoom = () => {
    const navigate = useNavigate();
    const [roomName, setRoomName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [joinedRoom, setJoinedRoom] = useState(null);
    const [passwordType, setPasswordType] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleJoin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await axios.post("/rooms/join", {
                roomName,
                password,
            });

            setJoinedRoom(res.data.room);

            // ✅ Remember last room
            localStorage.setItem("lastRoom", res.data.room._id);

            navigate(`/room/${res.data.room._id}`);
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error);
            } else {
                setError("Server error");
            }
        }
    };


    return (
        <div className="max-w-md mx-auto mt-10">
            {
                loading &&
                <Loader/>
            }
            <form onSubmit={handleJoin} className="max-w-md mx-auto">
                {/* Room Name */}
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
                        Room Name
                    </label>
                </div>

                {/* Password */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type={passwordType ? "text" : "password"}
                        name="password"
                        id="join_password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
              border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600
              dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                        htmlFor="join_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
              peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Room Password
                    </label>
                    <FaEye
                        className="absolute right-3 top-3 cursor-pointer text-gray-500 dark:text-white"
                        onClick={() => setPasswordType(!passwordType)}
                    />
                </div>

                {/* Error */}
                {error && <p className="text-red-500">{error}</p>}

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
            focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5
            text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Join
                </button>
            </form>

            {/* Success Toast */}
            {joinedRoom && (
                <div className="mt-6 p-4 bg-green-600 rounded-lg text-center shadow-md">
                    ✅ Joined <strong>{joinedRoom.roomName}</strong>
                </div>
            )}
        </div>
    );
};

export default JoinRoom;
