import "../styles/pricingCard.scss";
import AppButton from "./AppButton";
import ColoredSvg from "./SvgColored";

interface PricingCardProps {
	title: string;
	description: string;
	cost: string;
	services: string[];
  color: string;
  textColor: string;
  borderColor: string;
  buttonColor?: string;
  svgColor?: string;
}

const PricingCard = ({
	title,
	description,
	cost,
	services,
  color,
  textColor,
  borderColor,
  buttonColor,
  svgColor
}: PricingCardProps) => {

	return (
		<div className='pricing-card'>
			<div className='pricing-card__tariff'>
				<div className='pricing-card__tariff-card' style={{ backgroundColor: color, color: textColor, borderColor: borderColor }}>
					<div className='tariff-card__box-top'>
						<h3 className='tariff-card__title'>{title}</h3>
						<p className='tariff-card__description'>{description}</p>
					</div>
					<div className='tariff-card__box-bottom'>
						<span className='tariff-card__cost'>{cost}</span>
						<AppButton buttonColor={buttonColor} svgColor={svgColor}>
							<ColoredSvg />
						</AppButton>
					</div>
				</div>
				<div className='pricing-card__tariff-services'>
					<ul className='tariff-services__list'>
						{services.map((service, index) => (
							<li
								className='tariff-services__item'
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
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
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
};

export default PricingCard;
