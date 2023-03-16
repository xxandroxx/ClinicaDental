import React from 'react'
import { Banner } from './components/banner/Banner'
import { Footer } from './components/footer/Footer'
import { Inicio } from './components/inicio/Inicio'
import { Navbar } from './components/navbar/Navbar'

export const Clinica = () => {
  return (
    <div className='contenedor-clinica'>
        <Navbar />
        <Banner />
        <Inicio />
        <Footer />
    </div>
  )
}
