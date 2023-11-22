import React from 'react';


import { MdOutlinePayment } from "react-icons/md";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
const OurUnique = () => {
	return (
		<section className="p-14 bg-white">
			<div className="flex flex-col space-y-2 w-full items-center p-5">
				<h5 className=" text-center md:text-4xl sm:text-3xl text-lg font-[700] ">
					OUR UNIQUE POINTS-BASED PAYMENTS
				</h5>
				<div className="w-full flex justify-center">
					<div className="bg-[#5b21b6] w-44 h-[5px] rounded-xl flex justify-center"></div>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:p-5 w-full">
				{/* 1st */}
				<div className="flex flex-col shadow-lg p-5 justify-center items-center rounded-lg border-8">
					<div className="text-slate-500 text-6xl">
                    <MdOutlinePayment />
					</div>
					<p className="text-xl text-slate-500 text-center font-[700] py-5">
					Highly Effective Payment Method
					</p>
				</div>
				{/* 2nd */}
                <div className="flex flex-col shadow-lg p-5 justify-center items-center rounded-lg border-8">
					<div className="text-slate-500 text-6xl">
                    <FaUnlockKeyhole />
					</div>
					<p className="text-xl text-slate-500 text-center font-[700] py-5">
					Highly Secure
					</p>
				</div>
				{/* 3rd */}
				<div className="flex flex-col shadow-lg p-5 justify-center items-center rounded-lg border-8">
					<div className="text-slate-500 text-6xl">
                    <FaHeadphonesAlt />
					</div>
					<p className="text-xl text-slate-500 text-center font-[700] py-5">
					Fiduciary Accounts Support
					</p>
				</div>
                {/* 4th */}
				<div className="flex flex-col shadow-lg p-5 justify-center items-center rounded-lg border-8">
					<div className="text-slate-500 text-6xl">
                    <HiOutlineReceiptRefund />
					</div>
					<p className="text-xl text-slate-500 text-center font-[700] py-5">
                    Completely Refundable
					</p>
				</div>
			</div>
		</section>
	);
};

export default OurUnique;
