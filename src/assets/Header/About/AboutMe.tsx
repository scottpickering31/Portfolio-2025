// AboutMe.jsx
import { useState } from "react";
import AboutMeImage from "../../../../public/Images/AboutMe.jpeg";
import AboutMeButtons from "../../Components/Buttons/AboutMeButtons";
import Typewriter from "typewriter-effect";
import "./AboutMe.css";

function AboutMe() {
  const [viewOptions, setViewOptions] = useState(false);

  return (
    <div className="row d-flex align-items-center justify-content-start p-5">
      <div className="col-lg-6 col-md-12 mb-3 mb-lg-0 order-lg-2 order-1 mt-5">
        <img
          src={AboutMeImage}
          alt="Profile"
          className="rounded-circle img-fluid"
        />
      </div>
      <div className="col-lg-6 col-md-12 fs-4 text-left order-lg-1 order-2 ">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(35)
              .changeDeleteSpeed(Infinity)
              .typeString(`Hello, and welcome to my Portfolio!`)
              .pauseFor(1000)
              .typeString(
                `<br><br>My Name is <strong>Scott Pickering</strong>, and i'm a Junior Full Stack Developer from <strong>Stevenage, Hertfordshire</strong>.`
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
        <div className="mt-5">{viewOptions && <AboutMeButtons />}</div>
      </div>
    </div>
  );
}

export default AboutMe;
