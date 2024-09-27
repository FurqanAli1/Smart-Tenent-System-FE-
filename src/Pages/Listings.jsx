import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Listings = () => {

    const [tittle, setTittle] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [date, setDate] = useState()
    const [endDate, setEndDate] = useState(new Date())
    const [propertyRent, setPropertyRent] = useState('')
    const [area, setArea] = useState()
    const [famousPlace, setFamousPlace] = useState('')
    const [totalPeople, setTotalPeople] = useState('')
    const [description, setDescription] = useState('')
    const [wifi, checkWifi] = useState(false)
    const [water, checkWater] = useState(false)
    const [tv, checkTv] = useState(false)
    const [fridge, checkFridge] = useState(false)
    const [roof, checkRoof] = useState(false)
    const [pets, checkPets] = useState(false)
    const [closet, checkCloset] = useState(false)
    const [balcony, checkBalcony] = useState(false)
    const [kitchen, checkKitchen] = useState(false)
    const [electricity, checkElectricity] = useState(false)
    const [airConditioner, checkairConditioner] = useState(false)
    const [parking, checkParking] = useState(false)
    const [bath, checkBath] = useState(false)
    const [owner, setOwner] = useState('')
    const nav = useNavigate()

    useEffect(() => {
        const token = jwtDecode(localStorage.getItem("user"))
        setOwner(token._id)
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("start date " + date + " enddate " + endDate)
        if (tittle == "" || city === "" || date === "" || propertyRent === "" || area === "" || totalPeople === "" || description === "") {
            toast("You have to fill in all required fields ")
        }
        else {
            const res = await axios.post("http://localhost:5000/user/addProperty",
                {
                    tittle, city, address, date, endDate, propertyRent, area, famousPlace, totalPeople, description, wifi, water,
                    tv, fridge, roof, pets, closet, balcony, kitchen, electricity, airConditioner, parking, bath, owner
                }
            )
            toast(res.data)
            setTimeout(() => {
                nav('/')
            }, 2000)
        }
    }

    return (
        <div className="flex min-h-screen bg-gray-100 mx-12 ml-20 " style={{ backgroundImage: "url('')", backgroundSize: "cover", backgroundPosition: "center" }}>

            <div className="w-full md:w-1/2 p-4">
                <ToastContainer />
                <form>
                    <h1 className="mb-4 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                        List A Property
                    </h1>
                    <div className="mb-6">
                        <label
                            htmlFor="title"
                            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={tittle}
                            onChange={(e) => { setTittle(e.target.value) }}
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write the title of your room here..."
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="city"
                            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            required
                            value={city}
                            onChange={(e) => { setCity(e.target.value) }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write the city of your room here..."
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="area"
                            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                        >
                            Area
                        </label>
                        <input
                            type="text"
                            id="area"
                            required
                            value={area}
                            onChange={(e) => { setArea(e.target.value) }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write the area where your room is located"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="address"
                            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            required
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write the address of your room here..."
                        />
                    </div>
                    <label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Available Date</label>
                    <div className="flex mb-6 w-full ">
                        <div className=" ">
                            <input type="date" style={{ width: "300px" }} required value={date} onChange={(e) => { setDate(e.target.value) }} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  h-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mx-4 text-2xl">To</div>
                        <div className=" ">
                            <input type="date" style={{ width: "280px" }} required value={endDate} onChange={(e) => { setEndDate(e.target.value) }} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="propertyrent"
                            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                        >
                            Property Rent
                        </label>
                        <input
                            type="text"
                            id="propertyrent"
                            required
                            value={propertyRent}
                            onChange={(e) => { setPropertyRent(e.target.value) }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write the property rent here..."
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="famousplace"
                            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                        >
                            Famous Place
                        </label>
                        <input
                            type="text"
                            id="famousplace"
                            value={famousPlace}
                            onChange={(e) => { setFamousPlace(e.target.value) }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write the name of any famous place around your room here..."
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="TotalPeople"
                            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                        >
                            Total People
                        </label>
                        <input
                            required
                            type="text"
                            id="TotalPeople"
                            value={totalPeople}
                            onChange={(e) => { setTotalPeople(e.target.value) }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write the number of people allowed to be registered in room here..."
                        />
                    </div>
                    <label
                        htmlFor="description"
                        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                        Description
                    </label>
                    <textarea required value={description} onChange={(e) => { setDescription(e.target.value) }} id="description" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write the description of your room here..."></textarea>
                    <div className="flex justify-center align-center mx-4 mt-4"></div>
                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Facilities</h3>
                    <ul className="flex flex-wrap items-center w-full text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-1/3 ">
                            <div className="flex items-center ps-3">
                                <input
                                    id="wifi"
                                    type="checkbox"
                                    checked={wifi}
                                    onChange={(e) => { checkWifi(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="wifi"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Wifi
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3">
                            <div className="flex items-center ps-3">
                                <input
                                    id="water"
                                    type="checkbox"
                                    checked={water}
                                    onChange={(e) => { checkWater(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="water"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Water
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3">
                            <div className="flex items-center ps-3">
                                <input
                                    id="tv"
                                    type="checkbox"
                                    checked={tv}
                                    onChange={(e) => { checkTv(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="tv"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    TV
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3">
                            <div className="flex items-center ps-3">
                                <input
                                    id="refrigerator"
                                    type="checkbox"
                                    checked={fridge}
                                    onChange={(e) => { checkFridge(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="refrigerator"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Refrigerator
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3 ">
                            <div className="flex items-center ps-3">
                                <input
                                    id="rooftop"
                                    type="checkbox"
                                    checked={roof}
                                    onChange={(e) => { checkRoof(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="rooftop"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Rooftop
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3">
                            <div className="flex items-center ps-3">
                                <input
                                    id="pets"
                                    type="checkbox"
                                    checked={pets}
                                    onChange={(e) => { checkPets(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="pets"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Pets Allowed
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3">
                            <div className="flex items-center ps-3">
                                <input
                                    id="closet"
                                    type="checkbox"
                                    checked={closet}
                                    onChange={(e) => { checkCloset(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="closet"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Closet
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3 ">
                            <div className="flex items-center ps-3">
                                <input
                                    id="balcony"
                                    type="checkbox"
                                    checked={balcony}
                                    onChange={(e) => { checkBalcony(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="balcony"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Balcony View
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3">
                            <div className="flex items-center ps-3">
                                <input
                                    id="kitchen"
                                    type="checkbox"
                                    checked={kitchen}
                                    onChange={(e) => { checkKitchen(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="kitchen"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    kitchen
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3">
                            <div className="flex items-center ps-3">
                                <input
                                    id="electricity"
                                    type="checkbox"
                                    checked={electricity}
                                    onChange={(e) => { checkElectricity(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor=""
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Electricity
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3 ">
                            <div className="flex items-center ps-3">
                                <input
                                    id="water"
                                    type="checkbox"
                                    checked={airConditioner}
                                    onChange={(e) => { checkairConditioner(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="water"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Air Conditioner
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3">
                            <div className="flex items-center ps-3">
                                <input
                                    id="refrigerator"
                                    type="checkbox"
                                    checked={parking}
                                    onChange={(e) => { checkParking(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="refrigerator"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Parking
                                </label>
                            </div>
                        </li>
                        <li className="w-1/3">
                            <div className="flex items-center ps-3">
                                <input
                                    id="bath"
                                    type="checkbox"
                                    checked={bath}
                                    onChange={(e) => { checkBath(e.target.checked) }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="bath"
                                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Bath
                                </label>
                            </div>
                        </li>
                    </ul>

                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full mt-8 h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                    <div className="mb-12"></div>
                </form>
            </div>
        </div>
    );
};

export default Listings;