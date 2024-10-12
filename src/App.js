import React, { useEffect, useState } from 'react';
import './App.css';
import profileImage from './sneha.jpg';
import aboutProfileImage from './sonu.jpg';
function App() {
  const [formFeedback, setFormFeedback] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Scroll to top functionality
  const handleScroll = () => {
    const top = window.scrollY;
    setShowScrollTop(top > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      setFormFeedback('All fields are required!');
    } else {
      setFormFeedback('Thank you for your message! I will get back to you soon.');
      e.target.reset();
    }
  };

  // Smooth scroll to a section
  const smoothScroll = (targetId) => {
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Sticky Header */}
      <header className="sticky-header">
        <nav>
          <ul>
            <li><a href="#home" onClick={() => smoothScroll('home')}>Home</a></li>
            <li><a href="#about" onClick={() => smoothScroll('about')}>About</a></li>
            <li><a href="#skills" onClick={() => smoothScroll('skills')}>Skills</a></li>
            <li><a href="#projects" onClick={() => smoothScroll('projects')}>Projects</a></li>
            <li><a href="#contact" onClick={() => smoothScroll('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <img src={profileImage} alt="Profile" className="profile-photo" loading="lazy" />
          <h1>Sneha</h1>
          <p>Student</p>
          <a href="#projects" className="cta-button" onClick={() => smoothScroll('projects')}>View Projects</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <img src={aboutProfileImage} alt="Profile" className="profile-photo" loading="lazy" />
          
          <div className="about-text">
            <p>My name is Sneha, and I am currently pursuing a Diploma in Computer Science. My passion for technology and problem-solving has driven me to acquire a diverse skill set in programming and web development.</p>
            <p>I have developed a strong foundation in several programming languages, including Python and Java, which allows me to build robust applications and solutions. My interest in technology extends to multimedia, where I explore creative ways to engage users through various media formats.</p>
            <p>Additionally, I am well-versed in Computer Networks and SQL, which equips me with the knowledge to understand and manage data communication and database management effectively. My understanding of Operating Systems has provided me with insights into the underlying mechanics of computing, allowing me to troubleshoot and optimize system performance.</p>
            <p>I have also gained hands-on experience in Full Stack Development, where I learned to create complete web applications, from front-end design to back-end functionality. I successfully completed a Springboard project focused on web development using PHP, which enhanced my skills in server-side programming and application logic.</p>
            <p>I am excited to continue expanding my knowledge and skills in the tech field, and I am eager to take on new challenges that allow me to apply my abilities in practical settings.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>My Skills</h2>
        <ul className="skills-list">
          <li>
            <i className="fas fa-code"></i>
            <span>Python</span>
          </li>
          <li>
            <i className="fas fa-java"></i>
            <span>Java</span>
          </li>
          <li>
            <i className="fas fa-database"></i>
            <span>SQL</span>
          </li>
          <li>
            <i className="fas fa-network-wired"></i>
            <span>Computer Networks</span>
          </li>
          <li>
            <i className="fas fa-desktop"></i>
            <span>Operating Systems</span>
          </li>
          <li>
            <i className="fas fa-laptop-code"></i>
            <span>Full Stack Development</span>
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>HTML Project</h3>
            <p>Sacred Heart College Madanthyar Website</p>
            <a href="https://sxehx.github.io/project/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project">
            <h3>Spring Board Project</h3>
            <p>PHP for Web Development (Module #1)</p>
            <p>I have Course completion Certificate</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i>
            Email: <a href="mailto:snehabangera62@gmail.com">snehabangera62@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-phone-alt"></i>
            Phone: 8217428325
          </p>
          {/* Social Media Links */}
          <div className="social-media">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <h3>Send Me a Message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
        {/* Feedback Message */}
        {formFeedback && <p className="form-feedback">{formFeedback}</p>}
      </section>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Back to Top
        </button>
      )}
    </div>
  );
}

export default App;
