import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import img from './../../../public/slide1.jpg';
import Button from './Button';
import  { useEffect, useState } from 'react';
const Slide1 = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        // Set a brief delay to allow the component to render before applying the transition
        const timeout = setTimeout(() => {
          setLoaded(true);
        }, 100);
    
        // Clear the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
      }, []);
    
	const backgroundStyle = {
		backgroundImage: `url(${img.src})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
	};
	const gradientStyle = {
		backgroundImage:
			'linear-gradient(to bottom, rgba(76,29,149,0.5), transparent)',
		transition: 'background-image 0.5s ease-in-out', // Add a transition for a smoother effect
	};
	return (
		<div className="h-full w-full">
			<div
				style={backgroundStyle}
				className="h-[95vh] w-full flex items-center justify-center "
			>
				<div
					className=" text-white   flex justify-center  text-center  w-full h-full   items-center"
					style={gradientStyle}
				>
					    <div
      className={`w-full h-full flex justify-center items-center flex-col fixed top-0 left-0  transition-all duration-500 ease-in ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[10%]'
      }`}
    >
      <h1 className="md:text-5xl sm:text-4xl text-2xl font-[700] leading-[1.2]">Want To Learn Music</h1>
      <h1 className="md:text-5xl sm:text-4xl text-2xl font-[700] leading-[1.2]">From The Comfort</h1>
      <h1 className="md:text-5xl sm:text-4xl text-2xl font-[700] leading-[1.2] pb-2">Of Your Home?</h1>
      <Button content='Lets Get Started' />
    </div>
				</div>
			</div>
		</div>
	);
};

export default Slide1;
