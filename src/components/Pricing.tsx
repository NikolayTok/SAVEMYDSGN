import "../styles/pricing.scss";
import PricingCards from "./PricingCards";

const Pricing: React.FC = () => {
	const tariffs = [
		{
			title: "One-off",
			description:
				"Perfect for single, high-impact,conversion focused landing page.",
			cost: "$1,899",
			services: [
				"2x revisions",
				"High-converting copy",
				"Custom illustrations / graphics",
				"46 slides top-tier branding",
				"Unlimited stock images",
				"Updates delivered every 48 hours",
			],
			color: "#F1F1F1",
			textColor: "#000",
			borderColor: "#F1F1F1",
		},
		{
			title: "Retainer",
			description: "Ideal for those who need an ongoing design support.",
			cost: "$2,990",
			services: [
				"2x revisions",
				"High-converting copy",
				"Custom illustrations / graphics",
				"46 slides top-tier branding",
				"Unlimited stock images",
				"Updates delivered every 48 hours",
			],
			color: "#000",
			textColor: "#fff",
			borderColor: "#000",
			buttonColor: "#AFFF2C",
			svgColor: "black",
		},
		{
			title: "7-days trial",
			description: "Unlimited team members",
			cost: "Custom",
			services: [
				"2x revisions",
				"High-converting copy",
				"Custom illustrations / graphics",
				"46 slides top-tier branding",
				"Unlimited stock images",
				"Updates delivered every 48 hours",
			],
			color: "#fff",
			textColor: "#000",
			borderColor: "#E2E3E6",
		},
	];
  
	return (
		<section className='pricing'>
			<div className='container'>
				<h2 className='pricing__title'>Choose a plan that’s right for you</h2>
				<PricingCards tariffs={tariffs} />
			</div>
		</section>
	);
};

export default Pricing;
