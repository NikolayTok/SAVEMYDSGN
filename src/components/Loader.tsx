import React from "react";

import "../styles/loader.scss";

interface LoaderProps {
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({ style }) => {
  return (
    <div style={style} className="loader">
      <div className="loader__spinner" />
    </div>
  );
};

export default Loader;
