export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: "/web.png",
  },
  {
    title: "React Developer",
    icon: "/mobile.png",
  },
  {
    title: "Backend Developer",
    icon: "/backend.png",
  },
  {
    title: "Content Creator",
    icon: "/creator.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/tech/nodejs.png",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.svg",
  },
  {
    name: "git",
    icon: "/tech/git.png",
  },
  {
    name: "figma",
    icon: "/tech/figma.png",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Company Name",
    icon: "/company/shopify.png",
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Project One",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/project1.png",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
