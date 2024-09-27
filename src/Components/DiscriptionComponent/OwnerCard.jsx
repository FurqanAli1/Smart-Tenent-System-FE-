import React, { useEffect, useState } from 'react'
import pic from '../../Images/face.jpeg'
import axios from 'axios'
const OwnerCard = (props) => {

    const _id = props?.data
    const [owner, setOwner] = useState('')
    console.log(props.data)
    useEffect(() => {
        async function getData() {
            if (_id) {
                const userInf = await axios.get(`http://localhost:5000/users/getUserInfo/${_id}`)
                setOwner(userInf.data)
                console.log(userInf.data)
            }
            else { }
        }
        getData()
    }, [])
    return (
        <div className="px-8 py-4">
            <div className="font-bold text-2xl text-center p-2">Land Lord</div>
            <div className=''>
                < img class="my-auto h-auto w-full" src={pic} alt='' horizontal />
            </div>
            <div className='text-center'>
                <h5 className="text-2xl uppercase font-bold mt-4 tracking-tight text-gray-900 dark:text-white">
                    {owner.name}
                </h5>
                <p className="text-lg mt-4 text-gray-700 dark:text-gray-400">
                    {owner.email}
                </p>

            </div>
        </div>
    );
}

export default OwnerCard