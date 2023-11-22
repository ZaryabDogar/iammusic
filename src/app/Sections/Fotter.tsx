import Image from 'next/image';
import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import { SlSocialFacebook } from "react-icons/sl";
import { LuTwitter } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialSpotify } from "react-icons/sl";
const Fotter = () => {
	return (
		<section className="p-14 bg-[#343a40]">
			<div className="flex md:flex-row flex-col md:justify-evenly justify-center w-full">
				<div className=" flex justify-center">
					<Image
						src="/music.png"
						width={100}
						height={100}
						alt="music"
						className="p-3 shadow-xl"
					></Image>
				</div>
                {/* contact info  */}
				<div className="flex flex-col text-white space-y-2 ">
					<h1 className="text-lg font-[700] text-[#c084fc] text-center">
						Contact Information
					</h1>
					<div className=" space-y-3 flex flex-col justify-center items-center">
						<div className="flex items-center space-x-1 justify-center  ">
							<IoHomeOutline />
							<p className="md:text-start text-center">
								Plant B. Manager 71 Old Church St Kensington, SW3 5BS
							</p>
						</div>
						<div className="flex items-center space-x-1">
						<MdOutlineLocalPhone />
							<p className="">
							0845 054 7101
							</p>
						</div>
						<div className="flex items-center space-x-1">
                        <CiMail />
							<p className="">
                            contact@example.com
							</p>
						</div>
					</div>
				</div>
                {/* links */}
                <div className="flex flex-col text-white space-y-3">
					<h1 className="text-lg font-[700] text-[#c084fc] text-center">
					Helpful Links
					</h1>
					<div className="flex flex-col space-y-3 justify-center items-center">
						<Link href='/'><p className="">About Us</p></Link>
						<Link href='/'><p className="">Services</p></Link>
						<Link href='/'><p className="">Point System</p></Link>
						<Link href='/'><p className="">Testimonials</p></Link>
						<Link href='/'><p className="">Sign Up</p></Link>
					</div>
				</div>
                {/* keepconected  */}
                <div className="flex flex-col text-white space-y-3">
					<h1 className="text-lg font-[700] text-[#c084fc] text-center w-full">
                    Keep Connected
					</h1>
					<div className=" ">
					<div className="flex flex-row text-sm space-x-3  items-center justify-center" >
                    <SlSocialFacebook className='cursor-pointer'/>
                    <LuTwitter className='cursor-pointer'/>
                    <FaGoogle className='cursor-pointer'/>
                    <FiLinkedin className='cursor-pointer'/>
                    <SlSocialSpotify className='cursor-pointer'/>
                    </div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Fotter;
