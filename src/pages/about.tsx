import React from 'react';
import Sturzl from '@/components/Sturzl';
import Project from '@/components/Project';
import TwoBlocks from '@/components/TwoBlocks';
import SturzlSlider from '@/components/SturzlSlider';
import TwoSquares from '@/components/TwoSquares';
import BottomBlock from '@/components/BottomBlock';
import BookDemo from '@/components/BookDemo';

import '../styles/home.scss';

const About = () => {
  return (
    <section className='hero'>
      <h1 className='hero__title'>About</h1>
      <span className='hero__sub-title'>Your monthly pass to design joy</span>
      <Sturzl/>
      <Project/>
      <TwoBlocks/>
      <SturzlSlider/>
      <TwoSquares/>
      <BottomBlock/>
      <BookDemo/>
    </section>
  );
};

export default About;
