import Lottie from "react-lottie";

interface ProjectCardProps {
  darkMode: boolean;
  projectData: {
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
    readme: string;
    image: string;
    name: string;
    id: number;
  };
  animationOptions: {
    darkModeAnimation: any;
    lightModeAnimation: any;
  };
}

function ProjectCard({
  darkMode,
  projectData,
  animationOptions,
}: ProjectCardProps) {
  return (
    <div className="container d-flex justify-content-center align-items-center mb-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div
            className="col-md-4"
            style={{ backgroundColor: darkMode ? "black" : "white" }}
          >
            <img
              src={projectData.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div
            className="col-md-8"
            style={{
              backgroundColor: darkMode ? "black" : "white",
              color: darkMode ? "white" : "black",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">{projectData.name}</h5>
              <p className="card-text">{projectData.description}</p>
              <h6 className="card-title">Technologies Used</h6>
              <p className="card-text">{projectData.technologies}</p>
            </div>
            <div className="btn-group text-center">
              <button className="btn btn-primary">
                <a
                  href={projectData.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-decoration-none"
                >
                  View Project
                </a>
              </button>
              <button className="btn btn-primary">
                <a
                  href={projectData.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-decoration-none"
                >
                  Source Code
                </a>
              </button>
              <button className="btn btn-primary">
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
        </div>
      </div>
      <Lottie options={animationOptions} className="lottie-animation" />
    </div>
  );
}

export default ProjectCard;
