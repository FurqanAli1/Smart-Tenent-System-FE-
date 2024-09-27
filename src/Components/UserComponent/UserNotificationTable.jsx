import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserNotificationTable = (props) => {
  //console.log(props.data?.status)
  const nav = useNavigate()
  const getId = async() =>{
    const user_id = props.data?.user_id
    const owner = props.data?.owner
    const room_id = props.data?.room_id
    const sendAcceptRequest = await axios.post("http://localhost:5000/user/acceptRequest",{user_id,owner,room_id})
    alert(sendAcceptRequest.data)
    setTimeout(()=>{
      window.location.reload()
    },500)
  }
  const rejectInvite = async () =>{
    const user_id = props.data?.user_id
    const owner = props.data?.owner
    const room_id = props.data?.room_id
    const rejectRequest = await axios.post("http://localhost:5000/user/rejectRequest",{user_id,owner,room_id})
    alert(rejectRequest.data)
    setTimeout(()=>{
      window.location.reload()
    },500)
  }
  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap uppercase">{props.data?.username}</td>
      <td class="px-6 py-4 whitespace-nowrap">{props.data?.useremail}</td>
      <td class="px-6 py-4 whitespace-nowrap">{props.data?.city}</td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{props.data?.Address}</span>
      </td>
      {
        props.data?.status === "Pending" ? 
        <td class="px-6 py-4 whitespace-nowrap">
          <button onClick={getId} class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Accept</button>
          <button onClick={rejectInvite} class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Reject</button>
        </td>
        :
        props.data?.status === "approved" ? 
        <td style={{color:"green"}} class="px-10 py-4 font-bold capitalize whitespace-nowrap">Already {props.data?.status}</td>
        :        
        <td style={{color:"red"}}class="px-10 py-4 font-bold capitalize whitespace-nowrap">Already {props.data?.status}</td>
      }
    </tr>
  )
}

export default UserNotificationTable