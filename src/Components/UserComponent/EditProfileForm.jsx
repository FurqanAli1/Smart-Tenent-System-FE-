import React, { useEffect, useState } from "react";
import { FaUser, FaAddressCard, FaPhoneAlt, FaImage } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProfileForm = () => {
  const [userInfo, setUserInfo] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cnic, setCnic] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getInfo() {
      const getToken = localStorage.getItem("user");
      if (getToken) {
        try {
          const token = jwtDecode(getToken);
          const _id = token._id;
          const response = await axios.get(
            `http://localhost:5000/users/getUserInfo/${_id}`
          );
          setUserInfo(response.data);
          setPhoneNumber(response.data.phoneNumber || "");
          setCnic(response.data.cnic || "");
        } catch (error) {
          console.log("Error fetching user info:", error);
        }
      } else {
        console.log("No token found");
      }
    }
    getInfo();
  }, []);

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userId", userInfo._id);
    formData.append("phoneNumber", phoneNumber);
    formData.append("cnic", cnic);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    try {
      const response = await axios.put(
        "http://localhost:5000/updateProfile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      toast.success("Profile updated successfully");
      window.location.reload();
      navigate("/ProfileCard");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.warning("Failed to update profile");
    }
  };

  return (
    <div className="mr-32 mt-8">
      <form
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8">
          Edit Profile{" "}
        </h1>{" "}
        <div className="flex items-center mb-4">
          <FaUser className="text-2xl ml-12 mr-2" />
          <span className="font-bold"> Name: </span>{" "}
          <span className="ml-20 capitalize text-lg" style={{marginLeft:"80px"}}> {userInfo.name} </span>{" "}
        </div>{" "}
        <div className="flex items-center mb-4">
          <MdEmail className="text-2xl ml-12 mr-2" />
          <span className="font-bold"> Email: </span>{" "}
          <span className="ml-20 text-lg" style={{marginLeft:"80px"}}> {userInfo.email} </span>{" "}
        </div>{" "}
        <div className="flex items-center mb-4">
          <FcBusinessman className="text-2xl ml-12 mr-2" />
          <span className="font-bold"> Profession: </span>{" "}
          <span className="ml-12 text-lg" > {userInfo.profession} </span>{" "}
        </div>{" "}
        <div className="flex items-center mb-4">
          <FaAddressCard className="text-2xl mr-2 ml-12" />
          <span className="font-bold"> CNIC: </span>{" "}
          <input
            type="text"
            style={{marginLeft:"87px"}}
            className=" bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="35201-11111111-1"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            required
          />
        </div>{" "}
        <div className="flex items-center mb-4">
          <FaPhoneAlt className="text-2xl mr-2 ml-12" />
          <span className="font-bold"> Phone: </span>{" "}
          <input
            style={{marginLeft:"75px"}}
            type="text"
            className=" bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="03354265160"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>{" "}
        <div className="flex items-center mb-4">
          <FaImage className="text-2xl mr-2 ml-12" />
          <span className="font-bold">  Image: </span>{" "}
          <input type="file" className="ml-20" onChange={handleFileChange} />{" "}
        </div>{" "}
        <div className="flex justify-center">
          <button
            type="submit"
            className="mr-4 mt-2 w-1/3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg py-2 px-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
};

export default EditProfileForm;
