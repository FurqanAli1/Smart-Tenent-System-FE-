import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = (props) => {

    const user = props?.data
    const [tittle, setTittle] = useState()
    const [review, setReview] = useState()
    const nav = useNavigate()
    
    
    async function handleSubmit(e) {
        e.preventDefault()
        if (!tittle || !review || !user  ) {
            toast("you need to fill in all the required input and length of review must be 30 words")
        }
        else {
            const res = await axios.post(`http://localhost:5000/user/addReview`, { tittle, review, user })
            if (res.data === "ok") {
                toast("review submitted")
                setTimeout(() => {
                    nav('/')
                }, 2000)
            }
        }
    }

    return (
        <div class="flex flex-col w-full lg:w-full justify-center mt-8">
            <ToastContainer />
            <div class="container w-full px-4">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-6/12 px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                            <div class="flex-auto p-5 lg:p-10">
                                <h4 class="text-2xl mb-4 text-black font-semibold text-center">Leave a review</h4>
                                <form id="feedbackForm" action="" method="">
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="email">Tittle</label>
                                        <input 
                                            type="text" 
                                            value= {tittle} 
                                            onChange={(e)=>{setTittle(e.target.value)}}
                                            name="email" 
                                            id="email" 
                                            class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder="enter the tittle" required />
                                    </div>
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="message">Message</label>
                                        <textarea 
                                            maxlength="300" name="feedback" id="feedback" rows="5"
                                            cols="80"
                                            onChange={(e)=>{setReview(e.target.value)}}
                                            value={review}
                                            class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                            placeholder="enter at least 50 words" required>
                                        </textarea>
                                    </div>
                                    <div class="text-center mt-6">
                                        <button id="feedbackBtn"
                                            onClick={handleSubmit}
                                            class="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="submit">Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review