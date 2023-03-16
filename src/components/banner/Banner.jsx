import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../img/banner.jpg';
import bannerContacto from '../../img/BannerContacto.png';


export const Banner = () => {
  return (
    <div className='contenedor-banner'>
      <div className='contenido-banner-redes'>
        <div className='contenido-banner-redes-lista'>
          <div>
            <Link>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </Link>
          </div>

          <div>
            <Link>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
      <div className='contenido-banner'>
        <img src={bannerContacto} alt="banner" />
      </div>
    </div >
  )
}
