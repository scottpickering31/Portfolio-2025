import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ProjectDescription from "./ProjectDescription";
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
  const carouselId = `carousel-${projectData.id}`;

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
      className="mb-5 text-center"
      style={{
        backgroundColor: darkMode ? "black" : "#f5f5f5",
        color: darkMode ? "white" : "black",
      }}
    >
      <h1 className="mb-5">{projectData.h1title}</h1>
      <div className="card mb-3 border-4">
        <div
          className="g-0 rounded"
          style={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
          }}
        >
          <div className="row mx-auto">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div
                id={carouselId}
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner mockups ">
                  <div className="carousel-item active">
                    <img
                      src={projectData.iphone}
                      className="d-block iphoneMockup"
                      alt="Iphone"
                      onClick={() => handleImageClick(projectData.iphone)}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={projectData.ipad}
                      className="d-block ipadMockup"
                      alt="Ipad"
                      onClick={() => handleImageClick(projectData.ipad)}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={projectData.macbook}
                      className="d-block macbookMockup"
                      alt="Macbook"
                      onClick={() => handleImageClick(projectData.macbook)}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <ProjectDescription projectData={projectData} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        dialogClassName="modal-fullscreen d-flex align-items-center justify-content-center"
      >
        <Modal.Body>
          <img
            src={modalImage}
            alt="Full Size"
            style={{
              objectFit: "contain",
              maxHeight: "80vh",
              maxWidth: "200%",
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
