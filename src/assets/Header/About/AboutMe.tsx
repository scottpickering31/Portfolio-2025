import { useState } from "react";
import AboutMeImage from "../../../../public/Images/AboutMe.jpeg";
import AboutMeButtons from "../../Components/Buttons/AboutMeButtons";
import Github from "../../../../public/Images/Logos/Github.png";
import LinkedIn from "../../../../public/Images/Logos/LinkedIn.png";
import Twitter from "../../../../public/Images/Logos/Twitter.png";
import Typewriter from "typewriter-effect";
import "./AboutMe.scss";

interface AboutMeProps {
  setViewableArea: React.Dispatch<React.SetStateAction<boolean>>;
  viewableArea: boolean;
  darkMode: boolean;
}

function AboutMe({ setViewableArea, darkMode }: AboutMeProps) {
  const [fadeIn, setFadeIn] = useState("opacity-0");

  return (
    <div
      className="row d-flex justify-content-center py-5 px-1 headerborder"
      style={{
        height: "100%",
        margin: "0",
        backgroundColor: darkMode ? "transparent" : "black",
      }}
    >
      <div className="col-12 col-lg-5 col-md-12 mb-3 mb-lg-0 order-lg-2 order-1">
        <img
          src={AboutMeImage}
          alt="Profile"
          className="rounded-circle img-fluid"
        />
      </div>
      <div
        className="col-12 col-lg-5 col-md-12 fs-5 text-left order-lg-1 order-2 mb-5 text-white"
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
                `<br><br>My Name is <strong><span style="color: #ffae52;">Scott Pickering</span></strong>, and I'm a <span style="color: #ffae52;"><strong>Full Stack Developer</strong></span> from <span style="color: #ffae52;"><strong>Hitchin, Hertfordshire</strong></span>.`
              )
              .pauseFor(1000)
              .typeString(`<br><br>What would you like to view?`)
              .pauseFor(500)
              .callFunction(() => {
                setFadeIn("fade-in");
              })
              .start();
          }}
        />
        <div>
          <div className={`mt-3 ${fadeIn}`}>
            <AboutMeButtons setViewableArea={setViewableArea} />
          </div>
        </div>
      </div>
      <div
        className={`col-12 d-flex justify-content-center align-items-center order-lg-2 order-3 ${fadeIn}`}
      >
        <a href="https://github.com/scottpickering31" target="_blank">
          <img
            src={Github}
            alt="Github Logo"
            className="m-2"
            style={{
              width: "80px",
              backgroundColor: "white",
              borderRadius: "70%",
            }}
          />
        </a>
        <a href="https://twitter.com/scottypickering" target="_blank">
          <img
            src={Twitter}
            alt="Twitter Logo"
            style={{ width: "80px" }}
            className="m-2"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/scott-pickering-b6b05287/"
          target="_blank"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn Logo"
            style={{ width: "80px" }}
            className="m-2"
          />
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
