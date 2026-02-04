import React from 'react';
import './Skills.css';

const skillsData = {
    technical: [
        'Python', 'JavaScript', 'Node.js', 'Golang', 'React',
        'Postman', 'C#', 'SQL', 'MongoDB', 'Excel'
    ],
    soft: [
        'Communication', 'Interpersonal Skills', 'Analytical Thinking',
        'Reporting', 'Detail-Oriented', 'Leadership', 'Teamwork'
    ],
    certificates: [
        'Google/Udacity Back-end Scholarship',
        'Andela/Udacity Front-end Scholarship',
        'Postman API Fundamental Student Expert'
    ]
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Achievements</h2>

                <div className="skills-grid">
                    {/* Technical Skills */}
                    <div className="skills-wrapper">
                        <h3 className="skills-category">Technical Skills</h3>
                        <div className="skills-container">
                            {skillsData.technical.map((skill, index) => (
                                <span key={index} className="skill-item technical">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="skills-wrapper">
                        <h3 className="skills-category">Soft Skills</h3>
                        <div className="skills-container">
                            {skillsData.soft.map((skill, index) => (
                                <span key={index} className="skill-item soft">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* Certificates */}
                    <div className="skills-wrapper full-width">
                        <h3 className="skills-category">Certifications & Achievements</h3>
                        <ul className="cert-list">
                            {skillsData.certificates.map((cert, index) => (
                                <li key={index} className="cert-item">{cert}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
