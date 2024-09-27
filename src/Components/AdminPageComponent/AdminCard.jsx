import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHouse } from "react-icons/fa6";
import { FcFeedback } from "react-icons/fc";
import { FaUserSecret } from "react-icons/fa";

const AdminCard = () => {
    const [room, setRoom] = useState(0);
    const [users, setUsers] = useState(0);
    const [review, setReview] = useState(0);
    const [tenen, setTenen] = useState(0);
    const [feature, setFeature] = useState([]);
    const [featured, setFeatured] = useState(0);

    useEffect(() => {
        const getData = async () => {
            try {
                const roomData = await axios.get("http://localhost:5000/users/getAllProperty");
                const res = await axios.get("http://localhost:5000/Admin/getAllUsers");
                const getReview = await axios.get("http://localhost:5000/user/getReview");

                const roomCount = roomData.data?.shareProperty.length || 0;
                const usersCount = res.data?.length || 0;
                const reviewCount = getReview.data?.length || 0;

                setRoom(roomCount);
                setFeature(roomData.data?.shareProperty || []);
                setUsers(usersCount);
                setReview(reviewCount);

                const tenent = res.data || [];
                const tenents = tenent.filter((item) => item.isOwner);
                setTenen(tenents.length);

            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        getData();
    }, []);

    useEffect(() => {
        if (feature.length > 0) {
            const getFeat = feature.filter((item) => item.isfeatured);
            setFeatured(getFeat.length);
        }
    }, [feature]);

    return (
        <div>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap m-2 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <div className='flex justify-center ' style={{ fontSize: "60px", color: 'blue' }}>
                                    <span><FaHouse /></span>
                                </div>
                                <h2 className="title-font font-medium text-3xl text-gray-900">{room}</h2>
                                <p className="leading-relaxed">Registered Rooms</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <div className='flex justify-center ' style={{ fontSize: "60px", color: 'blue' }}>
                                    <span><FaHouse /></span>
                                </div>
                                <h2 className="title-font font-medium text-3xl text-gray-900">{featured}</h2>
                                <p className="leading-relaxed">Featured Rooms</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">{users}</h2>
                                <p className="leading-relaxed">Users</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <div className='flex justify-center ' style={{ fontSize: "60px", color: 'blue' }}>
                                    <span><FaUserSecret /></span>
                                </div>
                                <h2 className="title-font font-medium text-3xl text-gray-900">{tenen}</h2>
                                <p className="leading-relaxed">Room Owners</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <div className='flex justify-center ' style={{ fontSize: "60px", color: 'blue' }}>
                                    <span><FcFeedback /></span>
                                </div>
                                <h2 className="title-font font-medium text-3xl text-gray-900">{review}</h2>
                                <p className="leading-relaxed">Feedbacks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminCard;
