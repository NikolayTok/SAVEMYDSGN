import React from "react";
import Image from "next/image";

import "../styles/two-blocks.scss";

const TwoBlocks = () => {
	return (
		<section className='two-blocks'>
			<div className='two-blocks__wrapper sturzl__wrapper'>
				<div className='two-blocks__picture--left sturzl__picture'>
					<Image
						src='/images/sturzl/4.png'
						alt=''
						width={682}
						height={1394}
					/>
				</div>
				<div className='two-blocks__picture--right sturzl__picture'>
					<Image
						src='/images/sturzl/5.png'
						alt=''
						width={682}
						height={896}
					/>
				</div>
			</div>
		</section>
	);
};

export default TwoBlocks;
