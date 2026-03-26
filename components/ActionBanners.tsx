import Image from "next/image";

export default function ActionBanners() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* CARD SÓCIO */}
      <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000" 
          alt="Sócio" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-nautico-red/80 mix-blend-multiply group-hover:bg-nautico-red/70 transition-colors"></div>
        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <h2 className="text-white text-4xl font-black uppercase italic tracking-tighter leading-none mb-4">
            Seja um <br /> Nação Alvirrubra
          </h2>
          <p className="text-white/80 font-bold mb-6 max-w-[250px]">Ajude o Timbu a crescer e tenha benefícios exclusivos em todos os jogos.</p>
          <button className="w-fit bg-white text-nautico-red px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-gray-100 transition-colors">
            Saiba Mais
          </button>
        </div>
      </div>

      {/* CARD LOJA */}
      <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1511746015097-c7a5b3b6736c?q=80&w=1000" 
          alt="Loja" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <h2 className="text-white text-4xl font-black uppercase italic tracking-tighter leading-none mb-4">
            Timbu <br /> Shop Oficial
          </h2>
          <p className="text-white/80 font-bold mb-6 max-w-[250px]">Garanta o novo manto oficial e outros produtos licenciados do Náutico.</p>
          <button className="w-fit border-2 border-white text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Ver Coleção
          </button>
        </div>
      </div>

    </section>
  );
}