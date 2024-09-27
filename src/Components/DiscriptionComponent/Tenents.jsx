import React from 'react'
import pic from '../../Images/pic5.jpeg'

const Tenents = (props) => {
    console.log(props)
    return (
        <div class="w-96 px-6 py-6  text-center shadow-lg rounded-lg lg:mt-0 xl:px-10">
            <div class="space-y-4 xl:space-y-6">
            {
                    props.data?.image ?
                        < img  class="mx-auto rounded-full h-36 w-36" src={`http://localhost:5000/${props.data?.image}`} alt={pic} horizontal />
                        : <></>

                }
                <div class="space-y-2">
                    <div class="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                        <h3 class="text-black uppercase text-lg">{props.data?.name}</h3>
                        <p class="text-black-300 text-lg">{props.data?.profession}</p>
                        <p class="text-black-300 text-lg">{props.data?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tenents