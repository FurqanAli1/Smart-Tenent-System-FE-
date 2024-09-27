import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Description from '../Components/DiscriptionComponent/Description'
import Facilities from '../Components/DiscriptionComponent/Facilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Tenents from '../Components/DiscriptionComponent/Tenents'
import OwnerCard from '../Components/DiscriptionComponent/OwnerCard'
import Overview from '../Components/DiscriptionComponent/Overview'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetUserId from '../Hooks/GetUserId'
import GetRoomData from '../Hooks/GetRoomData'
import HeroSection from '../Components/SearchPageComponents/HeroSection'

const PropertyDescription = () => {

  const { _id } = useParams()
  const [shareRoom, setShareRoom] = useState()
  const [residents, setResidents] = useState()
  const [adate, setAdate] = useState()
  const [edata, setEdate] = useState()
  const nav = useNavigate()

  useEffect(() => {
    async function getData() {
      if (localStorage.getItem('user')) {
        const getRooms = await GetRoomData(_id)
        setShareRoom(getRooms.data)
        setResidents(getRooms.data?.residents)
        const getDate = getRooms.data?.date
        const getEndDate = getRooms.data?.endDate
        const end = getEndDate?.substring(0, 10)
        setEdate(end)
        const subdate = getDate?.substring(0, 10)
        setAdate(subdate)
      }
      else {
        toast("you need to be signed in to view room details")
        nav('/')
      }
    }
    getData()
  }, [])

  async function sendRequest() {
    const userInf = await GetUserId()
    const user = userInf.data
    const room_id = shareRoom._id
    const owner = shareRoom.owner
    const Address = shareRoom.address
    const city = shareRoom.city
    const propertyRent = shareRoom.propertyRent
    const user_id = user._id
    const username = user.name
    const useremail = user.email
    const sendReq = await axios.post("http://localhost:5000/user/sendNotification", { username, owner, Address, city, room_id, propertyRent, user_id, useremail })
    toast(sendReq.data)
  }

  return (
    <div>
      <ToastContainer />
      <h1 class="ml-20 mt-2 uppercase text-xl leading-none tracking-tight font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
        {shareRoom?.tittle}
      </h1>
      <div className="ml-24 text-lg mt-8 mb-2 flex justify-between">
        <div style={{marginTop:"-1px"}}><FontAwesomeIcon icon={faLocationDot} /> {shareRoom?.address}</div>
        <div>
          <button onClick={sendRequest} class="px-6  mr-12 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
            Send Request
          </button>
        </div>
      </div>
      <HeroSection data={shareRoom?.image}/>
      <Overview data={{ "area": shareRoom?.area, "famousplace": shareRoom?.famousPlace, "date": adate, "endDate": edata, "totalPeople": shareRoom?.totalPeople, "propertyRent": shareRoom?.propertyRent }} />
      <div ><Description data={shareRoom?.description} /></div>
      <div>
        <Facilities
          data={{
            ac: shareRoom?.ac, balcony: shareRoom?.balcony, bath: shareRoom?.bath, closet: shareRoom?.closet, electricity: shareRoom?.electricity,
            fridge: shareRoom?.fridge, kitchen: shareRoom?.kitchen, parking: shareRoom?.parking, pet: shareRoom?.pet, roof: shareRoom?.roof, tv: shareRoom?.tv,
            water: shareRoom?.water, wifi: shareRoom?.wifi
          }} /></div>
      <div className='flex mt-12'>
        <div className='ml-20 shadow-lg'>
          <div className="font-bold text-2xl p-4">Tenents in this Room</div>
          <div className='flex justify-around mt-8 p-4'>
            {
              residents?.length > 0 ?
                residents?.map((item) => {
                  return (<Tenents data={item} />)
                })
                : <h1 className='w-full text-2xl p-24 font-bold  ml-24'>No tenent is currently living in this room</h1>
            }
          </div>
        </div>
        <div className='shadow-lg ml-8' style={{ width: "400px" }}>
          <OwnerCard data={shareRoom?.owner} />
        </div>
      </div>
    </div>
  )
}

export default PropertyDescription