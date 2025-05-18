import { ProjectItemProps } from "@/components/projects"


export const projectsConfig :ProjectItemProps[]  =[

   {
    title: 'Flight Incident Reporting System',
    date: 'May 2025 - May 2025',
    techstack: 'React.js · Tailwind CSS · Node js · Express.js · FastAPI',
    descriptions: [
      "•	Architected a full-stack web application for flight incident management with role-based access for Crew, Pilot, Admin, Ground Staff, and Auditor, leveraging secure MongoDB-based session management with JWT and HTTP-only cookies to eliminate session hijacking risks and ensure enterprise-grade security." ,
      `•	Engineered advanced features including rule-based incident classification (e.g., "engine failure" → "Engine Failure"), inline editing for Admin/Auditor, Excel export for actionable insights, and AI-driven incident risk forecasting using Facebook Prophet to predict incident probabilities (e.g., "30% chance of turbulence in 7 days").`,
      "•	Pioneered a scalable, production-ready system with a robust MongoDB backend, optimized APIs, and planned integration of facebook/bart-large-mnli for zero-shot AI classification, simplified to rule-based logic due to Windows-specific tokenizers constraints, laying the foundation for future ML-driven safety enhancements.",
    ],
    link: "https://github.com/ShreyashPG/Flight-Incident-Reporting-System",
  },
    {
    title: 'Aptitude CLI',
    date: 'April 2025 - April 2025',
    techstack: 'React.js · Tailwind CSS · Node js · Express.js · FastAPI',
    descriptions: [
      "The Aptitude CLI App is a command-line based interactive quiz tool built in Go, designed to help users practice aptitude questions categorized by difficulty levels. The app loads questions from a structured Aptitude.json file and offers multiple test modes including: 1. Time-bound tests 2. Randomized quizzes 3. Difficulty-level based quizzes (Easy, Medium, Hard)" ,
     
    ],
    link: "https://github.com/ShreyashPG/aptitude-cli",
  },
  {
    title: 'Restaurant Management API ',
    date: 'Jan 2025 - Jan 2025',
    techstack: 'GO, Gin, MongoDB, JWT',
    descriptions: [
      "•	Full-Stack Backend Development: Built a scalable restaurant management system using Go, Gin, and MongoDB, featuring RESTful APIs for user authentication, order tracking, menu management, and invoicing." ,
      "•	Security & Authorization: Implemented JWT-based authentication middleware to secure endpoints, ensuring role-based access control for admins, staff, and customers.",
      "•	Core Functionality: Designed modules for real-time order processing, table reservations, and dynamic menu updates, improving operational efficiency by 30%.",
    ],
    link: "",
  },
  {
    title: 'My GitHub Manager',
    date: 'December 2024',
    techstack: 'Bash scripting, GitHub API, Git, Linux (Ubuntu)',
    descriptions: [
      "Created a CLI-based tool for automating GitHub workflows, featuring seamless integration with the GitHub API." ,
      "Features: Secure user authentication, role-based access control, and efficient pull request monitoring.",
      "Automated repository tracking and project management tasks, reducing manual effort by 20%.",
      "Achieved 300+ downloads on npm, simplifying repository workflows for developers.", 
    ],
    link: "https://www.npmjs.com/package/my-github-manager",
  },
  {
    title: 'Project Launcher',
    date: 'Jan 2024',
    techstack: 'Javascript, Node js',
    descriptions: [
      "A command-line tool to generate folder structures for various types of projects, including frontend and backend frameworks such as React, Next.js, Vue, Nuxt, Express, TypeScript and Angular." ,
      "Provides default configuration files (like package.json, .gitignore, README.md) to get you started right away.",
      "Offers an interactive CLI to guide you through selecting the project type and providing project details.",
      "Easy to integrate into any development setup for faster project initialization.", 
    ],
    link: "https://www.npmjs.com/package/project-launcher",
  },
  {
    title: 'Car Showroom ERP System',
    date: ' Nov 2024 - Dec 2024',
    techstack: ' React, Express.js, Node.js, MySQL, Tailwind CSS ',
    descriptions: [
      "Designed a modular ERP system to streamline car showroom operations" ,
      "Implemented a component-based architecture in React for efficient UI management and Tailwind CSS for consistent, responsive design.",
      "Integrated REST APIs with Express.js and Node.js for real-time operations and MySQL for secure, relational data management.",
      "Developed robust CRUD functionalities for employee, inventory, and sales tracking, ensuring seamless process automation.", 
    ],
    link: ""
  },
    {
        title: 'Process Scheduler',
        date: ' July 2024',
        techstack: 'React.js ',
        descriptions: [
          "Web-based process scheduler application built in React.js that allows users to visualize and analyze various CPU scheduling" ,
          "The application supports multiple scheduling algorithms, including: FCFS (First-Come, FirstServed), Round Robin, Priority Scheduling, SJF (Shortest Job First)",
          "Key Features : Gantt Chart Generation, Performance Metrics Table, Comparison of Algorithms.", 
        ],
        link: "https://scheduler-flax-five.vercel.app"
      },
      {
        title: 'Shadow Secret',
        date: ' February 2024',
        techstack: 'Full Stack Project',
        descriptions: [
          "Built a highly secure text-sharing platform with end-to-end AES-256 encryption and robust data validation in TypeScript." ,
          "Utilized Prisma ORM for optimized database queries and MongoDB for efficient, scalable data storage.",
          "Developed expiration-based message auto-deletion and advanced password-protected message sharing to enhance security.", 
        ],
        link: "https://secret-pass-lovat.vercel.app/"
      },
      { 
        title: 'Gym App',
        date: 'October 2024',
        techstack: 'Typescript , Tailwind CSS',
        descriptions: [
          "Developed a landing page for gym app using Typescript and Tailwind " , 
        ],
        link: ""
      }

]