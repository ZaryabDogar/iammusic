import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Register = () => {
  return (
    <section className=''>
    <div className="flex  justify-center  bg-fixed bg-cover bg-center relative "style={{ backgroundImage: 'url("/bg4.jpg")' }}>
        {/* Replace 'your-image.jpg' with the path to your image */}
        <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-fixed bg-bottom"
            
        />
        <div
            className="relative text-white z-10 sm:p-10 w-full flex flex-col justify-center "
            style={{
                backgroundImage:
                    'linear-gradient(rgba(85, 26, 139, 0.933), rgba(153, 102, 204, 0.533))',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-col space-y-2 w-full items-center p-5">
                <div className='pb-5'> <h5 className="md:text-4xl sm:text-3xl text-xl font-[700] ">
            REGISTER NOW!
            </h5>
            <div className="w-full flex justify-center">
            <div className="bg-[#5b21b6] w-44 h-[5px] rounded-xl flex justify-center"></div>
            </div></div>
            <p className="pb-5">Create a free account and get started</p>
           <div className='py-12'>
            <div className='py-3 px-8 bg-white rounded-3xl text-[#5b21b6] flex justify-center items-center space-x-1 text-xl font-[700] cursor-pointer hover:bg-[#ddd6fe] transition-colors ease-in-out'>REGISTER NOW &nbsp;  <FaArrowRightLong /></div>
           </div>
      
        
        </div>

      

        </div>
    </div>
</section>
  )
}

export default Register