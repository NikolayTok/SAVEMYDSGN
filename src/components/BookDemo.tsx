import React from 'react';
import AppButton from "./AppButton";
import PropTypes from 'prop-types';

import "../styles/book-demo.scss";

interface BoookDemoProps {
	className: string;
	buttonClassName: string;
	textClassName: string;
}

const BookDemo = ({className, buttonClassName, textClassName}: BoookDemoProps) => {
	return (
		<section className={`book-demo ${className}`}>
			<div className='book-demo__wrapper'>
				<div className={`book-demo__content ${textClassName}`}>
					<h2 className='book-demo__title'>
						If you interestedin any form of collaboration, drop a line at{" "}
					</h2>
					<AppButton className={`book-demo__btn ${buttonClassName}`}>Book a Demo</AppButton>
				</div>
			</div>
		</section>
	);
};

export default BookDemo;
