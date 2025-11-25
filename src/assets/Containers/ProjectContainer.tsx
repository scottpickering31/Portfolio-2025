import ProjectCard from "../Components/Cards/ProjectCard";
import EliteDrivesIphone from "/src/Images/Project-Images/EliteDrives-Iphone-Mockup.png";
import EliteDrivesIpad from "/src/Images/Project-Images/EliteDrives-Ipad-Mockup.png";
import EliteDrivesMacbook from "/src/Images/Project-Images/EliteDrives-Macbook-Mockup.png";
import ScottifyIphone from "/src/Images/Project-Images/Scottify-Iphone-Mockup.png";
import ScottifyIpad from "/src/Images/Project-Images/Scottify-Ipad-Mockup.png";
import ScottifyMacbook from "/src/Images/Project-Images/Scottify-Macbook-Mockup.png";
import MarketTaxProIphone from "/src/Images/Project-Images/MarketTaxPro-Iphone-Mockup.png";
import MarketTaxProIpad from "/src/Images/Project-Images/MarketTaxPro-Ipad-Mockup.png";
import MarketTaxProMacbook from "/src/Images/Project-Images/MarketTaxPro-Macbook-Mockup.png";
import { LightModeCurrentIcons } from "../Data/DarkModeIconData";
import "./ProjectContainer.scss";
interface Project {
  darkMode: boolean;
}

const projectData = {
  projectOne: {
    h1title: "Projects",
    description:
      "Full-stack SaaS for UK marketplace sellers - Designed and built a full-stack bookkeeping and tax-prep application for Etsy/eBay sellers using Next.js, TypeScript, Supabase and Stripe. Implemented marketplace integrations, data imports, profit calculations, PDF/CSV exports, usage-based billing and a secure multi-tenant architecture. Delivered complete CI/CD pipelines and robust REST API routes following industry standards",
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
    githubLink: "https://github.com/scottpickering31/markettaxpro/",
    liveLink: "https://markettaxpro.com",
    readme:
      "https://github.com/scottpickering31/markettaxpro/blob/main/README.md",
    iphone: MarketTaxProIphone,
    macbook: MarketTaxProMacbook,
    ipad: MarketTaxProIpad,
    name: "MarketTaxPro",
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
