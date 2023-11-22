import React from 'react';

const Featured = () => {
	return (
		<section>
			<div className="flex  justify-center  bg-fixed bg-cover bg-center relative "style={{ backgroundImage: 'url("/bg1.jfif")' }}>
				{/* Replace 'your-image.jpg' with the path to your image */}
				<div
					className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-fixed bg-bottom"
					
				/>
				<div
					className="relative text-white z-10 p-14 w-full flex justify-center "
					style={{
						backgroundImage:
							'linear-gradient(rgba(85, 26, 139, 0.933), rgba(153, 102, 204, 0.533))',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					<div className="flex flex-col space-y-2 w-full items-center p-5">
					<h5 className="md:text-4xl sm:text-3xl text-xl font-[700] ">
					FEATURED SESSIONS
					</h5>
                    <div className="w-full flex justify-center">
					<div className="bg-[#5b21b6] w-44 h-[5px] rounded-xl flex justify-center"></div></div>
              
                
				</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
