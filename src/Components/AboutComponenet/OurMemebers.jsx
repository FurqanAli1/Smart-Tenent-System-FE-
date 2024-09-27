import React from 'react';
import pic from '../../Images/charles.jpeg'
import sec from '../../Images/brooks.jpeg'
const OurMembers = () => {
    return (
        <div className=''>
            <h2 class="text-4xl font-bold text-blue-800 mb-4 text-center mb-8">Our Team</h2>
            <div className='flex mx-16 w-72% mt-2'>
                <div class=" rounded w-1/3 h-full relative overflow-hidden">
                    <img class="object-cover object-center h-full" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
                    <div class="absolute inset-0 flex items-center justify-center text-white text-center">
                        <h2 class="font-semibold mr-60 text-2xl mt-44">CEO Sarah Smith</h2><br />
                    </div>
                </div>
                <div class=" rounded mx-4 w-1/3 relative overflow-hidden">
                    <img class=" w-full h-full" src={pic} />
                    <div class="absolute inset-0 flex items-center justify-center text-white text-center">
                        <h2 class="font-semibold mr-52 text-2xl mt-44">COO Charles Brown</h2><br />
                    </div>
                </div>
                <div class=" rounded mx-4 w-1/3 relative overflow-hidden">
                    <img class=" w-full h-full" src={sec} />
                    <div class="absolute inset-0 flex items-center justify-center text-white text-center">
                        <h2 class="font-semibold mr-52 text-2xl mt-44">Marketing Head Alice Brooks</h2><br />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurMembers;
