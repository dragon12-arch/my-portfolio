import "./index.css";

const certificates = [
  {
    name: "Build Your Own Static Website",
    issuedOn: "June 25, 2024",
    link: "https://certificates.ccbp.in/intensive/static-website?id=TZSRXVFJMK",
    image: "TZSRXVFJMK.png",
  },
  {
    name: "Build Your Own Responsive Website",
    issuedOn: "July 24, 2024",
    link: "https://certificates.ccbp.in/intensive/responsive-website?id=PKRAXDYRYH",
    image: "PKRAXDYRYH.png",
  },
  {
    name: "Programming Foundations with Python",
    issuedOn: "July 27, 2025",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=OAXCPZSJKQ",
    image: "OAXCPZSJKQ_1.png",
  },
  {
    name: "Introduction to Databases",
    issuedOn: "October 27, 2024",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=MWFSRAIMXX",
    image: "MWFSRAIMXX.png",
  },
  {
    name: "Developer Foundations",
    issuedOn: "January 19, 2025",
    link: "https://certificates.ccbp.in/intensive/developer-foundations?id=WMYSQNFRGK",
    image: "WMYSQNFRGK.png",
  },
  {
    name: "Build Your Own Dynamic Web Application",
    issuedOn: "June 1, 2025",
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=SXOQESLWVL",
    image: "SXOQESLWVL.png",
  },
  {
    name: "JavaScript Essentials",
    issuedOn: "June 21, 2025",
    link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=VQIWIXDKXZ",
    image: "VQIWIXDKXZ.png",
  },
  {
    name: "Responsive Web Design using Flexbox",
    issuedOn: "January 19, 2025",
    link: "https://certificates.ccbp.in/intensive/flexbox?id=EBWVWYLQOY",
    image: "EBWVWYLQOY.png",
  },
  {
    name: "Node.js",
    issuedOn: "December 12, 2025",
    link: "https://certificates.ccbp.in/intensive/node-js?id=JFQGDHZGVY",
    image: "JFQGDHZGVY.png",
  },
  {
    name: "React JS",
    issuedOn: "July 16, 2026",
    link: "https://certificates.ccbp.in/intensive/react-js?id=BYURMOIPDV",
    image: "BYURMOIPDV_1.png",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates">
      <div className="certificates-content">
        <p className="section-label">Certificates</p>

        <h2>Certifications & Achievements</h2>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate.name}>
              <div className="certificate-image">
                <img
                  src={`/certificates/${certificate.image}`}
                  alt={certificate.name}
                />
              </div>

              <h3>{certificate.name}</h3>

              <p>Issued on {certificate.issuedOn}</p>

              <a href={certificate.link} target="_blank" rel="noreferrer">
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
