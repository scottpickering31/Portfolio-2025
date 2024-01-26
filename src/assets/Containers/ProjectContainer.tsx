import ProjectCard from "../Components/Cards/ProjectCard";

import EliteDrivesIphone from "../../../public/Images/Project-Images/EliteDrives-Iphone-Mockup.png";
import EliteDrivesIpad from "../../../public/Images/Project-Images/EliteDrives-Ipad-Mockup.png";
import EliteDrivesMacbook from "../../../public/Images/Project-Images/EliteDrives-Macbook-Mockup.png";
import ScottifyIphone from "../../../public/Images/Project-Images/Scottify-Iphone-Mockup.png";
import ScottifyIpad from "../../../public/Images/Project-Images/Scottify-Ipad-Mockup.png";
import ScottifyMacbook from "../../../public/Images/Project-Images/Scottify-Macbook-Mockup.png";
import { LightModeCurrentIcons } from "../Data/DarkModeIconData";
import "./ProjectContainer.scss";
interface Project {
  darkMode: boolean;
}

const projectData = {
  projectOne: {
    h1title: "Projects",
    description: "This is a description 3",
    technologyImages: [
      LightModeCurrentIcons.HTML5.icon,
      LightModeCurrentIcons.CSS3.icon,
      LightModeCurrentIcons.Typescript.icon,
      LightModeCurrentIcons.React.icon,
      LightModeCurrentIcons.Bootstrap.icon,
      LightModeCurrentIcons.Sass.icon,
    ],
    technologyToolTips: [
      LightModeCurrentIcons.HTML5.tooltip,
      LightModeCurrentIcons.CSS3.tooltip,
      LightModeCurrentIcons.Typescript.tooltip,
      LightModeCurrentIcons.React.tooltip,
      LightModeCurrentIcons.Bootstrap.tooltip,
      LightModeCurrentIcons.Sass.tooltip,
    ],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    iphone: ScottifyIphone,
    macbook: ScottifyMacbook,
    ipad: ScottifyIpad,
    name: "Movie Finder",
    id: 1,
  },
  projectTwo: {
    h1title: null,
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
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    iphone: EliteDrivesIphone,
    macbook: EliteDrivesMacbook,
    ipad: EliteDrivesIpad,
    name: "Elite Drives",
    id: 2,
  },
  projectThree: {
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
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    iphone: ScottifyIphone,
    macbook: ScottifyMacbook,
    ipad: ScottifyIpad,
    name: "Scottify",
    id: 3,
  },
};

function ProjectContainer({ darkMode }: Project) {
  return (
    <div className="projectContainer">
      <ProjectCard darkMode={darkMode} projectData={projectData.projectOne} />
      <hr />
      <ProjectCard darkMode={darkMode} projectData={projectData.projectTwo} />
      <hr />
      <ProjectCard darkMode={darkMode} projectData={projectData.projectThree} />
    </div>
  );
}

export default ProjectContainer;
