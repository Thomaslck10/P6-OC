import logo from '../../assets/logo-footer.svg';
import '../../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-div">
      <img src={logo} alt="logo Kasa" className="kasa-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
