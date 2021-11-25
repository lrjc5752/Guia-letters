import React, {useState} from 'react';


const Formulario = ({guardarbusquedaLetra}) =>  {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, guardarError] = useState(false);

    const {artista, cancion} = busqueda;


// funcion a cada input para leer su contenido
    const actualizarState = evento => {
           
           guardarBusqueda({...busqueda, [evento.target.name] : evento.target.value})

    };
// consultar las Apis
    const buscarInformacion = evento => {
        evento.preventDefault();
        if (artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return;
        };
        guardarError(false);
        //todo bien pasar al componente principal
        guardarbusquedaLetra(busqueda);
    };
  return (
    <div className = 'bg-info'>
         
        <div className = 'container'>
        {error ? <p className='alert alert-danger text-center p-2'>Todos los campos son 
                 obligatorios</p> : null}
             <div className = 'row'>
                
                <form
                    onSubmit={buscarInformacion}
                    className = 'col card text-white bg-transparent mb-5 pt-5 pb-2'
                >
                    <fieldset>
                        <legend className = 'text-center'>Buscador Letras Canciones</legend>
                       
                        <div className = 'row'>
                            <div className = 'col-md-6'>
                                <div className = 'form-group'>
                                    <label>Artista</label>
                                    <input
                                      type = 'text'
                                      className = 'form-control'
                                      name='artista'
                                      placeholder='Nombre Artista'
                                      onChange={actualizarState}
                                      value={artista}
                                    />
                                </div>
                            </div>
                            <div className = 'col-md-6'>
                            <div className = 'form-group'>
                                    <label>Cancion</label>
                                    <input
                                      type = 'text'
                                      className = 'form-control'
                                      name='cancion'
                                      placeholder='Titulo Cancion'
                                      onChange={actualizarState}
                                      value={cancion}
                                    />
                                </div>

                            </div>
                        </div>
                            <button
                             type='submit'
                             className='btn btn-primary float-right'

                            >Buscar</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Formulario;
