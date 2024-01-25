function AboutMeButtons({
  viewableArea,
  setViewableArea,
}: AboutMeButtonsProps) {
  return (
    <div className="d-flex flex-column justify-content-center">
      <button
        type="button"
        className="btn btn-primary m-2 fw-bold"
        onClick={() => setViewableArea(true)}
      >
        My Tech Stack
      </button>
      <button
        type="button"
        className="btn btn-primary m-2 fw-bold"
        onClick={() => setViewableArea(true)}
      >
        My Projects
      </button>
      <button
        type="button"
        className="btn btn-primary m-2 fw-bold"
        onClick={() => setViewableArea(true)}
      >
        Contact Me
      </button>
    </div>
  );
}

export default AboutMeButtons;
