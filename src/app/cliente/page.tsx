import Link from 'next/link';
import { Package, User, Heart } from 'lucide-react'; 
import React from 'react';
import GaleriaImagens from '../componentes/galeria/galeriaImagens';

const imagensGaleria = [
  { src: '/joia1.png', alt: 'Descrição da imagem 1' },
  { src: '/joia2.png', alt: 'Descrição da imagem 2' },
  { src: '/joia3.png', alt: 'Descrição da imagem 3' },
  { src: '/joia4.png', alt: 'Descrição da imagem 4' },
  { src: '/joia5.png', alt: 'Descrição da imagem 5' },
  { src: '/joia6.png', alt: 'Descrição da imagem 6' },
];

export default function ClientePage() {
  return (
    // Container principal com a cor de fundo 
    <main className="flex-grow bg-[#f5f5f5] text-brand-text h-screen">
      
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
      
    </main>
  );
}