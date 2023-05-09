import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Rental() {
  const [libros, setLibros] = useState([]);
  const [alquiler, setAlquiler] = useState({ libro: '', tiempo: '' });
  const [mensaje, setMensaje] = useState('');

  // Obtener datos de la API externa
  useEffect(() => {
    axios.get('https://www.archive.org/details/')
      .then(res => {
        setLibros(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // Manejar cambios en el formulario de alquiler
  const handleInputChange = e => {
    setAlquiler({ ...alquiler, [e.target.name]: e.target.value });
  }

  // Enviar solicitud de alquiler a la API externa
  const handleAlquilar = () => {
    axios.post('https://www.archive.org/details/', alquiler)
      .then(res => {
        setMensaje(`El libro ${res.data.libro} ha sido alquilado por ${res.data.tiempo} días.`);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='Rental'>
      <h2>Lista de libros</h2>
      <ul>
        {libros.map(libro => (
          <li key={libro.id}>
            <strong>{libro.titulo}</strong> por {libro.autor}
            <button onClick={() => setAlquiler({ libro: libro.titulo })}>Alquilar</button>
          </li>
        ))}
      </ul>
      <h2>Alquilar libro</h2>
      <form>
        <label htmlFor="libro">Libro:</label>
        <input type="text" name="libro" value={alquiler.libro} readOnly /><br />
        <label htmlFor="tiempo">Tiempo de alquiler (días):</label>
        <input type="number" name="tiempo" value={alquiler.tiempo} onChange={handleInputChange} /><br />
        <button type="button" onClick={handleAlquilar}>Alquilar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}


export default Rental