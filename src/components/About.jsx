import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="bento-grid">
                    {/* Main Bio Card */}
                    <div className="bento-card bio-card">
                        <div className="bio-content">
                            <div className="profile-image-container">
                                <img src="/profile.jpg" alt="Testimony Adetula" className="profile-image" />
                            </div>
                            <div className="bio-text">
                                <h3 className="card-title">Who I Am</h3>
                                <p>
                                    I am a <strong>Software Engineer</strong> specializing in Backend Development and DevOps.
                                    Currently completing my Bachelor's degree in Computer Science at Landmark University.
                                </p>
                                <p>
                                    When I'm not optimizing database queries or arguing with API endpoints, you can find me lifting heavy circles at the gym,
                                    leveling up in games, or capturing moments through my camera lens. I believe in writing code that is as clean as my setup!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Education Card */}
                    <div className="bento-card education-card">
                        <h3 className="card-title">Education</h3>
                        <div className="edu-item">
                            <h4>Landmark University</h4>
                            <p className="edu-degree">B.Sc. Computer Science</p>
                            <p className="edu-date">Nov 2025</p>
                            <span className="tag">First Class Honors</span>
                        </div>
                    </div>

                    {/* Interests Card */}
                    <div className="bento-card interests-card">
                        <h3 className="card-title">Interests</h3>
                        <div className="tags-container">
                            <span className="tag-pill">Sports</span>
                            <span className="tag-pill">Gym</span>
                            <span className="tag-pill">Gaming</span>
                            <span className="tag-pill">Photography</span>
                            <span className="tag-pill">Tech Meetups</span>
                            <span className="tag-pill">Graphic Design</span>
                        </div>
                    </div>

                    {/* Philosophy/Stats Card */}
                    <div className="bento-card stats-card">
                        <div className="stat-item">
                            <span className="stat-number">2+</span>
                            <span className="stat-desc">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-desc">Projects Delivered</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
