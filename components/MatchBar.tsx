import Image from 'next/image';

export default function MatchBar() {
  return (
    <section className="w-full bg-nautico-gray/30 border-b border-gray-100 py-6 relative z-[50]">
      <div className="max-w-350 mx-auto px-6 flex items-center justify-between">
        
        {/* LADO ESQUERDO: STATUS DO JOGO */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nautico-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nautico-red"></span>
            </span>
            <p className="text-[11px] font-black uppercase text-nautico-red tracking-widest">Próximo Jogo</p>
          </div>
          <div className="hidden md:block h-4 w-[1px] bg-gray-200"></div>
          <p className="hidden md:block text-[11px] font-bold text-gray-400 uppercase tracking-tight">
            Série B
          </p>
        </div>

        {/* CENTRO: CONFRONTO SLIM */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="text-sm font-black text-[18px] text-nautico-dark tracking-tighter">Náutico</span>
            <Image src="/cnc-logo-color.svg" alt="Náutico" width={28} height={28} className="w-7 h-7 rounded-full flex items-center justify-center shadow-md" />
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black text-nautico-red uppercase">VS</span>
            <span className="text-[9px] font-bold text-nautico-red uppercase">01/04 • 19:00</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Image src="/atletico-go-logo.svg" alt="Atlético-GO" width={28} height={28} className="w-7 h-7 rounded-full flex items-center justify-center shadow-md" />
            <span className="text-sm font-black text-[18px] text-nautico-dark tracking-tighter">Atlético-GO</span>
          </div>
        </div>

        {/* DIREITA: CTA DISCRETO */}
        <div className="flex items-center gap-4">
          <button className="bg-nautico-red text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-md active:scale-95">
            <a href="https://nautico.futebolcard.com/" target="_blank" rel="noopener noreferrer">Ingressos</a>
          </button>
        </div>

      </div>
    </section>
  );
}