import FaqsItem from "./FaqsItem";
import { useState } from "react";

import "../styles/faqs-items.scss";

interface FaqsItemsProps {
	question: string;
	answer: string;
}

const FaqsItems: React.FC<{ items: FaqsItemsProps[] }> = ({ items }) => {
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
