"use client"; 

import { useState } from "react";
import Image from "next/image";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 z-[120]">
        <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center gap-0.75 w-10 h-10 hover:bg-gray-50 rounded-full transition-colors group cursor-pointer"
              aria-label="Abrir Menu"
            >
              <span className="w-6 h-0.5 bg-nautico-gray group-hover:bg-nautico-red transition-colors"></span>
              <span className="w-6 h-0.5 bg-nautico-gray group-hover:bg-nautico-red transition-colors"></span>
              <span className="w-6 h-0.5 bg-nautico-gray group-hover:bg-nautico-red transition-colors"></span>
            </button>
            <div className="flex items-center gap-2 ml-4">
              <Image src="/cnc-logo-color.svg" alt="Náutico Logo" width={32} height={32} className="h-10 w-auto" />
            </div>
          </div>

          <div className="flex items-center">
            <ul className="hidden md:flex gap-8 text-:18px font-bold text-nautico-gray tracking-tight">
              <li className="hover:text-nautico-red cursor-pointer">Sócio Timbu</li>
              <li className="hover:text-nautico-red cursor-pointer">Ingressos</li>
              <li className="hover:text-nautico-red cursor-pointer">Timbuzone</li>
              <li className="hover:text-nautico-red cursor-pointer">Timbushop</li>
              <li className="hover:text-nautico-red cursor-pointer">TVTimba</li>
            </ul>
          </div>

          <div className="flex items-center gap-6 transition opacity-60">
            <a href="https://esportesdasorte.bet.br/ptb/bet/main" target="_blank" rel="noopener noreferrer">
              <Image src="/es-logo.svg" alt="Adidas Logo" width={80} height={24} className="h-6 w-auto" title="Patrocinador Master" />
            </a>
            <a href="https://www.reebok.com.br/nautico" target="_blank" rel="noopener noreferrer">
              <Image src="/reebok-logo.svg" alt="Reebok Logo" width={80} height={24} className="h-6 w-auto" title="Material Esportivo" />
            </a>
            <div className="h-6 w-4 bg-gray-400 animate-pulse rounded" title="Demais Patrocinadores"></div>
          </div>
        </nav>
      </header>

      {/* 3. MENU LATERAL (SIDEBAR) */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-xl z-[60] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Menu */}
      <aside 
        className={`fixed top-[70px] left-0 h-full w-[300px] bg-white z-[70] shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-12">
          <nav className="flex flex-col gap-6 text-lg font-bold text-nautico-dark">
            <a href="#" className="hover:text-nautico-red transition">Futebol</a>
            <a href="#" className="hover:text-nautico-red transition">Remo</a>
            <a href="#" className="hover:text-nautico-red transition">Calendário</a>
            <a href="#" className="hover:text-nautico-red transition">O Clube</a>
            <a href="#" className="hover:text-nautico-red transition">Notícias</a>
            <a href="#" className="hover:text-nautico-red transition">Mídia</a>
          </nav>

          {/* Parceiros Oficiais */}
          <div className="mt-20 border-t pt-8">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">Parceiros Oficiais</p>
            <div className="grid grid-cols-2 gap-4 opacity-50">
               <div className="h-10 bg-gray-100 rounded"></div>
               <div className="h-10 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </aside>

      <div className="h-28"></div>
    </>
  );
}