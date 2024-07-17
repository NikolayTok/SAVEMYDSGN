import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import AppButton from './AppButton';

import '../styles/header.scss';

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [directionUp, setDirectionUp] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > lastScrollY) {
        setDirectionUp(false)
      } else if (currentScroll < lastScrollY) {
        setDirectionUp(true)
      }
      setLastScrollY(currentScroll)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={directionUp ? 'header' : 'header header-fixed'}>
      <nav className='header__navigation'>
        <Link href="/">
          <Image
            className='header__logo logo'
            src='/images/logo/logo.svg'
            alt="Picture of the author"
            width={146}
            height={24}
          />
        </Link>
        <ul className={`header__list ${menuOpen ? 'header__list--open' : 'header__list--closed'}`}>
          <li className='header__list-item'>
            <Link href="/">Home</Link>
          </li>
          <li className='header__list-item'>
            <Link href="#about">About</Link>
          </li>
          <li className='header__list-item'>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div className={`burger-menu ${menuOpen ? 'burger-menu--open' : ''}`} onClick={toggleMenu}>
          <div className="burger-menu__bar"/>
          <div className="burger-menu__bar"/>
          <div className="burger-menu__bar"/>
        </div>
        <AppButton onClick={() => window.open('https://chatgpt.com/', '_blank')} link='https://chatgpt.com/'>Press <b>B</b> to book intro call</AppButton>
      </nav>
    </header>
  );
};

export default Header;
