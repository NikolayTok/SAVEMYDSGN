import React from "react";

import "../styles/back-button.scss";

const BackButton = () => {
  return (
    <button className='back-button'>
      <div className="back-button__circle">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13L1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      Back
    </button>
  );
};

export default BackButton;
