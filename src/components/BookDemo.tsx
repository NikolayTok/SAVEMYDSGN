import AppButton from "./AppButton";
import "../styles/book-demo.scss";

const BookDemo = () => {
	return (
		<section className='book-demo'>
			<div className='book-demo__wrapper'>
				<div className='book-demo__content'>
					<h2 className='book-demo__title'>
						If you interestedin any form of collaboration, drop a line at{" "}
					</h2>
					<AppButton className='book-demo__btn'>Book a Demo</AppButton>
				</div>
			</div>
		</section>
	);
};

export default BookDemo;
