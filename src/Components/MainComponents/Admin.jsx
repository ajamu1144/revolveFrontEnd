import React, {useEffect} from 'react'
import AdminAdded from "../SubComponents/AdminAdded.jsx";
import axios from "../../Config/axios.config.js";

const Admin = () => {
    const [allRooms, setAllRooms] = React.useState([]);
    const fetchRooms = async () => {
        try {
            const res = await axios.get('/rooms')
            setAllRooms(res.data);
        }
        catch (e){
            console.log('An error occurred in fetching rooms', e)

        }
    }

    const deleteRoom = async (roomId) => {
        // await axios.delete(`/room:${roomId}`)
        try {
            const deletedRoom = await axios.delete(`/delete/room/${roomId}`)
            console.log(deletedRoom)
            fetchRooms()
        }
        catch (e){
            console.log('An error occurred in deleting this room', e)
        }
    }
    useEffect(() => {
        fetchRooms()
    }, [])
    return (
        <div>
            <AdminAdded/>
            <h1 className='text-blue-600 font-bold text-5xl text-center mt-10'>Admin</h1> <br/>
            <div>
                {
                    allRooms.map((room) => (
                        <div key={room._id} className='text-white  !p-10 m-3 rounded-lg bg-blue-900/30 flex justify-between'>
                            <div>
                                <h1>Name: {room.roomName}</h1>
                                <p>Password: {room.password}</p>
                            </div>
                            <div>
                                <button onClick={()=>deleteRoom(room._id)} className='bg-red-500 p-4 rounded'>Delete Room</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Admin
