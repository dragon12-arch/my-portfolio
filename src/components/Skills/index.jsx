import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaServer,
  FaDatabase
} from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiJsonwebtokens } from "react-icons/si";

import "./index.css";

import './index.css'

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <p className="section-label">Skills</p>

        <h2>Technologies I work with</h2>

        <div className="skills-cards">
          <div className="skill-card">
            <h3>💻 Frontend</h3>

            <div className="skill-list">
              <span><FaHtml5 /> HTML</span>
              <span><FaCss3Alt /> CSS</span>
              <span><SiJavascript /> JavaScript</span>
              <span><FaReact /> React</span>
              <span><FaBootstrap /> Bootstrap</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>⚙️ Backend</h3>

            <div className="skill-list">
              <span><FaNodeJs /> Node.js</span>
              <span><SiExpress /> Express.js</span>
              <span><FaServer /> REST API</span>
              <span><SiJsonwebtokens /> JWT</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>🗄️ Database & Tools</h3>

            <div className="skill-list">
              <span><SiMongodb /> MongoDB</span>
              <span><FaDatabase /> SQL</span>
              <span><FaGitAlt /> Git</span>
              <span><FaGithub /> GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

