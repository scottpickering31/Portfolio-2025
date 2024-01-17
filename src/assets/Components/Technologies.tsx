import {
  DarkModeCurrentIcons,
  LightModeCurrentIcons,
} from "../Data/DarkModeIconData.tsx";

interface TechnologiesProps {
  darkMode: boolean;
}

function Technologies({ darkMode }: TechnologiesProps) {
  const CurrentIcons = darkMode ? DarkModeCurrentIcons : LightModeCurrentIcons;

  const currentTechnologies = Object.keys(CurrentIcons).map((key) => {
    const icon = CurrentIcons[key];
    return (
      <div className="col" key={key}>
        {icon.icon}
      </div>
    );
  });

  return (
    <div className="container text-center">
      <h1 style={{ color: darkMode ? "white" : "black" }}>My Tech Stack</h1>
      <div className="row row-cols-4 text-white">{currentTechnologies}</div>
    </div>
  );
}

export default Technologies;
