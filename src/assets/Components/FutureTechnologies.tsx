import { LightModeFutureIcons } from "../Data/LightModeIconData.tsx";
import { DarkModeFutureIcons } from "../Data/DarkModeIconData.tsx";

interface TechnologiesProps {
  darkMode: boolean;
}

function Technologies({ darkMode }: TechnologiesProps) {
  const FutureIcons = darkMode ? DarkModeFutureIcons : LightModeFutureIcons;

  const currentTechnologies = Object.keys(FutureIcons).map((key) => {
    const icon = FutureIcons[key];
    return (
      <div className="col" key={key}>
        {icon.icon}
      </div>
    );
  });

  return (
    <div className="container text-center">
      <h1 style={{ color: darkMode ? "white" : "black" }}>
        Technologies I am learning in 2024
      </h1>
      <div className="row row-cols-4">{currentTechnologies}</div>
    </div>
  );
}

export default Technologies;
