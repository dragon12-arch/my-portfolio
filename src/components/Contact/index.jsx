import "./index.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <p className="section-label">Contact</p>

        <h2>Let's work together</h2>

        <p className="contact-description">
          Have a project in mind or looking for a developer? Feel free to get in
          touch with me.
        </p>

        <div className="contact-details">
          <a href="mailto:shaheershahee75@gmail.com">Email Me</a>

          <a
            href="https://www.linkedin.com/in/muhammed-shaheer-k-a9bb51321"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="https://github.com/dragon12-arch" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
