import React, { useState } from 'react'
import { useState } from 'react';

function Empleado() {
 
    //Declaraciones las variables con estado
    // nombre de las variables y metodos que la modifica 
    const[nombre,setnombre] = useState(" ");
    const[apellido1,setape1] = useState(" ");
    const[apellido2,setape2] = useState(" ");
    const[iniciales,setiniciales] = useState(" ");


    //Visualizamos las iniciales
    //Preventdefault inpone que el formulario se renderize de nuevo
    const pintarIniciales = (e) =>{
        e.preventDefault();
        setiniciales(`${nombre[0]}.${apellido1[0]}`.toUpperCase)
    }
 
 
    return (
    <form onSubmit={pintarIniciales}>
        <p> nombre </p>
        <input name="nombre" type="text" value={nombre} onChange={(e) => setnombre(e.target.value)} />
        <br />
        <p> Apellido 1  </p>
        <input name="apellido1" type="text" value={apellido1} onChange={(e) => setape1(e.target.value)} />
        <br />
        <p> Apellido 2  </p>
        <input name="nombre" type="text" value={apellido2} onChange={(e) => setape2(e.target.value)} />
        <br />
        <p>Iniciales {iniciales}</p>
        <button type='submit'> Aceptar</button>


    </form>
  )
}

export default Empleado
