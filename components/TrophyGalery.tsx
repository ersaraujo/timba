"use client";

export default function TrophyGallery() {
  const trofeus = [
    { titulo: "Brasileirão Série C", qtd: 1, categoria: "Nacional", anos: "2019" },
    { titulo: "Taça de Prata", qtd: 1, categoria: "Nacional", anos: "1981" },
    { titulo: "Campeonato Brasileiro (N/NE)", qtd: 1, categoria: "Nacional", anos: "1952" },
    { titulo: "Campeonato Brasileiro do Norte", qtd: 1, categoria: "Nacional", anos: "1966" },
    { titulo: "Copa Norte-Nordeste", qtd: 3, categoria: "Inter-regional", anos: "1965, 1966, 1967" },
    { titulo: "Pernambucano", qtd: 24, categoria: "Estadual", anos: "24 Títulos" },
    { titulo: "Torneio Início", qtd: 14, categoria: "Estadual", anos: "14 Títulos" },
    { titulo: "Taça Gena", qtd: 1, categoria: "Estadual", anos: "2017" },
    { titulo: "Taça Clássico dos Clássicos", qtd: 1, categoria: "Estadual", anos: "2009" },
  ];

  return (
    <section className="w-full bg-[#f8f8f8] -py-20">
      <div className="mx-auto px-12">

        {/* SCROLL DE TROFÉUS */}
        <div className="flex gap-12 overflow-x-auto pb-8 scrollbar-hide snap-x">
          {trofeus.map((t, i) => (
            <div key={i} className="flex-none flex flex-col items-center group snap-center min-w-[140px]">
              {/* SILHUETA DO TROFÉU */}
              <div className="relative mb-6 transition-transform duration-500">
                <svg 
                  viewBox="0 0 24 24" 
                  className={`w-20 h-20 text-nautico-red`}
                  fill="currentColor"
                >
                  <path d="M18,2H6A2,2 0 0,0 4,4V7C4,8.5 4.8,9.8 6,10.5V11C6,13.3 7.7,15.2 10,15.8V19H8V21H16V19H14V15.8C16.3,15.2 18,13.3 18,11V10.5C19.2,9.8 20,8.5 20,7V4A2,2 0 0,0 18,2M6,4H8V7H6V4M18,7H16V4H18V7Z" />
                </svg>
                {/* Badge com a Quantidade */}
                <div className="absolute -top-0 -right-0 bg-nautico-light text-nautico-red text-[16px] font-black w-8 h-8 rounded-full flex items-center justify-center">
                  {t.qtd}
                </div>
              </div>

              {/* TEXTO INFORMATIVO */}
              <div className="text-center">
                <h4 className="text-nautico-dark text-[13px] font-bold tracking-tighter leading-tight">
                  {t.titulo}
                </h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">
                  {t.anos}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}