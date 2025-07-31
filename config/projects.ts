import { ProjectItemProps } from "@/components/projects"


export const projectsConfig :ProjectItemProps[]  =[

   {
    title: 'Distributed Chat Application',
    date: ' June 2025 - June 2025',
    techstack: ' React, Express.js, Node.js, MongoDB, Redis, AWS, HAProxy, Docker, Tailwind CSS ',
    descriptions: [
      "Built a scalable, distributed real-time chat application supporting personal, group, global messaging using Socket.io and Express.js." ,
      "Implemented Redis Pub/Sub for real-time synchronization across load-balanced backend servers, enabling consistent room/user/message updates without database polling. ",
      "Used HAProxy for horizontal scalability with round-robin load balancing and MongoDB for chat message persistence.",
      "Developed a responsive frontend in React.js and containerized the entire stack with Docker & Docker Compose for seamless development and deployment. ", 
    ],
    link: "https://distributed-chat-application-rho.vercel.app/"
  },

 
   {
    title: 'Flight Incident Reporting System',
    date: 'May 2025 - May 2025',
    techstack: 'React.js · Tailwind CSS · Node js · Express.js · FastAPI',
    descriptions: [
      "	Architected a full-stack web application for flight incident management with role-based access for Crew, Pilot, Admin, Ground Staff, and Auditor, leveraging secure MongoDB-based session management with JWT and HTTP-only cookies to eliminate session hijacking risks and ensure enterprise-grade security." ,
      `	Engineered advanced features including rule-based incident classification (e.g., "engine failure" → "Engine Failure"), inline editing for Admin/Auditor, Excel export for actionable insights, and AI-driven incident risk forecasting using Facebook Prophet to predict incident probabilities (e.g., "30% chance of turbulence in 7 days").`,
      "	Pioneered a scalable, production-ready system with a robust MongoDB backend, optimized APIs, and planned integration of facebook/bart-large-mnli for zero-shot AI classification, simplified to rule-based logic due to Windows-specific tokenizers constraints, laying the foundation for future ML-driven safety enhancements.",
    ],
    link: "https://github.com/ShreyashPG/Flight-Incident-Reporting-System",
  },
   {
    title: 'Car Showroom ERP System',
    date: ' Apr 2025 - May 2025',
    techstack: ' React, Redux, Express.js, Node.js, MySQL, Tailwind CSS ',
    descriptions: [
      "Designed a modular ERP system to streamline car showroom operations" ,
      "Implemented a component-based architecture in React for efficient UI management and Tailwind CSS for consistent, responsive design.",
      "Integrated REST APIs with Express.js and Node.js for real-time operations and MySQL for secure, relational data management.",
      "Developed robust CRUD functionalities for employee, inventory, and sales tracking, ensuring seamless process automation.", 
    ],
    link: "https://car-showroom-frontend-sfie.vercel.app"
  },
   {
        title: 'Shadow Secret',
        date: ' Nov 2024 - Dec 2024',
        techstack: 'Full Stack Project',
        descriptions: [
          "Built a highly secure text-sharing platform with end-to-end AES-256 encryption and robust data validation in TypeScript." ,
          "Utilized Prisma ORM for optimized database queries and MongoDB for efficient, scalable data storage.",
          "Developed expiration-based message auto-deletion and advanced password-protected message sharing to enhance security.", 
        ],
        link: "https://secret-pass-lovat.vercel.app/"
      },
    {
    title: 'Aptitude CLI',
    date: 'April 2025 - April 2025',
    techstack: 'React.js · Tailwind CSS · Node js · Express.js · Go',
    descriptions: [
      "The Aptitude CLI App is a command-line based interactive quiz tool built in Go, designed to help users practice aptitude questions categorized by difficulty levels. The app loads questions from a structured Aptitude.json file and offers multiple test modes including: 1. Time-bound tests 2. Randomized quizzes 3. Difficulty-level based quizzes (Easy, Medium, Hard)" ,
     
    ],
    link: "https://github.com/ShreyashPG/aptitude-cli",
  },
  
       {
        title: 'Folder Sturcture Generator',
        date: ' July 2025',
        techstack: 'Javascript, NPM Package' ,
        descriptions: [
          "A powerful CLI tool to instantly generate folder and file structures from text-based tree diagrams." ,
          "Perfect for bootstrapping projects, creating boilerplates, or scaffolding reusable layouts.",
          "Supports direct input, file input, and piping — works cross-platform with color-coded output.", 
        ],
        link: "https://www.npmjs.com/package/folder-generator"
      }

]