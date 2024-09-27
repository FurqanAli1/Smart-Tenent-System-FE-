import React from 'react'
import { useNavigate } from 'react-router-dom'
import CheckLoggedIn from '../../Hooks/CheckLoggedIn'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa6";

const RoomSharingCard = (props) => {

    const nav = useNavigate()
    const tok = CheckLoggedIn()

    async function getId() {
        if (tok === true) {
            const _id = props.data?._id
            nav(`/search/${_id}`)
        }
        else {
            toast("you need to be signed in to view room details")
        }
    }
    return (
        <div onClick={getId} className=''>
            <ToastContainer />
            <div style={{ height: "310px", width: "260px" }} className="w-64 h-88 mx-4 my-4 rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
                <div className='flex '>
                    <img
                        style={{ height: "210px", width: "260px" }}
                        className="max-w-full max-h-full"
                        alt="pic "
                        src={`http://localhost:5000/${props.data?.image}`}
                    />
                </div>
                <div className="px-6 py-4">
                    <p className="text-gray-500 text-center text-base">
                        <div className='flex justify-center'>
                            <span style={{ fontWeight: "bold" }} className='text-bold text-lg uppercase'>{props.data?.title}</span> <br />
                        </div>
                        <div className='flex justify-center'>
                            <span style={{ fontSize: "14px", marginTop: "2px" }}><FaLocationDot /></span>
                            <span className='text-italic text-sm uppercase'>{props.data?.address}</span> <br />
                        </div>
                        <div style={{ marginTop: "2px" }} className='flex justify-center'>
                            <span style={{ fontSize: "14px", marginTop: "2px" }}><FaRupeeSign /></span>
                            <span className='text-italic text-sm uppercase'> .{props.data?.propertyRent}</span> <br />
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default RoomSharingCard