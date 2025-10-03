import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../Config/axios.config.js";

const ChatRoom = () => {
    const { roomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [roomInfo, setRoomInfo] = useState(null);

    useEffect(() => {
        fetchRoomInfo();
        fetchMessages();
        const interval = setInterval(fetchMessages, 3000);
        return () => clearInterval(interval);
    }, [roomId]);

    const fetchRoomInfo = async () => {
        try {
            const res = await axios.get(`/rooms/${roomId}`);
            setRoomInfo(res.data);
        } catch (err) {
            console.error("Error fetching room info:", err);
        }
    };

    const fetchMessages = async () => {
        try {
            const res = await axios.get(`/rooms/${roomId}/messages`);
            setMessages(res.data.reverse());
            setLoading(false);
        } catch (err) {
            console.error("Error fetching messages:", err);
        }
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        try {
            await axios.post(`/rooms/${roomId}/chats`, {
                message: newMessage,
            });
            setNewMessage("");
            fetchMessages();
        } catch (err) {
            console.error("Error sending message:", err);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white">
            {/* Chat Header */}
            <div className="p-4 bg-blue-800 text-lg font-bold flex justify-between">
                <span>Room: {roomInfo ? roomInfo.roomName : roomId}</span>
                {roomInfo && (
                    <span className="text-sm text-gray-200">
                        Password: <strong>{roomInfo.password}</strong>
                    </span>
                )}
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
                {loading ? (
                    <p className="text-gray-400">Loading messages...</p>
                ) : messages.length === 0 ? (
                    <p className="text-gray-400">No messages yet.</p>
                ) : (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className="mb-2 p-2 rounded bg-blue-700/40 w-fit max-w-xs"
                        >
                            {msg.message}
                        </div>
                    ))
                )}
            </div>

            {/* Message Input */}
            <form onSubmit={sendMessage} className="p-4 bg-gray-800 flex gap-2">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-2 rounded bg-gray-700 text-white outline-none"
                />
                <button
                    type="submit"
                    className="px-3 md:px-4 py-2 p-1 text-[15px] bg-blue-600 hover:bg-blue-700 rounded "
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatRoom;
