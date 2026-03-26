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
      id: "NisD_LagnC8",
      titulo: "Vitória-PE 2 x 3 Náutico - Melhores Momentos",
      thumb: "https://i.ytimg.com/vi/NisD_LagnC8/maxresdefault.jpg",
      categoria: "Gols",
      duracao: "11:05"
    },
    {
      id: "c_tb69kmHoE",
      titulo: "Carnaval - Timbu Coroado 2025",
      thumb: "https://i.ytimg.com/vi/c_tb69kmHoE/maxresdefault.jpg",
      categoria: "Social",
      duracao: "0:14"
    },
    // Adicione mais 3 para fechar os 6 cards
    {
      id: "video4",
      titulo: "Entrevista Exclusiva: Novos Rumos para 2026",
      thumb: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
      categoria: "Entrevista",
      duracao: "08:45"
    },
    {
      id: "video5",
      titulo: "O Caldeirão: A Força dos Aflitos",
      thumb: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800",
      categoria: "Especial",
      duracao: "12:20"
    },
    {
      id: "video6",
      titulo: "Treino Aberto: Torcida comparece em peso",
      thumb: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=800",
      categoria: "Torcida",
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