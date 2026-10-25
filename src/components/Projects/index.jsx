import jobbyImage from "../../assets/jobby-app.png";
import nxtwatch from "../../assets/nxtwatch.png";
import popularRepos from "../../assets/popular-repos.png";
import movieDBImage from "../../assets/movieDB-app.png";
import nxtCartImage from "../../assets/nxt-cart-image.png";

import "./index.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <p className="section-label">Projects</p>

        <h2>Things I have built</h2>

        <div className="projects-list">
          <div className="project-card">
            <img
              src={movieDBImage}
              alt="Movie Database App"
              className="project-image"
            />
            <h3>Movie Database App</h3>
            <p>
              A movie discovery application built with React, featuring popular
              movies, top-rated movies, upcoming releases and movie search using
              API integration.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>REST API</span>
              <span>CSS</span>
            </div>

            <div className="project-links">
              <a
                href="https://shaheermoviedatabaseapp.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/dragon12-arch/movieDatabaseApp"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="project-card">
            <img src={jobbyImage} alt="jobby app" className="project-image" />
            <h3>Jobby App</h3>
            <p>
              A job search application built with React, featuring job listings,
              filters, search and job details.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
            <div className="project-links">
              <a href="#" target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a
                href="https://github.com/dragon12-arch/jobby-app"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <img
              src={nxtwatch}
              alt="NxtWatch project"
              className="project-image"
            />

            <h3>NxtWatch</h3>

            <p>
              A video streaming application built with React, featuring
              authentication, protected routes, video browsing and saved videos.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <div className="demo-credentials">
              <h4>Demo Login</h4>
              <p>
                <strong>Username:</strong> rahul
              </p>
              <p>
                <strong>Password:</strong> rahul@2021
              </p>
            </div>

            <div className="project-links">
              <a
                href="https://shaheerknxt.ccbp.tech/login"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <div className="project-card">
            <img
              src={nxtCartImage}
              alt="E-commerce Shopping Website"
              className="project-image"
            />

            <h3>Nxt Trendz E-commerce Shopping Website</h3>

            <p>
              A responsive e-commerce application built with React using the
              DummyJSON API. Features include product search, category and
              rating filters, price sorting, and shopping cart management.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>DummyJSON API</span>
              <span>CSS</span>
            </div>

            <div className="demo-credentials">
              <h4>Demo Login</h4>
              <p>
                <strong>Username:</strong> rahul
              </p>
              <p>
                <strong>Password:</strong> rahul@2021
              </p>
            </div>

            <div className="project-links">
              <a
                href="https://shahnxttrends.ccbp.tech/login"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/dragon12-arch/nxttrends-cart-features"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="project-card">
            <img
              src={popularRepos}
              alt="Popular repos"
              className="project-image"
            />
            <h3>Github Popular Repos</h3>
            <p>
              A Github repos searching platform. most popular github repos can
              find here.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
            <div className="project-links">
              <a
                href="https://shahGitRepos.ccbp.tech"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
