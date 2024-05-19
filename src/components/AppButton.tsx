import React, { createContext, useContext } from "react";
import "../styles/app-button.scss";

type AppButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	className?: string;
	buttonColor?: string;
	svgColor?: string;
};

const SvgColorContext = createContext<string | undefined>(undefined);

const AppButton = ({
	children,
	buttonColor,
	svgColor,
	onClick,
	type = "button",
	className = "",
}: AppButtonProps) => {
	return (
		<button
			className={`app-button ${className}`}
			onClick={onClick}
			type={type}
			aria-pressed='false'
			style={{ backgroundColor: buttonColor }}>
			<SvgColorContext.Provider value={svgColor}>
				{children}
			</SvgColorContext.Provider>
		</button>
	);
};

export default AppButton;

export const useSvgColor = () => {
	return useContext(SvgColorContext);
};
