import React from "react";
import Image from "next/image";

import "../styles/bottom-block.scss";

const BottomBlock = () => {
	return (
		<section className='bottom-block'>
			<div className='bottom-block__wrapper sturzl__wrapper'>
				<div className='bottom-block__picture sturzl__picture'>
					<Image
						src='/images/sturzl/11.png'
						alt='image.11'
						width={865}
						height={560}
					/>
				</div>
			</div>
		</section>
	);
};

export default BottomBlock;
