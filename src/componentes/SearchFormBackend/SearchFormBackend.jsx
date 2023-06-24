
import axios from 'axios'
import React, {useState } from 'react'

function SearchBook(){

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResults] = useState('');

    const handleInputChange = (events) => {
        setSearchTerm(events.target.value);

    };

    const handleSearch =  async (events) => {
        events.preventDefault();
        try{
            const response = await axios.get(`http://localhost:8080/books/search?q=${searchTerm}`)
            setSearchResults(response.data);
        }catch(error){
            console.log(error);
        }
    };



    return(

        <div>
            <form onSubmit={handleSearch}>
                <input type="text"value={searchTerm} onChange={handleInputChange}  placeholder='buscar libro'/>
                    <button type='submit'>Buscar</button>
            </form>

            {searchResult.length > 0 ? (
                <ul>
                    {searchResult.map((result)=>(
                        <li key={result.id}>{result.nombre}</li>
                    ))}
                </ul>
            ) : (
                <p>No se encontraron resultados</p>
            )}

        </div>
    );

}



export default SearchBook;


// export const SearchFormBackend = () => {
//     const [book,setBook] = useState([]);
//     const [tableBook,setTableBook] = useState([]);
//     const [searchBook, setSearchBook] = useState("");

//     const handleInputChange = (events) =>{
//         setSearchBook(events.target.value);
//     }

//     const buscarBook = async (id) => {
//         //await axios.get ("https://openlibrary.org/search.json?title=")
//         await axios.get(`http://localhost:8080/book?q=${searchBook}`)
//         .then(response=>{
//             console.log(response.data);
//         }).catch(error=>{
//             console.log(error);
//         })
//     }

//     useEffect(()=>{
//         buscarBook();
//     },[])


//   return (
//     <div className='App'>
//         <div className='table-responsive'>
//             <table className='table table-sm table-bordered'>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>authorbook</th>
//                         <th>editionbook</th>
//                         <th>namebook</th>
//                         <th>publishyear</th>
//                     </tr>
//                 </thead>

//                 <tbody>
                    
//                 </tbody>
//             </table>
//         </div>
//     </div>

//   )
// }

                