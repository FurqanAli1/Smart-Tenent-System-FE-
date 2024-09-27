import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminPropertyTable = (props) => {
    
    const ownner = props.data?.owner
    const [owner, setOwner] = useState()
    const nav = useNavigate()
    
    async function getId() {
        const _id = props.data?._id
        nav(`/search/${_id}`)
    }
    async function makefeature(){
        const _id = props.data?._id
        const makeFeat = await axios.get(`http://localhost:5000/user/makeFeature/${_id}`)
        alert(makeFeat.data)
    }
    async function deleteRoom(){
        const _id = props.data?._id
        const del = await axios.delete(`http://localhost:5000/Admin/deleteRoom/${_id}`)
        alert(del.data)
    }
    useEffect(() => {
        async function getData() {
            const userInf = await axios.get(`http://localhost:5000/users/getUserInfo/${ownner}`)
            setOwner(userInf.data)
        }
        getData()
    },[])
    return (
        <tr className='ml-16'>
            <td className='px-6'>{owner?.name}</td>
            <td className='px-6'>{props.data?.address}</td>
            <td className='px-6'>{props.data?.residents.length}</td>
            <td className='px-6'>Rs.{props.data?.propertyRent}</td>
            <td class="ml-16 w-1/4 p-3 px-6">
            {
                <button onClick={()=>{makefeature()}}type="button" class="mr-3 w-32 mb-2 text-sm bg-blue-900 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                    Make Featured
                </button>
            }
                <button type="button" class=" mr-3 w-16 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                    View
                </button>
                <button onClick={deleteRoom} type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default AdminPropertyTable