import React from "react";

const AdminAdded = () => {
    const removeToast = (e) => {
        e.target.closest("#toast-captivating-success").remove();
    };

    return (
        <div className="fixed top-6 right-6 z-50 animate-slide-in">
            <div
                id="toast-captivating-success"
                className="flex items-center w-full max-w-sm p-4 rounded-2xl shadow-lg
        bg-green-900/90 text-green-100 backdrop-blur-md border border-green-500/30 relative overflow-hidden"
                role="alert"
            >
                <div className="absolute inset-0 bg-green-500/10 blur-xl animate-pulse"></div>

                <div
                    className="relative z-10 inline-flex items-center justify-center w-10 h-10
          bg-green-600 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.7)] animate-bounce-slow"
                >
                    <svg
                        className="w-5 h-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3.25-3.25a1 1 0 0 1 1.414-1.414l2.543 2.543 6.543-6.543a1 1 0 0 1 1.414 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>

                {/* Text */}
                <div className="ml-3 text-sm font-medium text-green-100 relative z-10">
                    🎉 Admin Logged In Successfully!
                    <span className="block opacity-80 text-xs">
            You can now start acting like an admin
          </span>
                </div>

                {/* Close button */}
                <button
                    type="button"
                    onClick={removeToast}
                    className="ml-auto text-green-300 hover:text-white rounded-full p-2 transition relative z-10"
                >
                    <svg
                        className="w-4 h-4"
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

export default AdminAdded;
