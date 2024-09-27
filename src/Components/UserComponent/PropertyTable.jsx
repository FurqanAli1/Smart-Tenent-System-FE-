import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const PropertyTable = (props) => {

    const nav = useNavigate()

    const displayProperty = () => {
        const _id = props.data?._id
        nav(`/search/${_id}`)
    }

    const deleteProperty = async () => {
        const _id = props.data?._id
        const del = await axios.delete(`http://localhost:5000/user/deleteRoom/${_id}`)
        alert(del.data)
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    return (
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">{props.data?.address}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-sm leading-5 font-semibold bg-green-100 text-green-800">
                    {props.data?.city}
                </span>
            </td>
            <td class="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
                Rs.{props.data?.propertyRent}
            </td>
            <td class="px-16 py-4 whitespace-nowrap text-sm text-gray-500">
                {props.data?.totalPeople}
            </td>
            <td class="px-4 py-4 whitespace-nowrap">
                <button onClick={displayProperty} class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">View</button>
                <button onClick={deleteProperty} class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
            </td>
        </tr>
    )
}

export default PropertyTable