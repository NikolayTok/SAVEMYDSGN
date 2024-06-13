import React from "react";
import Sturzl from "@/components/Sturzl";
import BookDemo from "@/components/BookDemo";

import "../styles/home.scss";

const About = () => {
	return (
		<div className="no-p">
			<Sturzl />
			<BookDemo
				className='sturzl-book-demo'
				buttonClassName='sturzl-book-demo__btn'
				textClassName='sturzl-book-demo__text'
			/>
		</div>
	);
};

export default About;
