import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
    const [toogleMenu,setToogleMenu] = useState(false);
    const handleNavbar = () => setToogleMenu(!toogleMenu);

  return (
    <nav className='navbar' id="navbar">
        <div className='container navbar-content flex'>
            <div className='brand-and-toogler flex flex-sb'>
                
                <Link to = "/" className='navbar-brand flex'>
                    <img src={logoImg} alt="site logo" />
                    <span className='text-uppercase fw-7 fs-24 ls-1'>
                        Main
                    </span>
                </Link>

                {/* Boton de 3 lineas */}
                <button type="button" className='navbar-toogler-btn' onClick={handleNavbar}>

                <HiOutlineMenuAlt3 size = {35} style = {{
                        color: `${toogleMenu ? "#fff" : "#010101"}`
                    }} />
                </button>
            </div>
                <div className={toogleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                    <ul className="navbar-nav">
                        <li  className='nav-item' style={{color:'red'}}>
                            <Link to = "book"
                                className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                                Pagina Principal
                            </Link>
                        </li>

                        <li style={{color:'red'}} className='nav-item'>
                            <Link to = "about"
                                className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                                Sobre Nosotros
                            </Link>
                        </li>

                        <li style={{color:'red'}} className='nav-item'>
                            <Link to = "crearlibro"
                                className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                                    crear libro
                            </Link>
                        </li>

                        <li style={{color:'red'}} className='nav-item'>
                            <Link to = "bookrental2"
                                className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                                Alquilar Libro
                            </Link>
                        </li>

                    </ul>
                </div>
        </div>
    </nav>
  )
}

export default Navbar