import { useState } from "react";
import Lottie from "react-lottie";
import nightAnimationData from "../../../public/Lotties/NightToDayToggle.json";
import dayAnimationData from "../../../public/Lotties/DayToNightToggle.json";
import AboutMe from "../../../public/Images/AboutMe.jpeg";
import "./Header.css";

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
    <nav className="navbar text-center">
      <div className="navbar-icon" onClick={handleBackgroundClick}>
        <Lottie
          options={animationOptions}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </div>
      <div
        className="col mb-5 mt-5"
        style={{ color: darkMode ? "white" : "black" }}
      >
        <img src={AboutMe} alt="Profile" className="rounded-circle" />
      </div>
    </nav>
  );
}

export default Header;
