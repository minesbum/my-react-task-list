import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/tareas" className="menu-link">Tareas</Link>
        </li>
        <li className="menu-item">
          <Link to="/sobre-nosotros" className="menu-link">Sobre Nosotros</Link>
        </li>
    </ul>
    </nav>
    
  );
};

export default Menu;