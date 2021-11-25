import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';
import Info from './components/Info';


function App() {

// definir el state
const [busquedaletra, guardarbusquedaLetra] = useState({});
const [letra, guardarLetra] = useState('');
const [info, guardarInfo] = useState({});

 useEffect (()=> {

  if (Object.keys(busquedaletra).length === 0) return; // para validar si un objeto esta vacio

  const consultarApiLetra = async () => {
    const {artista, cancion} = busquedaletra;
      const  url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
                   //`https://api.lyrics.ovh/v1/Metallica/Seek & Destroy`

        //const resultado = await axios(url); 
       //console.log(resultado.data.lyrics);    
      //guardarLetra(resultado.data.lyrics); 

      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
                  //`https://www.theaudiodb.com/api/v1/json/1/search.php?s=Metallica`;

      const [letra, informacion] = await Promise.all([axios(url), axios(url2)]);

      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);

      // console.log(letra.data.lyrics);
      // console.log(informacion.data.artists[0]);
          
  };
  consultarApiLetra();
}, [busquedaletra, info]);

  return (
    <Fragment>
      <Formulario
      guardarbusquedaLetra = {guardarbusquedaLetra}
      />
      <div className='container mt-5'> 
          <div className='row'>
               <div className='col-md-6'>
                <Info
                  info={info}
                />
               </div>
               <div className='col-md-6'>
                  <Cancion
                     letra={letra}
                  />
              </div>
            </div>  
      </div>
    </Fragment>
  );
}

export default App;
