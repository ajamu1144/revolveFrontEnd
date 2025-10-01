import React from 'react'

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-blue-900/20 flex items-center justify-center z-50">
            <div className="relative w-28 h-28">
                {/* Outer glowing ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>

                {/* Middle slower ring */}
                <div className="absolute inset-4 rounded-full border-4 border-blue-400 border-b-transparent animate-spin-slow shadow-[0_0_15px_rgba(96,165,250,0.6)]"></div>

                {/* Inner pulse core */}
                <div className="absolute inset-10 rounded-full bg-blue-500 animate-pulse shadow-[0_0_25px_rgba(59,130,246,0.8)]"></div>
            </div>
        </div>

    )
}
export default Loader
