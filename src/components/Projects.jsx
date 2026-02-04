import React from 'react';
import './Projects.css';

const projects = [
    {
        title: "Advent Camp",
        description: "A full-stack camping exploration platform featuring a scalable REST API and interactive mapping. Engineered with efficient MongoDB querying for performance and integrated Cloudinary for optimized media management.",
        tags: ["Node.js", "Express", "MongoDB", "Bootstrap", "Cloudinary"],
        link: "https://adventcamp.onrender.com/"
    },
    {
        title: "MNA25 Event Platform",
        description: "Custom event registration platform facilitating seamless payments via secure PSP integration. Features a robust admin portal with CSV data export capabilities for streamlined attendee management.",
        tags: ["Node.js", "Express", "Handlebars", "MongoDB"],
        link: "https://github.com/Tmony408/MNA25"
    },
    {
        title: "TmonyStore API",
        description: "A comprehensive e-commerce REST API backend supporting modern shopping features. Implements full-featured cart management, product catalogs, and secure order processing workflows.",
        tags: ["Node.js", "Express", "MongoDB", "REST API"],
        link: "https://github.com/Tmony408/TmonyStore"
    },
    {
        title: "Blog Box",
        description: "A full-featured CMS blog platform built with Django and PostgreSQL. Provides a powerful content management interface for creating, editing, and managing posts with robust database performance.",
        tags: ["Django", "PostgreSQL", "Python", "CMS"],
        link: "https://github.com/Tmony408/BlogBox"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
