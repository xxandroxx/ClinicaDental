import React from 'react'
import reservaHora from '../../img/reserva-hora.jpg';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import TratamientosInicio from './tratamientos/TratamientosInicio';
import EspecialistasInicio from './especialistas/EspecialistasInicio';
import BotonReservar from '../botonReservar/BotonReservar';

export const Inicio = () => {


    return (
        <div className='contenedor-inicio'>

            <div className='contenido-titulo'>
                <h1>Clinica dental O&T</h1>
            </div>

            <div className='contenido-parrafo-uno'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, molestias at blanditiis ducimus fuga aliquam. Id corrupti obcaecati quos, architecto error repudiandae dignissimos molestias consequatur sapiente quia itaque, dolorem veritatis!</p>
            </div>


            {/* Reservar Hora */}
            <div className='contenedor-reservar-hora-inicio'>
                <h2>Reserva tu hora</h2>

                <div className='contenido-reservar-hora-inicio-imagen'>
                    <Fade left>
                        <img src={reservaHora} alt="reserva-hora" />
                    </Fade>

                    <Fade right>
                        <div className='contenido-reservar-hora-inicio-parrafo'>
                            <p>Atendemos de <span>Lunes</span> a <span>Sábado</span></p>
                            <p>De 09:00 a 18:00 horas</p>

                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                        </div>
                    </Fade>
                </div>

                <div className='contenido-reserva-hora-inicio-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-time" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                        <circle cx="18" cy="18" r="4" />
                        <path d="M15 3v4" />
                        <path d="M7 3v4" />
                        <path d="M3 11h16" />
                        <path d="M18 16.496v1.504l1 1" />
                    </svg>
                    <Link>Reservar Aquí</Link>
                </div>
            </div>

            <BotonReservar />

            <EspecialistasInicio />


            <TratamientosInicio />



        </div >
    )
}
