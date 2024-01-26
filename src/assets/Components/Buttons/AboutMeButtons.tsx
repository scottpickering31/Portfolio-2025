import { useState, useEffect } from "react";

function AboutMeButtons({ setViewableArea }: AboutMeButtonsProps) {
  const [buttonIndex, setButtonIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonIndex((prevIndex) => {
        if (prevIndex < 2) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderButtons = () => {
    const buttons = ["My Projects", "Contact Me", "My Tech Stack"];

    return buttons.map((button, index) => (
      <button
        key={index}
        type="button"
        className={`btn btn-primary m-2 fs-5 fw-bold ${buttonIndex >= index ? "visible" : "hidden"}`}
        onClick={() => setViewableArea(true)}
      >
        {button}
      </button>
    ));
  };

  return (
    <div
      className={`container d-flex flex-column justify-content-center`}
      style={{ width: "70%" }}
    >
      {renderButtons()}
    </div>
  );
}

export default AboutMeButtons;
