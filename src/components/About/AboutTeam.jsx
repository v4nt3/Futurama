import { useState } from "react";

function About() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h1 className="">Sobre Nosotros</h1>
          <p className="">
            Somos estudiantes de Ingeniería en Sistemas y de Multimedia, apasionados por la tecnología y la innovación.
          </p>
        </div>

        <div className="">
          <h2 className="">Nuestro Equipo</h2>
          <div className="">
            {/* Integrante 1 */}
            <div className="team-card">
              <img
                src="/ruta-de-la-imagen-joan.png"
                alt="Joan Sebastian Tunubala Sanchez"
                className="profile-pic"
              />
              <h3 className="">Joan Sebastian Tunubala Sanchez</h3>
              <p className="">
                Email:{" "}
                <a href="mailto:jstunubalas@correo.usbcali.edu.co" className="team-email">
                  jstunubalas@correo.usbcali.edu.co
                </a>
              </p>
            </div>

            {/* Integrante 2 */}
            <div className="team-card">
              <img
                src="/ruta-de-la-imagen-gissel.png"
                alt="Gissel Vanessa Quitian Rojas"
                className="profile-pic"
              />
              <h3 className="">Gissel Vanessa Quitian Rojas</h3>
              <p className="">
                Email:{" "}
                <a href="mailto:gvquitianr@correo.usbcali.edu.co" className="team-email">
                  gvquitianr@correo.usbcali.edu.co
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <p className="">
            Visita nuestro repositorio en GitHub:{" "}
            <a
              href="https://github.com/tu-repositorio"
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
