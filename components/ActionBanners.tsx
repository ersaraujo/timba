import Image from "next/image";

export default function ActionBanners() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* CARD SÓCIO */}
      <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl">
        <Image 
          src="/socio-timbu.webp" 
          alt="Sócio" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <h2 className="text-white text-4xl font-black uppercase italic tracking-tighter leading-none mb-4">
            Seja um <br /> Sócio Timbu
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
          src="/timbushop.jfif" 
          alt="Loja" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <h2 className="text-white text-4xl font-black uppercase italic tracking-tighter leading-none mb-4">
            Timbushop
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