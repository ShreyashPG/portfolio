import { ProjectItemProps } from "@/components/projects"


export const projectsConfig :ProjectItemProps[]  =[

    {
        title: 'Scheduler',
        date: ' August 2024 - September 2024',
        techstack: 'React.js ',
        descriptions: [
          "Web-based scheduler application built in React.js that allows users to visualize and analyze various CPU scheduling" ,
          "The application supports multiple scheduling algorithms, including: FCFS (First-Come, FirstServed), Round Robin, Priority Scheduling, SJF (Shortest Job First)",
          "Key Features : Gantt Chart Generation, Performance Metrics Table, Comparison of Algorithms.", 
        ],
      },
      {
        title: 'Secret Pass',
        date: ' February 2024 - March 2024',
        techstack: 'Typescript, MongoDB, Prisma',
        descriptions: [
          "Developed a secure and encrypted text-sharing web application using TypeScript, MongoDB, and Prisma" ,
          "The tool ensures confidential communication by encrypting messages with a user-provided password and securely storing them. Users can set expiration times for messages, which automatically delete after the specified duration.",
          "Used AES-256 encryption for messages using Crypto module for Secure storage and expiration mechanism for secret messages. ", 
        ],
      },
      { 
        title: 'Social Media App',
        date: 'December 2023 - January 2024',
        techstack: 'MERN Stack',
        descriptions: [
          "Developed a full-stack social media application using the MERN stack, incorporating modern frontend and backend technologies." ,
          "Implemented RESTful APIs using Node.js and Express.js to handle user authentication, data retrieval, and CRUD operations.",
          "Tools and Libraries: Integrated tools such as Axios for HTTP requests, Bcrypt for password hashing, and Mongoose for MongoDB object modelling", 
        ],
      }

]