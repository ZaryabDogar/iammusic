import React from 'react';
import { BsCash } from 'react-icons/bs';
import { PiClipboardText } from 'react-icons/pi';
import { MdOutlineThumbUp } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineChatBubbleOutline } from "react-icons/md";

const Explore = () => {
	return (
		<section className="p-14 bg-white">
			<div className="flex flex-col space-y-2 w-full items-center ">
				<h5 className="md:text-3xl sm:text-2xl text-lg font-[700] text-slate-800 ">
                EXPLORE OUR FEATURES
				</h5>
				<div className="w-full flex justify-center">
					<div className="bg-[#5b21b6] w-44 h-[5px] rounded-xl flex justify-center"></div>
				</div>
			</div>

			<div className="grid  grid-cols-1 md:grid-cols-3 gap-5 sm:p-5 w-full">
				{/* 1st */}
				<div className="flex flex-col shadow-lg p-5 justify-center items-center rounded-lg">
					<div className="text-slate-600 text-6xl">
						<PiClipboardText />
					</div>
					<p className="text-xl text-[#a855f7] text-center font-[700] py-5">
						Learn & Earn
					</p>
				</div>
				{/* 2nd */}
				<div className="flex flex-col shadow-lg p-5 justify-center items-center rounded-lg">
					<div className="text-slate-600 text-6xl">
						<BsCash />
					</div>
					<p className="text-xl text-[#a855f7] text-center font-[700] py-5">
                    Pay After Your Session
					</p>
				</div>
				{/* 3rd */}
				<div className="flex flex-col shadow-lg p-5 justify-center items-center rounded-lg">
					<div className="text-slate-600 text-6xl">
					<MdOutlineThumbUp />
					</div>
					<p className="text-xl text-[#a855f7] text-center font-[700] py-5">
					Experienced Tutors
					</p>
				</div>
				{/* 4th */}
				<div className="flex flex-col shadow-lg p-5 justify-center items-center rounded-lg">
					<div className="text-slate-600 text-6xl">
					<TbWorld />
					</div>
					<p className="text-xl text-[#a855f7] text-center font-[700] py-5">
                    Worldwide Connections

					</p>
				</div>
				{/* 5th */}
				<div className="flex flex-col shadow-lg p-5 justify-center items-center rounded-lg">
					<div className="text-slate-600 text-6xl">
					<IoPlayOutline />
					</div>
					<p className="text-xl text-[#a855f7] text-center font-[700] py-5">
					Video Conferencing
					</p>
				</div>
				{/* 6th */}
				<div className="flex flex-col shadow-lg p-5 justify-center items-center rounded-lg">
					<div className="text-slate-600 text-6xl">
                    <MdOutlineChatBubbleOutline />
					</div>
					<p className="text-xl text-[#a855f7] text-center font-[700] py-5">
                    Chat Together
					</p>
				</div>
			</div>
		</section>
	);
};

export default Explore;
