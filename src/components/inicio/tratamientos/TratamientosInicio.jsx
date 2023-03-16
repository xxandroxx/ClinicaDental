import React from 'react';
import { Fade } from 'react-reveal';

//Imagenes
import odontogeneral from '../../../img/odontologiageneral.jpg';
import implantologia from '../../../img/implantologia.jpg';
import endodoncia from '../../../img/endodoncia.jpg';
import estetica from '../../../img/estetica.jpg';
import periodoncia from '../../../img/periodoncia.jpg';
import rehabilitacion from '../../../img/rehabilitacion.jpg';

const TratamientosInicio = () => {
  return (
    <div className='contenido-parrafo-tres'>
    <h2>Tratamientos</h2>

    <div className='contenido-tarjetas-tratamiento-inicio'>

        <Fade bottom>
            <div className='tarjeta-tratamiento-inicio'>
                <img src={odontogeneral} alt="odontologia" />
                <h3>Odontología General</h3>
                <div className='btn-tratamiento-inicio'>
                    <p>Ver Más</p>
                </div>
            </div>

            <div className='tarjeta-tratamiento-inicio'>
                <img src={implantologia} alt="odontologia" />
                <h3>Implantología</h3>
                <div className='btn-tratamiento-inicio'>
                    <p>Ver Más</p>
                </div>
            </div>

            <div className='tarjeta-tratamiento-inicio'>
                <img src={endodoncia} alt="odontologia" />
                <h3>Endodoncia</h3>
                <div className='btn-tratamiento-inicio'>
                    <p>Ver Más</p>
                </div>
            </div>

            <div className='tarjeta-tratamiento-inicio'>
                <img src={estetica} alt="odontologia" />
                <h3>Estética</h3>
                <div className='btn-tratamiento-inicio'>
                    <p>Ver Más</p>
                </div>
            </div>

            <div className='tarjeta-tratamiento-inicio'>
                <img src={periodoncia} alt="odontologia" />
                <h3>Periodoncia</h3>
                <div className='btn-tratamiento-inicio'>
                    <p>Ver Más</p>
                </div>
            </div>

            <div className='tarjeta-tratamiento-inicio'>
                <img src={rehabilitacion} alt="odontologia" />
                <h3>rehabilitación Oral</h3>
                <div className='btn-tratamiento-inicio'>
                    <p>Ver Más</p>
                </div>
            </div>

            <div className='tarjeta-tratamiento-inicio'>
                <img src={rehabilitacion} alt="odontologia" />
                <h3>Odontopediatría</h3>
                <div className='btn-tratamiento-inicio'>
                    <p>Ver Más</p>
                </div>
            </div>

            <div className='tarjeta-tratamiento-inicio'>
                <img src={rehabilitacion} alt="odontologia" />
                <h3>Ortodoncia</h3>
                <div className='btn-tratamiento-inicio'>
                    <p>Ver Más</p>
                </div>
            </div>
        </Fade>
    </div>
</div>
  );
}

export default TratamientosInicio;
