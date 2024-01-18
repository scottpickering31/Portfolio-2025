import Header from "../src/assets/Header/Header";
import Footer from "../src/assets/Footer/Footer";
import FutureTechnologies from "../src/assets/Components/FutureTechnologies";
import Technologies from "../src/assets/Components/Technologies";
import ProjectContainer from "../src/assets/Containers/ProjectContainer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: darkMode ? "black" : "white" }}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Technologies darkMode={darkMode} />
      <FutureTechnologies darkMode={darkMode} />
      <ProjectContainer darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
