import React from 'react';
import './About.css';

function About(){
  return(
    <section className="about" id="about">
      <h2 className="heading">Sobre <span>Mim</span></h2>

      <div className="about-img">
        <img src="../../images/me-port.jpg" alt="perfil"/>
        <span className="circle-spin"></span>
      </div>

      <div className="about-content">
        <h3>Frontend Developer!</h3>
        <p>Sou um jovem apaixonado por tecnologia com um forte interesse em desenvolvimento web. Estou ansioso para iniciar minha carreira e contribuir para projetos. Tenho habilidades em HTML, CSS e JavaScript, e Angular. Minha dedicação à usabilidade e design centrado no usuário me motiva a criar experiências web incríveis. Estou à procura da minha primeira oportunidade para aplicar meu conhecimento e paixão para desenvolvimento Front-end.</p>
      </div>
    </section>
  );
} 

export default About;
