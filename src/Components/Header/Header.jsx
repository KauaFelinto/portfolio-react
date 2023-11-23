import React from 'react';
import './Header.css';
import { IoMenuSharp } from 'react-icons/io5';

function Header(){
  return(
    <header className="header">
      <a href="#casa" className="logo">Kauã</a>
      <IoMenuSharp id="menu-icon"/>

      <nav>
        <div className="navbar">
          <a href="#casa" className="active">Home</a>
          <a href="#about">Sobre</a>
          <a href="#project">Projetos</a>
          <a href="#Skills">Skills</a>
            
        </div>
      </nav>
    </header>
  );
}

export default Header;
