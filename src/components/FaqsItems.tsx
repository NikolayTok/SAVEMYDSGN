import "../styles/faqs-items.scss";
import FaqsItem from "./FaqsItem";
import { useState } from "react";

interface FaqsItemsprops {
	question: string;
	answer: string;
}

const FaqsItems: React.FC<{ items: FaqsItemsprops[] }> = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className='faqs-items'>
			{items.map((item, index) => (
				<FaqsItem
					key={index}
					question={item.question}
					answer={item.answer}
					isActive={activeIndex === index}
					onToggle={() => handleToggle(index)}
				/>
			))}
		</div>
	);
};

export default FaqsItems;