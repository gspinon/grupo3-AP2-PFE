import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-copy">IBMEC - Todos os direitos reservados</span>
        <div className="footer-social">
          <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
          <a href="#" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
        </div>
        <div className="footer-actions">
          <a href="tel:08007718020" className="footer-btn">
            <i className="fa-solid fa-phone"></i> 0800 771 8020
          </a>
          <a href="#" className="footer-btn">Precisa de ajuda?</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;