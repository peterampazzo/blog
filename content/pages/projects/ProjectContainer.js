import React from 'react';
import './ProjectContainer.css';

const Project = ({ title, date, children }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <h3 className="project-date">{date}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Project;