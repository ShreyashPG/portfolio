import { ProjectItemProps } from "@/components/projects"


export const projectsConfig :ProjectItemProps[]  =[
     
  {
    title: 'GitHub Repository Management Tool ',
    date: ' August 2024 - September 2024',
    techstack: 'Bash , GitHub API, AWS EC2, Linux',
    descriptions: [
      "Developed and deployed a GitHub Repository Management Tool on AWS EC2, utilizing Bash scripting and the GitHub API to manage repositories and user data efficiently." ,
      "The tool supports user authentication, access control, project tracking, workflow management, and pull request monitoring. It includes error handling, retry mechanisms, and dynamic user prompts for a seamless experience.",
      "The project simplifies repository and user interaction management on GitHub, offering a comprehensive solution for developers and repository administrators.", 
    ],
    link: "",
  },
  {
    title: 'Huffman Compressor',
    date: ' August 2023',
    techstack: 'JAVA , Huffman Encoding, Google Guava ',
    descriptions: [
      "Developed a Java-based text compression tool utilizing the Huffman encoding scheme for efficient file compression." ,
      "The tool compresses text files into a .cmp format using Huffman encoding and decodes them back to .txt format, producing the compressed text of the original file.",
      "Utilizes Google Guava for efficient bi-directional mapping and UTF-8 encoding for reliable text compression and decompression.", 
    ],
    link: ""
  },
    {
        title: 'Scheduler',
        date: ' August 2024',
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
        title: 'Social Media App',
        date: 'December 2023',
        techstack: 'MERN Stack',
        descriptions: [
          "Developed a full-stack social media application using the MERN stack, incorporating modern frontend and backend technologies." ,
          "Implemented RESTful APIs using Node.js and Express.js to handle user authentication, data retrieval, and CRUD operations.",
          "Tools and Libraries: Integrated tools such as Axios for HTTP requests, Bcrypt for password hashing, and Mongoose for MongoDB object modelling", 
        ],
        link: ""
      }

]