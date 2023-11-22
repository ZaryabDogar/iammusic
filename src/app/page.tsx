'use client';
import Image from 'next/image';

import Chosegenre from './Sections/Chosegenre';
import Explore from './Sections/Explore';
import Featured from './Sections/Featured';
import Feedback from './Sections/Feedback';
import HowWorks from './Sections/HowWorks';
import LiveSession from './Sections/LiveSession';
import Navbar from './Sections/Navbar';
import OurUnique from './Sections/OurUnique';
import Ourbest from './Sections/Ourbest';
import Register from './Sections/Register';
import Slider from './Sections/Slider';
import Fotter from './Sections/Fotter';


export default function Home() {
	return (
		<main>
			<Navbar></Navbar>
			<Slider></Slider>
			<Ourbest />
			<Featured></Featured>
			<LiveSession></LiveSession>
			<Chosegenre />
			<Explore />
			<HowWorks />
			<OurUnique></OurUnique>
			<Feedback></Feedback>
      <Register/>
      <Fotter></Fotter>
		</main>
	);
}
