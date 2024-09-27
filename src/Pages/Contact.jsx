import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer';

const Contact = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [messages, setMessages] = useState('')
  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (firstName && lastName && email && messages) {
      const res = await axios.post("http://localhost:5000/user/contact", { firstName, lastName, email, messages })
      toast(res.data)
      setTimeout(() => {
        nav('/')
      }, 3000);
    }
    else{
      toast("please fill in all the input fields")
    }
  }


  return (
    <div>
    <div className="max-w-screen-lg mx-auto p-5">
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            Your opinion matters a lot for us kindly do fill the form if you have any suggestion or query
          </p>

          <div className="flex items-center mt-5">
            <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1"
              viewBox="0 0 489.536 489.536"
              enableBackground="new 0 0 489.536 489.536">
            </svg>
            <span className="text-sm">House #14, Street #12, Defence Road, Lahore, Pakistan.</span>
          </div>
          <div className="flex items-center mt-5">
            <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1" id="Capa_1"
              x="0px" y="0px"
              viewBox="0 0 60.002 60.002" style={{ enableBackground: 'new 0 0 60.002 60.002;' }} xmlSpace="preserve">
              {/* Your SVG path here */}
            </svg>
            <span className="text-sm">+92 7499965</span>
            <span className="text-sm">5400</span>
          </div>
          <div className="flex items-center mt-5">
            <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1" id="Capa_1"
              x="0px" y="0px"
              viewBox="0 0 300.988 300.988" style={{ enableBackground: 'new 0 0 300.988 300.988;' }}
              xmlSpace="preserve">
            </svg>
            <span className="text-sm">24/7</span>
          </div>
          <div className="text-sm mt-5 ml-8 ">
            <span>5400</span>
          </div>
        </div>
        <form class="md:col-span-8 p-5">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name">
                First Name
              </label>
              <input
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value) }}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name" type="text" placeholder="Enter your first name here" />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(e) => { setLastName(e.target.value) }}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name" type="text" placeholder="Enter your second name here" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email" type="email" placeholder="Enter your email here" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password">
                Your Message
              </label>
              <textarea
                rows="6"
                value={messages}
                onChange={(e) => { setMessages(e.target.value) }}
                placeholder="Enter your message here"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
            </div>
            <div class="flex justify-center w-full px-3 mt-2">
              <button
                onClick={handleSubmit}
                class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;
