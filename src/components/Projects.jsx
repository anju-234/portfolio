import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Projects() {
  // State for filtering projects
  const [activeFilter, setActiveFilter] = useState('all');

  // List of projects with category tags
  const projects = [
    { id: 1, category: 'uiux', img: 'https://themewagon.github.io/proman/img/project-1.jpg' },
    { id: 2, category: 'graphic', img: 'https://themewagon.github.io/proman/img/project-2.jpg' },
    { id: 3, category: 'uiux', img: 'https://themewagon.github.io/proman/img/project-3.jpg' },
    { id: 4, category: 'graphic', img: 'https://themewagon.github.io/proman/img/project-4.jpg' },
    { id: 5, category: 'uiux', img: 'https://themewagon.github.io/proman/img/project-5.jpg' },
    { id: 6, category: 'graphic', img: 'https://themewagon.github.io/proman/img/project-6.jpg' },
  ];

  // Filter projects based on activeFilter state
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <div className="container-fluid d-flex justify-content-between mt-5">
        <h1 className='fw-bold text-black'>My Projects</h1>
        <ul type="none" className='d-flex justify-content-between mt-4 text-black'>
          <li onClick={() => setActiveFilter('all')} style={{ cursor: 'pointer' }}>All Projects</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li onClick={() => setActiveFilter('uiux')} style={{ cursor: 'pointer' }}>UI/UX Design</li>&nbsp;&nbsp;&nbsp;&nbsp;
          <li onClick={() => setActiveFilter('graphic')} style={{ cursor: 'pointer' }}>Graphic Design</li>
        </ul>
      </div>

      {/* Image section */}
      <div className="image-section d-flex flex-wrap ms-2 justify-content-between p-3">
        {filteredProjects.map((project) => (
          <Card key={project.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={project.img} />
          </Card>
        ))}
      </div>
    </>
  );
}

export default Projects;
