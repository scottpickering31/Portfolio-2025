import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./ProjectCard.css";

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

function ProjectCard({ darkMode, projectData }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (image: string | null) => {
    if (image) {
      setModalImage(image);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage("");
  };

  return (
    <div
      className="container mb-5 text-center"
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <h1>{projectData.h1title}</h1>
      <div className="card mb-3 ">
        <div
          className="col g-0 rounded"
          style={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
          }}
        >
          <div className="row order-md-2 mx-auto">
            <div className="col-md-3">
              <img
                src={projectData.iphone}
                className="img-fluid rounded-start mockups"
                style={{ height: "400px" }}
                alt="iPhone"
                onClick={() => handleImageClick(projectData.iphone)}
              />
            </div>
            <div className="col-md-6">
              <img
                src={projectData.macbook}
                style={{ height: "400px" }}
                className="img-fluid rounded-start mockups"
                alt="MacBook"
                onClick={() => handleImageClick(projectData.macbook)}
              />
            </div>
            <div className="col-md-3">
              <img
                src={projectData.ipad}
                style={{ height: "400px" }}
                className="img-fluid rounded-start mockups"
                alt="iPad"
                onClick={() => handleImageClick(projectData.ipad)}
              />
            </div>
          </div>
          <div className="col text-center order-md-1 ">
            <div className="card-body">
              <h5 className="card-title">{projectData.name}</h5>
              <p className="card-text">{projectData.description}</p>
              <h6 className="card-title">Technologies Used</h6>
              <p className="card-text">{projectData.technologies}</p>
            </div>
            <div className="container text-center mb-5">
              <button className="btn btn-primary mx-2">
                <a
                  href={projectData.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-decoration-none"
                >
                  View Project
                </a>
              </button>
              <button className="btn btn-primary mx-2">
                <a
                  href={projectData.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-decoration-none"
                >
                  Source Code
                </a>
              </button>
              <button className="btn btn-primary mx-2">
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
      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        dialogClassName="modal-fullscreen"
      >
        <Modal.Body>
          <img
            src={modalImage}
            alt="Full Size"
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal} className="mx-auto">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectCard;
