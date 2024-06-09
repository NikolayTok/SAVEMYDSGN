import React from "react";
import Image from "next/image";

import "../styles/sturzl-slider.scss";

const SturzlSlider = () => {
  return (
    <section className='sturzl-slider'>
      <div className='sturzl-slider__wrapper sturzl__wrapper'>
        <div className='sturzl-slider__picture--small sturzl__picture'>
          <Image
            src='/images/sturzl/6.png'
            alt=''
            width={537}
            height={368}
          />
        </div>
        <div className='sturzl-slider__picture--big sturzl__picture'>
          <Image
            src='/images/sturzl/7.png'
            alt=''
            width={636}
            height={437}
          />
        </div>
        <div className='sturzl-slider__picture--small sturzl__picture'>
          <Image
            src='/images/sturzl/8.png'
            alt=''
            width={537}
            height={368}
          />
        </div>
      </div>
    </section>
  );
};

export default SturzlSlider;
