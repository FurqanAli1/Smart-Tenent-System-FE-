import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Footer from '../Components/Footer';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        //const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d).{5,}$/;
        //if (!alphanumericRegex.test(password)) {
        //  toast("Password must be alphanumeric and at least 5 characters long");
        //}
        //else if(typeof(email)!==email){
        //  toast("Please enter valid email");
        //}
        //else {
        const getResp = await axios.post("http://localhost:5000/userLogin", { email, password })
        if (getResp.data.message === "ok") {
            localStorage.setItem("user", getResp.data.token)
            toast("Logged in successfully")
            setTimeout(() => {
                nav('/')
            }, 2000);
        }
        else {
            toast(getResp.data)
        }
        //}
    }

    return (
        <div>
            <ToastContainer />
            <div class="min-h-screen bg-gray-100 flex items-center justify-center">
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
                    <form class="max-w-sm mx-auto">
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-blue-900 md:text-4xl lg:text-4xl dark:text-white">Log In</h1>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                type="email"
                                id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@gmail.com"
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value.trim()) }}
                            />
                        </div>
                        <div class="mb-5">
                            <div className='flex'>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            </div>
                            <input
                                type="password"
                                id="password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="............."
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value.trim()) }}
                            />
                        </div>
                        <div class="mb-2 text-center">
                            <Link to="/SignUp" className='text-blue-600 text-sm text-center'>Don't have an account click here</Link>
                        </div>
                        <div class="mb-2 text-center">
                            <Link to="/adminlogin" className='text-blue-600 text-sm text-center'>click here for admin login</Link>
                        </div>
                        <div className='flex justify-center align-center'>
                            <button onClick={handleSubmit} type="submit" class="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Login