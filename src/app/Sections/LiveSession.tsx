import React from 'react';
import LiveSessioncard from '../component/LiveSessioncard';
import Image from 'next/image';

import { IoPlayOutline } from "react-icons/io5";
const LiveSession = () => {
	return (
		<section className='p-10 bg-white'>
			<div className="flex flex-col space-y-2 w-full items-center p-10">
				<h5 className="md:text-3xl sm:text-2xl text-lg font-[700] text-slate-800 ">
                LIVE SESSIONS
				</h5>
				<div className="w-full flex justify-center">
					<div className="bg-[#5b21b6] w-44 h-[5px] rounded-xl flex justify-center"></div>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-10 w-full">
            {/* card1 */}
            <div className="bg-white shadow-md rounded-lg max-w-[238px] ">
                <div className="relative w-full">
                    <Image src='/card1.webp' width={238} height={200} alt='img1' className='rounded-t-lg  h-[200px]'></Image>
                    <div className='absolute right-2  text-2xl cursor-pointer bg-[#7c3aed] hover:bg-[#581c87] transition-colors ease-in rounded-full p-3  text-white bottom-[-9px]'><IoPlayOutline /></div>
                </div>
                <div className="flex flex-col items-center w-full p-1">
                    <h1 className='text-xl font-bold text-slate-800 text-center'>Piano For Beginners</h1>
                    <p className='text-xl font-bold text-green-700'>$ 500</p>
                    <p className='text-[16px] text-center text-slate-600 py-5'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <hr />
                <div className="py-2 "><p className="text-center text-slate-600">4 Lectures | 40 hr | John Doe</p></div>
            </div>
{/* card2 */}
<div className="bg-white shadow-md rounded-lg max-w-[238px]">
                <div className="relative w-full ">
                    <Image src='/card2.jpg' width={238} height={280} alt='img1' className='rounded-t-lg h-[200px]'></Image>
                    <div className='absolute right-2  text-2xl cursor-pointer bg-[#7c3aed] hover:bg-[#581c87] transition-colors ease-in rounded-full p-3  text-white bottom-[-9px]'><IoPlayOutline /></div>
                </div>
                <div className="flex flex-col items-center w-full p-1">
                    <h1 className='text-xl font-bold text-slate-800 text-center'>Piano For Beginners</h1>
                    <p className='text-xl font-bold text-green-700'>$ 500</p>
                    <p className='text-[16px] text-center text-slate-600 py-5'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <hr />
                <div className="py-2 "><p className="text-center text-slate-600">4 Lectures | 40 hr | John Doe</p></div>
            </div>
{/* card3 */}
<div className="bg-white shadow-md rounded-lg max-w-[238px]">
                <div className="relative w-full">
                    <Image src='/card3.jfif' width={238} height={200} alt='img1' className='rounded-t-lg  h-[200px]'></Image>
                    <div className='absolute right-2  text-2xl cursor-pointer bg-[#7c3aed] hover:bg-[#581c87] transition-colors ease-in rounded-full p-3  text-white bottom-[-9px]'><IoPlayOutline /></div>
                </div>
                <div className="flex flex-col items-center w-full p-1">
                    <h1 className='text-xl font-bold text-slate-800 text-center'>Piano For Beginners</h1>
                    <p className='text-xl font-bold text-green-700'>$ 500</p>
                    <p className='text-[16px] text-center text-slate-600 py-5'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <hr />
                <div className="py-2 "><p className="text-center text-slate-600">4 Lectures | 40 hr | John Doe</p></div>
            </div>
{/* card4 */}
<div className="bg-white shadow-md rounded-lg max-w-[238px]">
                <div className="relative w-full">
                    <Image src='/card4.jfif' width={238} height={200} alt='img1' className='rounded-t-lg  h-[200px]'></Image>
                    <div className='absolute right-2  text-2xl cursor-pointer bg-[#7c3aed] hover:bg-[#581c87] transition-colors ease-in rounded-full p-3  text-white bottom-[-9px]'><IoPlayOutline /></div>
                </div>
                <div className="flex flex-col items-center w-full p-1">
                    <h1 className='text-xl font-bold text-slate-800 text-center'>Piano For Beginners</h1>
                    <p className='text-xl font-bold text-green-700'>$ 500</p>
                    <p className='text-[16px] text-center text-slate-600 py-5'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <hr />
                <div className="py-2 "><p className="text-center text-slate-600">4 Lectures | 40 hr | John Doe</p></div>
            </div>
            </div>
		</section>
	);
};

export default LiveSession;
