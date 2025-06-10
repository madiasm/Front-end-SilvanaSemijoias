import React from 'react';
import GaleriaImagens from '../componentes/galeriaColecoes/galeriaImagens';
import VitrineProdutos from '../componentes/produtos/vitrineProdutos';

const imagensGaleria = [
  { src: '/joia1.png', alt: 'Descrição da imagem 1' },
  { src: '/joia2.png', alt: 'Descrição da imagem 2' },
  { src: '/joia3.png', alt: 'Descrição da imagem 3' },
  { src: '/joia4.png', alt: 'Descrição da imagem 4' },
  { src: '/joia5.png', alt: 'Descrição da imagem 5' },
  { src: '/joia6.png', alt: 'Descrição da imagem 6' },
];

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
      
      {/* Seção 1: Banner com o Título da Página */}
      <section className="bg-[#f5f5f5] py-6">
        <div className="container mx-auto flex items-center justify-center">
          <h1 className="rounded-md bg-[#77644f] px-50 py-1 font-serif text-sm uppercase tracking-widest text-white>">
            COLEÇÃO ENTRE NÓS
          </h1>
        </div>
        <div className="container mx-auto mt-3">
        <GaleriaImagens images={imagensGaleria} />
        </div>
      </section>

      {/* Seção 2: Galeria de Produtos */}
      <section className="bg-[#f5f5f5]">
        <div className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-[#77644f]">
            Nossos Produtos
          </h2>
    
          <VitrineProdutos products={meusProdutos} />

        </div>
      </section>
    </main>
  );
}