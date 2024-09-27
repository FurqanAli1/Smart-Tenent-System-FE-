import React from 'react'
import pic from '../../Images/pic1.jpeg'

const Reviews = (props) => {
    
    return (
        <div style={{height:"470px"}} className="w-80 h-96 rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
            <div className="w-4/5 h-full flex justify-center items-center">
            < img style={{borderRadius:"60%",height:"200px"}} class=" h-auto w-full" src={`http://localhost:5000/${props.data.user?.image}`} alt={pic} horizontal />
            </div>
            <div className="px-6 py-4">
            <div className="font-bold text-center text-xl capitalize ">{props.data?.user.name}</div>
                <div className="font text-center text-lg capitalize mb-2">{props.data?.tittle}</div>
                <p className="text-gray-700 text-justify text-sm">
                    {props.data?.review}
                </p>
            </div>
        </div>
    )
}

export default Reviews