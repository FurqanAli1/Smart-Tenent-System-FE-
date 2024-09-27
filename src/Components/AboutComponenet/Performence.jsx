import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaHouse } from "react-icons/fa6";
import { FcFeedback } from "react-icons/fc";
import { FaUserSecret } from "react-icons/fa";

const Performence = () => {
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('')
    const [review,setReview] = useState(0)
    const [tenen,settene] = useState(0)

    useEffect(() => {
        const getData = async () => {
            const roomData = await axios.get("http://localhost:5000/users/getAllProperty")
            setRoom(roomData.data?.shareProperty.length)
            const res = await axios.get("http://localhost:5000/Admin/getAllUsers")
            setUsers(res.data?.length)
            const getReview = await axios.get("http://localhost:5000/user/getReview")
            setReview(getReview.data?.length)
            const tenent = res.data
            const tenents = tenent.filter((item)=>{
                if(item.isOwner){
                    return item
                }
            })
            settene(tenents.length)
        }
        getData()
    }, [])
    return (
        <div>
            <h2 class="text-4xl font-bold text-blue-800 text-center mb-4">Overall Record</h2>
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-12 mb-20 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <div className='flex justify-center ' style={{ fontSize: "60px", color: 'blue' }}>
                                    <span><FaHouse /></span>
                                </div>
                                <h2 class="title-font font-medium text-3xl text-gray-900">{room}</h2>
                                <p class="leading-relaxed">Registered Rooms</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 class="title-font font-medium text-3xl text-gray-900">{users}</h2>
                                <p class="leading-relaxed">Users</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <div className='flex justify-center ' style={{ fontSize: "60px", color: 'blue' }}>
                                    <span><FaUserSecret /></span>
                                </div>
                                <h2 class="title-font font-medium text-3xl text-gray-900">{tenen}</h2>
                                <p class="leading-relaxed">Room Owner</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <div className='flex justify-center ' style={{ fontSize: "60px", color: 'blue' }}>
                                    <span><FcFeedback /></span>
                                </div>
                                <h2 class="title-font font-medium text-3xl text-gray-900">{review}</h2>
                                <p class="leading-relaxed">FeedBacks</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section></div>
    )
}

export default Performence