import Lottie from "react-lottie";
import { useState } from "react";
import nightAnimationData from "../../../../public/Lotties/NightToDayToggle.json";
import dayAnimationData from "../../../../public/Lotties/DayToNightToggle.json";
import "./NavigationMenu.css";

function NavigationMenu({ toggleDarkMode, darkMode }) {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: true,
  });
  const [toggleHamburger, setToggleHamburger] = useState(false);

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
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <div style={{ height: "15%", width: "15%" }}>
          <div style={{ height: "75px" }} onClick={handleBackgroundClick}>
            <Lottie
              options={animationOptions}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;
