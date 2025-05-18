import { WorkExperienceItemProps } from '@/components/work-experience-item';

export const workExperienceConfig: WorkExperienceItemProps[] = [
  {
    company: 'Pune Institute of Computer Technology',
    title: 'Frontend Developer and Database Administrator ',
    date: 'April 2024 - October 2024',
    location: 'I.T Department , P.I.C.T Pune',
     descriptions: [
      "Architected a React.js frontend for a student/teacher data portal, serving 250+ users." ,
      "Wrote 25+ optimized SQL queries to enhance data retrieval performance. Also implemented role-based access control and encrypted data transfers to safeguard sensitive PICT data.",
      "Successfully deployed and maintained the project for over 6 months along with integrating new requirements.", 
    ],
   
  },
  {
    company: 'Borgave Group',
    title: 'Backend Developer ',
    date: 'January 2025 -  March 2025',
    location: 'Borgave Group',
   
     descriptions: [
      "Built a Node.js/Express.js backend for a Dairy ERP system, supporting 3 branches and 100+ concurrent users. Utilized WebSockets to provide real-time updates of available products to customers." ,
      "Designed and implemented MongoDB data models for scalable storage and efficient access.",
      "Integrated JWT authentication and cookie-based session management to secure 50+ daily logins.", 
    ],
  }

];
