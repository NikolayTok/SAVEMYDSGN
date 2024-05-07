import React, { FC, ButtonHTMLAttributes } from "react";
import "../styles/customButton.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    customProp?: string;
    width?: string;
    height?: string;
    color?: string;
    buttonText: string;
}

const CustomButton: FC<ButtonProps> = ({ children, className, customProp, width, height, color, buttonText, ...props }) => {
    return (
        <button
            className={`custom-button ${className}`}
            style={{ width, height, backgroundColor: color }} {...props}>
            {buttonText}
        </button>
    )
}

export default CustomButton