import ProjectCard from "../Components/Cards/ProjectCard";
import EliteDrivesIphone from "../../../public/Images/Project-Images/EliteDrives-Iphone-Mockup.png";
import EliteDrivesIpad from "../../../public/Images/Project-Images/EliteDrives-Ipad-Mockup.png";
import EliteDrivesMacbook from "../../../public/Images/Project-Images/EliteDrives-Macbook-Mockup.png";
import ScottifyIphone from "../../../public/Images/Project-Images/Scottify-Iphone-Mockup.png";
import ScottifyIpad from "../../../public/Images/Project-Images/Scottify-Ipad-Mockup.png";
import ScottifyMacbook from "../../../public/Images/Project-Images/Scottify-Macbook-Mockup.png";
import PortfolioIphone from "../../../public/Images/Project-Images/Portfolio-Iphone-Mockup.png";
import PortfolioIpad from "../../../public/Images/Project-Images/Portfolio-Ipad-Mockup.png";
import PortfolioMacbook from "../../../public/Images/Project-Images/Portfolio-Macbook-Mockup.png";
import PetScheduler from "../../../public/Images/Project-Images/PetScheduler.png";
import {
  LightModeCurrentIcons,
  LightModeFutureIcons,
} from "../Data/DarkModeIconData";
import "./ProjectContainer.scss";
interface Project {
  darkMode: boolean;
}

const projectData = {
  projectOne: {
    h1title: "Projects",
    description:
      "Worldwide live-data weather App, utilizing rapidAPI data, created using React/Redux/Typescript/Tailwind",
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
    githubLink: "https://github.com/scottpickering31/weatherful",
    liveLink: "https://scottpickering31.github.io/weatherful",
    readme: "https://github.com/scottpickering31/weatherful/blob/master/readme",
    iphone: PortfolioIphone,
    macbook: PortfolioMacbook,
    ipad: PortfolioIpad,
    name: "Weatherful",
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
    githubLink: "https://github.com/scottpickering31/car-portfolio-project",
    liveLink: "https://scottpickering31.github.io/car-portfolio-project/",
    readme:
      "https://github.com/scottpickering31/car-portfolio-project/blob/main/README.md",
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
      LightModeCurrentIcons.React.icon,
    ],
    technologyToolTips: [
      LightModeCurrentIcons.HTML5.tooltip,
      LightModeCurrentIcons.CSS3.tooltip,
      LightModeCurrentIcons.JavaScript.tooltip,
      LightModeCurrentIcons.React.tooltip,
    ],
    githubLink: "https://github.com/scottpickering31/scottify-app",
    liveLink: "https://scottpickering31.github.io/scottify-app/",
    readme:
      "https://github.com/scottpickering31/scottify-app/blob/main/README.md",
    iphone: ScottifyIphone,
    macbook: ScottifyMacbook,
    ipad: ScottifyIpad,
    name: "Scottify",
    id: 3,
  },
  projectFour: {
    h1title: null,
    description:
      "A Pet Scheduling application for Groomers, Veterenarians, Boarding providers etc. for Pets, this is my first long-term software as a service project, due to complete by EOY 2025. Using Next.js for the landing page and SEO, and React for the application itself",
    technologyImages: [
      LightModeCurrentIcons.HTML5.icon,
      LightModeCurrentIcons.CSS3.icon,
      LightModeCurrentIcons.Typescript.icon,
      LightModeCurrentIcons.React.icon,
      LightModeFutureIcons.Next.icon,
      LightModeCurrentIcons.TailwindCSS.icon,
    ],
    technologyToolTips: [
      LightModeCurrentIcons.HTML5.tooltip,
      LightModeCurrentIcons.CSS3.tooltip,
      LightModeCurrentIcons.Typescript.tooltip,
      LightModeCurrentIcons.React.tooltip,
      LightModeFutureIcons.Next.tooltip,
      LightModeCurrentIcons.TailwindCSS.tooltip,
    ],
    githubLink: "https://github.com/scottpickering31/petschedules-main-blog",
    liveLink: "https://scottpickering31.github.io/Portfolio-2025/",
    readme:
      "https://github.com/scottpickering31/scottify-app/blob/main/README.md",
    iphone: PetScheduler,
    macbook: null,
    ipad: PetScheduler,
    name: "Pet Scheduler - Coming Soon 2025 (source code available)",
    id: 4,
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
      <hr />
      <ProjectCard darkMode={darkMode} projectData={projectData.projectFour} />
    </div>
  );
}

export default ProjectContainer;
