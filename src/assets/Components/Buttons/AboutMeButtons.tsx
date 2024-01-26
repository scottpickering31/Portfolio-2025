function AboutMeButtons({
  viewableArea,
  setViewableArea,
}: AboutMeButtonsProps) {
  return (
    <div
      className="container d-flex flex-column justify-content-center"
      style={{ width: "70%" }}
    >
      <button
        type="button"
        className="btn btn-primary m-2 fs-5 fs-sm-2 fw-bold"
        onClick={() => setViewableArea(true)}
      >
        My Projects
      </button>
      <button
        type="button"
        className="btn btn-primary fs-5 fs-sm-2 m-2 fw-bold"
        onClick={() => setViewableArea(true)}
      >
        Contact Me
      </button>
      <button
        type="button"
        className="btn btn-primary fs-5 m-2 fw-bold"
        onClick={() => setViewableArea(true)}
      >
        My Tech Stack
      </button>
    </div>
  );
}

export default AboutMeButtons;
