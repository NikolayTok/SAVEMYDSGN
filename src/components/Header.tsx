import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import '../styles/header.scss';
import AppButton from './AppButton';

const Header = () => {
  return (
    <header className='header'>
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
        <AppButton>Press B to book intro call</AppButton>
      </nav>
    </header>
  );
};

export default Header;
