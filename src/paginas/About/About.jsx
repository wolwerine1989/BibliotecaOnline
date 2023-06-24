import React from 'react';
import "./About.css";
//import aboutImg from "../../componentes/images/about-img.jpg";
import logoLibro from "../../componentes/images/logoLibro.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {logoLibro} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Libreria Mente Fresca</h2>
            <p className='fs-17'>Somos una Biblioteca Online que quiere incentivar la lectura en los niños, jovenes y adultos. Para ello hemos creadp esta pagina para que puedan tener
            una mejor idea, del tipo de libro que desearian escoger para leeer</p>
            <p className='fs-17'>Nos encontramos en Latacunga - Ecuador. Para mayor informacion contactar al numero: 134568946 o tambien al correo:juanitoperez@gmail.com  </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
