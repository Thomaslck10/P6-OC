import '../../styles/Error.css';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="error-div">
      <p className="error-404">404</p>
      <p className="error-p">Oups! La page que vous demandez n'existe pas.</p>
      <nav className="error-nav">
        <Link to="/" className="error-link">
          Retourner sur la page d’accueil
        </Link>
      </nav>
    </div>
  );
}

export default Error;
