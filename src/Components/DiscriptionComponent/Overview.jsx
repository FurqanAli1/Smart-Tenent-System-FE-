import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";


const Overview = (props) => {
  //console.log(props)
  return (
    <div className='shadow-lg p-4 w-11/12 ml-20 mt-12'>
      <div className="font-bold text-2xl my-4">Overview</div>
      <div className='flex mt-2 text-lg mb-2'>
        <div className='w-1/2 flex ml-2'>
          <div style={{ marginTop: "5px", marginRight: "4px" }}><BsCalendarDate /></div>
          <div className=''>From : {props.data?.date}</div>
        </div>
        <div className='w-1/2 flex'>
          <div style={{ marginTop: "5px", marginRight: "4px" }}><BsCalendarDate /></div>
          <div className='text-bold'>To : {props.data?.endDate}</div>
        </div>
        <div className='w-1/2 flex'>
          <div style={{ marginTop: "5px", marginRight: "4px" }}><FaMoneyCheckDollar /></div>
          <div >Rent : Rs.{props.data?.propertyRent}</div>
        </div>
        <div className='w-1/2 flex'>
          <div style={{ marginTop: "4px", marginRight: "2px" }}><FaUser /></div>
          <div className=''>Tenets Req : {props.data?.totalPeople}</div>
        </div>
        <div className='w-1/2 flex'>
          <div style={{ marginTop: "4px", marginRight: "2px" }}><FaLocationDot /></div>
          <div className='capitalize'>Area : {props.data?.area} </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Overview