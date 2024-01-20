import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import MoonMice from "../../../public/Lotties/MoonMice.json";
import AstronautCoder from "../../../public/Lotties/AstronautCoder.json";
import Alien from "../../../public/Lotties/Alien.json";
import DogSunbather from "../../../public/Lotties/DogSunbather.json";
import IceCream from "../../../public/Lotties/IceCream.json";
import Surfer from "../../../public/Lotties/Surfer.json";
import CarPickerForm from "../../../public/images/CarPickerForm.png";
import MovieFinder from "../../../public/images/movie-finder.jpg";
import Scottify from "../../../public/images/scottify-app-image.jpg";
interface Project {
  darkMode: boolean;
}

const projectData = {
  projectOne: {
    description: "This is a description 1",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    image: CarPickerForm,
    name: "Elite Drives",
    id: 1,
  },
  projectTwo: {
    description: "This is a description 2",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    image: Scottify,
    name: "Scottify",
    id: 2,
  },
  projectThree: {
    description: "This is a description 3",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    image: MovieFinder,
    name: "Movie Finder",
    id: 3,
  },
};

function ProjectContainer({ darkMode }: Project) {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: true,
  });

  const generateAnimationOptions = (
    darkModeAnimationData,
    lightModeAnimationData,
    darkMode
  ) => ({
    loop: true,
    autoplay: animationState.isStopped,
    animationData: darkMode ? darkModeAnimationData : lightModeAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  const animationOptionsDogSunbather = generateAnimationOptions(
    MoonMice,
    DogSunbather,
    darkMode
  );
  const animationOptionsIceCream = generateAnimationOptions(
    AstronautCoder,
    IceCream,
    darkMode
  );
  const animationOptionsSurfer = generateAnimationOptions(
    Alien,
    Surfer,
    darkMode
  );

  return (
    <div>
      <ProjectCard
        darkMode={darkMode}
        projectData={projectData.projectOne}
        animationOptions={animationOptionsDogSunbather}
      />
      <ProjectCard
        darkMode={darkMode}
        projectData={projectData.projectTwo}
        animationOptions={animationOptionsIceCream}
      />
      <ProjectCard
        darkMode={darkMode}
        projectData={projectData.projectThree}
        animationOptions={animationOptionsSurfer}
      />
    </div>
  );
}

export default ProjectContainer;
