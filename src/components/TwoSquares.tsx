import React from "react";
import Image from "next/image";

import "../styles/two-squares.scss";

const TwoSquares = () => {
	return (
		<section className='two-squares'>
			<div className='two-squares__wrapper sturzl__wrapper'>
				<div className='two-squares__picture sturzl__picture'>
					<Image
						src='/images/sturzl/9.png'
						alt=''
						width={512}
						height={547}
					/>
				</div>
			</div>
			<div className='two-squares__picture sturzl__picture'>
				<Image
					src='/images/sturzl/10.png'
					alt=''
					width={688}
					height={688}
				/>
			</div>
		</section>
	);
};

export default TwoSquares;
