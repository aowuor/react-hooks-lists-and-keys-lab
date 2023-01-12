import React from "react";

function ProjectItem({ name, about, technologies }) {
  const renderTechnology = technologies.map((technology, index) => {
    return <span key={index}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderTechnology}
      </div>
    </div>
  );
}

export default ProjectItem;
