import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    
    <div className='holder'>
      
      <header className='header'>
          <Navbar />

          {/* Aqui empieza el navbar Para que se vuelva flexible a otros dispositivos */}
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>
                    Encuentra tu libro
                </h2><br/>
                <p className='header-text fs-18'>
                  LA LECTURA ES UN BOLETO GRATIS A CUALQUIER PARTE, DURANTE CUALQUIER TIEMPO Y EN CUALQUIER FECHA               
                </p>
                  <SearchForm/>
            </div>

      </header>
    </div>
  )
}

export default Header