import Image from 'next/image';
import React from 'react';

const HowWorks = () => {
	return (
		<section className="">
			<div
				className="flex  justify-center  bg-fixed bg-cover bg-center relative "
				style={{ backgroundImage: 'url("/bg3.jpg")' }}
			>
				{/* Replace 'your-image.jpg' with the path to your image */}
				<div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-fixed bg-bottom" />
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
						HERE’S HOW IT WORKS
						</h5>
						<div className="w-full flex justify-center">
							<div className="bg-[#5b21b6] w-44 h-[5px] rounded-xl flex justify-center"></div>
						</div>
					</div>

					<div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-10 w-full ">
						{/* ist  */}
						<div className="flex shadow-lg p-5 rounded-md py-10 ">
							<h1 className="text-3xl md:text-5xl font-[700]">01</h1>
							<div className="flex flex-col pl-2">
								<h1 className="text-lg md:text-xl font-[700] text-slate-200">
									Create Account
								</h1>
								<p className="text-[10px]">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Praesentium consequatur deserunt delectus
								</p>
							</div>
						</div>
						{/* 2nd */}
						<div className="flex shadow-lg p-5 rounded-md py-10 ">
							<h1 className="text-3xl md:text-5xl font-[700]">02</h1>
							<div className="flex flex-col pl-2">
								<h1 className="text-lg md:text-xl font-[700] text-slate-200">
									Edit Profile
								</h1>
								<p className="text-[10px]">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Praesentium consequatur deserunt delectus
								</p>
							</div>
						</div>
						{/* 3rd */}
						<div className="flex shadow-lg p-5 rounded-md py-10 ">
							<h1 className="text-3xl md:text-5xl font-[700]">03</h1>
							<div className="flex flex-col pl-2">
								<h1 className="text-lg md:text-xl font-[700] text-slate-200">
                                Add Payment method
								</h1>
								<p className="text-[10px]">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Praesentium consequatur deserunt delectus
								</p>
							</div>
						</div>
						{/* 4th */}
						<div className="flex shadow-lg p-5 rounded-md py-10 ">
							<h1 className="text-3xl md:text-5xl font-[700]">04</h1>
							<div className="flex flex-col pl-2">
								<h1 className="text-lg md:text-xl font-[700] text-slate-200">
								Schedule Session
								</h1>
								<p className="text-[10px]">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Praesentium consequatur deserunt delectus
								</p>
							</div>
						</div>
						{/* 5thg */}
						<div className="flex shadow-lg p-5 rounded-md py-10 ">
							<h1 className="text-3xl md:text-5xl font-[700]">05</h1>
							<div className="flex flex-col pl-2">
								<h1 className="text-lg md:text-xl font-[700] text-slate-200">
									
Offer Session
								</h1>
								<p className="text-[10px]">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Praesentium consequatur deserunt delectus
								</p>
							</div>
						</div>
						{/* 6th */}
						<div className="flex shadow-lg p-5 rounded-md py-10 ">
							<h1 className="text-3xl md:text-5xl font-[700]">06</h1>
							<div className="flex flex-col pl-2">
								<h1 className="text-lg md:text-xl font-[700] text-slate-200">
								Rate Your Experience
								</h1>
								<p className="text-[10px]">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Praesentium consequatur deserunt delectus
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowWorks;
