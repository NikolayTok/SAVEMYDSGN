import React from 'react';
import '../styles/home.scss';

import Gallery from '@/components/Gallery';

const Home = () => {
  return (
    <section className='hero'>
      <h1 className='hero__title'>Subscribing to your creative journey</h1>
      <span className='hero__sub-title'>Your monthly pass to design joy</span>
      <Gallery />
    </section>
  );
};

export default Home;
