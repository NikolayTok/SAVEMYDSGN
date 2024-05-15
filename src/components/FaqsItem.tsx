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
        <span>{isActive ? "-" : "+"}</span>
      </div>
      <div className={`faqs-item__answer ${isActive ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqsItem;