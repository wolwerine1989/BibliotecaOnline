import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditBook() {
    let navigate = useNavigate();

    const {id} = useParams();

    const [book, setBook] = useState({
        namebook: "",
        authorbook: "",
        editionbook: "",
        publishyear: "",
});
     const{ namebook, authorbook, editionbook, publishyear } = book;
    
    const onInputChange=(e)=>{
        setBook({...book, [e.target.name]: e.target.value });
    }

    useEffect(() =>{
        loadBook();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/book/${id}`, book);
        navigate("/");
    }

    const loadBook = async ()=>{
        const result = await axios.get(`http://localhost:8080/book/${id}`)
        setBook(result.data);
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Actualizar Libro</h2>
                
                <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Namebook" className="form-label">
                        Nombre del libro
                    </label>
                    <input offset type={"text"}
                    className="form-control"
                    placeholder="Ingresa el nombre del libro"
                    name="namebook"
                    value={namebook}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Authorbook" className="form-label">
                        Autor del libro
                    </label>
                    <input type={"text"}
                    className="form-control"
                    placeholder="Ingresa el autor"
                    name="authorbook"
                    value={authorbook}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="editionbook" className="form-label">
                        Numero de ediciones del libro
                    </label>
                    <input type={"text"}
                    className="form-control"
                    placeholder="Ingresa las ediciones"
                    name="editionbook"
                    value={editionbook}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="publishyear" className="form-label">
                        Año de publicación
                    </label>
                    <input type={"Date"}
                    className="form-control"
                    placeholder="Ingresa el año de publicacion"
                    name="publishyear"
                    value={publishyear}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <button type="submit" className="btn btn-outline-primary">
                    Actualizar Datos
                </button>

                <Link className="btn btn-outline-danger mx-2" to="/" >
                    Cancelar
                </Link>
                </form>
            </div>
        </div>
    </div>

  );
}
