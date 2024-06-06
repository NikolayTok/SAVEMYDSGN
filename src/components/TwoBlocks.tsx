import React from "react";
import Image from "next/image";

import "../styles/two-blocks.scss";

const TwoBlocks = () => {
	return (
		<section className='two-blocks'>
			<div className='project__wrapper two-blocks__wrapper'>
				<div className='project__picture two-blocks__picture--left'>
					<Image
						src='/images/sturzl/4.png'
						alt=''
						width={682}
						height={1394}
					/>
				</div>
				<div className='project__picture two-blocks__picture--right'>
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
