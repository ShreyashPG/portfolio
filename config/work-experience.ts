import { WorkExperienceItemProps } from '@/components/work-experience-item';

export const workExperienceConfig: WorkExperienceItemProps[] = [
  {
    company: 'Pune Institute of Computer Technology',
    title: 'Frontend Developer and Database Administrator ',
    date: 'March 2024 - September 2024',
    location: 'I.T Department , P.I.C.T Pune',
    descriptions: [
      "Developed the frontend of a platform for managing student and staff data using React.js, improving user experience and automating data entry processes to enhance accuracy and reduce manual input errors." ,
      "Designed and optimized complex filtered queries for managing an extensive dataset with over 20+ filters, ensuring efficient data retrieval. Implemented robust authentication protocols to secure database access for PICT members. ",
      "Successfully deployed and maintained the project for over 6 months, engaging 250+ active users. ", 
    ],
  },
  {
    company: 'Borgave Group - Milk Dairy',
    title: 'Backend Developer ',
    date: 'January 2025 -  Present',
    location: 'Pune',
    descriptions: [
      "Backend Development: Engineered the backend architecture for Borgave Group’s Dairy ERP system, powering 3 active dairy branches with Node.js, Express.js, and MySQL." ,
      "Minimized manual workload by 40% through automated inventory tracking, ensuring real-time stock updates and seamless data synchronization across multiple branches.",
       
    ],
  }

];
