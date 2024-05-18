import "../styles/pricingCard.scss";
import AppButton from "./AppButton";

interface PricingCardProps {
	title: string;
	description: string;
	cost: string;
	services: string[];
}

const PricingCard = ({
	title,
	description,
	cost,
	services,
}: PricingCardProps) => {
	return (
		<div className='pricing-card'>
			<div className='pricing-card__tariff'>
				<div className='pricing-card__tariff-card'>
					<h3 className='tariff-card__title'>{title}</h3>
					<p className='tariff-card__description'>{description}.</p>
					<span className='tariff-card__cost'>{cost}</span>
					<AppButton>svg</AppButton>
				</div>
				<div className='pricing-card__tariff-services'>
					<ul className='tariff-services__list'>
						{services.map((service, index) => (
							<li
								className='tariff-services__item'
								key={index}>
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
