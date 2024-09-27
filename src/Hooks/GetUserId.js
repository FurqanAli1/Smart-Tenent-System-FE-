import { jwtDecode } from "jwt-decode";
import axios from "axios";

async function GetUserId() {
    const token = jwtDecode(localStorage.getItem("user"))
    const _id = token._id
    const user = await axios.get(`http://localhost:5000/users/getUserInfo/${_id}`)
    return user
}

export default GetUserId