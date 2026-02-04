import React from 'react';
import './Experience.css';

const experiences = [
    {
        role: "Product Operations Trainee",
        company: "Evé Technologies Inc.",
        period: "August 2025 - Present",
        achievements: [
            "Built a modular, scalable backend architecture with caching, boosting database performance by 15% and reducing server load by 12%.",
            "Produced system diagrams to align teams, reducing implementation errors by 18%.",
            "Streamlined troubleshooting with cross-functional collaboration, decreasing bug resolution time by 10%.",
            "Developed RESTful APIs with clear separation of concerns, cutting feature rollout time by 20%."
        ]
    },
    {
        role: "Product Operations Trainee",
        company: "FairMoney",
        period: "March 2024 - September 2024",
        achievements: [
            "Analyzed transactions and provided detailed reports, enhancing strategic planning and operational efficiency.",
            "Implemented effective routing protocols that reduce processing errors by 5% and decrease transaction delays by 3%.",
            "Identified and resolved discrepancies during the reconciliation process to ensure accurate financial records."
        ]
    },
    {
        role: "Back End Developer",
        company: "Incognito Tech-Solutions Limited",
        period: "November 2023 - November 2024",
        achievements: [
            "Increased database performance by 10% using a combination of indexing and queries optimization.",
            "Developed and optimized RESTful APIs for efficient data exchange, improving application performance.",
            "Collaborated with cross-functional teams to troubleshoot issues and deliver high-quality software solutions."
        ]
    },
    {
        role: "Backend Lead",
        company: "Google Developer Student Club",
        period: "September 2024 - August 2024", // Note: The date is weird in CV (Sep 2024 - Aug 2024), likely meant Aug 2025? Or just 1 year term. Keeping as is from CV logic or assuming 2024-2025 term.
        achievements: [
            "Collaborated with the team to oversee backend architecture, select technologies, and conduct code reviews.",
            "Played a key role as the media personnel in organizing and managing events and workshops."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <div className="experience-header">
                                <div>
                                    <h3 className="role-title">{exp.role}</h3>
                                    <h4 className="company-name">{exp.company}</h4>
                                </div>
                                <span className="period-badge">{exp.period}</span>
                            </div>
                            <ul className="achievements-list">
                                {exp.achievements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
