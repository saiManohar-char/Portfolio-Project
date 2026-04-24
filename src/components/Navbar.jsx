import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar fade-in">
      <div className="logo">MANOHAR</div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
