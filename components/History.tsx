import Image from "next/image";

export default function History() {
  const conquistas = [
    { ano: "1901", titulo: "Fundação", desc: "O surgimento do Clube Náutico Capibaribe nas águas do Rio Capibaribe." },
    { ano: "1963-68", titulo: "Hexa é Luxo", desc: "A maior hegemonia do futebol pernambucano: 6 títulos estaduais consecutivos." },
    { ano: "2019", titulo: "Campeão Brasileiro", desc: "A conquista da Série C, reafirmando a força da camisa alvirrubra nacionalmente." },
  ];

  return (
    <section className="relative w-full bg-[#f8f8f8] py-24 overflow-hidden">
      {/* Marca d'água de fundo (Opcional: um 1901 gigante ou o escudo antigo) */}
      <div className="absolute top-0 right-0 text-[20rem] font-black text-black/[0.03] leading-none select-none pointer-events-none tracking-tighter">
        1901
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: IMAGEM HISTÓRICA COM FRAME */}
          <div className="relative">
            <div className="relative z-20 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200" 
                alt="História do Náutico" 
                width={600} 
                height={800}
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
              />
            </div>
            {/* Elemento decorativo atrás da foto */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-nautico-red rounded-[3rem] z-10 opacity-10"></div>
          </div>

          {/* LADO DIREITO: TEXTO E TIMELINE */}
          <div className="flex flex-col">
            <h2 className="text-nautico-red text-6xl font-black tracking-tighter leading-none mb-8">
              Uma história <br /> de glórias
            </h2>
            
            <p className="text-gray-600 font-bold text-lg mb-12 max-w-lg leading-relaxed">
              Desde as regatas no Rio Capibaribe até as conquistas memoráveis nos gramados dos Aflitos, o Náutico é sinônimo de resistência e paixão.
            </p>

            {/* MINI TIMELINE INTERATIVA */}
            <div className="space-y-8">
              {conquistas.map((item, idx) => (
                <div key={idx} className="group flex items-start gap-6 cursor-default">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-nautico-red group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(237,28,36,0.5)]"></div>
                    {idx !== conquistas.length - 1 && <div className="w-[2px] h-16 bg-gray-200 mt-2"></div>}
                  </div>
                  <div className="-mt-1">
                    <span className="text-nautico-red font-black text-xl tracking-tighter">{item.ano} </span>
                    <h4 className="text-nautico-dark text-xl font-black uppercase tracking-tighter group-hover:text-nautico-red transition-colors">
                      {item.titulo}
                    </h4>
                    <p className="text-gray-500 text-sm font-medium max-w-sm mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}