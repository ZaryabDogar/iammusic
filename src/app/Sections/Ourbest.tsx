import React from 'react';
import Button from '../component/Button';
import Image from 'next/image';
import {Ourbesttags} from '../Constants/Index'
const Ourbest = () => {
	return (
		<section className="bg-white py-20 px-5">
			<div className="flex md:flex-row flex-col md:justify-evenly  justify-center text-center items-center md:text-start mb-10">
				<div className="flex flex-col space-y-5 w-full md:max-w-[50%]">
					<h5 className="md:text-6xl sm:text-4xl text-2xl font-[700] text-slate-900">
						WHAT WE DO BEST
					</h5>
                    <div className="w-full flex justify-center md:justify-start">
					<div className="bg-[#5b21b6] w-44 h-[5px] rounded-xl flex justify-center"></div></div>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis nostrud exercitati ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Button content='See Our Stadies'></Button>
				</div>
                <div className=" sm:pt-0 pt-10">
                    <Image src='/home2.png' width={400} height={281} alt='women'></Image>
                </div>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-14" style={{backgroundImage: "linear-gradient(45deg, rgba(250, 250, 250, 0.996), rgba(250, 250, 250, 0.996))"}}>
      {Ourbesttags.map((tag) => (
        <div className=" p-4 text-center" key={tag.bigtag}>
          <h3 className="text-[#5b21b6] sm:text-6xl text-4xl font-[750]">{tag.bigtag}</h3>
          <p className="">{tag.tag}</p>
        </div>
      ))}
    </div>

		</section>
	);
};

export default Ourbest;
