import axios from 'axios'
import { jwtDecode } from "jwt-decode";

async function GetUserRoom() {
  try{
    const token = jwtDecode(localStorage.getItem("user"))
    const _id = token._id
    console.log(_id)
    const getRoom = await axios.get(`http://localhost:5000/user/getUsersRoom/${_id}`)
    console.log(getRoom.data)
  }
  catch{

  }
}

export default GetUserRoom