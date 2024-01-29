import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./ProjectCard.scss";
import "../Buttons/AboutMeButtons.scss";

interface ProjectCardProps {
  darkMode: boolean;
  projectData: {
    h1title: string | null;
    description: string;
    technologyImages: (string | React.ReactNode)[];
    technologyToolTips: string[];
    githubLink: string;
    liveLink: string;
    readme: string;
    iphone: string | React.ReactNode;
    ipad: string | React.ReactNode;
    macbook: string | React.ReactNode;
    name: string;
    id: number;
  };
}

function ProjectDescription({ projectData, darkMode }: ProjectCardProps) {
  return (
    <div
      className="container row text-center order-md-1 p-1"
      style={{ color: darkMode ? "white" : "black" }}
    >
      <div className="card-body">
        <h2 className="card-title">{projectData.name}</h2>
        <p className="card-text">{projectData.description}</p>
      </div>
      <div className="col card-body d-flex align-items-center flex-column">
        <h5 className="card-title">Technologies Used</h5>
        <div className="d-flex flex-row text-wrap justify-content-center">
          {projectData.technologyImages.map((technology, index) => (
            <OverlayTrigger
              key={index}
              placement="top"
              overlay={
                <Tooltip>{projectData.technologyToolTips[index]}</Tooltip>
              }
            >
              <div
                className="m-2 techIcons"
                title={projectData.technologyToolTips[index]}
              >
                {technology}
              </div>
            </OverlayTrigger>
          ))}
        </div>
      </div>
      <div className="col text-center d-flex flex-column justify-content-center">
        <button className="mb-3 aboutMeBtn">
          <a
            href={projectData.liveLink}
            target="_blank"
            rel="noreferrer"
            className="text-white text-decoration-none fs-6 fw-bold d-block"
          >
            VIEW PROJECT
          </a>
        </button>
        <button className="mb-3 aboutMeBtn">
          <a
            href={projectData.githubLink}
            target="_blank"
            rel="noreferrer"
            className="text-white text-decoration-none fs-6 fw-bold d-block"
          >
            SOURCE CODE
          </a>
        </button>
        <button className="mb-3 aboutMeBtn">
          <a
            href={projectData.readme}
            target="_blank"
            rel="noreferrer"
            className="text-white text-decoration-none fs-6 fw-bold d-block"
          >
            READ ME
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProjectDescription;
