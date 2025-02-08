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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  react,
  Swift,
  figma,
  docker,
  webdev,
  fullstack,
  vehiclerent,
  meta,
  firebase,
  appdev,
  starbucks,
  tesla,
  shopify,
  maxgen,
  gbc,
  silverwing,
  freelance,
  carrent,
  jobit,
  foodapp,
  tripguide,
  threejs,
} from "../assets";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Application Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Swift",
    icon: Swift,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "React Developer",
    company_name: "Freelance",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Present",
    points: [
      "Developing dynamic user interfaces with React.js, Next.js and three.js for 3D animation.",
      "Managing application state using Redux and Context API.",
      "Optimizing performance with lazy loading, memoization, and server-side rendering.",
      "Collaborating with designers and backend developers to create seamless applications.",
    ],
  },
  {
    title: "Application Developer",
    company_name: "George Brown College",
    icon: appdev,
    iconBg: "#383E56",
    date: "Sept 2023 - Sept 2024",
    points: [
      "Developing and maintaining mobile applications for Android and iOS using SwiftUI.",
      "Implementing push notifications, in-app purchases, and location-based services.",
      "Building web applications using Angular and integrating third-party APIs.",
      "Optimizing app performance and ensuring seamless user experiences.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Maxgen Technologies Ltd.",
    icon: fullstack,
    iconBg: "#E6DEDD",
    date: "May 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, and other related technologies.",
      "Building and managing RESTful APIs and database interactions with MongoDB and SQL.",
      "Implementing authentication and authorization using JWT and OAuth.",
      "Deploying applications on cloud platforms like AWS and Firebase.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "SilverWings Technology Ltd.",
    icon: webdev,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Designing and developing responsive web applications using HTML, CSS, JavaScript, and modern frameworks like Vue.js.",
      "Ensuring cross-browser compatibility and performance optimization.",
      "Implementing SEO best practices to enhance visibility and search ranking.",
      "Working with RESTful APIs and integrating backend services.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jay proved me wrong.",
    name: "Ashif Hingora",
    designation: "CTO",
    company: "SilverWings Technology Ltd.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jay does.",
    name: "Damini Patel",
    designation: "COO",
    company: "Viral Enterprises",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After Jay optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "George Brown",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food App",
    description:
      "A mobile application that enables users to explore, save, and manage food recipes with a fully responsive design, incorporating smooth animations, image caching, and modern UI styling using Reanimated and Tailwind CSS.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Reanimated",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Expo",
        color: "orange-text-gradient",
      },
    ],
    image: foodapp,
    source_code_link: "https://github.com/Jayp76557/FoodApp.git ",
  },
  {
    name: "Vehicle Rental",
    description:
      "This application built with ReactJS and Tailwind CSS that enables users to browse, book, and manage car rentals seamlessly, offering a responsive and visually appealing experience.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Mapkit",
        color: "pink-text-gradient",
      },
    ],
    image: vehiclerent,
    source_code_link: "https://github.com/Jayp76557/Vehicle-Rental.git",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
