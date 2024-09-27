import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import PropertyTable from '../Components/UserComponent/PropertyTable';
import UserNotificationTable from '../Components/UserComponent/UserNotificationTable';
import SentRequestTable from '../Components/UserComponent/SentRequestTable';
import ProfileCard from '../Components/UserComponent/ProfileCard';
import UserCard from '../Components/UserComponent/UserCard';
import AddProperty from '../Components/UserComponent/AddProperty';
import Review from '../Components/DiscriptionComponent/Review';
import { FaUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import { RiUserAddFill } from "react-icons/ri";
import { BiSolidMessageAdd } from "react-icons/bi";
import { MdOutlineSwitchRight } from "react-icons/md";
import { BsFillHouseAddFill } from "react-icons/bs";
import EditProfileForm from '../Components/UserComponent/EditProfileForm';
import { FaHouseDamage } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CurrentLiving from '../Components/UserComponent/CurrentLiving';

const UserDashboard = () => {

    const [userInfo, setUserInfo] = useState()
    const [room, setRoom] = useState()
    const [notifications, setNotification] = useState()
    const [sentNotifications, setSentNotifications] = useState()
    const [profile, setProfile] = useState(true)
    const [myRoom, setMyRoom] = useState(false)
    const [editProfile, setEditProfile] = useState(false)
    const [myRecievedRequest, setMyRecievedRequest] = useState(false)
    const [sentRequest, setSentRequest] = useState(false)
    const [addRoom, setAddRoom] = useState(false)
    const [review, setReview] = useState(false)
    const [tenent, setTenent] = useState(true)
    const [landlord, setLandlord] = useState(false)
    const [living, setLiving] = useState(false)
    const [actor, setActor] = useState('Tenent')
    const [switchto, setswitchto] = useState('landlord')
    const nav = useNavigate('')
    const [u_id, setU_id] = useState()
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        async function getInfo() {
            const getToken = localStorage.getItem('user')
            if (getToken) {
                const token = jwtDecode(getToken)
                const _id = token._id
                setU_id(_id)
                const owner = token._id
                const not = await axios.get(`http://localhost:5000/users/getMyNotification/${owner}`)
                const sent = await axios.get(`http://localhost:5000/users/getMySentNotification/${owner}`)
                setNotification(not.data)
                setSentNotifications(sent.data)
                const userInf = await axios.get(`http://localhost:5000/users/getUserInfo/${_id}`)
                setUserInfo(userInf.data)
                setRoom(userInf.data.sharingPropertyOwned)
            }
            else {
                nav('/')
                setTimeout(() => {
                    toast("you need to be signed in to view your profile")
                }, 100);
            }
        }
        getInfo()
    }, [update])

    function setRoomtrue() {
        setMyRoom(true)
        setProfile(false)
        setMyRecievedRequest(false)
        setSentRequest(false)
        setAddRoom(false)
        setReview(false)
        setEditProfile(false)
        setLiving(false)
    }
    function setmyProfiletrue() {
        setMyRoom(false)
        setProfile(true)
        setMyRecievedRequest(false)
        setSentRequest(false)
        setAddRoom(false)
        setReview(false)
        setLiving(false)
        setEditProfile(false)
    }
    function setrecieveNotifytrue() {
        setMyRoom(false)
        setProfile(false)
        setMyRecievedRequest(true)
        setSentRequest(false)
        setAddRoom(false)
        setReview(false)
        setEditProfile(false)
        setLiving(false)
    }
    function setSentNotificationstrue() {
        setMyRoom(false)
        setProfile(false)
        setMyRecievedRequest(false)
        setSentRequest(true)
        setAddRoom(false)
        setReview(false)
        setLiving(false)
        setEditProfile(false)
    }
    function setEditProfiletrue() {
        setMyRoom(false)
        setProfile(false)
        setMyRecievedRequest(false)
        setSentRequest(false)
        setEditProfile(true)
        setAddRoom(false)
        setReview(false)
        setLiving(false)
    }
    function setAddRoomtrue() {
        setMyRoom(false)
        setProfile(false)
        setMyRecievedRequest(false)
        setSentRequest(false)
        setAddRoom(true)
        setReview(false)
        setLiving(false)
        setEditProfile(false)
    }
    function setlivingtrue() {
        setMyRoom(false)
        setProfile(false)
        setMyRecievedRequest(false)
        setSentRequest(false)
        setAddRoom(false)
        setReview(false)
        setEditProfile(false)
        setLiving(true)
    }
    function setReviewtrue() {
        setMyRoom(false)
        setProfile(false)
        setMyRecievedRequest(false)
        setSentRequest(false)
        setAddRoom(false)
        setReview(true)
        setLiving(false)
        setEditProfile(false)
    }
    function setActors() {
        if (actor === "Tenent") {
            setActor("Landlord")
            setswitchto("Tenent")
            setmyProfiletrue()
            setTenent(false)
            setLandlord(true)
        }
        else {
            setActor("Tenent")
            setswitchto("Landlord")
            setmyProfiletrue()
            setTenent(true)
            setLandlord(false)
        }
    }
    return (
        <div>
            <ToastContainer />
            <div class="flex h-full bg-gray-100 mt-8 ml-20 fixed top-12 min-h-screen left-0 h-full" style={{ width: "1220px" }}>
                <div class="hidden md:flex flex-col w-64 bg-gray-800">
                    <div class="flex items-center justify-center h-16 bg-gray-900">
                        <span class="text-white font-bold uppercase">{actor} Dashboard</span>
                    </div>
                    <div class="flex flex-col flex-1 overflow-y-auto">
                        {
                            tenent ?
                                <div>
                                    <Link onClick={setmyProfiletrue} class="flex ml-8 text-lg items-center px-4 py-2 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><FaUser /> </span>    Profile
                                    </Link>
                                    <Link onClick={setEditProfiletrue} class="flex ml-8 text-lg items-center px-4 py-2 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><RiUserAddFill /></span>    Edit Profile
                                    </Link>
                                    <Link onClick={setSentNotificationstrue} class="flex ml-8 text-lg items-center py-2 px-4 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><BiSolidMessageAdd /></span>    Sent Request
                                    </Link>
                                    <Link onClick={setlivingtrue} class="flex ml-8 text-lg items-center px-4 py-2 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><FaHouse /> </span>    Living In
                                    </Link>
                                    <Link onClick={setReviewtrue} class="text-lg flex ml-8 items-center px-4 py-2 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><MdOutlineRateReview /> </span> Review
                                    </Link>
                                    <Link onClick={setActors} class="text-lg flex ml-8 items-center px-4 py-2 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><MdOutlineSwitchRight /></span> Switch to {switchto}
                                    </Link>
                                </div> : <></>
                        }
                        {
                            landlord ?
                                <div>
                                    <Link onClick={setmyProfiletrue} class="flex ml-8 text-lg items-center px-4 py-2 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><FaUser /> </span>    Profile
                                    </Link>
                                    <Link onClick={setEditProfiletrue} class="flex ml-8 text-lg items-center px-4 py-2 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><RiUserAddFill /> </span>    Edit Profile
                                    </Link>
                                    <Link onClick={setRoomtrue} class="flex ml-8 text-lg items-center py-2 px-4 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><FaHouse /> </span>    My Rooms
                                    </Link>
                                    <Link onClick={setrecieveNotifytrue} class="flex ml-8 text-lg items-center py-2 px-4 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><BiSolidMessageAdd /></span>    Recieved Request
                                    </Link>
                                    <Link onClick={setAddRoomtrue} class="text-lg flex ml-8 items-center py-2 px-4 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><BsFillHouseAddFill /></span>    Add Room
                                    </Link>
                                    <Link onClick={setReviewtrue} class="text-lg flex ml-8 items-center py-2 px-4 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><MdOutlineRateReview /> </span> Review
                                    </Link>
                                    <Link onClick={setActors} class="text-lg flex ml-8 items-center px-4 py-2 mt-4 text-gray-100 hover:bg-gray-700">
                                        <span className='mr-2'><MdOutlineSwitchRight /></span> Switch to {switchto}
                                    </Link>
                                </div> : <></>
                        }
                    </div>
                </div>
                <div class="flex flex-col flex-1 overflow-y-auto">
                    <div class="p-4 mx-2">
                        {
                            profile ?
                                <div>
                                    <h2 class="text-3xl font-bold text-gray-800 m-4">My Profile</h2>
                                    <div className=''><ProfileCard data={userInfo} /></div>
                                    <div className='mt-8'>
                                        <UserCard data={{ notify: notifications?.length, sentnotify: sentNotifications?.length, rooms: userInfo?.sharingPropertyOwned.length }} />
                                    </div>
                                </div> : <></>
                        }
                        {
                            living ?
                                <div>
                                    <h2 class="text-3xl font-bold text-gray-800 m-4">Currently Living In</h2>
                                    <div className=''>
                                        {
                                            sentNotifications
                                                ?.filter((item) => item.status === 'approved')
                                                .map((item) => {
                                                    return <CurrentLiving key={item.id} data={item} />;
                                                })
                                        }
                                    </div>
                                </div> : <></>
                        }
                        {
                            myRoom ?
                                <div className='mt-12'>
                                    <div className='flex'>
                                        <span style={{fontSize:"30px",marginRight:"6px",marginTop:"2px"}}><FaHouse /></span>
                                        <h2 class="text-3xl font-bold text-gray-800 ">My Rooms</h2>
                                    </div>
                                    <div className='flex mt-8 flex-wrap'>
                                        <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
                                            <thead class="bg-gray-50">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                        <div className='flex'>
                                                            <span style={{ marginRight: "4px", marginTop: "3px" }}><FaHouseDamage /></span>
                                                            <span>Address</span>
                                                        </div>
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                        <div className='flex ml-2'>
                                                            <span style={{ marginRight: "4px", marginTop: "3px" }}><FaCity /></span>
                                                            <span>City</span>
                                                        </div>
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                        <div className='flex'>
                                                            <span style={{ marginRight: "4px", marginTop: "3px" }}><FaMoneyCheckDollar /></span>
                                                            <span>Room Rent</span>
                                                        </div>
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                        <div className='flex'>
                                                            <span style={{ marginRight: "4px", marginTop: "3px" }}><FaUser /></span>
                                                            <span>Tenents</span>
                                                        </div>
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                        <div className='flex ml-8'>
                                                            <span style={{ marginRight: "4px", marginTop: "3px" }}><FaEye /></span>
                                                            <span>Action</span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                {
                                                    room?.map((item) => {
                                                        return (<PropertyTable data={item} />)
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div> : <></>
                        }
                        {
                            editProfile ?
                                <EditProfileForm />
                                : <></>
                        }
                        {
                            myRecievedRequest ?
                                <div className='mt-8'>
                                    <h2 class="text-3xl font-bold text-gray-800 my-4">Recieved Requests</h2>
                                    <table class="min-w-full mt-6 divide-y divide-gray-200">
                                        <thead>
                                            <tr>
                                                <th class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    <div className='flex'>
                                                        <div style={{ marginRight: "3px", marginTop: "3px" }}><FaUser /></div>
                                                        <div className=''>Name</div>
                                                    </div>
                                                </th>
                                                <th class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    <div className='flex ml-4'>
                                                        <span style={{ marginRight: "4px", marginTop: "3px" }}><MdEmail /></span>
                                                        <span>Email</span>
                                                    </div>
                                                </th>
                                                <th class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    <div className='flex'>
                                                        <span style={{ marginRight: "4px", marginTop: "3px" }}><FaCity /></span>
                                                        <span>City</span>
                                                    </div>
                                                </th>
                                                <th class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    <div className='flex ml-6'>
                                                        <span style={{ marginRight: "4px", marginTop: "3px" }}><FaHouseDamage /></span>
                                                        <span>Address</span>
                                                    </div>
                                                </th>
                                                <th class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    <div className='flex ml-8'>
                                                        <span style={{ marginRight: "4px", marginTop: "3px" }}><FaEye /></span>
                                                        <span>Action</span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            {
                                                notifications?.map((items) => {
                                                    return (<UserNotificationTable data={items} />)
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div> : <></>
                        }
                        {
                            sentRequest ?
                                <div className='mt-12'>
                                    {console.log("in sent")}
                                    <h2 class="text-3xl font-bold text-gray-800 my-4">Sent Requests</h2>
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead>
                                            <tr>
                                                <th class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    <div className='flex ml-2'>
                                                        <span style={{ marginRight: "4px", marginTop: "3px" }}><FaHouseDamage /></span>
                                                        <span>Address</span>
                                                    </div>
                                                </th>
                                                <th class="px-6  py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    <div className='flex mr-8'>
                                                        <span style={{ marginRight: "4px", marginTop: "3px" }}><FaCity /></span>
                                                        <span>City</span>
                                                    </div>
                                                </th>
                                                <th class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    <div className='flex'>
                                                        <span style={{ marginRight: "4px", marginTop: "3px" }}><FaMoneyCheckDollar /></span>
                                                        <span>Room Rent</span>
                                                    </div>
                                                </th>
                                                <th class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    <div className='flex'>
                                                        <span style={{ marginRight: "4px", marginTop: "3px" }}><FaEye /></span>
                                                        <span>Status</span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            {
                                                sentNotifications?.map((items) => {
                                                    return (<SentRequestTable data={items} />)
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <div className='flex flex-wrap my-8 justify-between align-between '>
                                    </div>
                                </div> : <></>
                        }
                        {
                            addRoom ?
                                <AddProperty />
                                :
                                <></>
                        }
                        {
                            review ?
                                <div>
                                    <Review data={userInfo} />
                                </div>
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserDashboard