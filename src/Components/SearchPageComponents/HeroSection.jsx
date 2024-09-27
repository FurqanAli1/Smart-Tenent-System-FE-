import React from 'react'

const HeroSection = (props) => {
    console.log(props?.data)
    return (
        <div>
            <div style={{width:"1210px",marginLeft:"90px"}}class=" p-100 h-[470px] bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
                <div>
                </div>
                <div class="w-full mx-auto">
                </div>
            </div>
        </div>
    )
}

export default HeroSection