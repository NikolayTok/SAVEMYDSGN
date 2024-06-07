import React from "react";
import Image from "next/image";
import BackButton from "./BackButton";

import "../styles/sturzl.scss";

const Sturzl = () => {
	return (
		<section className='sturzl'>
			<BackButton />
			<div className='sturzl__top'>
				<h2 className='sturzl__title'>Sturzl</h2>
				<p className='sturzl__subtitle'>
					Let's collaborate to refine your designs until they mirror your unique
					vision, all backed by our guarantee.
				</p>
			</div>
			<div className='sturzl__wrapper'>
				<div className='sturzl__picture-small'>
					<Image
						src='/images/sturzl/2.png'
						alt=''
						width={444}
						height={255}
					/>
				</div>
				<div className='sturzl__picture-big'>
					<Image
						src='/images/sturzl/1.png'
						alt=''
						width={640}
						height={368}
					/>
				</div>
				<div className='sturzl__picture-small'>
					<Image
						src='/images/sturzl/3.png'
						alt=''
						width={444}
						height={255}
					/>
				</div>
			</div>
		</section>
	);
};

export default Sturzl;
