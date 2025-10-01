import React from "react";

const DuplicateRoomError = () => {
    const removeToast = (e) => {
        e.target.parentElement.remove();
    };

    return (
        <div className="fixed top-6 -6 z-50 animate-slide-in">
            <div
                id="toast-captivating"
                className="flex items-center w-full max-w-sm p-4 rounded-2xl shadow-lg
        bg-blue-900/90 text-blue-100 backdrop-blur-md border border-blue-500/30 relative overflow-hidden"
                role="alert"
            >
                {/* Glow aura behind */}
                <div className="absolute inset-0 bg-blue-500/10 blur-xl animate-pulse"></div>

                {/* Icon */}
                <div
                    className="relative z-10 inline-flex items-center justify-center w-10 h-10
          bg-blue-600 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.7)] animate-bounce-slow"
                >
                    <svg
                        className="w-5 h-5 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                    </svg>
                </div>

                {/* Text */}
                <div className="ml-3 text-sm font-medium text-blue-100 relative z-10">
                    ⚠️ This Room Already Exists.
                    <span className="block opacity-80 text-xs">
            Please try another room name.
          </span>
                </div>

                {/* Close button */}
                <button
                    type="button"
                    onClick={removeToast}
                    className="ml-auto text-blue-300 hover:text-white rounded-full p-2 transition relative z-10"
                >
                    <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1l12 12M13 1 1 13"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default DuplicateRoomError;
