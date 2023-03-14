import React from 'react'
import { Link } from 'react-router-dom'
import logoDental from '../../img/logo_original.png';

export const Navbar = () => {
    return (
        <div className='contenedor-navbar'>
            <div className='contenido-logo'>
                <img src={logoDental} alt="logo" />
            </div>
            <nav className='contenido-navbar'>
                <Link>Inicio</Link>
                <Link>Nosotros</Link>
                <Link>Especialidades</Link>
                <Link>Estética</Link>
                <Link>Contacto y Ubicación</Link>
                <div className='reservar-hora-nav'>
                    <Link>Reserva <span>Aquí</span></Link>
                </div>

            </nav>
        </div>
    )
}
