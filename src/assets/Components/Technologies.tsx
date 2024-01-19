import {
  DarkModeCurrentIcons,
  LightModeCurrentIcons,
} from "../Data/DarkModeIconData.tsx";
// import Lottie from "react-lottie";
// import { useState } from "react";
// import SpaceMan from "../../../public/Lotties/SpaceManScreens.json";

interface TechnologiesProps {
  darkMode: boolean;
}

function Technologies({ darkMode }: TechnologiesProps) {
  // const [animationState, setAnimationState] = useState({
  //   isStopped: true,
  //   isPaused: true,
  // });

  const CurrentIcons = darkMode ? DarkModeCurrentIcons : LightModeCurrentIcons;

  const currentTechnologies = Object.keys(CurrentIcons).map((key) => {
    const icon = CurrentIcons[key];
    return (
      <div className="col" key={key}>
        {icon.icon}
      </div>
    );
  });

  // const animationOptionsSpaceMan = {
  //   loop: true,
  //   autoplay: animationState.isStopped,
  //   animationData: darkMode ? SpaceMan : SpaceMan,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <div className="container text-center">
      <h1 className="mb-5" style={{ color: darkMode ? "white" : "black" }}>
        My Tech Stack
      </h1>
      <div className="row row-cols-4 text-white mb-5">
        {currentTechnologies}
      </div>
      {/* <div>
        <Lottie options={animationOptionsSpaceMan} />
      </div> */}
    </div>
  );
}

export default Technologies;
