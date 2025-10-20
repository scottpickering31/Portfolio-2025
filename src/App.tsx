import { useState } from "react";
import Lottie from "react-lottie";
import Header from "../src/assets/Header/Header";
import Footer from "../src/assets/Footer/Footer";
import Technologies from "./assets/Components/Technologies/Technologies";
import ProjectContainer from "../src/assets/Containers/ProjectContainer";
import TwinkleStars from "../public/Lotties/TwinkleStars.json";
import { Element } from "react-scroll";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const twinkleStarsOptions = {
    loop: true,
    autoplay: true,
    animationData: TwinkleStars,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div>
        {darkMode && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0)",
              zIndex: -1,
            }}
          >
            <Lottie options={twinkleStarsOptions} />
          </div>
        )}
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div>
          <Element name="techstack">
            <Technologies darkMode={darkMode} />
          </Element>

          <Element name="projects">
            <ProjectContainer darkMode={darkMode} />
          </Element>
          <Element name="contact">
            <Footer />
          </Element>
        </div>
      </div>
    </>
  );
}

export default App;
