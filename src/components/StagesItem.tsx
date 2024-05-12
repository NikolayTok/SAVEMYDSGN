import React from "react";

import "../styles/stages-item.scss";

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
                <img
                    src={image}
                    alt={title}
                    className="stages-item__img"
                />
            </div>
            <div className="stages-item__info">
                <span>
                    <img
                        src={icon}
                        alt="icon"
                        className="stages-item__icon"
                    />
                </span>
                <h3 className="stages-item__title">{title}</h3>
                <p className="stages-item__text">{text}</p>
            </div>
        </div>
    );
};

export default StagesItem;
