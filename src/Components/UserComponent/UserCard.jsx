import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { BiSolidMessageAdd } from "react-icons/bi";

const UserCard = (props) => {
    //console.log(props)
    return (
        <div className='flex ml-4 mt-2 justify-betwwen'>
            <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                <div class="p-4 bg-green-400">
                    <div className='text-5xl'><FaHouse /></div></div>
                <div class="px-4 text-gray-700">
                    <h3 class="text-sm tracking-wider">Rooms Registered</h3>
                    <p class="text-3xl">{props.data?.rooms}</p>
                </div>
            </div>
            <div class="flex items-center ml-24 bg-white border rounded-sm overflow-hidden shadow">
                <div class="p-4 bg-blue-400">
                    <div className='text-5xl'><BiSolidMessageAdd /></div>
                </div>
                <div class="px-4 text-gray-700">
                    <h3 class="text-sm tracking-wider">Sent Request</h3>
                    <p class="text-3xl">{props.data?.sentnotify}</p>
                </div>
            </div>
            <div class="flex items-center ml-24 bg-white border rounded-sm overflow-hidden shadow">
                <div class="p-4 bg-indigo-400">
                    <div className='text-5xl'><BiSolidMessageAdd /></div>
                </div>
                <div class="px-4 text-gray-700">
                    <h3 class="text-sm tracking-wider">Recieved Request</h3>
                    <p class="text-3xl">{props.data?.notify}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard