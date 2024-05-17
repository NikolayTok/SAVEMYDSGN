import "../styles/faqs-item.scss";

interface FaqsItemProps {
	question: string;
	answer: string;
	isActive: boolean;
	onToggle: () => void;
}

const FaqsItem = ({ question, answer, isActive, onToggle }: FaqsItemProps) => {
	return (
		<div
			className={`faqs-item ${isActive ? "active" : ""}`}
			onClick={onToggle}>
			<div className='faqs-item__question-box'>
				<p className='faqs-item__question'>{question}</p>
				<span className={`faqs-item__icon ${isActive ? "active" : ""}`}>
					<span className='faqs-item__icon-plus'>+</span>
					<span className='faqs-item__icon-minus'>-</span>
				</span>
			</div>
			<div className={`faqs-item__answer ${isActive ? "open" : ""}`}>
				<p>{answer}</p>
			</div>
		</div>
	);
};

export default FaqsItem;
