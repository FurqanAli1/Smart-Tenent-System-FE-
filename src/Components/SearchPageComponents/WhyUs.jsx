import React from 'react'

const WhyUs = () => {
    return (
        <div className='mt-8'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
            <section class="py-8 px-8 ">
                <div class="container mx-auto text-center px-2">
                    <h2 class="text-4xl font-bold text-blue-800 mb-8">Why Choose Us</h2>
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-white p-8 shadow-md rounded-md">
                                <i class="fas fa-lock text-4xl text-blue-500 mb-4"></i>
                                <h3 class="text-xl font-bold text-gray-800 mb-2">Secure</h3>
                                <p class="text-gray-600">Provide a secure mechanism for both the tenent and lord to register and find right property for them</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-white p-8 shadow-md rounded-md">
                                <i class="fas fa-globe-americas text-4xl text-blue-500 mb-4"></i>
                                <h3 class="text-xl font-bold text-gray-800 mb-2">Local</h3>
                                <p class="text-gray-600">Finding all the properties around you to optimize the process of property seach for you providing better results</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="bg-white p-8 shadow-md rounded-md">
                                <i class="fas fa-users text-4xl text-blue-500 mb-4"></i>
                                <h3 class="text-xl font-bold text-gray-800 mb-2">Collaborative</h3>
                                <p class="text-gray-600">Providing a platform that brings the whole community on one page to help each other and saving precious time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyUs