import React from 'react'
import Header from '../../componentes/Header/Header';
import { Outlet } from 'react-router-dom';
import BookList from '../../componentes/BookList/BookList';

const Home = () => {
  return (
    <main>
      {/* Aqui esta por defecto extrayendo, agregando para que cuando se compile salga a primera vista el header
      el outlet y el main book */}
      <Header />
      <Outlet />
{/*      <BookList/> */}
    </main>
  )
}

export default Home