import "./index.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <p className="section-label">About Me</p>

        <h2>I'm a MERN Stack Developer</h2>

        <p>
          I am passionate about building modern, responsive and user-friendly
          web applications using React, JavaScript and the MERN stack.
        </p>

        <p>
          I enjoy learning new technologies and turning ideas into simple and
          useful digital experiences.
        </p>

        <div className="about-highlights">
          <div className="about-item">
            <h3>Core Identity & Tech Stack</h3>
            <p>
              MERN Stack Developer focused on building modern web applications
              using React, JavaScript, Node.js, Express.js and MongoDB.
            </p>
          </div>

          <div className="about-item">
            <h3>Approach & Passion</h3>
            <p>
              I focus on building clean, responsive and user-friendly web
              applications. I enjoy solving problems, learning new technologies
              and turning ideas into practical digital experiences.
            </p>
          </div>

          <div className="about-item">
            <h3>Key Highlights</h3>
            <ul>
              <li>MERN Full Stack trained</li>
              <li>B.Com Finance graduate</li>
              <li>Strong focus on React & JavaScript</li>
              <li>Built multiple web projects</li>
              <li>Continuously learning and improving</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
