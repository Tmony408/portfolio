import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container container">
                <div className="hero-content">
                    <p className="hero-greeting text-cyan">
                        Hi, my name is <span className="emoji-wave">👋</span>
                    </p>
                    <h1 className="hero-title" style={{ animationDelay: '0.2s' }}>Testimony Adetula.</h1>
                    <h2 className="hero-subtitle" style={{ animationDelay: '0.4s' }}>
                        I build scalable backend systems <span className="emoji-bounce">🚀</span>
                    </h2>
                    <p className="hero-description" style={{ animationDelay: '0.6s' }}>
                        Software Engineer specializing in Backend Development and DevOps.
                        I build modular, scalable architectures and RESTful APIs with performance in mind.
                    </p>
                    <div className="hero-buttons">
                        <a href="/Testimony_Adetula_CV.pdf" className="btn btn-outline" download>Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
