import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../../styles/Header.css';

function Header() {
  const currentPage = useLocation();

  return (
    <header className="header-div">
      <Link to="/">
        <img src={logo} alt="logo Kasa" className="kasa-logo" />
      </Link>
      <nav className="header-nav">
        <Link
          to="/"
          className={currentPage.pathname === '/' ? 'active' : 'non-active'}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={
            currentPage.pathname === '/about' ? 'active' : 'non-active'
          }
        >
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
