

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import SearchBook from "../../componentes/SearchFormBackend/SearchFormBackend";

//import { Outlet } from 'react-router-dom';

export default function MainBook() {


    const [books, setBooks] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:8080/books");
        setBooks(result.data);
    };

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:8080/book/${id}`);
        loadBooks();
    };

    return (


        <section className="crearlibro">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Regresar a Pagina Principal</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <Link className="btn btn-outline-light" to="/addbook">Agregar Nuevo Libro</Link>
                    <SearchBook/>

                                    </div>


            </nav>



            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">S.N</th>
                                <th scope="col">Nombre del libro</th>
                                <th scope="col">Autor del libro</th>
                                <th scope="col">Numero de ediciones del libro</th>
                                <th scope="col">Año de publicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr>
                                    <th scope="row" key={index}>
                                        {index + 1}
                                    </th>
                                    <td hidden='false'>{book.id}</td>
                                    <td>{book.namebook}</td>
                                    <td>{book.authorbook}</td>
                                    <td>{book.editionbook}</td>
                                    <td>{book.publishyear}</td>
                                    <td>
                                        
                                        <Link
                                            className="btn btn-primary mx-2"
                                            to={`/viewbook/${book.id}`}
                                        >
                                            Ver
                                        </Link>

                                        <Link
                                            className="btn btn-outline-primary mx-2"
                                            to={`/editbook/${book.id}`}
                                        >
                                            Editar
                                        </Link>

                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => deleteBook(book.id)}
                                        >
                                            Borrar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </section>



    )
}