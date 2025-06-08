import Link from 'next/link';
import { Package, User, Heart } from 'lucide-react'; 
import React from 'react';

export default function ClientePage() {
  return (
    // Container principal com a cor de fundo 
    <main className="flex-grow bg-[#f5f5f5] text-brand-text h-screen">
      
      {/* Seção 1: Banner com o Título da Página */}
      <section className="border-b border-brand-gold/20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl text-[#aa8c38]">
            Seja Bem-Vinda
          </h1>
          <p className="mt-1 text-lg text-[#aa8c38]">
            Explore nossas coleções e encontre a joia perfeita para cada ocasião.
          </p>
        </div>
      </section>

      {/* Seção 2: Conteúdo Principal com os novos Links */}
      <section className="container mx-auto p-4 py-12 md:p-8">
        
        {/* Grid de Cards para navegação */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Nossas Jóias (usando o ícone 'Package') */}
          <Link 
            href="/joias" 
            className="block rounded-lg border border-transparent p-6 shadow-md transition-all hover:border-brand-gold/50 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <Package className="h-10 w-10 text-[#aa8c38]" />
              <div>
                <h3 className="font-serif text-[#aa8c38] font-semibold">Nossas Jóias</h3>
                <p className="text-sm text-[#aa8c38]">Explore nosso catálogo completo de peças.</p>
              </div>
            </div>
          </Link>

          {/* Card 2: Coleções (usando o ícone 'User') */}
          <Link 
            href="/colecoes" 
            className="block rounded-lg border border-transparent p-6 shadow-md transition-all hover:border-brand-gold/50 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <User className="h-10 w-10 text-[#aa8c38]" />
              <div>
                <h3 className="font-serif text-[#aa8c38] font-semibold">Coleções Especiais</h3>
                <p className="text-sm text-[#aa8c38]">Descubra os conjuntos que estão em alta.</p>
              </div>
            </div>
          </Link>

          {/* Card 3: Sobre Nós (usando o ícone 'Heart') */}
          <Link 
            href="/sobre" 
            className="block rounded-lg border border-transparent p-6 shadow-md transition-all hover:border-brand-gold/50 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <Heart className="h-10 w-10 text-[#aa8c38]" />
              <div>
                <h3 className="font-serif text-[#aa8c38] font-semibold">Nossa História</h3>
                <p className="text-sm text-[#aa8c38]">Conheça a trajetória da nossa marca.</p>
              </div>
            </div>
          </Link>

        </div>
        
      </section>
    </main>
  );
}