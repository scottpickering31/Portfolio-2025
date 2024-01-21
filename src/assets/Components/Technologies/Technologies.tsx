import {
  DarkModeCurrentIcons,
  LightModeCurrentIcons,
} from "../../Data/DarkModeIconData.tsx";
import "./Technologies.css";

interface TechnologiesProps {
  darkMode: boolean;
}

function Technologies({ darkMode }: TechnologiesProps) {
  const CurrentIcons = darkMode ? DarkModeCurrentIcons : LightModeCurrentIcons;

  const currentTechnologies = Object.keys(CurrentIcons).map((key) => {
    const icon = CurrentIcons[key];
    return (
      <div className="col border rounded" key={key}>
        {icon.icon}
      </div>
    );
  });

  return (
    <div className="container text-center ">
      <h1 className="mb-5 " style={{ color: darkMode ? "white" : "black" }}>
        My Tech Stack
      </h1>
      <div
        className="row row-cols-4 text-white mb-5 icons"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables."
      >
        {currentTechnologies}
      </div>
    </div>
  );
}

export default Technologies;
