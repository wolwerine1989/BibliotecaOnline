import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookRentals() {
  const [libros, setLibros] = useState([]);
  const [alquiler, setAlquiler] = useState({ libro: '', tiempo: '' });
  const [mensaje, setMensaje] = useState('');

  // Obtener datos de la API externa
  useEffect(() => {
    axios.get('https://covers.openlibrary.org/b/id/')
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
    axios.post('https://covers.openlibrary.org/b/id', alquiler)
      .then(res => {
        setMensaje(`El libro ${res.data.libro} ha sido alquilado por ${res.data.tiempo} días.`);
      })
      .catch(err => console.log(err));
  }

  return (
    null
  );
}

//export default BookRentals;