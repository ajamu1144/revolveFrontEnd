import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import './App.css'
import SignUp from "./Components/MainComponents/SignUp.jsx";
import Create from "./Components/MainComponents/Create.jsx";
import JoinRoom from "./Components/MainComponents/JoinRoom.jsx";
import ChatRoom from "./Components/MainComponents/ChatRoom.jsx";
import Layout from "./Components/MainComponents/Layout.jsx";
import Admin from "./Components/MainComponents/Admin.jsx";
import AdminLogin from "./Components/MainComponents/AdminLogin.jsx";
import NotFound from "./Components/SubComponents/NotFound.jsx";

function App() {
    // const navigate = useNavigate();
    // const location = useLocation();
    //
    // useEffect(() => {
    //     const lastRoom = localStorage.getItem("lastRoom");
    //     if (lastRoom && location.pathname === "/") {
    //         navigate(`/room/${lastRoom}`);
    //     }
    // }, [navigate, location]);

    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<SignUp/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="/join" element={<JoinRoom/>}/>
                <Route path="/room/:roomId" element={<ChatRoom />} />
                <Route path='/adminPage' element={<Admin/>}/>
                <Route path='/adminLogin' element={<AdminLogin/>}/>
                <Route path='/*' element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App
