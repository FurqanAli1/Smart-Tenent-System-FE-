import React from 'react'

const Description = (props) => {
    
    return (
        <div className='shadow-lg p-4 ml-20 w-11/12 mt-12'>
            <div className="font-bold text-2xl mt-4">Owner's Description</div>
            <div >
                <p 
                    class="text-justify w-full h-auto p-4 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 
                    first-letter:me-3 first-letter:float-start text-lg"> 
                {props.data}
                </p>
            </div>
        </div>
    )
}

export default Description