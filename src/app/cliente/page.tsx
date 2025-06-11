import React from 'react';
import VitrineProdutos from '../componentes/produtos/vitrineProdutos';
import Link from 'next/link';

const meusProdutos = [
  // Linha 1
  { id: 1, imageUrl: '/joia1.png', description: 'Brinco Argola de Flor', price: 199.90 },
  { id: 2, imageUrl: '/joia2.png', description: 'Colar Ponto de Luz', price: 249.90 },
  { id: 3, imageUrl: '/joia3.png', description: 'Pulseira Riviera', price: 329.90 },
  { id: 4, imageUrl: '/joia4.png', description: 'Anel Solitário', price: 299.90 },
  { id: 5, imageUrl: '/joia5.png', description: 'Tornozeleira com Búzios', price: 159.90 },
  { id: 6, imageUrl: '/joia6.png', description: 'Brinco Ear Cuff', price: 219.90 },
  { id: 7, imageUrl: '/joia7.png', description: 'Choker de Elos', price: 279.90 },
  
  // Linha 2
  { id: 8, imageUrl: '/joia8.png', description: 'Brinco Argola de Flor', price: 199.90 },
  { id: 9, imageUrl: '/joia9.png', description: 'Colar Ponto de Luz', price: 249.90 },
  { id: 10, imageUrl: '/joia10.png', description: 'Pulseira Riviera', price: 329.90 },
  { id: 11, imageUrl: '/joia11.png', description: 'Anel Solitário', price: 299.90 },
  { id: 12, imageUrl: '/joia12.png', description: 'Tornozeleira com Búzios', price: 159.90 },
  { id: 13, imageUrl: '/joia13.png', description: 'Brinco Ear Cuff', price: 219.90 },
  { id: 14, imageUrl: '/joia14.png', description: 'Choker de Elos', price: 279.90 },

  // Linha 3
  { id: 15, imageUrl: '/joia1.png', description: 'Brinco Argola de Flor', price: 199.90 },
  { id: 16, imageUrl: '/joia2.png', description: 'Colar Ponto de Luz', price: 249.90 },
  { id: 17, imageUrl: '/joia3.png', description: 'Pulseira Riviera', price: 329.90 },
  { id: 18, imageUrl: '/joia4.png', description: 'Anel Solitário', price: 299.90 },
  { id: 19, imageUrl: '/joia5.png', description: 'Tornozeleira com Búzios', price: 159.90 },
  { id: 21, imageUrl: '/joia6.png', description: 'Brinco Ear Cuff', price: 219.90 },
  { id: 22, imageUrl: '/joia7.png', description: 'Choker de Elos', price: 279.90 },

  // Linha 4
  { id: 23, imageUrl: '/joia8.png', description: 'Brinco Argola de Flor', price: 199.90 },
  { id: 24, imageUrl: '/joia9.png', description: 'Colar Ponto de Luz', price: 249.90 },
  { id: 25, imageUrl: '/joia10.png', description: 'Pulseira Riviera', price: 329.90 },
  { id: 26, imageUrl: '/joia11.png', description: 'Anel Solitário', price: 299.90 },
  { id: 27, imageUrl: '/joia12.png', description: 'Tornozeleira com Búzios', price: 159.90 },
  { id: 28, imageUrl: '/joia13.png', description: 'Brinco Ear Cuff', price: 219.90 },
  { id: 29, imageUrl: '/joia14.png', description: 'Choker de Elos', price: 279.90 },

  // Linha 5
  { id: 30, imageUrl: '/joia1.png', description: 'Brinco Argola de Flor', price: 199.90 },
  { id: 31, imageUrl: '/joia2.png', description: 'Colar Ponto de Luz', price: 249.90 },
  { id: 32, imageUrl: '/joia3.png', description: 'Pulseira Riviera', price: 329.90 },
  { id: 33, imageUrl: '/joia4.png', description: 'Anel Solitário', price: 299.90 },
  { id: 34, imageUrl: '/joia5.png', description: 'Tornozeleira com Búzios', price: 159.90 },
  { id: 35, imageUrl: '/joia6.png', description: 'Brinco Ear Cuff', price: 219.90 },
  { id: 36, imageUrl: '/joia7.png', description: 'Choker de Elos', price: 279.90 },

];

export default function ClientePage() {
  return (
    // Container principal com a cor de fundo 
    <main className="flex-grow bg-[#f5f5f5]">
      
      {/* Seção 1: Banner Clicável da Coleção */}
      <section className="bg-[#f5f5f5] py-6">
        <div className="container mx-auto">
          <Link href="/cliente/colecoes">
            <div className="relative w-full rounded-md overflow-hidden shadow-md">
              <img
                src="/banner2.png"
                alt="Banner Coleção Entre Nós"
                className="w-full h-full object-cover"
              />
              {/* Título sobre a imagem */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="rounded-md bg-[#77644fc7] bg-opacity-75 px-8 py-1 font-serif text-xl uppercase tracking-widest text-white shadow-md">
                  COLEÇÃO ENTRE NÓS
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Seção 2: Galeria de Produtos */}
      <section className="bg-[#f5f5f5]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="mb-5 text-center rounded-md bg-[#77644fc7] bg-opacity-75 text-2x1 font-serif text-[#ffffff]">
            Encontre seu presente perfeito
          </h1> 
          {/* Vitrine de Produtos */}
          <VitrineProdutos products={meusProdutos} />
          </div>
          {/* Botão de Ver Mais */} 
          <div className="flex justify-center">
            <button className="rounded-md bg-[#927d66] px-6 py-2 text-sm font-serif text-white hover:bg-[#77644f9a] transition-colors">
              Ver mais produtos
            </button>
        </div>
      </section>
    </main>
  );
}