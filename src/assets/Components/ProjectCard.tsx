function ProjectCard({ darkMode }) {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card mb-3">
        <div className="row g-0">
          <div
            className="col-md-4"
            style={{ backgroundColor: darkMode ? "black" : "white" }}
          >
            <img
              src="https://picsum.photos/200/300"
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
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small style={{ color: darkMode ? "white" : "gray" }}>
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
            <div className="btn-group text-center">
              <button className="btn btn-primary">View Project</button>
              <button className="btn btn-primary">Source Code</button>
              <button className="btn btn-primary">Read Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
