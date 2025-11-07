import React from 'react'
import {Link, useLocation} from "react-router-dom";

const NotFound = () => {
    const location = useLocation()
    return (
        <div>
            <h1 className='text-9xl text-center text-blue-600 font-bold'>404</h1> <br/>
            <p className='text-white text-center text-2xl'>This page does '{location.pathname}' not exist <Link to='/' className='font-bold underline'>Back to Home Page</Link></p>
        </div>
    )
}
export default NotFound
