import {
  DarkModeCurrentIcons,
  LightModeCurrentIcons,
} from "../../Data/DarkModeIconData.tsx";
import "./Technologies.css";

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useEffect } from "react";

interface TechnologiesProps {
  darkMode: boolean;
}

function Technologies({ darkMode }: TechnologiesProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const CurrentIcons = darkMode ? DarkModeCurrentIcons : LightModeCurrentIcons;

  const currentTechnologies = Object.keys(CurrentIcons).map((key) => {
    const icon = CurrentIcons[key];
    return (
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>{icon.tooltip}</Tooltip>}
      >
        <div className="col rounded techIcons mb-5" key={key}>
          {icon.icon}
        </div>
      </OverlayTrigger>
    );
  });

  return (
    <div className="container text-center">
      <h1 className="mb-5 fs-1" style={{ color: darkMode ? "white" : "black" }}>
        My Tech Stack
      </h1>
      <div className="row row-cols-4 text-white m-3 fs-1">
        {currentTechnologies}
      </div>
    </div>
  );
}

export default Technologies;
