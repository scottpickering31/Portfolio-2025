import { useState } from "react";
import AboutMeImage from "../../../../public/Images/AboutMe.jpeg";
import AboutMeButtons from "../../Components/Buttons/AboutMeButtons";
import Github from "../../../../public/Images/Logos/Github.png";
import LinkedIn from "../../../../public/Images/Logos/LinkedIn.png";
import Twitter from "../../../../public/Images/Logos/Twitter.png";
import Typewriter from "typewriter-effect";

function AboutMe({ setViewableArea, viewableArea }) {
  const [viewOptions, setViewOptions] = useState(false);

  return (
    <div
      className="row d-flex justify-content-center py-5 px-1 headerborder bg-black"
      style={{ height: "100%" }}
    >
      <div className="col-12 col-lg-5 col-md-12 mb-3 mb-lg-0 order-lg-2 order-1">
        <img
          src={AboutMeImage}
          alt="Profile"
          className="rounded-circle img-fluid"
        />
      </div>
      <div
        className="col-12 col-lg-5 col-md-12 fs-5 text-left order-lg-1 order-2 mb-5 text-light"
        style={{ height: "50vh" }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(20)
              .changeDeleteSpeed(Infinity)
              .typeString(`Hello, and welcome to my Portfolio!`)
              .pauseFor(1000)
              .typeString(
                `<br><br>My Name is <strong><span style="color: #ffae52;">Scott Pickering</span></strong>, and I'm a <span style="color: #ffae52;"><strong>Full Stack Developer</strong></span> from <span style="color: #ffae52;"><strong>Hitchin, Hertfordshire</strong></span>.`,
              )
              .pauseFor(1000)
              .typeString(`<br><br>What would you like to view?`)
              .pauseFor(500)
              .callFunction(() => {
                setViewOptions(true);
              })
              .start();
          }}
        />
        <div>
          <div className="mt-3">
            {viewOptions && (
              <AboutMeButtons
                setViewableArea={setViewableArea}
                viewableArea={viewableArea}
              />
            )}
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center align-items-center order-lg-2 order-3">
        <img
          src={Github}
          alt="Github Logo"
          className="mx-3"
          style={{
            width: "80px",
            backgroundColor: "white",
            borderRadius: "70%",
          }}
        />
        <img
          src={Twitter}
          alt="Twitter Logo"
          style={{ width: "80px" }}
          className="mx-3"
        />
        <img
          src={LinkedIn}
          alt="LinkedIn Logo"
          style={{ width: "80px" }}
          className="mx-3"
        />
      </div>
    </div>
  );
}

export default AboutMe;
