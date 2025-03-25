import { WorkExperienceItemProps } from '@/components/work-experience-item';

export const workExperienceConfig: WorkExperienceItemProps[] = [
  {
    company: 'Pune Institute of Computer Technology',
    title: 'Frontend Developer and Database Administrator ',
    date: 'March 2024 - September 2024',
    location: 'I.T Department , P.I.C.T Pune',
    descriptions: [
      "Full-Stack Development: Architected a React.js frontend for a student/teacher data portal, automating 100% of data entry workflows and serving 250+ users." ,
      "Performance Optimization: Designed 25+ filtered queries for dataset management, reducing query response time from 5 seconds to 1.5 seconds. ",
      "Security Protocols: Implemented role-based access control and encrypted data transfers to safeguard sensitive PICT data. ", 
    ],
  },
  {
    company: 'Borgave Group - Milk Dairy',
    title: 'Backend Developer ',
    date: 'January 2025 -  Present',
    location: 'Pune',
    descriptions: [
      "Scalable Backend Architecture: Built a Node.js/Express.js backend for a Dairy ERP system, supporting 3 branches and 100+ concurrent users. Optimized RESTful APIs for a 50% faster data retrieval using MongoDB aggregation pipelines. " ,
      "Database Design: Developed MongoDB models for structured data storage. Created pre-save functions to automate loan field updates for farmers, reducing manual errors by 30%. ",
      "Security Implementation: Integrated JWT authentication and cookie-based session management to secure 50+ daily logins.", 
    ],
  }

];
