import React from 'react'
import { motion } from "framer-motion";
import ActionCard from "../SubComponents/ActionCard.jsx";
import createImage from '../../img/create.jpg'
import joinImage from '../../img/join.jpg'
import Footer from "./Footer.jsx";


const SignUp = () => {
    return (
        <div>
            <div>
                <motion.h1
                    initial={{ opacity: 0 , transform: 'translateY(200px)'}}
                    animate={{ opacity: 1, transform: 'translateY(0px)'}}
                    transition={{ duration: 1.6 }}
                    className="text-5xl text-center mt-4 font-bold text-blue-600"
                >
                    Welcome to revolve
                </motion.h1> <br/>
                <p className='dark:text-white  opacity-40 text-center'>Here you can create rooms for you and your friends, join rooms and chat anonymously</p>
            </div>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
                <ActionCard text='Be the host of an anominous room, chat, remove chats, remove members and much more' heading='Create a room' image={createImage} link='/create'/>
                <ActionCard text='Post chats anominously, talk with other members all anominously and have fun' heading='Join a room' image={joinImage} link='/join'/>
            </div>
            <div className='mb-20'></div>
        </div>
    )
}

export default SignUp