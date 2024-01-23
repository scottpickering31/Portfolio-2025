// AboutMe.jsx
import { useState } from "react";
import AboutMeImage from "../../../../public/Images/AboutMe.jpeg";
import AboutMeButtons from "../../Components/Buttons/AboutMeButtons";
import Typewriter from "typewriter-effect";
import TwitterLogo from "../../../../public/Lotties/Twitter.json";
import GithubLogo from "../../../../public/Lotties/Github.json";
import LinkedInLogo from "../../../../public/Lotties/LinkedIn.json";
import LottieDisplay from "./LottieDisplay";
import "./AboutMe.css";

function AboutMe() {
  const [viewOptions, setViewOptions] = useState(false);

  const animationState = {
    isStopped: true,
    isPaused: true,
  };

  const logoObject = {
    TwitterLogo,
    GithubLogo,
    LinkedInLogo,
  };

  const animationOptions = {
    loop: true,
    autoplay: animationState.isStopped,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-6 col-lg-5 col-md-12 mb-3 mb-lg-0 order-lg-2 order-1">
        <img
          src={AboutMeImage}
          alt="Profile"
          className="rounded-circle img-fluid"
        />
      </div>
      <div className="col-6 col-lg-5 card border-3 col-md-12 fs-5 text-left order-lg-1 order-2 bg-light ">
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
        <div>
          <div className="mt-3 mb-3 ">{viewOptions && <AboutMeButtons />}</div>
          {viewOptions && (
            <LottieDisplay
              animationOptions={animationOptions}
              animationState={animationState}
              logoObject={logoObject}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
