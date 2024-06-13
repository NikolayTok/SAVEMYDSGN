import React, { useEffect } from "react";
import "../styles/app-button.scss";

type AppButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  link?: string;
};

const AppButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  link,
}: AppButtonProps) => {

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'b' || e.key === 'B') {
        window.open(link, '_blank');
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [link]);

  return (
    <button
      className={`app-button ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default AppButton;
