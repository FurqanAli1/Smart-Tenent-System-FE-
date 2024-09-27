import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserTable from '../Components/AdminPageComponent/UserTable'
import ContactTable from '../Components/AdminPageComponent/ContactTable';
import AdminPropertyTable from '../Components/AdminPageComponent/AdminPropertyTable';
import AdminCard from '../Components/AdminPageComponent/AdminCard';
import { BiSolidUser } from "react-icons/bi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";
import Footer from '../Components/Footer';


const Admin = () => {

    const [users, setUsers] = useState()
    const [properties, setProperties] = useState()
    const [contact, setContact] = useState()
    const [home, setHome] = useState(true)
    const [rooms, setRooms] = useState(false)
    const [ussers, setUssers] = useState(false)
    const [contacts, setContacts] = useState(false)
    const nav = useNavigate()

    useEffect(() => {
        const checkAdmin = async () => {
            if (!localStorage.getItem("admin")) {
                toast("admin must be signed in to access admin dashboard")
                nav("/adminlogin")
            }
        }
        checkAdmin()
    }, [])

    useEffect(() => {
        async function getData() {
            const res = await axios.get("http://localhost:5000/Admin/getAllUsers")
            setUsers(res.data)
            const pres = await axios.get("http://localhost:5000/Admin/getAllRooms")
            setProperties(pres.data.shareProperty)
            const cres = await axios.get("http://localhost:5000/user/getReview")
            setContact(cres.data)
        }
        getData()
    }, [])


    const logout = () => {
        localStorage.removeItem("admin")
        toast("logged out successfully")
        setTimeout(() => {
            nav("/adminlogin")
        }, 200);
    }
    function setUsssers() {
        setContacts(false)
        setHome(false)
        setRooms(false)
        setUssers(true)
    }
    function setHomes() {
        setContacts(false)
        setHome(true)
        setRooms(false)
        setUssers(false)
    }
    function setRoomstrue() {
        setContacts(false)
        setHome(false)
        setRooms(true)
        setUssers(false)
    }
    function setContactstrue() {
        setContacts(true)
        setHome(false)
        setRooms(false)
        setUssers(false)
    }
    return (
        <div>
            <div class="min-h-screen flex mt-2 ml-20 bg-gray-100 " style={{ width: "1220px" }}>
                <div class="hidden md:flex flex-col text-lg bg-gray-800 w-1/5">
                    <div class="flex items-center justify-center h-16 bg-gray-900">
                        <span class="text-white font-bold uppercase">Admin</span>
                    </div>
                    <div class="flexflex-col flex-1 overflow-y-auto">
                        <nav class="flex-1 px-8 py-4  bg-gray-800">
                            <Link onClick={setHomes} class="flex items-center  px-4 py-2 text-gray-100 hover:bg-gray-700">
                                <div className='flex'>
                                    <span style={{ marginRight: "4px", marginTop: "3px" }}><FaHouse />
                                    </span>
                                    <span>Home</span>
                                </div>
                            </Link>
                            <Link onClick={setUsssers} class="flex items-center px-4 py-2 mt-4 text-gray-100 hover:bg-gray-700">
                                <div className='flex'>
                                    <span style={{ marginRight: "4px", marginTop: "4px" }}><BiSolidUser /> </span>
                                    <span>Users</span>
                                </div>
                            </Link>
                            <Link onClick={setRoomstrue} class="flex items-center px-4 py-4 mt-2 text-gray-100 hover:bg-gray-700">
                                <div className='flex'>
                                    <span style={{ marginRight: "4px", marginTop: "3px" }}><FaHouseUser /></span>
                                    <span>Rooms</span>
                                </div>
                            </Link>
                            <Link onClick={setContactstrue} class="flex items-center px-4 py-2 mt-4 text-gray-100 hover:bg-gray-700">
                                <div className='flex'>
                                    <span style={{ marginRight: "4px", marginTop: "4px" }}><BiSolidMessageSquareDetail />  </span>
                                    <span>Reviews</span>
                                </div>
                            </Link>
                            <Link onClick={logout} class="flex items-center px-4 py-2 mt-4 text-gray-100 hover:bg-gray-700">
                                <div className='flex'>
                                    <span style={{ marginRight: "4px", marginTop: "4px" }}><IoLogOut /></span>
                                    <span>Logout</span>
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>
                <div>
                    <div className="p-4">
                        <h1 className="text-4xl text-center font-bold">Welcome to Admin Dashboard </h1>
                    </div>
                    {
                        home ?
                            <div className='flex flex-wrap mx-8'>
                                <AdminCard />
                            </div>
                            : <></>
                    }
                    {
                        ussers ?
                            <div className="text-gray-900 bg-gray-200 ml-16 mr-12 mt-2 max-w-5xl mx-auto">
                                <div className="w-full px-3 py-4">
                                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                        <tbody>
                                            <tr className="border-b">
                                                <th className="text-left p-6 px-6">Name</th>
                                                <th className="text-left p-6 px-6">Email</th>
                                                <th className="text-left p-6 px-6">Role</th>
                                                <th className="text-left p-6 px-20">Action</th>
                                            </tr>
                                            {
                                                users?.map((item) => (
                                                    <UserTable key={item.id} data={item} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            : <></>
                    }
                    {
                        rooms ?
                            <div className="text-gray-900 bg-gray-200 ml-16 mr-12 mt-10 max-w-5xl mx-auto">
                                <div className="w-full px-3 py-4">
                                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                        <tbody>
                                            <tr className="border-b">
                                                <th className="text-left p-6 px-6">Owner</th>
                                                <th className="text-left p-6 px-6">Address</th>
                                                <th className="text-left p-6 px-6">Tenent</th>
                                                <th className="text-left p-6 px-6">Property Rent</th>
                                                <th className="text-left p-6 px-20">Action</th>
                                            </tr>
                                            {
                                                properties?.map((item) => (
                                                    <AdminPropertyTable data={item} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            : <></>
                    }
                    {
                        contacts ?
                            <div class="flex flex-col flex-1 overflow-y-auto">
                                <div class="text-gray-900 bg-gray-200 ml-16 mr-12 max-w-5xl mx-auto mt-2">
                                    <div class="w-full px-3 py-4 flex justify-center">
                                        <table class="w-full text-md bg-white shadow-md rounded mb-4">
                                            <tbody>
                                                <tr class="border-b">
                                                    <th class="text-left p-6 px-4">Name</th>
                                                    <th class="text-left p-6 px-12">Email</th>
                                                    <th class="text-left p-6 px-12">Tittle</th>
                                                    <th class="text-left p-6 px-10">Reviews</th>
                                                </tr>
                                                {
                                                    contact?.map((items) => {
                                                        return (<ContactTable data={items} />)
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            : <></>
                    }
                </div>
            </div>
            <div className='mt-4'>
            <Footer/>
            </div>
        </div>
    )
}

export default Admin