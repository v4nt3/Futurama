import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../DarkTheme/Dark.jsx'; 
import { useContext } from 'react';
import InstallButton from '../IntallButton/InstallButtonFT.jsx';

function Navbar({ username }) { 
  const { modoOscuro, toggleTema } = useContext(ThemeContext); 
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/characters">
            <span className="logo-text">FUTURAMA</span>
          </Link>
        </div>

        <div className="navbar-links">
          <Link 
            to="/characters" 
            className={location.pathname === '/characters' ? 'active' : ''}
          >
            Personajes
          </Link>
          <Link 
            to="/form" 
            className={location.pathname === '/form' ? 'active' : ''}
          >
            Formulario
          </Link>
          <Link 
            to="/About"
            className={location.pathname === '/About' ? 'active' : ''}
          >
            Acerca de nosotros
          </Link>
          
          {/* Botón de instalación */}
          <InstallButton />

          {/* Botón de tema oscuro/claro */}
          <button className="logout-button" onClick={toggleTema}>
            Cambiar a modo {modoOscuro ? "Claro" : "Oscuro"}
          </button>
        </div>

        {username && ( 
          <div className="navbar-user">
            Bienvenid@, {username}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
