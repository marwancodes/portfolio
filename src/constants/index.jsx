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
import projectImage4 from "../assets/IMDb.png";
import projectImage5 from "../assets/allo-voyage-project.png";
import projectImage6 from "../assets/e-commerce.png";
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
    "I’m Marouane OUARRADI — Full-Stack Developer. specialize in building high-performance web applications using the MERN stack and Next.js. From clean and responsive frontends to scalable and secure backends, I bring ideas to life with precision and passion. With a focus on user experience, modern design, and clean architecture, I turn complex problems into elegant digital solutions — one project at a time.",
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
    name: "IMDb Movies - Clone",
    description:
      "A responsive website with White & DarkMode built with NEXT.js 15 using TypeScript and Tailwind css and React icons.",
    image: projectImage4,
    githubLink: "https://github.com/marwancodes/imdb-next",
  },
  {
    id: 5,
    name: "Allo Voyage",
    description:
      "A responsive Travel Agency website built with NEXT.js 15 using TypeScript and Tailwind css and React icons and AOS animation.",
    image: projectImage5,
    githubLink: "https://github.com/marwancodes/allo-voyage",
  },
  {
    id: 6,
    name: "Coming soon",
    description:
      "A responsive MERN E-Commerce website with authentication JWT + Cart using TypeScript and Mui Material.",
    image: projectImage6,
    githubLink: "https://github.com/marwancodes",
  },
  
];

export const BIO = [
  "Marouane OUARRADI is a passionate Full-Stack Developer with a strong foundation in computer science, earned from the University of Technology IT-SUP in 2021. Over the next two years, he sharpened his skills at Tech Innovations Inc., where he specialized in building full-featured web applications using the MERN stack and modern development practices.",
  "In 2024, Marouane co-founded WebArtistry with his creative partner, Youness Msaddar. United by a vision for innovative and user-focused web experiences, they set out to push the boundaries of frontend development by blending clean architecture, visual creativity, and the latest technologies.",
  "As a multi-disciplinary developer, Marouane combines technical expertise with an eye for design. He is fluent in HTML, CSS (with Tailwind CSS), JavaScript, and TypeScript, and proficient in powerful frameworks like React, Next.js, and Express.js. Whether building responsive UIs or scalable backends, Marouane delivers performant and engaging digital solutions that leave a lasting impression."

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
