import { Link, animateScroll as scroll } from "react-scroll";
import "./AboutMeButtons.scss";

function AboutMeButtons() {
  return (
    <div className={`container d-flex flex-column justify-content-center`}>
      <Link activeClass="active" to="techstack" spy={false}>
        <button
          type="button"
          className={`btn btn-primary m-2 fs-6 fw-bold`}
          style={{ width: "70%" }}
        >
          My Tech Stack
        </button>
      </Link>
      <Link activeClass="active" to="projects" spy={false}>
        <button
          type="button"
          className={`btn btn-primary m-2 fs-6 fw-bold`}
          style={{ width: "70%" }}
        >
          My Projects
        </button>
      </Link>
      <Link activeClass="active" to="contact" spy={false}>
        <button
          type="button"
          className={`btn btn-primary m-2 fs-6 fw-bold`}
          style={{ width: "70%" }}
        >
          Contact Me
        </button>
      </Link>
    </div>
  );
}

export default AboutMeButtons;
