import axios from 'axios'
import React from 'react'

const UserTable = (props) => {

    const deleteUser = async() =>{
        const _id = props.data?._id
        const res = await axios.post("http://localhost:5000/Admin/deleteUser",{_id})
        alert(res.data)
    }
    return (
        <tr className='ml-4'>
            <td className='px-6'>{props.data?.name}</td>
            <td className='px-6'>{props.data?.email}</td>
            {props.data?.isOwner ? <td className='px-6'>Owner</td> : <td className='px-6'>Tenent</td>}
            <td class="p-3 px-6">
            <button type="button" class=" ml-10 mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                View
            </button>
            <button onClick={deleteUser}type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                Delete
            </button>
            </td>
        </tr>
    )
}

export default UserTable