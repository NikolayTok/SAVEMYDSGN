import "../styles/pricing-cards.scss";
import PricingCard from "./PricingCard";

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
					]as[dfsadf]
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
