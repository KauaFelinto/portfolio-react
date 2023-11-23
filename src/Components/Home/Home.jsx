import React from 'react';
import './Home.css';
import { FaGithub } from 'react-icons/fa';
import { LiaLinkedinIn } from 'react-icons/lia';

function Home(){
  return(
    <section id="casa" className="home">
      <div className="home-content">
        <h1>Olá, sou <span>Kauã Cruz</span></h1>
        <h1 id="h2"><span>Dev Front-end</span></h1>
        <p>Tendo o primeiro contato com a programação em 2020, deicidi retornar no final de 2022 e com o maior foco em desenvolvimento Web. Porém, o meu maior objetivo é me tornar Desenvolvedor Front-end.</p>
        <div className="btn-box">
          <a href="https://wa.me/5511994421740?text=Ol%C3%A1%2C+sou..." target="_blank" rel="noreferrer">Contato</a>
          <a href="#" target="_blank">Curriculo</a>
        </div>
      </div>

      <div className="home-sci">  
        <FaGithub className="home-sci-a" />
        <LiaLinkedinIn className="home-sci-a"/>
      </div>
    </section>
  );
}

export default Home;
