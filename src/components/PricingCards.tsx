import PricingCard from "./PricingCard";

import "../styles/pricing-cards.scss";

interface PricingCardsProps {
	tariffs: {
		title: string;
		description: string;
		cost: string;
		services: string[];
		backgroundColor: string;
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
					backgroundColor={tariff.backgroundColor}
				/>
			))}
		</div>
	);
};

export default PricingCards;
