import './AboutCss.css'// Asegúrate de que la ruta sea correcta

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h1 className="about-title">Sobre Nosotros</h1>
          <p className="about-description">
            Somos estudiantes de Ingeniería en Sistemas y de Multimedia, apasionados por la tecnología y la innovación.
          </p>
        </div>

        <div className="team-section">
          <h2 className="team-title">Nuestro Equipo</h2>
          <div className="team-cards">
            {/* Integrante 1 */}
            <div className="team-card">
              <img
                src="img/joanFoto.jpeg"// Asegúrate de que la ruta sea correcta
                alt="Joan Sebastian Tunubala Sanchez"
                className="profile-pic"
              />
              <h3 className="team-name">Joan Sebastian Tunubala Sanchez</h3>
              <p className="team-contact">
                Email:{" "}
                <a href="mailto:jstunubalas@correo.usbcali.edu.co" className="team-email">
                  jstunubalas@correo.usbcali.edu.co
                </a>
              </p>
            </div>

            /* Integrante 2 */
                  <div className="team-card">
                    <img
                    src="src/assets/img/VaneFoto.png" // Asegúrate de que la ruta sea correcta
                alt="Gissel Vanessa Quitian Rojas"
                className="profile-pic"
              />
              <h3 className="team-name">Gissel Vanessa Quitian Rojas</h3>
              <p className="team-contact">
                Email:{" "}
                <a href="mailto:gvquitianr@correo.usbcali.edu.co" className="team-email">
                  gvquitianr@correo.usbcali.edu.co
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="github-section">
          <p className="github-text">
            Visita nuestro repositorio en GitHub:{" "}
            <a
              href="https://github.com/v4nt3/Futurama"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              github.com/tu-repositorio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
