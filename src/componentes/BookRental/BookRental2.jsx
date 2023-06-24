import React, { useState, useEffect } from 'react';

function BookReservation() {
  const [reserved, setReserved] = useState(false);
  const [bookName, setBookName] = useState('');

  const handleBookNameChange = (event) => {
    setBookName(event.target.value);
  };

  const reserveBook = () => {
    if (bookName !== '') {
      setReserved(true);
      setTimeout(() => {
        setReserved(false);
      }, 5000);
    }
  };

  return (
    <div>
      <h2>Reserva de Libro</h2>
      <label>
        Nombre del libro:
        <input type="text" value={bookName} onChange={handleBookNameChange} />
      </label>
      <button onClick={reserveBook}>Reservar Libro</button>
      {reserved ? (
        <p>¡El libro {bookName} está reservado!. Te quedan 5 dias para regresar el libro</p>
      ) : (
        <p>El libro no está disponible.</p>
      )}
    </div>
  );
}

export default BookReservation;