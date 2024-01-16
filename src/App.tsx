import Header from "../src/assets/Header/Header";
import Footer from "../src/assets/Footer/Footer";
import Technologies from "../src/assets/Components/Technologies";
import ProjectCard from "./assets/Components/ProjectCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default App;
