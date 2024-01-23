import ProjectCard from "../Components/Cards/ProjectCard";
import MovieFinder from "../../../public/Images/movie-finder.jpg";
import EliteDrivesIphone from "../../../public/Images/Project-Images/EliteDrives-Iphone-Mockup.png";
import EliteDrivesIpad from "../../../public/Images/Project-Images/EliteDrives-Ipad-Mockup.png";
import EliteDrivesMacbook from "../../../public/Images/Project-Images/EliteDrives-Macbook-Mockup.png";
import ScottifyIphone from "../../../public/Images/Project-Images/Scottify-Iphone-Mockup.png";
import ScottifyIpad from "../../../public/Images/Project-Images/Scottify-Ipad-Mockup.png";
import ScottifyMacbook from "../../../public/Images/Project-Images/Scottify-Macbook-Mockup.png";
import {
  DarkModeCurrentIcons,
  LightModeCurrentIcons,
} from "../Data/DarkModeIconData";
interface Project {
  darkMode: boolean;
}

const projectData = {
  projectOne: {
    h1title: "Projects",
    description:
      "Built using Vite, React, Redux and Tailwind-CSS and utilising libraries such as react-calendar and react-google-maps, Elite Drives is a supercar rental website that offers a variety of cars and services for a given period of time.",
    technologyImages: [
      LightModeCurrentIcons.HTML5.icon,
      LightModeCurrentIcons.CSS3.icon,
      LightModeCurrentIcons.Typescript.icon,
      LightModeCurrentIcons.React.icon,
      LightModeCurrentIcons.Redux.icon,
      LightModeCurrentIcons.TailwindCSS.icon,
    ],
    technologyToolTips: [
      LightModeCurrentIcons.HTML5.tooltip,
      LightModeCurrentIcons.CSS3.tooltip,
      LightModeCurrentIcons.Typescript.tooltip,
      LightModeCurrentIcons.React.tooltip,
      LightModeCurrentIcons.Redux.tooltip,
      LightModeCurrentIcons.TailwindCSS.tooltip,
    ],
    darkTechnologyImages: [
      DarkModeCurrentIcons.HTML5.icon,
      DarkModeCurrentIcons.CSS3.icon,
      DarkModeCurrentIcons.Typescript.icon,
      DarkModeCurrentIcons.React.icon,
      DarkModeCurrentIcons.Redux.icon,
      DarkModeCurrentIcons.TailwindCSS.icon,
    ],
    darkTechnologyToolTips: [
      DarkModeCurrentIcons.HTML5.tooltip,
      DarkModeCurrentIcons.CSS3.tooltip,
      DarkModeCurrentIcons.Typescript.tooltip,
      DarkModeCurrentIcons.React.tooltip,
      DarkModeCurrentIcons.Redux.tooltip,
      DarkModeCurrentIcons.TailwindCSS.tooltip,
    ],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    iphone: EliteDrivesIphone,
    macbook: EliteDrivesMacbook,
    ipad: EliteDrivesIpad,
    name: "Elite Drives",
    id: 1,
  },
  projectTwo: {
    h1title: null,
    description:
      "A Spotify Playlist creator app created using Javascript and React, by logging in to your spotify account through the Spotify API you can then create your very own titled playlist in no time!",
    technologyImages: [
      LightModeCurrentIcons.HTML5.icon,
      LightModeCurrentIcons.CSS3.icon,
      LightModeCurrentIcons.JavaScript.icon,
    ],
    technologyToolTips: [
      LightModeCurrentIcons.HTML5.tooltip,
      LightModeCurrentIcons.CSS3.tooltip,
      LightModeCurrentIcons.JavaScript.tooltip,
    ],
    darkTechnologyImages: [
      DarkModeCurrentIcons.HTML5.icon,
      DarkModeCurrentIcons.CSS3.icon,
      DarkModeCurrentIcons.JavaScript.icon,
    ],
    darkTechnologyToolTips: [
      DarkModeCurrentIcons.HTML5.tooltip,
      DarkModeCurrentIcons.CSS3.tooltip,
      DarkModeCurrentIcons.JavaScript.tooltip,
    ],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    iphone: ScottifyIphone,
    macbook: ScottifyMacbook,
    ipad: ScottifyIpad,
    name: "Scottify",
    id: 2,
  },
  projectThree: {
    h1title: null,
    description: "This is a description 3",
    technologyImages: [
      LightModeCurrentIcons.HTML5.icon,
      LightModeCurrentIcons.CSS3.icon,
      LightModeCurrentIcons.JavaScript.icon,
    ],
    technologyToolTips: [
      LightModeCurrentIcons.HTML5.tooltip,
      LightModeCurrentIcons.CSS3.tooltip,
      LightModeCurrentIcons.JavaScript.tooltip,
    ],
    darkTechnologyImages: [
      DarkModeCurrentIcons.HTML5.icon,
      DarkModeCurrentIcons.CSS3.icon,
      DarkModeCurrentIcons.JavaScript.icon,
    ],
    darkTechnologyToolTips: [
      DarkModeCurrentIcons.HTML5.tooltip,
      DarkModeCurrentIcons.CSS3.tooltip,
      DarkModeCurrentIcons.JavaScript.tooltip,
    ],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    iphone: MovieFinder,
    macbook: null,
    ipad: null,
    name: "Movie Finder",
    id: 3,
  },
};

function ProjectContainer({ darkMode }: Project) {
  return (
    <div>
      <ProjectCard darkMode={darkMode} projectData={projectData.projectOne} />
      <ProjectCard darkMode={darkMode} projectData={projectData.projectTwo} />
      <ProjectCard darkMode={darkMode} projectData={projectData.projectThree} />
    </div>
  );
}

export default ProjectContainer;
