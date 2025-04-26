import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './Layout.css';

function Layout({ username }) { 
  return (
    <div className="layout">
      <Navbar username={username} /> 
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
