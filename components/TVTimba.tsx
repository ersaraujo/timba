import Image from "next/image";

export default function TVTimba() {
  const videos = [
    {
      id: "SB9C__yrRPs",
      titulo: "Luiz Paulo é Biólogo? (Teve até Timbu Albino)",
      thumb: "https://i.ytimg.com/vi/SB9C__yrRPs/maxresdefault.jpg",
      categoria: "Bastidores",
      duracao: "14:08"
    },
    {
      id: "VpxjObtePSs",
      titulo: "Sport 3 x 3 Náutico - Gols do Náutico",
      thumb: "https://i.ytimg.com/vi/VpxjObtePSs/maxresdefault.jpg",
      categoria: "Gols",
      duracao: "11:05"
    },
    {
      id: "c_tb69kmHoE",
      titulo: "Timbu Coroado 2025",
      thumb: "https://i.ytimg.com/vi/c_tb69kmHoE/maxresdefault.jpg",
      categoria: "Social",
      duracao: "0:14"
    },
    // Adicione mais 3 para fechar os 6 cards
    {
      id: "D3XQUWYS8t4",
      titulo: "Coletiva: Paulo Sérgio",
      thumb: "https://i.ytimg.com/vi/D3XQUWYS8t4/maxresdefault.jpg",
      categoria: "Coletiva",
      duracao: "08:45"
    },
    {
      id: "tLYSuICWAsk",
      titulo: "Coletiva: Guilherme dos Anjos",
      thumb: "https://i.ytimg.com/vi/tLYSuICWAsk/maxresdefault.jpg",
      categoria: "Coletiva",
      duracao: "12:20"
    },
    {
      id: "_G11pzYIekc",
      titulo: "Vitoria/PE 2 x 3 Náutico - Bastidores",
      thumb: "https://i.ytimg.com/vi/_G11pzYIekc/maxresdefault.jpg",
      categoria: "Bastidores",
      duracao: "05:15"
    }
  ];

  return (
    <section className="bg-nautico-light py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* GRID DE VÍDEOS (6 CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {videos.map((v, i) => (
            <a 
              key={i}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              className="group relative flex flex-col cursor-pointer"
            >
              {/* THUMBNAIL CONTAINER */}
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2x">
                <Image 
                  src={v.thumb} 
                  alt={v.titulo} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* TEXTO ABAIXO DA THUMB */}
              <div className="mt-2 px-2">
                <h3 className="text-nautico-gray text-xl font-bold tracking-tighter mt-2 leading-tight group-hover:text-nautico-red transition-colors line-clamp-2">
                  {v.titulo}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}