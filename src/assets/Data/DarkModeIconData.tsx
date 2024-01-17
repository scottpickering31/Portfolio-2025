interface Icon {
  alt: string;
  icon: JSX.Element;
}

interface Icons {
  [key: string]: Icon;
}

export const DarkModeCurrentIcons: Icons = {
  HTML5: {
    alt: "HTML5 Icon",
    icon: <i className="devicon-html5-plain"></i>,
  },
  CSS3: {
    alt: "CSS3 Icon",
    icon: <i className="devicon-css3-plain"></i>,
  },
  JavaScript: {
    alt: "JavaScript Icon",
    icon: <i className="devicon-javascript-plain"></i>,
  },
  Typescript: {
    alt: "Typescript Icon",
    icon: <i className="devicon-typescript-plain"></i>,
  },
  React: {
    alt: "React Icon",
    icon: <i className="devicon-react-original"></i>,
  },
  Redux: {
    alt: "Redux Icon",
    icon: <i className="devicon-redux-original"></i>,
  },
  NodeJS: {
    alt: "NodeJS Icon",
    icon: <i className="devicon-nodejs-plain"></i>,
  },
  Express: {
    alt: "Express Icon",
    icon: <i className="devicon-express-original"></i>,
  },
  Jest: {
    alt: "Jest Icon",
    icon: <i className="devicon-jest-plain"></i>,
  },
  MongoDB: {
    alt: "MongoDB Icon",
    icon: <i className="devicon-mongodb-plain"></i>,
  },
  PostgreSQL: {
    alt: "PostgreSQL Icon",
    icon: <i className="devicon-postgresql-plain"></i>,
  },
  TailwindCSS: {
    alt: "TailwindCSS Icon",
    icon: <i className="devicon-tailwindcss-plain"></i>,
  },
  Bootstrap: {
    alt: "Bootstrap Icon",
    icon: <i className="devicon-bootstrap-plain"></i>,
  },
  Sass: {
    alt: "Sass Icon",
    icon: <i className="devicon-sass-plain"></i>,
  },
  Github: {
    alt: "Github Icon",
    icon: <i className="devicon-github-plain"></i>,
  },
  VSCode: {
    alt: "VSCode Icon",
    icon: <i className="devicon-vscode-plain"></i>,
  },
};

export const DarkModeFutureIcons: Icons = {
  AWS: {
    alt: "AWS Icon",
    icon: <i className="devicon-amazonwebservices-plain"></i>,
  },
  Kubernetes: {
    alt: "Kubernetes Icon",
    icon: <i className="devicon-kubernetes-plain"></i>,
  },
  Docker: {
    alt: "Docker Icon",
    icon: <i className="devicon-docker-plain"></i>,
  },
  Next: {
    alt: "Next Icon",
    icon: <i className="devicon-nextjs-plain"></i>,
  },
  Svelte: {
    alt: "Svelte Icon",
    icon: <i className="devicon-svelte-plain"></i>,
  },
};
