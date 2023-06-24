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

//---------------Componentes extraccion del backend--------------
import AddBook from './componentes/CrudBook/AddBook';
import EditBook from './componentes/CrudBook/EditBook';
import ViewBook from './componentes/CrudBook/ViewBook';

//-----------------Exportacion de la API----------------
import { AppProvider } from './context';

import Rental from './paginas/Rentals/Rentals';
import MainBook from './paginas/CreateBook/MainBook';


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//Quitar la ruta si no sirve
import Libros from './componentes/BookRental/BookRental2';



//Nota: En la ruta path "/" esta siendo direccionado al home por defecto, con el slash.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
     <Routes>
      <Route path = "/" element = {<Home/>}>
          <Route path = "about" element = {<About />} />
            <Route path = "book" element = {<BookList />} />
            <Route path = "/book/:id" element = {<BookDetails />} />

            <Route path = "bookrental2" element ={<Libros/>}/>

            <Route path = "crearlibro" element={<MainBook/>}/>
            <Route path = "/addbook" element={<AddBook/>}/>
            <Route path = "/editbook/:id" element={<EditBook/>}/>
            <Route path = "/viewbook/:id" element={<ViewBook/>}/>

          </Route>
      </Routes>
    </BrowserRouter>
   </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
