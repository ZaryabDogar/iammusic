import Image from 'next/image'
import React from 'react'

const Feedback = () => {
  return (
    <section className='md:p-14 p-5 w-full'> 
    	<div className="flex flex-col space-y-2 w-full items-center p-5">
				<h5 className=" text-center md:text-4xl sm:text-3xl text-lg font-[700] ">
                FEEDBACK FROM OUR MEMBERS
				</h5>
				<div className="w-full flex justify-center">
					<div className="bg-[#5b21b6] w-44 h-[5px] rounded-xl flex justify-center"></div>
				</div>
			</div>
            <div className="my-5 flex flex-col justify-center w-full items-center space-y-11">
                {/* ist  */}
                <div className="bg-gradient-to-br from-purple-900 to-blue-600 md:p-5 transform md:skew-x-[15deg] skew-x-[5deg] rounded-lg flex md:flex-row flex-col max-w-7xl justify-start  items-start">
                    <div className="flex  items-center rounded-full md:skew-x-[-15deg] skew-x-[-5deg] justify-center lg:w-[26%] w-full h-full">
                        <Image src='/p1.png' width={100} height={110} alt='person1 ' className=' p-2 rounded-full w-[100px]  h-[100px]'></Image>
                    </div>
                    <div className="flex flex-col md:px-5 md:skew-x-[-15deg] skew-x-[-5deg] text-white text-start p-5">
                        <p className="md:text-[18px] text-[1rem] font-[200] pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint suscipit eaque accusantium ipsa, architecto rerum quaerat modi expedita fugit mollitia, qui nihil id magni dolorem assumenda repellendus temporibus nostrum.</p>

                        <p className="md:text-[18px] font-[700]">- Robert Donald</p>

                    </div>
                </div>
                {/* 2nd */}
                <div className="bg-gradient-to-br from-purple-900 to-blue-600 md:p-5 transform md:skew-x-[15deg] skew-x-[5deg] rounded-lg flex md:flex-row flex-col max-w-7xl justify-start  items-start">
                    <div className="flex  items-center rounded-full md:skew-x-[-15deg] skew-x-[-5deg] justify-center lg:w-[26%] w-full h-full">
                        <Image src='/p1.png' width={100} height={110} alt='person1 ' className=' p-2 rounded-full w-[100px]  h-[100px]'></Image>
                    </div>
                    <div className="flex flex-col md:px-5 md:skew-x-[-15deg] skew-x-[-5deg] text-white text-start p-5">
                        <p className="md:text-[18px] text-[1rem] font-[200] pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint suscipit eaque accusantium ipsa, architecto rerum quaerat modi expedita fugit mollitia, qui nihil id magni dolorem assumenda repellendus temporibus nostrum.</p>

                        <p className="md:text-[18px] font-[700]">- Robert Donald</p>

                    </div>
                </div>
            </div>
    </section>
  )
}

export default Feedback