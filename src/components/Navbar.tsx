"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 backdrop-blur-md bg-divina-cream/80 border-b border-divina-nude/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24 relative">
          
          <div className="md:hidden w-8"></div> {/* Spacer for mobile left to balance hamburger */}

          {/* Logo / Branding */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:transform-none">
            <Link href="/" className="relative h-16 w-32 sm:h-20 sm:w-40 flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Divina Estética" 
                fill 
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-10 items-center ml-auto">
            <Link href="#tratamientos" className="text-xs font-semibold uppercase tracking-[0.2em] text-divina-charcoal hover:text-divina-softGold transition-colors">Tratamientos</Link>
            <Link href="#experiencia" className="text-xs font-semibold uppercase tracking-[0.2em] text-divina-charcoal hover:text-divina-softGold transition-colors">Experiencia</Link>
            <Link href="#testimonios" className="text-xs font-semibold uppercase tracking-[0.2em] text-divina-charcoal hover:text-divina-softGold transition-colors">Testimonios</Link>
            <Link href="#contacto" className="text-xs font-semibold uppercase tracking-[0.2em] text-divina-charcoal hover:text-divina-softGold transition-colors">Contacto</Link>
            
            <a href="#reservas" className="ml-4 px-8 py-3 bg-divina-dark text-divina-cream text-xs font-semibold uppercase tracking-[0.2em] hover:bg-divina-softGold transition-all duration-500 rounded-full">
              Reservar Turno
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-divina-dark focus:outline-none" aria-label="Abrir menú">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-divina-cream border-b border-divina-nude/50 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 py-6 shadow-xl' : 'max-h-0 border-transparent'}`}>
        <div className="flex flex-col items-center space-y-6 px-6">
          <Link href="#tratamientos" onClick={() => setIsOpen(false)} className="text-xs font-semibold uppercase tracking-[0.2em] text-divina-charcoal hover:text-divina-softGold">Tratamientos</Link>
          <Link href="#experiencia" onClick={() => setIsOpen(false)} className="text-xs font-semibold uppercase tracking-[0.2em] text-divina-charcoal hover:text-divina-softGold">Experiencia</Link>
          <Link href="#testimonios" onClick={() => setIsOpen(false)} className="text-xs font-semibold uppercase tracking-[0.2em] text-divina-charcoal hover:text-divina-softGold">Testimonios</Link>
          <Link href="#contacto" onClick={() => setIsOpen(false)} className="text-xs font-semibold uppercase tracking-[0.2em] text-divina-charcoal hover:text-divina-softGold">Contacto</Link>
          <a href="#reservas" onClick={() => setIsOpen(false)} className="px-8 py-3 bg-divina-dark text-divina-cream text-xs font-semibold uppercase tracking-[0.2em] hover:bg-divina-softGold transition-all duration-500 rounded-full w-full text-center">
            Reservar Turno
          </a>
        </div>
      </div>
    </nav>
  );
}
