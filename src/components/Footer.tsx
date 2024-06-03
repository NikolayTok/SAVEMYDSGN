import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";

import "../styles/footer.scss";

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
					<Image
						src='/images/icons/logo-snowflake.svg'
						alt='logo snowflake'
						width={36}
						height={36}
						className='footer__logo'
					/>
				<nav className='footer__navigation'>
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
						<Link target="_blank" rel="noopener noreferrer" href='https://x.com/savemydsgn' passHref>
							<Image
								src='/images/icons/twitter.svg'
								alt='Twitter link'
								width={22}
								height={22}
								className='footer__icon'
							/>

						</Link>
					</li>
					<li className='footer__social-item'>
						<Link target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/savemy.dsgn/'>
							<Image
								src='/images/icons/instagram.svg'
								alt='Instagram link'
								width={22}
								height={22}
								className='footer__icon'
							/>
						</Link>
					</li>
					<li className='footer__social-item'>
						<Link target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/savemydesign/'>
							<Image
								src='/images/icons/facebook.svg'
								alt='Facebook link'
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
