interface Icon {
  alt: string;
  icon: JSX.Element;
}

interface Icons {
  [key: string]: Icon;
}

export const LightModeCurrentIcons: Icons = {
  HTML5: {
    alt: "HTML5 Icon",
    icon: <i className="devicon-html5-plain colored"></i>,
  },
  CSS3: {
    alt: "CSS3 Icon",
    icon: <i className="devicon-css3-plain colored"></i>,
  },
  JavaScript: {
    alt: "JavaScript Icon",
    icon: <i className="devicon-javascript-plain colored"></i>,
  },
  Typescript: {
    alt: "Typescript Icon",
    icon: <i className="devicon-typescript-plain colored"></i>,
  },
  React: {
    alt: "React Icon",
    icon: <i className="devicon-react-original colored"></i>,
  },
  Redux: {
    alt: "Redux Icon",
    icon: <i className="devicon-redux-original colored"></i>,
  },
  NodeJS: {
    alt: "NodeJS Icon",
    icon: <i className="devicon-nodejs-plain colored"></i>,
  },
  Express: {
    alt: "Express Icon",
    icon: <i className="devicon-express-original colored"></i>,
  },
  Jest: {
    alt: "Jest Icon",
    icon: <i className="devicon-jest-plain colored"></i>,
  },
  MongoDB: {
    alt: "MongoDB Icon",
    icon: <i className="devicon-mongodb-plain colored"></i>,
  },
  PostgreSQL: {
    alt: "PostgreSQL Icon",
    icon: <i className="devicon-postgresql-plain colored"></i>,
  },
  TailwindCSS: {
    alt: "TailwindCSS Icon",
    icon: <i className="devicon-tailwindcss-plain colored"></i>,
  },
  Bootstrap: {
    alt: "Bootstrap Icon",
    icon: <i className="devicon-bootstrap-plain colored"></i>,
  },
  Sass: {
    alt: "Sass Icon",
    icon: <i className="devicon-sass-plain colored"></i>,
  },
  Github: {
    alt: "Github Icon",
    icon: <i className="devicon-github-plain colored"></i>,
  },
  VSCode: {
    alt: "VSCode Icon",
    icon: <i className="devicon-vscode-plain colored"></i>,
  },
};

export const LightModeFutureIcons: Icons = {
  AWS: {
    alt: "AWS Icon",
    icon: <i className="devicon-amazonwebservices-plain colored"></i>,
  },
  Kubernetes: {
    alt: "Kubernetes Icon",
    icon: <i className="devicon-kubernetes-plain colored"></i>,
  },
  Docker: {
    alt: "Docker Icon",
    icon: <i className="devicon-docker-plain colored"></i>,
  },
  Next: {
    alt: "Next Icon",
    icon: <i className="devicon-nextjs-plain colored"></i>,
  },
  Svelte: {
    alt: "Svelte Icon",
    icon: <i className="devicon-svelte-plain colored"></i>,
  },
};
