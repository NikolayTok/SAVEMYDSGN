import React from 'react';
import '../styles/home.scss';

import Gallery from '@/components/Gallery';
import Process from '@/components/Process';

const Home = () => {
  return (
    <section className='hero'>
      <h1 className='hero__title'>Subscribing to your creative journey</h1>
      <span className='hero__sub-title'>Your monthly pass to design joy</span>
      <Gallery />
      <Process />
    </section>
  );
};

export default Home;
