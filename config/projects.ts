import { ProjectItemProps } from "@/components/projects"


export const projectsConfig :ProjectItemProps[]  =[
  {
    title: 'E-Commerce Microservices Platform',
    date: 'March 2025',
    techstack: 'React, GO, gRPC, Docker',
    descriptions: [
      "Microservices Architecture: Designed and implemented a comprehensive microservice system for a coffee shop using Go with the Gorilla framework for RESTful services and gRPC with Protocol Buffers, reducing API response times by 30% compared to monolithic designs." ,
      "Frontend Development: Developed a responsive ReactJS application using Redux for state management and React Router for navigation, achieving a 25% improvement in user interface performance.",
      "Containerization & File Handling: Engineered scalable file handling services for multi-part uploads and efficient image processing within a Docker environment.",
     
    ],
    link: "",
  },
  {
    title: 'Restaurant Management System ',
    date: 'Feb 2025',
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
    date: ' December 2024',
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
        date: 'November 2024',
        techstack: 'Typescript , Tailwind CSS',
        descriptions: [
          "Developed a landing page for gym app using Typescript and Tailwind " ,
          // "Implemented RESTful APIs using Node.js and Express.js to handle user authentication, data retrieval, and CRUD operations.",
          // "Tools and Libraries: Integrated tools such as Axios for HTTP requests, Bcrypt for password hashing, and Mongoose for MongoDB object modelling", 
        ],
        link: ""
      }

]