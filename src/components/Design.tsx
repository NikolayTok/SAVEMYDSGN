import DesignItems from "./DesignItems";
import AppButton from "./AppButton";

import "../styles/design.scss";

const Design = () => {
	const designItems = [
		{
			image: '/images/background.jpg',
			icon: '/images/vector.svg',
			caption: 'Landing page'
		},
		{
			image: '/images/background.jpg',
			icon: '/images/bell.svg',
			caption: 'Multipages'
		},
		{
			image: '/images/background.jpg',
			icon: '/images/bomb.svg',
			caption: 'Mobile App'
		},
		{
			image: '/images/background.jpg',
			icon: '/images/shopping.svg',
			caption: 'Pitch Deck'
		},
		{
			image: '/images/background.jpg',
			icon: '/images/account.svg',
			caption: 'Online Stores'
		},
		{
			image: '/images/background.jpg',
			icon: '/images/camera-enhance.svg',
			caption: 'Web3 / Crypto'
		},
	]

	return (
		<section className="design">
			<div className="container">
				<div className="design__box">
					<div className="design__info">
						<h2 className="design__title">
							We do everything on web & mobile design
						</h2>
						<p className="design__text">
							From wireframes to final designs, we craft web and
							mobile experiences that captivate and convert. Your
							vision, amplified by our expertise, ready to make a
							lasting impact.
						</p>
						<AppButton>
							Discuss the project
							<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 22.25C17.5228 22.25 22 17.7728 22 12.25C22 6.72715 17.5228 2.25 12 2.25C6.47715 2.25 2 6.72715 2 12.25C2 17.7728 6.47715 22.25 12 22.25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M12 16.25L16 12.25L12 8.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M8 12.25H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</AppButton>
					</div>
					<DesignItems items={designItems} />
				</div>
			</div>
		</section>
	);
};

export default Design;
