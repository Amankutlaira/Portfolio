import shirt_img from "../../assets/images/3dshirt.png";
import ansible from "../../assets/svg/ansible.svg";
import aws from "../../assets/svg/aws.svg";
import Bash from "../../assets/svg/bash.svg";
import cicd from "../../assets/svg/ci-cd.svg";
import css from "../../assets/svg/css.svg";
import django from "../../assets/svg/django.svg";
import docker from "../../assets/svg/docker.svg";
import git from "../../assets/svg/git.svg";
import Github from "../../assets/svg/github.svg";
import html from "../../assets/svg/html.svg";
import js from "../../assets/svg/js.svg";
import mongo from "../../assets/svg/mongo-db.svg";
import nginx from "../../assets/svg/nginx.svg";
import python from "../../assets/svg/python.svg";
import react from "../../assets/svg/react.svg";
import redis from "../../assets/svg/redis.svg";
import redux from "../../assets/svg/redux.svg";
import restApi from "../../assets/svg/rest-api.svg";
import selenium from "../../assets/svg/selenium.svg";
import sql from "../../assets/svg/sql.svg";
import firebase from "../../assets/svg/firebase.svg";
import gcloud from "../../assets/svg/gcloud.svg";
import threejs from "../../assets/svg/threejs.svg";
import openai from "../../assets/svg/openai.svg";
import nodejs from "../../assets/svg/nodejs.svg";
import swagger from "../../assets/svg/swagger.svg";
import typescript from "../../assets/svg/typescript.svg";

export const profileInfo = {
  name: "Aman Kutlaria",
  role: "Fullstack Developer",
  greeting: "Hi! my name is",
  email: "rajaman.rajput09@gmail.com",
  aboutMe: `A passionate FullStack Developer who loves turning cool ideas into even cooler web applications. 
    Whether it's crafting sleek frontend interfaces or building powerful backend systems, I'm all about creating solutions that are both scalable and efficient.
    When I'm not coding, you'll find me exploring the latest tech trends and tinkering with new tools to keep my skills sharp.`,
};

export const socials = {
  Github: "https://github.com/Amankutlaira",
  Linkedin: "www.linkedin.com/in/aman-kutlaria08",
  Instagram: "https://www.instagram.com/a_man_._/",
  X: "https://x.com/amankutlariaa",
};

export const experianceData = [
  {
    title: "US IT Recruiter",
    company: "Okaya Infocom",
    duration: "July 2022 - March 2023",
    description:
      "Collaborated with cross-functional teams to design, develop, and maintain web services and APIs that integrated with multiple internal systems, resulting in increase in data accuracy and reduction in data retrival time",
    responsabilities: [
      "Writing high-quality code and meeting quality standards.",
      "Running and debugging existing code to determine, and solve errors.",
      "Creating technical documentation such as diagrams and flowcharts.",
      "Performing unit, integration, and automation testing.",
      "Improving the software engineering processes and practices.",
      "Utilized source control, automation tools, and CI/CD processes.",
    ],
  },
];

export const skillsData = [
  {
    type: "Backend",
    skills: [
      { Python: python },
      { Node: nodejs },
      { "REST API": restApi },
      { Typescript: typescript },
      { AWS: aws },
    ],
  },
  {
    type: "Frontend",
    skills: [
      { JavaScript: js },
      { React: react },
      { Redux: redux },
      { HTML: html },
      { CSS: css },
    ],
  },
  {
    type: "Others",
    skills: [
      { MongoDB: mongo },
      { Firebase: firebase },
      { SQL: sql },
      { Redis: redis },
      { Git: git },
      { Github: Github },
      { "CI/CD": cicd },
      { "Three.js": threejs },
      { Nginx: nginx },
      { OpenAI: openai },
    ],
  },
];

export const projectsData = [
  {
    name: "3Design",
    image: shirt_img,
    summary:
      "3Design is a React app for designing 3D t-shirts with Three.js. It features AI-generated logos, customizable colors, and a 3d tshirt model. The app offers an in",
    details:
      "3Design is a React app for designing 3D t-shirts with Three.js. It features AI-generated logos, customizable colors, and a 3d tshirt model. The app offers an interactive and immersive experience for creating personalized t-shirt designs.",
    features: [
      "AI-Generated Designs",
      "Customizable Colors",
      "Interactive 3D Model",
      "Immersive Experience",
      "Responsive Design",
      "User-Friendly",
      "Upload Custom Logos",
      "Save & Share Designs",
    ],
    live: "https://3d-tshirt.ritiktyagi.codes",
    url: "https://github.com/Reck1618/3D_react_website",
    skills: [
      { React: react },
      { Redux: redux },
      { JavaScript: js },
      { HTML: html },
      { CSS: css },
      { "Node.js": nodejs },
      { "Three.js": threejs },
      { Nginx: nginx },
      { AWS: aws },
      { OpenAI: openai },
    ],
  },
];

export const certificatesData = [
  {
    title: "Advanced React",
    pdf: "../../assets/certificates/Advanced React.pdf",
    provider: "META",
  },
  {
    title: "The Full Stack",
    pdf: "../../assets/certificates/The Full Stack.pdf",
    provider: "META",
  },
  {
    title: "Blockchain Basics",
    pdf: "../../assets/certificates/Blockchain Basics.pdf",
    provider: "UB",
  },
];
