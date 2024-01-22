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
  const [isOpen, setIsOpen] = useState(false);

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

  const handleNavIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <div
          onClick={handleBackgroundClick}
          style={{ height: "15%", width: "15%" }}
        >
          <div style={{ height: "75px" }}>
            <Lottie
              options={animationOptions}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
          </div>
        </div>
        <div
          className={`nav-item ${isOpen ? "open" : ""}`}
          id="nav-icon1"
          onClick={handleNavIconClick}
        >
          <div className="nav-icon1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;
