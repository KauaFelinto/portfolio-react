import React from 'react';
import './Academic.css';

function Academic(){
  return(
    <section>
      <h2 className="heading">Minha <span>Formação</span></h2>

      <div className="education-row">
        <div className="education-column">

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><p>2020 - 2023</p></div>
                <h3>Ensino Médio</h3>
                <p>Ensino médio completo, tendo a formação para contratação exigente</p>
              </div>
            </div>
          </div>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className="bx bxs-calendar"></i> 2020 </div>
                <h3>Curso: Programação Básica</h3>
                <p>Em 2020 tive meu contato com a programação em um curso da Fundação Bradesco, programando pelo VisualG e aprendendo um pouco de JavaScripr</p>
              </div>
            </div>
          </div>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className="bx bxs-calendar"></i> 2023 - 2025</div>
                <h3>Ánalise e Desenvolvimento de Sistemas</h3>
                <p>Cursando ADS na faculdade FMU, melhorando minha lógica de programação e aprendendo novas teorias para me capacitar meçhor par a área</p>
              </div>
            </div>
          </div>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className="bx bxs-calendar"></i> 2023 </div>
                <h3>Dev. Fullstack: JAVA e Angular</h3>
                <p>Em 2020 tive meu contato com a programação em um curso da Fundação Bradesco, programando pelo VisualG e aprendendo um pouco de JavaScripr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Academic;
