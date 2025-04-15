import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
    mobile, 
    backend, 
    creator, 
    web, 
    javascript, 
    typescript, 
    html, 
    css, 
    reactjs, 
    tailwind,
    redux,
    docker,
    figma,
    git,
    threejs,
    nodejs,
    mongodb,
    meta, 
    starbucks, 
    tesla, 
    shopify, 
    carrent, 
    jobit, 
    tripguide, 
} from "../assets";

import xperience from "../assets/company/xperience.png";

 export { 
  
  xperience
};
 

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Hardware-Software Integrator",
    icon: web,
  },
  {
    title: "STEM Education Advocate",
    icon: mobile,
  },
  {
    title: "Systems Architect",
    icon: backend,
  },
  {
    title: "Firmware Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Computer Science Consulting & Curriculum Devolpment Intern",
    companyName: "Xperience Coding LLC",
    icon: xperience,
    iconBg: "#383E56",
    date: "March 2024 - July 2024",
    points: [
      "Developed and tailored comprehensive STEM camp curricula for 2nd-8th graders, incorporating core principles of computer science, programming, and engineering. Projects included robotics with Battle Bots, CAD modeling for 3D-printed solutions, and introductory Python and JavaScript coding for hands-on application.",
      "Led curriculum consultations, leveraging knowledge of computer engineering to introduce hardware concepts such as microcontrollers and circuits, fostering a deeper understanding of how software interacts with physical systems.",
      "Mentored and trained high school volunteers, teaching them to integrate coding into engineering projects, providing real-world teaching experience while aligning with principles of embedded systems and hardware/software integration.",
      "Spearheaded the creation of interactive, scalable coding lessons by designing projects with a balance of theoretical and practical exercises, ensuring students understood foundational engineering concepts like data structures, algorithms, and the hardware-software relationship.",
      "Optimized lesson plans by incorporating computer engineering concepts such as embedded systems, microprocessor basics, and sensor integration, enhancing students' exposure to interdisciplinary applications of coding.",
    ],
  },
  {
    title: "Co - President of Education and Buisness",
    companyName: "Xperience Coding LLC",
    icon: xperience,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Transformed Xperience Coding LLC into a thriving 501(c)(3) nonprofit, leveraging leadership and vision to expand the organization beyond a school-wide event into a community-driven initiative that now serves hundreds of students, offering free coding and engineering camps to youth in the greater Lake County area.",
      "Developed and implemented dynamic STEM curricula that introduced students to coding, robotics, and engineering principles, ensuring a blend of hands-on learning with cutting-edge technologies, such as IoT, embedded systems, and 3D printing, while continually adapting the curriculum to meet the evolving needs of the community.",
      "Led a diverse team of high school volunteers, inspiring them to take ownership of lessons and projects, providing them with mentorship and leadership opportunities to grow as educators, and ensuring the smooth delivery of programming across multiple locations and age groups.",
      "Expanded the nonprofit’s reach, coordinating efforts to partner with local businesses and organizations, leading to the creation of innovative tech projects, such as virtual tours and community outreach events, and driving the nonprofit’s mission forward with increased visibility and impact.",
    ],
  },
  
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Algebr.ai",
    description:
      "Algebr.ai is an AI-powered platform that helps students master Algebra I and II with customizable practice tests, real-time difficulty adjustments, and performance tracking. Built with modern web technologies, it offers an engaging learning experience.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/okotwal17/Algebr.ai",
  },
  {
    name: "Free-Scribe",
    description:
      "Free Scribe is a machine learning app that converts voice to text in real time. Built with React and TailwindCSS, it offers an adaptive, mobile-first design, optimized for accuracy and performance. The app integrates speech-to-text functionality, providing a seamless experience across devices and environments, making it ideal for various use cases.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Rdash5678/MachineLearningAPP",
  },
  {
    name: "Nasa APP",
    description:
      "NASA React App is a dynamic web application built with React that integrates NASA's API to display real-time data such as images, news, and scientific information. I utilized React hooks for efficient state management and API calls, ensuring a seamless user experience. Custom CSS was used for professional, responsive design. This project enhanced my skills in API integration, front-end development, and creating scalable, maintainable React components.",
    tags: [
      {
        name: "API-integration",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
