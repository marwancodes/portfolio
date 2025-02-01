import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage3 from "../assets/Bistro-Project.png";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";
import cesarSpace from '../assets/cesar-space-vercel.png';

import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "MARWAN CODES",
  greet: "Hello there! 👋🏻",
  description:
    "I'm Marouane OUARRADI, a dedicated Full-Stack developer specializing in the MERN stack and Next.js. With a strong foundation in building dynamic, responsive applications, I love transforming complex ideas into engaging, user-centric web experiences. I focus on clean code, intuitive designs, and seamless functionality, whether it's crafting sleek UIs or setting up robust backends. Ready to create impactful digital solutions, one project at a time!",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS with some animation using framer-motion and React icons and Toasts and for sending email I used EmailJs to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/marwancodes/portfolio",
  },
  {
    id: 2,
    name: "Cesar Space Platform",
    description:
      "An landing page web application developed using React.js, featuring a comprehensive product catalog.",
    image: cesarSpace,
    githubLink: "https://github.com/marwancodes/cesar-space",
  },
  {
    id: 3,
    name: "BISTRO Restaurant",
    description:
      "A responsive landing page website built with React Js and Tailwind css and for animation AOS library and React icons.",
    image: projectImage3,
    githubLink: "https://github.com/marwancodes/bistro",
  },
  {
    id: 4,
    name: "Coming soon",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/marwancodes/cesar-space",
  },
  {
    id: 5,
    name: "Coming soon",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/marwancodes/cesar-space",
  },
  {
    id: 6,
    name: "Coming soon",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/marwancodes/cesar-space",
  },
];

export const BIO = [
  "Marouane OUARRADI studied computer science at the University of Technology IT-SUP,from which he graduated in 2021. Following his education, he honed his craft and expertise over the course of 2 years at Tech Innovations Inc., where he immersed himself in the world of MERN-Stack development.",
  "In 2024, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Marouane OUARRADI co-founded WebArtistry alongside his creative partner, Youness Msaddar. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Marouane OUARRADI brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS with Taiwind CSS, and JavaScript and TypeScript to his proficiency in modern frameworks like React, Next, Express, Marouane OUARRADI possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <SiExpress className="text-4xl text-stone-300 lg:text-5xl" />,
    name: "Express.js",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Tailwind css",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "September 2012 - June 2014",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of California, Berkeley",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com/marouaneord",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/marwanfitvlogs",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/marwancodes",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
