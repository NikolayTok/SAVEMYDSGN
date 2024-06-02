import PricingCards from "./PricingCards";

import "../styles/pricing.scss";

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
			backgroundColor: "#F1F1F1",
		},
		{
			title: "Retainer",
			description: "Ideal for those who need an ongoing design support.",
			cost: "$2,990",
			services: [
				"One request at a time",
				"Dedicated designer",
				"Unlimited brands / users",
				"Expert project management",
				"Custom illustrations / stock images",
				"Updates delivered every 48 hours",
			],
			backgroundColor: "#000",
		},
		{
			title: "7-days trial",
			description: "Unlimited team members",
			cost: "Custom",
			services: [
				"Fixed scope of work",
				"Daily project updates",
			],
			backgroundColor: "#fff",
		},
	];
  
	return (
		<section className='pricing'>
			<div className='container'>
				<h2 className='pricing__title title'>Choose a plan that’s right for you</h2>
				<PricingCards tariffs={tariffs} />
			</div>
		</section>
	);
};

export default Pricing;
