import React from "react";
import ProjectCard from "../Components/ProjectCard";

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
    image: "https://picsum.photos/200/300",
    name: "Project Name 1",
    id: 1,
  },
  projectTwo: {
    description: "This is a description 2",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    image: "https://picsum.photos/200/300",
    name: "Project Name 2",
    id: 2,
  },
  projectThree: {
    description: "This is a description 3",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com",
    liveLink: "https://github.com",
    readme: "https://github.com",
    image: "https://picsum.photos/200/300",
    name: "Project Name 3",
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
