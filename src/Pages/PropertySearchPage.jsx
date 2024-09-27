import React, { useEffect, useState } from 'react'
import RoomSharingCard from '../Components/SearchPageComponents/RoomSharingCard'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reviews from '../Components/SearchPageComponents/Reviews'
import WhyUs from '../Components/SearchPageComponents/WhyUs'
import { FaCity } from 'react-icons/fa';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import Carouseel from '../Components/DiscriptionComponent/Carouseel';
import Footer from '../Components/Footer';

const PropertySearchPage = () => {

  const [sharing, setSharing] = useState([])
  const [area, setArea] = useState('')
  const [city, setCity] = useState('')
  const [featured, setFeatured] = useState()
  const [review, setReview] = useState()
  const [reset,setReset] = useState(0)

  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:5000/users/getAllProperty")
      setSharing(response.data?.shareProperty)
      const feat = await axios.get("http://localhost:5000/users/getFeatured")
      setFeatured(feat.data?.featured)
      const getReview = await axios.get("http://localhost:5000/user/getReview")
      setReview(getReview?.data)
    }
    getData()
  }, [reset])
  let set =0
  const resetRooms = () =>{
    set=set+1
    setReset(reset+set)
  }

  const getSearchResults = async () => {
    if (area && city) {
      const areaa = area.toLowerCase()
      const cityy = city.toLocaleLowerCase()
      const response = await axios.post("http://localhost:5000/users/searchProperty", { areaa, cityy })
      if (response.data?.ifPropertyExist.length === 0) {
        setArea('')
        setCity('')
        toast("no room available for search")
      }
      else {
        setArea('')
        setCity('')
        setSharing(response.data?.ifPropertyExist)
      }
    }
    else {
      toast("kindly fill in all the input fields for search")
    }
  }

  return (
    <div>
      <ToastContainer
        className="position-center" />
      <Carouseel />
      <div style={{ marginTop: "20px" }} className='flex justify-center align-center mt-4'>
        <div className="input-container">
          <FaLocationCrosshairs className="icon" />
          <input
            type="text"
            id="area-input"
            placeholder="Enter your area"
            className="block w-52 p-2 pl-10 ml-2 text-gray-900 border border-gray-900 rounded-lg bg-gray-100 sm:text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={area}
            required
            onChange={(e) => { setArea(e.target.value) }}
          />
        </div>
        <div className="input-container">
          <FaCity className="icon" />
          <input
            type="text"
            id="city-input"
            placeholder="Enter your city"
            className="block w-52 p-2 pl-10 ml-2 text-gray-900 border border-gray-900 rounded-lg bg-gray-100 sm:text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={city}
            required
            onChange={(e) => { setCity(e.target.value) }}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 ml-4 w-36 h-12 text-xl text-white py-2 px-4 rounded flex items-center justify-center"
          onClick={getSearchResults}
        >
          <FaSearch className="mr-2" />
          Search
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 ml-4 w-36 h-12 text-xl text-white  py-2 px-4 rounded flex items-center justify-center"
          onClick={resetRooms}
        >
          All Rooms
        </button>
      </div>
      <div className='ml-20 mr-10 mt-4 flex justify-between flex-wrap'>
        {sharing?.map((item) => { return (<RoomSharingCard data={item} />) })}
      </div>

      <h1 class="ml-12 my-16 text-center text-4xl font-bold text-blue-800 mb-4">Featured Rooms</h1>
      <div className='ml-20 mt-4 flex justify-between flex-wrap mr-20'>
        {
          featured?.map((item) => { return (<RoomSharingCard data={item} />) })
        }
      </div>

      <h1 class="ml-12 my-16 text-center text-4xl font-bold text-blue-800 mb-4">Clients Testimonial</h1>
      <div className='ml-20 flex justify-between mr-20 mt-12'>
        {
          review?.length > 0 ?
            review?.map((item) => { return (<Reviews data={item} />) })
            : <>No review</>
        }
      </div>
      <div className='ml-10 mt-8'>
        <WhyUs />
      </div>
      <Footer/>
    </div>
  )
}

export default PropertySearchPage