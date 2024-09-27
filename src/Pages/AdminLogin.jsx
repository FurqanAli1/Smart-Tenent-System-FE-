import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import Footer from '../Components/Footer';
const AdminLogin = () => {

    const [password, setPassword] = useState('')
    const nav = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:5000/Admin/login", { password })
        if (res.data.status === "ok") {
            localStorage.setItem("admin", (res.data.token))
            toast("Logged in successfully")
            setTimeout(() => {
                nav('/admin')
            }, 2500)
        }
        else {
            toast("invalid credentiuals")
        }
    }
    return (
        <div>
            <ToastContainer />
            <div class="min-h-screen bg-gray-100 flex items-center justify-center">
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
                    <h1 class="text-center text-2xl font-bold mb-6">Admin Login</h1>
                    <form>
                        <div class="mb-4">
                            <div className='flex'>
                                <span style={{marginTop:"3px",marginRight:"2px"}}><FaLock/></span>
                                <label class="block text-gray-700 font-bold mb-2" for="email">Pasword</label>
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
                        <button onClick={handleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                            Submit
                        </button>
                        <div class="mb-4 mt-2 text-center">
                            <Link to="/login" className='text-blue-600 text-sm text-center'>Click here for user's login</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AdminLogin