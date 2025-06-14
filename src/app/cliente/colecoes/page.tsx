import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const dadosDasColecoes = [
  {
    id: 1,
    nome: 'COLEÇÃO ENTRE NÓS',
    layout: 'mosaico',
    bannerUrl: '/banner2.png',
    resumo: 'Inspirada nos laços que nos unem, a Coleção Entre Nós celebra as conexões eternas com peças delicadas e cheias de significado. Perfeita para presentear quem você ama.', // <-- NOVO TEXTO
    produtos: [
      { id: 1, imageUrl: '/cliente7.png', description: 'Produto 1'},
      { id: 2, imageUrl: '/joia12.png', description: 'Produto 2'},
      { id: 3, imageUrl: '/joia13.png', description: 'Produto 3'},
      { id: 4, imageUrl: '/joia14.png', description: 'Produto 4'},
    ]
  },
  {
    id: 2,
    nome: 'ESSÊNCIA DOURADA',
    layout: 'verticalDestacado',
    bannerUrl: '/banner3.png', 
    resumo: 'O brilho clássico do ouro em designs modernos e atemporais. A Coleção Essência Dourada foi criada para a mulher que não tem medo de brilhar com sofisticação.', // <-- NOVO TEXTO
    produtos: [
      { id: 8, imageUrl: '/cliente5.png', description: 'Produto 8'},
      { id: 9, imageUrl: '/joia9.png', description: 'Produto 9'},
      { id: 10, imageUrl: '/joia5.png', description: 'Produto 10'},
      { id: 11, imageUrl: '/joia11.png', description: 'Produto 11'},
    ]
  },
  {
    id: 3,
    nome: 'BRILHO DE VERÃO',
    layout: 'horizontalDestacado',
    bannerUrl: '/banner6.png', 
    resumo: 'Cores vibrantes e elementos da natureza que capturam a energia contagiante do verão. Leve a leveza da estação mais quente do ano sempre com você.', // <-- NOVO TEXTO
    produtos: [
      { id: 15, imageUrl: '/joia5.png', description: 'Produto 15'},
      { id: 16, imageUrl: '/cliente7.png', description: 'Produto 16'},
      { id: 17, imageUrl: '/joia9.png', description: 'Produto 17'},
      { id: 18, imageUrl: '/joia6.png', description: 'Produto 18'},
    ]
  },
  {
    id: 4,
    nome: 'JÓIAS CLÁSSICAS',
    layout: 'classico',
    bannerUrl: '/banner4.png',
    resumo: 'A elegância que nunca sai de moda. Nossa seleção de Jóias Clássicas traz peças versáteis e indispensáveis para qualquer porta-joias, ideais para todas as ocasiões.', // <-- NOVO TEXTO
    produtos: [
      { id: 19, imageUrl: '/joia13.png', description: 'Produto 19'},
      { id: 20, imageUrl: '/joia14.png', description: 'Produto 20'},
      { id: 21, imageUrl: '/joia1.png', description: 'Produto 21'},
      { id: 22, imageUrl: '/joia2.png', description: 'Produto 22'},
    ]
  }
];

// --- Componentes de Galeria (com altura e espaçamento ajustados) ---

function ImagemDoGrid({ produto, classesAdicionais = "" }) {
  return (
    <div className={`relative rounded-md overflow-hidden shadow-sm ${classesAdicionais}`}>
      <Image src={produto.imageUrl} alt={produto.description} layout="fill" objectFit="cover" className="hover:scale-105 transition-transform duration-300" />
    </div>
  );
}

// MUDANÇA 2: Altura e espaçamento ajustados em todas as galerias
const alturaDaGaleria = "h-[400px] md:h-[500px]"; // Altura menor e responsiva
const espacamentoDaGaleria = "gap-1"; // Espaçamento mínimo

function GaleriaMosaico({ products }) {
  const p = products.slice(0, 4);
  if (p.length < 4) return null;
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 ${espacamentoDaGaleria} ${alturaDaGaleria}`}>
      <ImagemDoGrid produto={p[0]} classesAdicionais="md:col-span-2 md:row-span-2" />
      <ImagemDoGrid produto={p[1]} classesAdicionais="md:col-span-2" />
      <ImagemDoGrid produto={p[2]} />
      <ImagemDoGrid produto={p[3]} />
    </div>
  );
}

function GaleriaVertical({ products }) {
  const p = products.slice(0, 4);
  if (p.length < 4) return null;
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 ${espacamentoDaGaleria} ${alturaDaGaleria}`}>
      <ImagemDoGrid produto={p[0]} classesAdicionais="md:col-span-2 md:row-span-3" />
      <ImagemDoGrid produto={p[1]} classesAdicionais="md:row-span-1" />
      <ImagemDoGrid produto={p[2]} classesAdicionais="md:row-span-1" />
      <ImagemDoGrid produto={p[3]} classesAdicionais="md:row-span-1" />
    </div>
  );
}

function GaleriaHorizontal({ products }) {
  const p = products.slice(0, 4);
  if (p.length < 4) return null;
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 ${espacamentoDaGaleria} ${alturaDaGaleria}`}>
      <ImagemDoGrid produto={p[0]} classesAdicionais="md:col-span-3" />
      <ImagemDoGrid produto={p[1]} />
      <ImagemDoGrid produto={p[2]} />
      <ImagemDoGrid produto={p[3]} />
    </div>
  );
}

function GaleriaClassica({ products }) {
  const p = products.slice(0, 4);
  if (p.length < 4) return null;
  return (
    <div className={`grid grid-cols-2 gap-1 ${alturaDaGaleria}`}>
      <ImagemDoGrid produto={p[0]} />
      <ImagemDoGrid produto={p[1]} />
      <ImagemDoGrid produto={p[2]} />
      <ImagemDoGrid produto={p[3]} />
    </div>
  );
}


// O Componente da Página Principal
export default function ColecoesPage() {
  return (
    <main className="flex-grow bg-[#f5f5f5]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-12 text-center text-4xl font-serif text-[#aa8c38]">
          Nossas Coleções
        </h1>
        <div className="space-y-24">
          {dadosDasColecoes.map((colecao) => (
            <section key={colecao.id}>
              {/* Banner */}
              <div className="relative w-full mb-8 rounded-md overflow-hidden shadow-md">
                <Image src={colecao.bannerUrl} alt={`Banner da ${colecao.nome}`} layout="responsive" width={1200} height={400} objectFit="cover" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <h2 className="rounded-md bg-[#77644fc7] bg-opacity-75 px-8 py-2 font-serif text-2xl uppercase tracking-widest text-white shadow-md">
                    {colecao.nome}
                  </h2>
                </div>
              </div>
              
              {/* Galeria de Imagens */}
              {(() => {
                switch (colecao.layout) {
                  case 'mosaico': return <GaleriaMosaico products={colecao.produtos} />;
                  case 'verticalDestacado': return <GaleriaVertical products={colecao.produtos} />;
                  case 'horizontalDestacado': return <GaleriaHorizontal products={colecao.produtos} />;
                  case 'classico': return <GaleriaClassica products={colecao.produtos} />;
                  default: return <GaleriaClassica products={colecao.produtos} />;
                }
              })()}

              {/* --- MUDANÇA 3: ADICIONAR O BLOCO DE TEXTO DESCRITIVO --- */}
              {colecao.resumo && (
                <div className="mt-8 text-center max-w-3xl mx-auto">
                  <p className="text-gray-600 leading-relaxed">
                    {colecao.resumo}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}