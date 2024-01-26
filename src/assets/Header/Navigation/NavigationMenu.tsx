import Lottie from "react-lottie";
import { useState } from "react";
import nightAnimationData from "../../../../public/Lotties/NightToDayToggle.json";
import dayAnimationData from "../../../../public/Lotties/DayToNightToggle.json";
import "./NavigationMenu.scss";

function NavigationMenu({ toggleDarkMode, darkMode }) {
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
    <div className="fixed-top mb-5">
      <div onClick={handleBackgroundClick} className="lottieIcon">
        <Lottie
          options={animationOptions}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </div>
    </div>
  );
}

export default NavigationMenu;
