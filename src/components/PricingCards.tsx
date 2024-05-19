import "../styles/pricingCards.scss";
import PricingCard from "./PricingCard";

interface PricingCardsProps {
	tariffs: {
		title: string;
		description: string;
		cost: string;
		services: string[];
		color: string;
		textColor: string;
    borderColor: string;
		buttonColor?: string;
    svgColor?: string;
	}[];
}

const PricingCards: React.FC<PricingCardsProps> = ({ tariffs }) => {
	return (
		<div className='pricing-cards'>
			{tariffs.map((tariff, index) => (
				<PricingCard
					key={index}
					title={tariff.title}
					description={tariff.description}
					cost={tariff.cost}
					services={tariff.services}
					color={tariff.color}
					textColor={tariff.textColor}
					buttonColor={tariff.buttonColor}
					borderColor={tariff.borderColor}
					svgColor={tariff.svgColor}
				/>
			))}
		</div>
	);
};

export default PricingCards;
