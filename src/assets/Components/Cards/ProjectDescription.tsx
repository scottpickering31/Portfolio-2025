import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface ProjectCardProps {
  darkMode: boolean;
  projectData: {
    h1title: string | null;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
    readme: string;
    iphone: string | null;
    ipad: string | null;
    macbook: string | null;
    name: string;
    id: number;
  };
}

function ProjectDescription({ projectData }: ProjectCardProps) {
  return (
    <div className="container row text-center order-md-1 p-1">
      <div className="card-body">
        <h5 className="card-title">{projectData.name}</h5>
        <p className="card-text">{projectData.description}</p>
      </div>
      <div className="col card-body d-flex align-items-center flex-column">
        <h5 className="card-title">Technologies Used</h5>
        <div
          className="d-flex flex-row text-wrap justify-content-center"
          style={{ fontSize: "3rem", width: "100%" }}
        >
          {projectData.technologyImages.map((technology, index) => (
            <OverlayTrigger
              key={index}
              placement="top"
              overlay={
                <Tooltip>{projectData.technologyToolTips[index]}</Tooltip>
              }
            >
              <div
                className="m-2 "
                title={projectData.technologyToolTips[index]}
              >
                {technology}
              </div>
            </OverlayTrigger>
          ))}
        </div>
      </div>
      <div className="col text-center d-flex flex-column justify-content-center">
        <button className="btn btn-primary mb-3">
          <a
            href={projectData.liveLink}
            target="_blank"
            rel="noreferrer"
            className="text-white text-decoration-none"
          >
            View Project
          </a>
        </button>
        <button className="btn btn-primary mb-3">
          <a
            href={projectData.githubLink}
            target="_blank"
            rel="noreferrer"
            className="text-white text-decoration-none"
          >
            Source Code
          </a>
        </button>
        <button className="btn btn-primary mb-3">
          <a
            href={projectData.readme}
            target="_blank"
            rel="noreferrer"
            className="text-white text-decoration-none"
          >
            Read Me
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProjectDescription;
