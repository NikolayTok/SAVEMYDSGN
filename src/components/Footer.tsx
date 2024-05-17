import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";
import "../styles/footer.scss";

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<nav className='footer__navigation'>
					<Image
						src='/images/icons/logo-snowflake.svg'
						alt='logo snowflake'
						width={36}
						height={36}
						className='footer__logo'
					/>
					<ul className='footer__list'>
						<li className='footer__list-item'>
							<Link href='/'>Terms of Service</Link>
						</li>
						<li className='footer__list-item'>
							<Link href='/'>Privacy policy</Link>
						</li>
						<li className='footer__list-item'>
							<Link href='/'>Offer terms</Link>
						</li>
						<li className='footer__list-item'>
							<Link href='/'>Resources</Link>
						</li>
					</ul>
				</nav>
				<ul className='footer__social'>
					<li className='footer__social-item'>
						<Link href='/'>
							<Image
								src='/images/icons/twitter.svg'
								alt='logo snowflake'
								width={22}
								height={22}
								className='footer__icon'
							/>
						</Link>
					</li>
					<li className='footer__social-item'>
						<Link href='/'>
							<Image
								src='/images/icons/instagram.svg'
								alt='logo snowflake'
								width={22}
								height={22}
								className='footer__icon'
							/>
						</Link>
					</li>
					<li className='footer__social-item'>
						<Link href='/'>
							<Image
								src='/images/icons/facebook.svg'
								alt='logo snowflake'
								width={22}
								height={22}
								className='footer__icon'
							/>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
