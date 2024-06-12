import React from "react";
import Sturzl from "@/components/Sturzl";
import Project from "@/components/Project";
import TwoBlocks from "@/components/TwoBlocks";
import SturzlSlider from "@/components/SturzlSlider";
import TwoSquares from "@/components/TwoSquares";
import BottomBlock from "@/components/BottomBlock";
import BookDemo from "@/components/BookDemo";

import "../styles/home.scss";

const About = () => {
	return (
		<div className="no-p">
			<Sturzl />
			<Project />
			<TwoBlocks />
			<SturzlSlider />
			<TwoSquares />
			<BottomBlock />
			<BookDemo
				className='sturzl-book-demo'
				buttonClassName='sturzl-book-demo__btn'
				textClassName='sturzl-book-demo__text'
			/>
		</div>
	);
};

export default About;
