import Image from "next/image";

export default function Footer() {
  const sponsors = [
    { name: "Reebok", logo: "/reebok-logo.svg" },
    { name: "Esportes da Sorte", logo: "/es-logo.svg" },
    { name: "Bet", logo: "/bet-logo.svg" },
    // Adicione os placeholders de outros patrocinadores aqui
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      
      {/* 1. SEÇÃO DE PATROCINADORES (A "FAIXA DE OURO") */}
      <div className="w-full border-b border-gray-100 py-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.4em] mb-8 text-center lg:text-left">
            Patrocinadores Oficiais
          </p>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 grayscale opacity-40 hover:opacity-100 transition-all duration-500">
            {sponsors.map((s, i) => (
              <div key={i} className="h-8 w-32 relative group">
                 {/* Aqui você usaria o Image do Next.js com os logos reais */}
                 <div className="w-full h-full bg-gray-200 rounded animate-pulse group-hover:bg-transparent transition-colors"></div>
              </div>
            ))}
            <div className="h-8 w-32 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Seja Parceiro
            </div>
          </div>
        </div>
      </div>

      {/* 2. GRID DE NAVEGAÇÃO (MAPA DO SITE) */}
      <div className="bg-nautico-red py-20">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          
          {/* Logo e Redes Sociais */}
          <div className="col-span-2 lg:col-span-1">
            <Image src="/cnc-logo-color.svg" alt="Náutico" width={60} height={60} className="mb-8" />
            <div className="flex gap-4">
              {['FB', 'IG', 'TW', 'YT'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white text-xs font-black hover:bg-nautico-red hover:border-nautico-red cursor-pointer transition-all">
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Colunas de Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-tighter text-lg mb-2">Futebol</h4>
            {['Profissional', 'Base', 'Feminino', 'Escolinhas'].map(link => (
              <a key={link} href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{link}</a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-tighter text-lg mb-2">O Clube</h4>
            {['História', 'Aflitos', 'Sócio Timbu', 'Transparência', 'Contato'].map(link => (
              <a key={link} href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{link}</a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-tighter text-lg mb-2">Serviços</h4>
            {['Ingressos', 'Timbushop', 'TV Timba', 'Licenciamento'].map(link => (
              <a key={link} href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{link}</a>
            ))}
          </div>

        </div>
      </div>

      {/* 3. RODAPÉ LEGAL */}
      <div className="bg-nautico-red py-4">
        <div className="mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-nautico-light text-[10px] px-10 tracking-widest text-center md:text-left">
           Clube Náutico Capibaribe © 2026. Todos os direitos reservados. <br className="md:hidden" />
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-nautico-light hover:text-nautico-dark text-[10px] font-bold tracking-widest uppercase hover:underline">Política de Privacidade</a>
            <a href="#" className="text-nautico-light hover:text-nautico-dark text-[10px] font-bold tracking-widest uppercase hover:underline">Termos de Uso</a>
          </div>
        </div>
      </div>

    </footer>
  );
}