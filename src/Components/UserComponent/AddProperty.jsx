import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState();
  const [endDate, setEndDate] = useState(new Date());
  const [propertyRent, setPropertyRent] = useState("");
  const [area, setArea] = useState();
  const [famousPlace, setFamousPlace] = useState("");
  const [totalPeople, setTotalPeople] = useState("");
  const [description, setDescription] = useState("");
  const [wifi, checkWifi] = useState(false);
  const [water, checkWater] = useState(false);
  const [tv, checkTv] = useState(false);
  const [fridge, checkFridge] = useState(false);
  const [roof, checkRoof] = useState(false);
  const [pets, checkPets] = useState(false);
  const [closet, checkCloset] = useState(false);
  const [balcony, checkBalcony] = useState(false);
  const [kitchen, checkKitchen] = useState(false);
  const [electricity, checkElectricity] = useState(false);
  const [airConditioner, checkairConditioner] = useState(false);
  const [parking, checkParking] = useState(false);
  const [bath, checkBath] = useState(false);
  const [owner, setOwner] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const nav = useNavigate();
  
  
  
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      toast("you need to sign in to list a room");
      setTimeout(() => {
        nav("/");
      }, 2000);
    } else {
      const token = jwtDecode(localStorage.getItem("user"));
      setOwner(token._id);
    }
  });
  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      title === "" ||
      city === "" ||
      date === "" ||
      propertyRent === "" ||
      area === "" ||
      totalPeople === "" ||
      description === ""
    ) {
      toast("You have to fill in all required fields");
      return;
    }
    const currentDate = new Date()

    if(
      area.length<5||
      title.length<7||
      city.length<5||
      address.length<10||
      propertyRent.length<3||
      propertyRent.length>5||
      description.length<50
    ){
      console.log(currentDate)
    console.log(date)
      console.log("area"+area.length+"title"+title.length+"city"+city.length+"address"+address.length+"rent"+propertyRent.length+"description"+description.length)
      toast("please enter the values as indicated ");
      return;
    }
    if(date>endDate){
      toast("the end date must not be before start date");
      return;
    }
    if(date>currentDate){
      toast("selected date cannot be before current")
      return 
    }

    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("title", title);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("date", date);
    formData.append("endDate", endDate);
    formData.append("propertyRent", propertyRent);
    formData.append("area", area);
    formData.append("famousPlace", famousPlace);
    formData.append("totalPeople", totalPeople);
    formData.append("description", description);
    formData.append("wifi", wifi);
    formData.append("water", water);
    formData.append("tv", tv);
    formData.append("fridge", fridge);
    formData.append("roof", roof);
    formData.append("pets", pets);
    formData.append("closet", closet);
    formData.append("balcony", balcony);
    formData.append("kitchen", kitchen);
    formData.append("electricity", electricity);
    formData.append("airConditioner", airConditioner);
    formData.append("parking", parking);
    formData.append("bath", bath);
    formData.append("owner", owner);

    try {
      const res = await axios.post(
        "http://localhost:5000/user/addProperty",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast(res.data);
      setTimeout(() => {
        nav("/");
      }, 2000);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      toast("There was an error submitting the form!");
    }
  };

  return (
    <div
      className=" bg-gray-100 mx-12 ml-20 "
      style={{
        backgroundImage: "url('')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-1/2 p-4">
        <ToastContainer />
        <form>
          <h1 className="text-center ml-48 mb-4 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
            List Room
          </h1>
          <div className="flex">
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                style={{ width: "300px" }}
                type="text"
                id="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the title of your room here..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="city"
                className="block ml-12 mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                City
              </label>
              <input
                style={{ width: "300px" }}
                type="text"
                id="city"
                required
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                className="bg-gray-50 ml-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the city of your room here..."
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-6">
              <label
                htmlFor="area"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Area
              </label>
              <input
                style={{ width: "300px" }}
                type="text"
                id="area"
                required
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the area where your room is located"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="address"
                className="block mb-2 ml-12 text-lg font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                style={{ width: "300px" }}
                type="text"
                id="address"
                required
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                className="bg-gray-50 border ml-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the address of your room here..."
              />
            </div>
          </div>
          <label
            for="first_name"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Available Date
          </label>
          <div className="flex mb-6 w-full ">
            <div className=" ">
              <input
                type="date"
                style={{ width: "300px" }}
                required
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  h-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mx-4 text-2xl">To</div>
            <div className=" ">
              <input
                type="date"
                style={{ width: "280px" }}
                required
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-6">
              <label
                htmlFor="propertyrent"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Property Rent
              </label>
              <input
                style={{ width: "300px" }}
                type="number"
                id="propertyrent"
                required
                value={propertyRent}
                onChange={(e) => {
                  setPropertyRent(e.target.value);
                }}
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the property rent here..."
              />
            </div>
            <div>
              <div className="mb-6">
                <label
                  htmlFor="famousplace"
                  className="block mb-2 ml-12 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Famous Place
                </label>
                <input
                  style={{ width: "300px" }}
                  type="text"
                  id="famousplace"
                  value={famousPlace}
                  onChange={(e) => {
                    setFamousPlace(e.target.value);
                  }}
                  className="bg-gray-50 border ml-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write the name of any famous place around your room here..."
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mb-6">
              <label
                htmlFor="TotalPeople"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Total People
              </label>
              <input
                style={{ width: "300px" }}
                required
                type="text"
                id="TotalPeople"
                value={totalPeople}
                onChange={(e) => {
                  setTotalPeople(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the number of people allowed to be registered in room here..."
              />
            </div>
            <div className="mb-6 ml-12">
              <label
                htmlFor="TotalPeople"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Rooms Images
              </label>
              <input
                style={{ width: "300px", marginTop: "2px" }}
                required
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <label
            htmlFor="description"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            style={{ width: "650px" }}
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            id="description"
            rows="3"
            className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write the description of your room here..."
          ></textarea>

          <h3 className="mb-4 mt-4 font-semibold text-gray-900 dark:text-white">
            Facilities
          </h3>
          <ul
            style={{ width: "650px" }}
            className="flex flex-wrap items-center w-full text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <li className="w-1/5 p-2 ">
              <div className="flex items-center ps-3">
                <input
                  id="wifi"
                  type="checkbox"
                  checked={wifi}
                  onChange={(e) => {
                    checkWifi(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="water"
                  type="checkbox"
                  checked={water}
                  onChange={(e) => {
                    checkWater(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="tv"
                  type="checkbox"
                  checked={tv}
                  onChange={(e) => {
                    checkTv(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="refrigerator"
                  type="checkbox"
                  checked={fridge}
                  onChange={(e) => {
                    checkFridge(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="rooftop"
                  type="checkbox"
                  checked={roof}
                  onChange={(e) => {
                    checkRoof(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="pets"
                  type="checkbox"
                  checked={pets}
                  onChange={(e) => {
                    checkPets(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="closet"
                  type="checkbox"
                  checked={closet}
                  onChange={(e) => {
                    checkCloset(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="balcony"
                  type="checkbox"
                  checked={balcony}
                  onChange={(e) => {
                    checkBalcony(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="kitchen"
                  type="checkbox"
                  checked={kitchen}
                  onChange={(e) => {
                    checkKitchen(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="electricity"
                  type="checkbox"
                  checked={electricity}
                  onChange={(e) => {
                    checkElectricity(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="water"
                  type="checkbox"
                  checked={airConditioner}
                  onChange={(e) => {
                    checkairConditioner(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="refrigerator"
                  type="checkbox"
                  checked={parking}
                  onChange={(e) => {
                    checkParking(e.target.checked);
                  }}
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
            <li className="w-1/5 p-2">
              <div className="flex items-center ps-3">
                <input
                  id="bath"
                  type="checkbox"
                  checked={bath}
                  onChange={(e) => {
                    checkBath(e.target.checked);
                  }}
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
            className="w-full ml-32 mt-8 h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <div className="mb-12 h-20"></div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
