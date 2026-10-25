import "./index.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p>Hello, I'm</p>
        <h1>Muhammed Shaheer</h1>
        <h2>React / MERN stack Developer</h2>
        <p>
          I build modern and responsive web applications using React and
          Javascript.
        </p>
      </div>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary-btn">
          View Projects
        </a>
        <a href="#contact" className="btn secondary-btn">
          Contact Me
        </a>
        <a href="/Muhammed_Shaheer_Resume.pdf" download className="btn cv-button">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
