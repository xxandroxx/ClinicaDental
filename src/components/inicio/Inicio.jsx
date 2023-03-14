import React from 'react'
import avatar from '../../img/avatar.jpg';
import odontogeneral from '../../img/odontologiageneral.jpg';
import implantologia from '../../img/implantologia.jpg';
import endodoncia from '../../img/endodoncia.jpg';
import estetica from '../../img/estetica.jpg';
import periodoncia from '../../img/periodoncia.jpg';
import rehabilitacion from '../../img/rehabilitacion.jpg';
import reservaHora from '../../img/reserva-hora.jpg';
import PerfilDrOvando from '../../img/PerfilDrOvando.JPG';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';

export const Inicio = () => {


    return (
        <div className='contenedor-inicio'>

            <div className='contenido-titulo'>
                <h1>Clinica dental O&T</h1>
            </div>



            <div className='contenido-parrafo-uno'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, molestias at blanditiis ducimus fuga aliquam. Id corrupti obcaecati quos, architecto error repudiandae dignissimos molestias consequatur sapiente quia itaque, dolorem veritatis!</p>
            </div>



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



            <div className='contenido-parrafo-dos'>
                <h3>Nuestros Especialistas</h3>
                <Fade bottom>
                    <div className='contenido-tarjetas'>
                        <div className='tarjetas'>
                            <div className='tarjeta-img-inicio'>
                                <img src={avatar} alt="tarjeta" />
                            </div>
                            <h4>Título</h4>
                            <div className='parrafo-tarjeta-especialistas'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, neque. Magnam deserunt enim eaque facilis labore repudiandae debitis a ad, quas illo accusantium quis minima? Vero quasi </p>
                            </div>
                        </div>


                        <div className='tarjetas'>
                            <div className='tarjeta-img-inicio'>
                                <img src={PerfilDrOvando} alt="tarjeta" />
                            </div>
                            <h4>Dr. Pedro Pablo Ovando T.</h4>
                            <h5>Implantólogo</h5>
                            <div className='parrafo-tarjeta-especialistas'>
                                <ul>
                                    <li>Cirujano Dentista – <span>USS</span></li>
                                    <li>Diplomado Implantología oral quirúrgica y protésica – <span>USS</span></li>
                                    <li>Diplomado Experto en implantología digital quirúrgico protésico – <span>UCAM</span></li>
                                    <li>Aplicación de ácido hialuronico, Bioestimulación con factores de crecimiento autógeno, Tóxina botulínica, Bioplastía facial e Hilos reabsorvibles – <span>ACHEOF</span></li>
                                </ul>
                            </div>
                        </div>


                        <div className='tarjetas'>
                            <div className='tarjeta-img-inicio'>
                                <img src={avatar} alt="tarjeta" />
                            </div>
                            <h4>Título</h4>
                            <div className='parrafo-tarjeta-especialistas'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, neque. Magnam deserunt enim eaque facilis labore repudiandae debitis a ad, quas illo accusantium quis minima? Vero quasi </p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>



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
                    </Fade>
                </div>
            </div>


        </div >
    )
}
