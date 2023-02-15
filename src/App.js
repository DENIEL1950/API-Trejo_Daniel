import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Characters from './components/Characters';
import { Route, Routes } from 'react-router-dom';
import Datos from './components/Datos';
function App() {

  const [characters, setCharacters] = useState([]);

  const initiaUrl = "https://rickandmortyapi.com/api/character";
  
  const fetchCharacteres = (url) =>{
      fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
    }
    
  useEffect(() =>{
    fetchCharacteres(initiaUrl);
  }, [])

  return ( 
    <>
      <Navbar brand={"Rick and Morty App"} />

      <Routes>

        <Route path='/' element={
          <div className='container mt-5'>
          <Characters characters={characters}/>
        </div>} />
        <Route path='/Datos' element={<Datos />} />

      </Routes>

    </>
  );
}

export default App;
