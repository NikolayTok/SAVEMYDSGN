import React from "react";
import Image from "next/image";

import "../styles/project.scss";

const Project = () => {
  return (
    <section className="project">
      <div className="project__top-wrapper">
        <div className="project__top">
          <h2 className="project__title">
            Gemeinsam gestalten wir die Städte von Morgen:
          </h2>
          <p className="project__subtitle">Brandschutzplanung mit Weitblick: Gemeinsam entwickeln wir maßgeschneiderte & einzigartige Lösungen, die sowohl aktuelle Bedürfnisse erfüllen als auch zukünftigen Anforderungen gewachsen sind.</p>
        </div>
      </div>
      <div className="project__wrapper sturzl__wrapper">
        <div className="project__picture sturzl__picture">
          <Image
            src='/images/sturzl/1.png'
            alt='image.1'
            width={1000}
            height={575}
          />
        </div>
      </div>
    </section>
  )
}

export default Project
