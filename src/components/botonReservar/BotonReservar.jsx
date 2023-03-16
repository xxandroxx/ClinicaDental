import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const BotonReservar = () => {
    return (
        <Fade bottom>
            <div className='contenedor-boton-reservar'>
                <Link><p>Reservar Aquí</p></Link>
            </div>
        </Fade>
    );
}

export default BotonReservar;
