import React, { useEffect, useRef, useState } from 'react';
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';

import Image from 'next/image';
import S3 from '../component/S3';
import Slide1 from '../component/Slide1';
import Slide2 from '../component/Slide2';

const Slider = () => {
	return (
		<div className='lg:h-screen  h-[80vh] w-full relative'>
			{' '}
			<Swiper
				navigation={true}
				modules={[Navigation] }
				spaceBetween={50}
				slidesPerView={1}
				autoplay={true}
				loop={true}
                data-swiper-autoplay="2000"
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				className="mySwiper "
			>
				<SwiperSlide >
					{' '} 
					<div className="swiper-button-next text-white ">
						<MdNavigateNext className="text-white font-[1000]" />
					</div>
					<div className="swiper-button-prev">
						<GrFormPrevious className="text-white font-extrabold" />
					</div>
                  
					<Slide1 />
				</SwiperSlide>
				<SwiperSlide>
					{' '}
					<div className="swiper-button-next text-white">
						<MdNavigateNext className="text-white" />
					</div>
					<div className="swiper-button-prev">
						<GrFormPrevious className="text-white font-extrabold" />
					</div>
					<Slide2 />
				</SwiperSlide>
				<SwiperSlide>
					{' '}
					<div className="swiper-button-next text-white">
						<MdNavigateNext className="text-white" />
					</div>
					<div className="swiper-button-prev">
						<GrFormPrevious className="text-white font-extrabold" />
					</div>
					<S3></S3>
				</SwiperSlide>
			</Swiper>
<div className="w-full absolute xl:bottom-5 lg:bottom-[30px] md:bottom-[-5px] sm:bottom-[-5px] bottom-[-5px] z-20">
<Image src='/curve.png' width={500} height={500} alt="curve" className='w-full'></Image>
</div>
		</div>
	);
};

export default Slider;
