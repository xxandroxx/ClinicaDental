import React from 'react'
import transbank from '../../img/transbank.png';
import { Fade } from 'react-reveal';

export const Footer = () => {
    return (
        <div className='contenedor-footer'>

            <Fade right>
                <div className='contenedor-footer-contacto'>
                    <div className='footer-contacto'>
                        <h4>Contacto</h4>
                        <div className='contenido-footer-contacto'>

                            {/* Whatsapp */}
                            <div className='contenido-footer-wsp'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                                </svg>

                                <p>+56999999999</p>
                            </div>

                            {/*Intagram*/}
                            <div className='contenido-footer-wsp'>
                                <a href="https://www.instagram.com/dental_oyt/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="4" y="4" width="16" height="16" rx="4" />
                                    <circle cx="12" cy="12" r="3" />
                                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                </svg>
                                </a>
                                <a href="https://www.instagram.com/dental_oyt/">Clinica Dental y Estética O & T</a>
                            </div>

                            {/*Facebook*/}
                            <div className='contenido-footer-wsp'>
                                <a href="https://www.facebook.com/profile.php?id=100086461121063&mibextid=LQQJ4d"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg></a>
                                <a href="https://www.facebook.com/profile.php?id=100086461121063&mibextid=LQQJ4d">Clinica Dental y Estética O&T</a>
                            </div>


                            {/*Telefono*/}
                            <div className='contenido-footer-wsp'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>

                                <p>+56658853080</p>
                            </div>
                        </div>
                    </div>

                    <div className='contenido-footer-ubicacion'>
                        <h4>Ubicación</h4>
                        <div>
                            <p>Antonio Varas 55, Oficina 807, Edificio Capital, Puerto Montt.</p>
                        </div>
                    </div>
                </div>
            </Fade>
            <div className='contenido-footer'>

                <div>
                    <p>© Copyright 2023 | Todos los derechos Reservados | Página Diseñada Sandro Ovando T.</p>
                </div>

                <div>
                    <img src={transbank} alt="transbank" />
                </div>

            </div>
        </div>
    )
}
