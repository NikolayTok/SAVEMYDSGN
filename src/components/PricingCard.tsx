import AppButton from "./AppButton";

import "../styles/pricing-card.scss";

interface PricingCardProps {
	title: string;
	description: string;
	cost: string;
	services: string[];
	backgroundColor: string;
}

const PricingCard = ({
	title,
	description,
	cost,
	services,
	backgroundColor,
}: PricingCardProps) => {

	return (
		<div className='pricing-card'>
			<div className='pricing-card__tariff'>
				<div className='pricing-card__tariff-card' style={{ backgroundColor: backgroundColor }}>
					<div className='pricing-card__tariff-box-top'>
						<h3 className='pricing-card__tariff-title'>{title}</h3>
						<p className='pricing-card__tariff-description'>{description}</p>
					</div>
					<div className='pricing-card__tariff-box-bottom'>
						<span className='pricing-card__tariff-cost'>{cost}</span>
						<AppButton>
							<svg
								width='12'
								height='13'
								viewBox='0 0 12 13'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M0.133331 5.76656V7.23323H8.93333L4.9 11.2666L5.94133 12.3079L11.7493 6.49989L5.94133 0.691895L4.9 1.73323L8.93333 5.76656H0.133331Z'
									fill={"#fff"}
								/>
							</svg>
						</AppButton>
					</div>
				</div>
				<div className='pricing-card__tariff-services'>
					<ul className='pricing-card__services-list'>
						{services.map((service, index) => (
							<li
								className='pricing-card__service-item'
								key={index}>
								<svg
									width='18'
									height='14'
									viewBox='0 0 18 14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M17 1.5L6 12.5L1 7.5'
										stroke='black'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
								{service}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default PricingCard;
