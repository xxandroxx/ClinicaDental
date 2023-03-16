import React from 'react';
import { Fade } from 'react-reveal';

//imagenes
import PerfilDrOvando from '../../../img/PerfilDrOvando.JPG';
import avatar from '../../../img/avatar.jpg';
import iconoDiente from '../../../img/iconoDiente.png';
import { Link } from 'react-router-dom';

const EspecialistasInicio = () => {
    return (
        <div className='contenido-parrafo-dos'>
            <h3>Nuestros Especialistas</h3>
            <Fade bottom>
                <div className='contenido-tarjetas'>
                    <div className='tarjetas'>
                        <div className='tarjeta-img-inicio'>
                            <img src={PerfilDrOvando} alt="tarjeta" />
                        </div>
                        <h4>Dr. Pedro Pablo Ovando T.</h4>
                        <h5>Implantólogo</h5>
                        <div className='parrafo-tarjeta-especialistas'>
                            <ul>
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /> <p>Cirujano Dentista</p> – <span>USS</span></li>
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /> <p>Diplomado Implantología oral quirúrgica y protésica</p> – <span>USS</span></li>
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /> <p>Diplomado Experto en implantología digital quirúrgico protésico</p> – <span>UCAM</span></li>
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /><p>Aplicación de ácido hialuronico, Bioestimulación con factores de crecimiento autógeno, Tóxina botulínica, Bioplastía facial e Hilos reabsorvibles</p> – <span>ACHEOF</span></li>
                            </ul>
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
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /> <p>Cirujano Dentista</p> – <span>USS</span></li>
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /> <p>Diplomado Implantología oral quirúrgica y protésica</p> – <span>USS</span></li>
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /> <p>Diplomado Experto en implantología digital quirúrgico protésico</p> – <span>UCAM</span></li>
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /><p>Aplicación de ácido hialuronico, Bioestimulación con factores de crecimiento autógeno, Tóxina botulínica, Bioplastía facial e Hilos reabsorvibles</p> – <span>ACHEOF</span></li>
                            </ul>
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
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /> <p>Cirujano Dentista</p> – <span>USS</span></li>
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /> <p>Diplomado Implantología oral quirúrgica y protésica</p> – <span>USS</span></li>
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /> <p>Diplomado Experto en implantología digital quirúrgico protésico</p> – <span>UCAM</span></li>
                                <li className='parrafo-tarjeta-especialista-lista'> <img src={iconoDiente} alt="" /><p>Aplicación de ácido hialuronico, Bioestimulación con factores de crecimiento autógeno, Tóxina botulínica, Bioplastía facial e Hilos reabsorvibles</p> – <span>ACHEOF</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='btn-ver-especialistas'>
                    <Link><p>Ver más</p></Link>
                </div>
            </Fade>
        </div>
    );
}

export default EspecialistasInicio;
