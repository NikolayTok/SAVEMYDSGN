import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import AppButton from './AppButton';

import '../styles/header.scss';

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [directionUp, setDirectionUp] = useState(true)

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

  console.log(directionUp)

  return (
    <header className={directionUp ? 'header' : ' header header-fixed'}>
      <nav className='header__navigation'>
        <Image
          src='/images/logo/logo.svg'
          alt="Picture of the author"
          width={146}
          height={24}
          className='header__logo logo'
        />
        <ul className='header__list'>
          <li className='header__list-item'>
            <Link href="/">Home</Link>
          </li>
          <li className='header__list-item'>
            <Link href="/about">About</Link>
          </li>
          <li className='header__list-item'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <AppButton>Press <b>B</b> to book intro call</AppButton>
      </nav>
    </header>
  );
};

export default Header;
