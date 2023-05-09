import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//-------------------------React Routes----------
import { BrowserRouter,Routes,Route } from 'react-router-dom'

//----------------Paginas------------------------
import Home from './paginas/Home/Home';
import About from './paginas/About/About';

//---------------Componentes---------------------
import BookList from './componentes/BookList/BookList';
import BookDetails from './componentes/BookDetails/BookDetails';

//-----------------Exportacion de la API----------------
import { AppProvider } from './context';

import Rental from './paginas/Rentals/Rentals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
     <Routes>
      <Route path = "/" element = {<Home/>}>
          <Route path = "about" element = {<About />} />
            <Route path = "book" element = {<BookList />} />
            <Route path = "/book/:id" element = {<BookDetails />} />
            <Route path = "Rental" element ={<Rental/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
