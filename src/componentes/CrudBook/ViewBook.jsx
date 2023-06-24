import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewBook() {
  const [book, setBook] = useState({
    namebook: "",
    authorbook: "",
    editionbook: "",
    publishyear: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:8080/book/${id}`);
    setBook(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalles del Libro</h2>

          <div className="card">
            <div className="card-header">
            Lista del libro ingresado : {book.id}
              <ul className="list-group list-group-flush">
                

              <li className="list-group-item">
                  <b>Autor del libro:</b>
                  {book.authorbook}
                </li>


                <li className="list-group-item">
                  <b>Edicion del libro:</b>
                  {book.editionbook}
                </li>

                <li className="list-group-item">
                  <b>Nombre del libro:</b>
                  {book.namebook}
                </li>

                <li className="list-group-item">
                  <b>Año de publicación:</b>
                  {book.publishyear}
                </li>

              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Regresar a la pagina PRINCIPAL
          </Link>
        </div>
      </div>
    </div>
  );
}
