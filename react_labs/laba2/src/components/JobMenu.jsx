import React, { useState } from 'react';

const jobs = [
  {
    id: 1,
    name: 'Веб-разработчик',
    menuItems: [
      { skill: 'HTML', url: 'https://react.dev/' },
      { skill: 'CSS', url: 'https://react.dev/' },
      { skill: 'JavaScript', url: 'https://react.dev/' },
      { skill: 'React', url: 'https://react.dev/' },
      { skill: 'Node.js', url: 'https://react.dev/' },
      { skill: 'MongoDB', url: 'https://react.dev/' },
      { skill: 'Git', url: 'https://react.dev/' }
    ]
  },
  {
    id: 2,
    name: 'UI/UX дизайнер',
    menuItems: [
      { skill: 'Wireframing', url: 'https://react.dev/' },
      { skill: 'Sketch', url: 'https://react.dev/' },
      { skill: 'Adobe XD', url: 'https://react.dev/' },
      { skill: 'InVision', url: 'https://react.dev/' },
      { skill: 'User testing', url: 'https://react.dev/' },
      { skill: 'Visual design', url: 'https://react.dev/' },
      { skill: 'Typography', url: 'https://react.dev/' }
    ]
  },
  {
    id: 3,
    name: 'Аналитик данных',
    menuItems: [
      { skill: 'SQL', url: 'https://react.dev/' },
      { skill: 'Python', url: 'https://react.dev/' },
      { skill: 'Data visualization', url: 'https://react.dev/' },
      { skill: 'Statistics', url: 'https://react.dev/' },
      { skill: 'Machine learning', url: 'https://react.dev/' },
      { skill: 'Excel', url: 'https://react.dev/' },
      { skill: 'Tableau', url: 'https://react.dev/' }
    ]
  },
  {
    id: 4,
    name: 'Специалист по маркетингу',
    menuItems: [
      { skill: 'Social media', url: 'https://react.dev/' },
      { skill: 'SEO', url: 'https://react.dev/' },
      { skill: 'Content creation', url: 'https://react.dev/' },
      { skill: 'Email marketing', url: 'https://react.dev/' },
      { skill: 'Analytics', url: 'https://react.dev/' },
      { skill: 'Campaign planning', url: 'https://react.dev/' },
      { skill: 'Brand strategy', url: 'https://react.dev/' }
    ]
  },
  {
    id: 5,
    name: 'Руководитель проекта',
    menuItems: [
      { skill: 'Agile methodology', url: 'https://react.dev/' },
      { skill: 'Project planning', url: 'https://react.dev/' },
      { skill: 'Team management', url: 'https://react.dev/' },
      { skill: 'Risk management', url: 'https://react.dev/' },
      { skill: 'Communication', url: 'https://react.dev/' },
      { skill: 'Budgeting', url: 'https://react.dev/' },
      { skill: 'Time management', url: 'https://react.dev/' }
    ]
  }
];


const JobMenu = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  const handleJobChange = (event) => {
    const selectedJobId = Number(event.target.value);
    const selectedJob = jobs.find((job) => job.id === selectedJobId);
    setSelectedJob(selectedJob);
  };

  return (
    <div>
      <h2>Выбрать работу:</h2>
      <select onChange={handleJobChange}>
        {jobs.map((job) => (
          <option key={job.id} value={job.id}>
            {job.name}
          </option>
        ))}
      </select>
      <h2>{selectedJob.name} навыки:</h2>
      <ul>
        {selectedJob.menuItems.map((menuItem) => (
          <li key={menuItem.skill}>
            <a href={menuItem.url}>
              {menuItem.skill}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default JobMenu;