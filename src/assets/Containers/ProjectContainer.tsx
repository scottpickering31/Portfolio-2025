import ProjectCard from "../Components/ProjectCard";

interface Project {
  darkMode: boolean;
}

function ProjectContainer({ darkMode }: Project) {
  return (
    <div>
      <ProjectCard darkMode={darkMode} />
      <ProjectCard darkMode={darkMode} />
      <ProjectCard darkMode={darkMode} />
    </div>
  );
}

export default ProjectContainer;
