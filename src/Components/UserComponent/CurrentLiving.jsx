import React from 'react'
import pic from '../../Images/pic1.jpeg'
import { useNavigate } from 'react-router-dom'
import CheckLoggedIn from '../../Hooks/CheckLoggedIn'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";

const CurrentLiving = (props) => {

    const nav = useNavigate()
    const tok = CheckLoggedIn()

    console.log(props?.data)

    

    async function getId() {
        if (tok === true) {
            const _id = props.data?.room_id
            nav(`/search/${_id}`)
        }
        else {
            toast("you need to be signed in to view room details")
        }
    }
    return (
        <div onClick={getId} className='border border-rounded' style={{ width: "600px", marginTop: "40px", marginLeft: "80px" }}>
            <ToastContainer />
            <div style={{ width: "570px", height: "250px" }} className="border border-rounded w-64 h-100 mx-4 my-4 rounded overflow-hidden shadow-lg flex justify-center items-center">
                <div className="w-2/4 h-full flex ">
                    <img
                        class="object-cover object-center h-full"
                        src={pic}
                        alt={pic}
                    />
                </div>
                <div style={{ width: "300px", backgroundColor: "" }} className="px-6 py-4">
                    <p className="text-gray-500 text-center text-base">
                        <div className='flex justify-center'>
                            <span style={{ fontSize: "18px", marginTop: "0px", marginRight: "2px" }}><FaHouse /></span>
                            <span className='font-bold text-sm uppercase'>{props.data?.Address}</span> <br />
                        </div>
                        <div className='flex justify-center'>
                            <span style={{ fontSize: "18px", marginTop: "3px", marginRight: "2px" }}><FaCity /></span>
                            <span className='capitalize'>{props.data?.city}</span> <br />
                        </div>
                        <div style={{ marginTop: "3px" }} className='flex justify-center'>
                            <span style={{ fontSize: "18px", marginTop: "3px", marginRight: "2px" }}><FaMoneyCheckDollar /></span>
                            <span>Rs.{props.data?.propertyRent}</span> <br />
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default CurrentLiving