import AppButton from "./AppButton";
import FaqsItems from "./FaqsItems";

import "../styles/faqs.scss";

const Faqs = () => {
	const faqsItems = [
		{
			question: "Is it really unlimited requests?",
			answer:
				'The concept of "unlimited requests" typically refers to the ability to make an unrestricted number of requests to a service or API. However, in practice, there are usually some limitations or constraints to consider, even if the service is marketed as "unlimited." These can include',
		},
		{
			question: "Do we have regular meetings?",
			answer:
				'The concept of "unlimited requests" typically refers to the ability to make an unrestricted number of requests to a service or API. However, in practice, there are usually some limitations or constraints to consider, even if the service is marketed as "unlimited." These can include',
		},
		{
			question: "How fast will I receive my designs?",
			answer:
				'The concept of "unlimited requests" typically refers to the ability to make an unrestricted number of requests to a service or API. However, in practice, there are usually some limitations or constraints to consider, even if the service is marketed as "unlimited." These can include',
		},
		{
			question: "Why not hire a full-time designer?",
			answer:
				'The concept of "unlimited requests" typically refers to the ability to make an unrestricted number of requests to a service or API. However, in practice, there are usually some limitations or constraints to consider, even if the service is marketed as "unlimited." These can include',
		},
		{
			question: "Is this a full-time collaboration?",
			answer:
				'The concept of "unlimited requests" typically refers to the ability to make an unrestricted number of requests to a service or API. However, in practice, there are usually some limitations or constraints to consider, even if the service is marketed as "unlimited." These can include',
		},
		{
			question: "What if I dont like the design?",
			answer:
				'The concept of "unlimited requests" typically refers to the ability to make an unrestricted number of requests to a service or API. However, in practice, there are usually some limitations or constraints to consider, even if the service is marketed as "unlimited." These can include',
		},
	];

	return (
		<section className='faqs'>
			<div className='container'>
				<div className='faqs__wrapper'>
					<div className='faqs__content'>
						<h2 className='faqs__title'>FAQs</h2>
						<p className='faqs__text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique.
						</p>
						<AppButton>Book a FREE strategy call</AppButton>
					</div>
					<FaqsItems items={faqsItems} />
				</div>
			</div>
		</section>
	);
};

export default Faqs;
