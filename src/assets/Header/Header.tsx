import React, { useState } from "react";
import Lottie from "react-lottie";
import nightAnimationData from "../../../public/Lotties/NightToDayToggle.json";
import dayAnimationData from "../../../public/Lotties/DayToNightToggle.json";

function Header({ toggleDarkMode, darkMode }) {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: true,
  });

  const animationOptions = {
    loop: false,
    autoplay: animationState.isStopped,
    animationData: darkMode ? dayAnimationData : nightAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleBackgroundClick = () => {
    toggleDarkMode();
    setAnimationState({
      ...animationState,
      isStopped: false,
      isPaused: false,
    });
  };

  return (
    <div className="container text-center">
      <div className="col">
        <div
          style={{ backgroundColor: darkMode ? "black" : "white" }}
          onClick={handleBackgroundClick}
        >
          <Lottie
            options={animationOptions}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
        <div className="col mb-5">
          <img src="https://picsum.photos/200/300" alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Header;
