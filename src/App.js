import React, {useEffect, useSatate, useState} from 'react'
import Navbar from './components/Navbar'
import Characters from './components/Characters';
function App() {

  const [characters, setCharacters] = useSatate([]);

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
    <div className='container mt-5'>
      <Characters characters={characters}/>
    </div>
    </>
  );
}

export default App;
