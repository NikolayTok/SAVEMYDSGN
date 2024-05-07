import React from 'react';
import "../styles/app-button.scss";

type AppButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    style?: React.CSSProperties; 
}

const AppButton = ({ children, onClick, type = "button", className = "", style }:AppButtonProps) => {
    return (
        <button
            className={`app-button ${className}`}
            onClick={onClick}
            type={type}
            style={style}
            aria-pressed="false"
        >
            {children}
        </button>
    );
};

export default AppButton;