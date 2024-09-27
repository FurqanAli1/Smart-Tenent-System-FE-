import axios from "axios"

async function GetRoomData(_id) {
    const token = localStorage.getItem('user')
    try {
        const getdata = await axios.get(`http://localhost:5000/users/getOneShareRoom/${_id}`, {
            headers:
            {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        return getdata
    }
    catch (error) {
        console.log(error.message)
    }
}

export default GetRoomData