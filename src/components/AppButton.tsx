import React from 'react';
import "../styles/app-button.scss";

type AppButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}

const AppButton = ({ children, onClick, type = "button", className = "", }:AppButtonProps) => {
    return (
        <button
            className={`app-button ${className}`}
            onClick={onClick}
            type={type}
            aria-pressed="false"
        >
            {children}
        </button>
    );
};

export default AppButton;