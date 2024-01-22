import ProjectCard from "../Components/Cards/ProjectCard";
import CarPickerForm from "../../../public/Images/CarPickerForm.png";
import MovieFinder from "../../../public/Images/movie-finder.jpg";
import Scottify from "../../../public/Images/scottify-app-image.jpg";
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
  return (
    <div>
      <ProjectCard darkMode={darkMode} projectData={projectData.projectOne} />
      <ProjectCard darkMode={darkMode} projectData={projectData.projectTwo} />
      <ProjectCard darkMode={darkMode} projectData={projectData.projectThree} />
    </div>
  );
}

export default ProjectContainer;
