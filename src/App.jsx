import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import './App.css'
import SignUp from "./Components/MainComponents/SignUp.jsx";
import Create from "./Components/MainComponents/Create.jsx";
import JoinRoom from "./Components/MainComponents/JoinRoom.jsx";
import ChatRoom from "./Components/MainComponents/ChatRoom.jsx";
import Layout from "./Components/MainComponents/Layout.jsx";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const lastRoom = localStorage.getItem("lastRoom");
        if (lastRoom) {
            navigate(`/room/${lastRoom}`);
        }
    }, [navigate]);

    return (
        // <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<SignUp/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/join" element={<JoinRoom/>}/>
                    <Route path="/room/:roomId" element={<ChatRoom />} />
                </Route>
            </Routes>
        // </Router>
    )
}

export default App
