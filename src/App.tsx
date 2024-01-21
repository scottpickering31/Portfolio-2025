// App.jsx

import { useState } from "react";
import Lottie from "react-lottie";
import Header from "../src/assets/Header/Header";
import Footer from "../src/assets/Footer/Footer";
import FutureTechnologies from "./assets/Components/Technologies/FutureTechnologies";
import Technologies from "./assets/Components/Technologies/Technologies";
import ProjectContainer from "../src/assets/Containers/ProjectContainer";
import TwinkleStars from "../public/Lotties/TwinkleStars.json";

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
        <Technologies darkMode={darkMode} />
        <FutureTechnologies darkMode={darkMode} />
        <ProjectContainer darkMode={darkMode} />
        <Footer />
      </div>
    </>
  );
}

export default App;
