import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 group cursor-pointer">
          <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden rounded-t-[2.5rem] shadow-lg">
            <Image 
              src="/news/n-jonastoro.png" 
              alt="Jonas Toró Comunicado"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>
          
          {/* FAIXA VERMELHA (O TÍTULO) */}
          <div className="bg-[#e9ebf0] p-8 md:p-10 rounded-b-[2.5rem] -mt-1 relative z-10 transition-colors">
            <span className="text-nautico-gray text-3xl font-black tracking-tighter leading-[0.9] group-hover:text-nautico-red transition-colors">
                Comunicado Oficial: Jonas Toró
            </span>
          </div>
        </div>

        {/* --- NOTÍCIAS SECUNDÁRIAS (LADO DIREITO) --- */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* Secundária 1 */}
          <div className="group cursor-pointer">
            <div className="relative w-full h-[220px] overflow-hidden rounded-[2rem] shadow-md mb-4">
              <Image 
                src="/news/n-es.jpg" 
                alt="Náutico e Esportes da Sorte renovam para 2026"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="px-2">
              <h3 className="text-nautico-gray text-xl font-black tracking-tighter mt-2 leading-tight group-hover:text-nautico-red transition-colors">
                  Náutico e Esportes da Sorte renovam para 2026
              </h3>
            </div>
          </div>

          {/* Secundária 2 */}
          <div className="group cursor-pointer">
            <div className="relative w-full h-[220px] overflow-hidden rounded-[2rem] shadow-md mb-4">
              <Image 
                src="/news/n-noreplay.png" 
                alt="Náutico e No Replay firmam parceria"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="px-2">
              <h2 className="text-nautico-gray text-xl font-black tracking-tighter mt-2 leading-tight group-hover:text-nautico-red transition-colors">
                Náutico e No Replay firmam parceria
              </h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}