import React from "react";
import "../styles/stages-item.scss";
import Image from "next/image";

interface StagesItemProps {
  image: string;
  title: string;
  text: string;
  icon: string;
}

const StagesItem = ({ image, title, text, icon }: StagesItemProps) => {
  return (
    <div className="stages-item">
      <div className="stages-item__img-box">
        <Image
          className="stages-item__img"
          width={410}
          height={240}
          src={image}
          alt={title}
        />
      </div>
      <div className="stages-item__info">
          <Image
            className="stages-item__icon"
            width={60}
            height={60}
            src={icon}
            alt="icon"
          />
          <h3 className="stages-item__title">{title}</h3>
        </div>
        <p className="stages-item__text">{text}</p>
      </div>
  );
};

export default StagesItem;
