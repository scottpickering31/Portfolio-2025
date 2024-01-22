import ProjectCard from "../Components/Cards/ProjectCard";
import MovieFinder from "../../../public/Images/movie-finder.jpg";
import EliteDrivesIphone from "../../../public/Images/Project-Images/EliteDrives-Iphone-Mockup.png";
import EliteDrivesIpad from "../../../public/Images/Project-Images/EliteDrives-Ipad-Mockup.png";
import EliteDrivesMacbook from "../../../public/Images/Project-Images/EliteDrives-Macbook-Mockup.png";
import ScottifyIphone from "../../../public/Images/Project-Images/Scottify-Iphone-Mockup.png";
import ScottifyIpad from "../../../public/Images/Project-Images/Scottify-Ipad-Mockup.png";
import ScottifyMacbook from "../../../public/Images/Project-Images/Scottify-Macbook-Mockup.png";
interface Project {
  darkMode: boolean;
}

const projectData = {
  projectOne: {
    h1title: "Projects",
    description: "This is a description 1",
    technologies: ["HTML", "CSS", "JavaScript"],
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
    description: "This is a description 2",
    technologies: ["HTML", "CSS", "JavaScript"],
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
    technologies: ["HTML", "CSS", "JavaScript"],
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
