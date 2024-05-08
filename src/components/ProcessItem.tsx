import React from "react";

import "../styles/process-item.scss";

interface ProcessItemProps {
    image: string;
    title: string;
    text: string;
    icon: string;
}

const ProcessItem = ({ image, title, text, icon }: ProcessItemProps) => {
    return (
        <div className="process-item">
            <div className="process-item__img-box">
                <img
                    src={image}
                    alt={title}
                    className="process-item__img"
                />
            </div>
            <div className="process-item__info">
                <span>
                    <img
                        src={icon}
                        alt="icon"
                        className="process-item__icon"
                    />
                </span>
                <h3 className="process-item__title">{title}</h3>
                <p className="process-item__text">{text}</p>
            </div>
        </div>
    );
};

export default ProcessItem;
