import React from "react";
import Image from "next/image";
import BackButton from "./BackButton";

import "../styles/sturzl.scss";

const Sturzl = () => {
  return (
    <section className='sturzl'>
      <div className='sturzl__pictures-wrapper'>
        <BackButton />
        <div className="sturzl__picture-box">
          <Image
            src='/images/sturzl/sturzl-img-top.jpg'
            alt='sturzl-img-1'
            width={1392}
            height={640}
          />
        </div>
        <div className="sturzl__content">
          <div className="sturzl__content-box">
            <h2 className="sturzl__content-title">
              Gemeinsam gestalten wir die Städte von Morgen:
            </h2>
            <p className="sturzl__content-subtitle">Brandschutzplanung mit Weitblick: Gemeinsam entwickeln wir maßgeschneiderte & einzigartige Lösungen, die sowohl aktuelle Bedürfnisse erfüllen als auch zukünftigen Anforderungen gewachsen sind.</p>
          </div>
        </div>
        <div className="sturzl__picture-box">
          <Image
            src='/images/sturzl/sturzl-img-project.jpg'
            alt='sturzl-img-1'
            width={1392}
            height={255}
          />
        </div>
        <div className="sturzl__picture-box">
          <Image
            src='/images/sturzl/sturzl-img-two-blocks.jpg'
            alt='sturzl-img-1'
            width={1392}
            height={255}
          />
        </div>
        <div className="sturzl__picture-box">
          <Image
            src='/images/sturzl/sturzl-img-slider.jpg'
            alt='sturzl-img-1'
            width={1392}
            height={255}
          />
        </div>
        <div className="sturzl__two-squares">
          <div className="sturzl__picture-box">
            <Image
              src='/images/sturzl/sturzl-img-square-background.jpg'
              alt='sturzl-img-1'
              width={1392}
              height={255}
            />
          </div>
          <div className="sturzl__picture-box">
            <Image
              src='/images/sturzl/sturzl-img-square.jpg'
              alt='sturzl-img-1'
              width={1392}
              height={255}
            />
          </div>
        </div>
        <div className="sturzl__picture-box">
          <Image
            src='/images/sturzl/sturzl-img-bottom.jpg'
            alt='sturzl-img-1'
            width={1392}
            height={255}
          />
        </div>
      </div>
    </section>
  );
};

export default Sturzl;
