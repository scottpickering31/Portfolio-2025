function AboutMeButtons({
  setViewableArea,
}: {
  setViewableArea: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const renderButtons = () => {
    const buttons = ["My Projects", "Contact Me", "My Tech Stack"];

    return buttons.map((button, index) => (
      <button
        key={index}
        type="button"
        className={`btn btn-primary m-2 fs-6 fw-bold`}
        onClick={() => setViewableArea(true)}
      >
        {button}
      </button>
    ));
  };

  return (
    <div
      className={`container d-flex flex-column justify-content-center`}
      style={{ width: "70%" }}
    >
      {renderButtons()}
    </div>
  );
}

export default AboutMeButtons;
