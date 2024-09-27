import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <div class="sm:flex items-center max-w-screen-xl">
                <div class="sm:w-1/2 p-10">
                    <div class="image object-center text-center">
                        <img src="https://i.imgur.com/WbQnbas.png" />
                    </div>
                </div>
                <div class="sm:w-1/2 p-5">
                    <div class="text">
                        <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">Smart <span class="text-indigo-600">Tenent</span>
                        </h2>
                        <p class="text-gray-700 text-lg text-justify">
                            Smart Tenant System is a revolutionary platform designed to
                            streamline the process of managing tenants and rental properties.Our
                            mission is to provide landlords, property managers, and tenants with
                            innovative tools and features that simplify and enhance the rental
                            experience. Our platform is built with security, reliability, and user -
                            friendliness in mind.We prioritize data protection and privacy,
                            ensuring that sensitive information is kept safe and secure at all
                            times.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs