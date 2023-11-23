import React from 'react';
import './Footer.css';
import { FaArrowUp } from 'react-icons/fa';


function Footer(){
  return(
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Kauã | all right reserved.</p>
      </div>

      <div className="footer-iconTop">
        <a href="#"><FaArrowUp /></a>
      </div>
    </footer>
  );
}

export default Footer;
