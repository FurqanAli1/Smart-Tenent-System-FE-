import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Footer from '../Components/Footer';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [profession, setProfession] = useState("Profession")

  const nav = useNavigate()

  const setProf = (val) => {
    setProfession(val)
  }

  const validateSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-zA-Z0-9]{7,}$/;

    if (password !== cpassword) {
      toast("Passwords do not match");
      return;
    }
    if (name.length < 5) {
      toast("Please enter your full name");
      return;
    }
    if (profession === "Profession") {
      toast("Please select a profession from the drop-down menu");
      return;
    }
    if (!emailRegex.test(email) || !/\d/.test(email)) {
      toast("Invalid email address. Email must contain a numeric value. and @gmail.com");
      return;
    }
    if (!passwordRegex.test(password)) {
      toast("Password must be alphanumeric and at least 7 characters long.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/userSignUp", {
        name,
        email,
        password,
        cpassword,
        profession,
      });
      if (res.data.message === "ok") {
        setTimeout(() => {
          nav("/login");
        }, 3000);
        toast("User registered successfully");
      } else {
        toast(res.data);
      }
    } catch (error) {
      toast("An error occurred. Please try again.");
    }
  };


  return (
    <div >
      <ToastContainer />
      <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
          <form className="max-w-sm">
            <h1 className=" text-4xl font-extrabold leading-none tracking-tight text-center text-blue-900 md:text-4xl lg:text-4xl dark:text-white">
              Sign Up
            </h1>
            <div className="mb-4">
              <div className="flex">
                <label htmlFor="name" style={{ marginLeft: "2px" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              </div>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value.trim())}
              />
            </div>
            <div className="mb-4">
              <div className="flex">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              </div>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
              />
            </div>
            <div className="mb-4">
              <div className="flex">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              </div>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="............."
                required
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
              />
            </div>
            <div className="mb-4">
              <div className="flex">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              </div>
              <input
                type="password"
                id="cpassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="............."
                required
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value.trim())}
              />
            </div>
            <div class="relative w-full inline-block text-left ">
              <div class="group">
                <button type="button" class="inline-flex justify-center items-center w-full h-12 px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  {profession}
                  <svg class="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                  </svg>
                </button>
                <div
                  class="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  <div class="py-1">
                    <span class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={(e) => { setProfession("Student") }}>Student</span>
                    <span class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={(e) => { setProfession("Tourist") }}>Tourist</span>
                    <span class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={(e) => { setProfession("Traveller") }}>Traveller</span>
                  </div>
                </div>
              </div>
            </div>


            <div className=" text-center mt-2">
              <Link to="/login" className="text-blue-600 text-sm text-center">
                Already have an account click here
              </Link>
            </div>
            <div className="mt-2 flex justify-center">
              <button
                onClick={validateSubmit}
                className="text-white text-center w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
