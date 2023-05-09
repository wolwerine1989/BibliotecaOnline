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
                <p className='header-text fs-18'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Reiciendis itaque provident ut amet labore accusantium laudantium voluptatibus corporis asperiores.
                  Est ipsam quasi eveniet atque, voluptatum beatae dolores possimus similique illo.</p>
                  <SearchForm/>
            </div>

      </header>
    </div>
  )
}

export default Header