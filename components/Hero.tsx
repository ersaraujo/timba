import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 group cursor-pointer">
          <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden rounded-t-[2.5rem] shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000" 
              alt="Treino nos Aflitos"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>
          
          {/* FAIXA VERMELHA (O TÍTULO) */}
          <div className="bg-[#e9ebf0] p-8 md:p-10 rounded-b-[2.5rem] -mt-1 relative z-10 transition-colors">
            <span className="text-nautico-gray text-3xl font-black tracking-tighter leading-[0.9] group-hover:text-nautico-red transition-colors">
                Aflitos em chamas: O Timbu se prepara para o próximo desafio
            </span>
          </div>
        </div>

        {/* --- NOTÍCIAS SECUNDÁRIAS (LADO DIREITO) --- */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* Secundária 1 */}
          <div className="group cursor-pointer">
            <div className="relative w-full h-[220px] overflow-hidden rounded-[2rem] shadow-md mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000" 
                alt="Sócio Timbu"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="px-2">
              <h3 className="text-nautico-gray text-xl font-black tracking-tighter mt-2 leading-tight group-hover:text-nautico-red transition-colors">
                Novas vantagens para o sócio alvirrubro em 2026
              </h3>
            </div>
          </div>

          {/* Secundária 2 */}
          <div className="group cursor-pointer">
            <div className="relative w-full h-[220px] overflow-hidden rounded-[2rem] shadow-md mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1000" 
                alt="Timbu Shop"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="px-2">
              <h2 className="text-nautico-gray text-xl font-black tracking-tighter mt-2 leading-tight group-hover:text-nautico-red transition-colors">
                Manto Sagrado: Garanta o novo uniforme oficial
              </h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}