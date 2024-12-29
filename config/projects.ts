import { ProjectItemProps } from "@/components/projects"


export const projectsConfig :ProjectItemProps[]  =[
     
  {
    title: 'GitHub Repository Management Tool ',
    date: 'September 2024',
    techstack: 'Bash , GitHub API, AWS EC2, Linux',
    descriptions: [
      "Developed and deployed a GitHub Repository Management Tool on AWS EC2, utilizing Bash scripting and the GitHub API to manage repositories and user data efficiently." ,
      "The tool supports user authentication, access control, project tracking, workflow management, and pull request monitoring. It includes error handling, retry mechanisms, and dynamic user prompts for a seamless experience.",
      "The project simplifies repository and user interaction management on GitHub, offering a comprehensive solution for developers and repository administrators.", 
    ],
    link: "",
  },
  {
    title: 'Car Showroom ERP System',
    date: ' December 2024',
    techstack: ' React, Express.js, Node.js, MySQL, Tailwind CSS ',
    descriptions: [
      "Developed a comprehensive ERP system tailored for managing car showroom operations. " ,
      "Integrates key functionalities such as employee management, car sales tracking, inventory monitoring, and customer interactions to streamline business processes efficiently. ",
      "Impact: Centralized data management, automated routine tasks, and improved operational efficiency with realtime analytics and reporting.", 
    ],
    link: ""
  },
    {
        title: 'Scheduler',
        date: ' July 2024',
        techstack: 'React.js ',
        descriptions: [
          "Web-based scheduler application built in React.js that allows users to visualize and analyze various CPU scheduling" ,
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
          "Developed a secure and encrypted text-sharing web application using TypeScript,Tailwind, MongoDB, and Prisma" ,
          "The tool ensures confidential communication by encrypting messages with a user-provided password and securely storing them. Users can set expiration times for messages, which automatically delete after the specified duration.",
          "Used AES-256 encryption for messages using Crypto module for Secure storage and expiration mechanism for secret messages. ", 
        ],
        link: "https://secret-pass-lovat.vercel.app‍"
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