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
import projectImage6 from "../assets/earbuds.png";
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
    "I’m Marouane OUARRADI — a Full-Stack Developer crafting high-performance web and mobile applications. I specialize in building modern, responsive interfaces with the MERN stack, Next.js, and React Native. From intuitive frontends to scalable backends, I transform ideas into elegant, user-focused digital solutions. With a passion for UI/UX design, clean architecture, and tools like Figma, I bridge the gap between design and development — delivering seamless experiences, one project at a time.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS with some animation using framer-motion and React icons and Toasts and for sending email I used EmailJs to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/marwancodes/portfolio",
    liveLink: "https://marwancodes.vercel.app/",
  },
  {
    id: 2,
    name: "Cesar Space Platform",
    description:
      "An landing page web application developed using React.js, featuring a comprehensive product catalog.",
    image: cesarSpace,
    githubLink: "https://github.com/marwancodes/cesar-space",
    liveLink: "https://cesar-space.vercel.app/",
  },
  {
    id: 3,
    name: "BISTRO Restaurant",
    description:
      "A responsive landing page website built with React Js and Tailwind css and for animation AOS library and React icons.",
    image: projectImage3,
    githubLink: "https://github.com/marwancodes/bistro",
    liveLink: "https://bistro-nine.vercel.app/",
  },
  {
    id: 4,
    name: "IMDb Movies - Clone",
    description:
      "A responsive website with White & DarkMode built with NEXT.js 15 using TypeScript and Tailwind css and React icons.",
    image: projectImage4,
    githubLink: "https://github.com/marwancodes/imdb-next",
    liveLink: "https://imdb-next-cyan.vercel.app/",
  },
  {
    id: 5,
    name: "Allo Voyage",
    description:
      "A responsive Travel Agency website built with NEXT.js 15 using TypeScript and Tailwind css and React icons and AOS animation.",
    image: projectImage5,
    githubLink: "https://github.com/marwancodes/allo-voyage",
    liveLink: "https://allo-voyage.vercel.app/",
  },
  {
    id: 6,
    name: "Earbuds Landing Page",
    description:
      "A responsive landing page website Light/Dark Mode built with Next Js and Tailwind css and for animation AOS library and React icons.",
    image: projectImage6,
    githubLink: "https://github.com/marwancodes/earbuds-landing-page",
    liveLink: "https://earbuds-eight.vercel.app/",
  },
  
];

export const BIO = [
  "Marouane OUARRADI is a passionate Full-Stack Developer currently based in Walsall, United Kingdom, with a robust foundation in computer science earned from the University of Technology IT-SUP in 2021. Since then, he has dedicated himself to mastering modern web and mobile development technologies, building high-performance digital experiences that are both functional and beautifully designed.",
  "From 2022 to 2024, Marouane honed his skills at Tech Innovations Inc., where he worked on several production-grade web applications using the MERN stack and Next.js, focusing on clean code architecture, scalability, and smooth user experiences.",
  "In 2024, he co-founded WebArtistry with his creative partner, Youness Msaddar. Together, they set out to merge cutting-edge frontend development with eye-catching design, delivering projects that stand out through thoughtful interaction, fast performance, and sleek visuals.",
  "As a multi-disciplinary developer, Marouane blends technical know-how with design sensitivity. He is highly proficient in JavaScript, TypeScript, HTML, CSS (Tailwind), and frameworks such as React, Next.js, React Native, and Express.js. His design workflow is enhanced by tools like Figma, allowing him to collaborate effectively and translate ideas into intuitive interfaces.",
  "Now in the UK, Marouane is exploring opportunities to grow his career by contributing to ambitious teams and impactful projects. With a sharp eye for design, strong problem-solving skills, and a user-first mindset, he is committed to building scalable, elegant, and purposeful digital solutions — both on the web and on mobile.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React JS",
    experience: "3+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "2+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React Native",
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
    experience: "1.5+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Tailwind css",
    experience: "2+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Full-Stack Developer & Co-Founder",
    company: "WebArtistry",
    duration: "March 2024 - Present",
    description:
      "Co-founded WebArtistry, a creative tech duo focused on building user-centric web experiences using React, Next.js, and Tailwind CSS. I lead full-stack development on client projects — from setting up scalable Express and MongoDB backends to designing pixel-perfect frontends using Figma and React. I also contribute to mobile app development using React Native and ensure smooth UI/UX delivery across platforms.",
  },
  {
    title: "MERN Stack Developer",
    company: "Freelance / Personal Projects",
    duration: "January 2022 – March 2024",
    description:
      "Worked independently on a variety of full-stack web applications using the MERN stack. Delivered secure, responsive, and efficient applications, integrating features like JWT authentication, file uploads with Cloudinary, and admin dashboards. Built dynamic user interfaces using React and Tailwind, and deployed projects to Vercel and Render. Strong focus on clean architecture, reusable components, and optimized performance.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Tech Innovations Inc.",
    duration: "June 2021 – December 2021",
    description:
      "Supported the development of internal tools and web interfaces using React.js, HTML, CSS, and JavaScript. Collaborated with senior developers to implement new UI features, fix bugs, and test components. Participated in Agile sprints, learned Git version control, and gained practical experience in modern frontend workflows and deployment.",
  }
];


export const EDUCATION = [
  {
    degree: "Diploma in Specialized Computer Development (UK Level 5 Equivalent)",
    institution: "IT-SUP College, Casablanca",
    duration: "September 2019 – July 2021",
    description:
      "Completed a Level 5 equivalent diploma focused on full-stack web development and software engineering. Studied modern programming languages, web technologies, and database systems. Built practical projects using JavaScript, PHP, and MySQL while gaining hands-on experience in software design, data structures, and teamwork.",
  },
  {
    degree: "High School Diploma – Science Stream",
    institution: "Qualifying High School in Morocco",
    duration: "September 2015 – July 2018",
    description:
      "Graduated from a science-focused program emphasizing mathematics and physics. This foundation supported my transition into the field of software development and problem-solving with technology.",
  }
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
