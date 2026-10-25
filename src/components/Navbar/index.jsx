import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo-name">Shaheer.</h1>

      <ul className="list-container">
        <li className="list-item">
          <a href="#home">Home</a>
        </li>
        <li className="list-item">
          <a href="#about">About</a>
        </li>
        <li className="list-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="list-item">
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#certificates">Certificates</a>
        </li>
        <li className="list-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
