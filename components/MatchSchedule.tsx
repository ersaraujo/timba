"use client";

import { useRef } from "react";
import Image from "next/image";

export default function MatchSchedule() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const jogos = [
    { 
      campeonato: "Série B", 
      categoria: "Time Masculino", 
      rodada: "Rodada 2", 
      data: "Quarta-feira, 01/03, 19:00 h", 
      estadio: "Antônio Accioly", 
      mandante: "Atlético-GO", 
      visitante: "Náutico",
      logoMandante: "/atletico-go-logo.svg",
      logoVisitante: "/cnc-logo-color.svg"
    },
    { 
      campeonato: "Série B", 
      categoria: "Time Masculino", 
      rodada: "Rodada 3", 
      data: "Sábado, 04/04, 18:00 h", 
      estadio: "Aflitos", 
      mandante: "Náutico", 
      visitante: "Ponte Preta",
      logoMandante: "/cnc-logo-color.svg",
      logoVisitante: "/ponte-preta-logo.svg"
    },
    { 
      campeonato: "Série B", 
      categoria: "Time Masculino", 
      rodada: "Rodada 4", 
      data: "Sábado, 11/04, 20:30 h", 
      estadio: "Castelão", 
      mandante: "Ceará", 
      visitante: "Náutico",
      logoMandante: "/ceara-logo.svg",
      logoVisitante: "/cnc-logo-color.svg"
    },
    { 
      campeonato: "Série B", 
      categoria: "Time Masculino", 
      rodada: "Rodada 5", 
      data: "Sábado, 18/04, 18:00 h", 
      estadio: "Estádio dos Aflitos", 
      mandante: "Náutico", 
      visitante: "São Bernardo",
      logoMandante: "/cnc-logo-color.svg",
      logoVisitante: "/sao-bernardo-logo.svg"
    },
  ];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-350 mx-auto px-6">
        
        {/* HEADER DO CARROSSEL */}
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-black tracking-tighter text-nautico-red">
            Próximos Jogos
          </h2>
          
          {/* BOTÕES DE NAVEGAÇÃO */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            >
              <span className="text-xl">❮</span>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-nautico-red text-white flex items-center justify-center hover:bg-[#d11920] transition-colors shadow-md"
            >
              <span className="text-xl">❯</span>
            </button>
          </div>
        </div>

        {/* CONTAINER DO CARROSSEL */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-2 -mx-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {jogos.map((j, i) => (
            <div 
              key={i} 
              className="flex-none w-[85vw] md:w-[400px] snap-start flex flex-col h-full group cursor-pointer shadow-xs transition-all duration-300 rounded-[2.5rem] overflow-hidden border border-gray-100"
            >
              {/* TOPO: ÁREA ESCURA (CONFRONTO) */}
              <div className="bg-nautico-red p-10 flex items-center justify-between relative">
                <div className="flex flex-col items-center gap-3 flex-1">
                  <Image src={j.logoMandante} alt={j.mandante} width={64} height={64} className="w-16 h-16 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
                  <span className="text-white text-[10px] font-bold tracking-tighter text-center uppercase">{j.mandante}</span>
                </div>

                <div className="flex-shrink-0 px-4">
                   <Image src="/serie-b.svg" alt="Competição" width={38} height={38} className="opacity-90"/>
                </div>

                <div className="flex flex-col items-center gap-3 flex-1">
                  <Image src={j.logoVisitante} alt={j.visitante} width={64} height={64} className="w-16 h-16 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
                  <span className="text-white text-[10px] font-bold tracking-tighter text-center uppercase">{j.visitante}</span>
                </div>
              </div>

              {/* BASE: ÁREA CLARA (INFO) */}
              <div className="bg-white p-10 flex-1 flex flex-col rounded-t-[2.5rem] -mt-6 relative z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
                <div className="mb-6">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    {j.categoria}
                  </p>
                  <h3 className="text-xl font-black text-nautico-dark tracking-tighter mt-1">
                    {j.campeonato}
                  </h3>
                  <p className="text-sm font-bold text-nautico-red tracking-tighter">
                    {j.rodada}
                  </p>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-3 text-gray-500">
                    <svg className="w-5 h-5 text-nautico-red opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span className="text-[14px] font-bold text-gray-700">{j.data}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <svg className="w-5 h-5 text-nautico-red opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className="text-[14px] font-bold text-gray-700">{j.estadio}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}