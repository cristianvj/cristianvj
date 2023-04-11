import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-100 pt-8 pb-4'>
        <div className="md:float-left block">
          <Link href='/'>
            <p className="satisfy-font cursor-pointer font-bold text-2xl sm:text-6xl text-orange-600 drop-shadow-lg">
              Cristian Villota J.
            </p>
          </Link>
        </div>
        <div className="hidden sm:float-left md:contents">
          <Link href={`/login`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold">
              Iniciar Sesion
            </span>
          </Link>
          <Link href={`/app`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold">
              App
            </span>
          </Link>
          <Link href={`/blog`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold">
              Blog
            </span>
          </Link>
          <Link href={`/`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold">
              Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header