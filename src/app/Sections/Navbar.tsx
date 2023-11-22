"use client"
import Image from 'next/image';
import React, { useState,useEffect } from 'react';
import Button from '../component/Button';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
	// dropdown 
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	  };

	//   navbar color
	const [isScrolled, setIsScrolled] = useState(false);

	 // Function to handle scroll events
	 const handleScroll = () => {
		// Check if the user has scrolled beyond a certain point (you can adjust this value)
		const scrollY = window.scrollY;
		if (scrollY > 100) {
		  setIsScrolled(true);
		} else {
		  setIsScrolled(false);
		}
	  };
	
	  // Effect to add scroll event listener
	  useEffect(() => {
		// Add event listener when component mounts
		window.addEventListener('scroll', handleScroll);
	
		// Clean up the event listener when component unmounts
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []); // Empty dependency array ensures the effect runs only once on mount
	return (
		<div>
			<nav  className={`fixed  z-20 top-0 start-0 w-full   sm:px-14 px-2 transition duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}>
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					{/* leftsidew */}
					<div className="flex justify-start items-center flex-1 ">
						<a href="/" className="flex items-center rtl:space-x-reverse min-w-[32px]">
							<Image
								src="/music.png"
								alt="music"
								width={50}
								height={50}
								className="shadow-lg rounded-full min-w-full"
							></Image>
						</a>
						<div className="w-[20px]"></div>
						{/* search part  */}
						<div className={`shadow-lg border-2   sm:w-[80%] sm:py-[5px]   rounded-full sm:px-5 px-3 flex items-center ${isScrolled?'border':'border-gray-400'}`}>
							
							<button className="cursor-pointer ">
								{' '}
								<IoSearch className={`text-xl font-[400] ${isScrolled?'text-black':'text-white'}`}/>
							</button>
							<input
    type="text"
    placeholder="Start your search: guitar..."
    className={`p-2 w-[80%] rounded-md focus:outline-none bg-transparent ${
        isScrolled ? 'text-black' : 'text-white'
    }`}
/>

						</div>
                        <div className="w-[20px]"></div>
{/* button  */}
<Button content='Search'></Button>
					
					</div>

					<div className="flex md:order-2 items-center">
					<a className={`sm:block hidden pr-5 ${isScrolled?'text-black':'text-white'}`} href="/login">Become a Professional</a>
						<button
							type="button"
							className="text-black bg-white hover:drop-shadow-xl focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 text-center border  "
							onClick={toggleDropdown}
						>
						<RxHamburgerMenu />

						</button>
					</div>
					<div
						className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
						id="navbar-sticky"
					></div>
				</div>
			
				{isOpen && (
        <div className="w-50 p-5 bg-white shadow-xl absolute right-14 top-20 border-1 transition-opacity opacity-100">
          <ul className="font-bold text-gray-600">
            <li className="py-1"><Link href="#">Sign In</Link></li>
            <li><Link href="#">Sign Up</Link></li>
            <li className="sm:hidden block py-2"><Link href="#">Become a Professional</Link></li>
            <li className="py-1"><Link href="#">Privacy Policy</Link></li>
            <li className="py-1"><Link href="#">FAQs</Link></li>
            <li className="py-1"><Link href="#">Terms of Use</Link></li>
          </ul>
        </div>
      )}
			</nav>
		</div>
	);
};

export default Navbar;
