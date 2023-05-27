import React, { useState, useEffect } from "react";

function GrayScaleButton(props) {
  const [isGrayScale, setIsGrayScale] = useState(false);

  const toggleGrayScale = () => {
    setIsGrayScale(!isGrayScale);
  };

  useEffect(() => {
    const body = document.body;
    if (isGrayScale) {
      body.style.filter = "grayscale(100%)";
    } else {
      body.style.filter = "none";
    }
    return () => {
      body.style.filter = "none";
    };
  }, [isGrayScale]);

  return (
    <button className={props.className} onClick={toggleGrayScale}>
      {props.children}
    </button>
  );
}

export default GrayScaleButton;
