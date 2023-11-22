import Image from 'next/image'
import React from 'react'

const Chosegenre = () => {
  return (
    <section className=''>
    <div className="flex  justify-center  bg-fixed bg-cover bg-center relative "style={{ backgroundImage: 'url("/bg2.jpg")' }}>
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
            <h5 className="md:text-4xl sm:text-3xl text-xl font-[700] ">
            CHOOSE YOUR GENRE
            </h5>
            <div className="w-full flex justify-center">
            <div className="bg-[#5b21b6] w-44 h-[5px] rounded-xl flex justify-center"></div></div>
      
        
        </div>

        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-5 sm:p-5 w-full">
            {/* item1 */}
            <div className="p-5 flex flex-col justify-center items-center">
                <Image className='rounded-full w-[100px]  h-[100px] sm:w-[150px] sm:h-[150px]'  src='/fc1.jpg' width={150} height={150} alt='img1'></Image>
                <p className='text-xl text-center text-white font-[700] py-5'>Folk Culture</p>
            </div>
            {/* item2 */}
            <div className="p-5 flex flex-col justify-center items-center">
                <Image className='rounded-full w-[100px]  h-[100px] sm:w-[150px] sm:h-[150px]'  src='/fc2.jpg' width={150} height={150} alt='img1'></Image>
                <p className='text-xl text-center text-white font-[700] py-5'>Folk Culture</p>
            </div>
            {/* item3 */}
            <div className="p-5 flex flex-col justify-center items-center">
                <Image className='rounded-full w-[100px]  h-[100px] sm:w-[150px] sm:h-[150px]'  src='/fc3.jpg' width={150} height={150} alt='img1'></Image>
                <p className='text-xl text-center text-white font-[700] py-5'>Folk Culture</p>
            </div>
            {/* item4 */}
            <div className="p-5 flex flex-col justify-center items-center">
                <Image className='rounded-full w-[100px]  h-[100px] sm:w-[150px] sm:h-[150px]'  src='/fc4.jpg' width={150} height={150} alt='img1'></Image>
                <p className='text-xl text-center text-white font-[700] py-5'>Folk Culture</p>
            </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default Chosegenre