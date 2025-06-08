import Image from 'next/image';
import Link from 'next/link'; 
import React from 'react';

export function Header() {
  return (
    <header className="bg-[#f5f5f5] text-[#aa8c38] py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png" 
            alt="Logo da Silvana Semi Joias"
            width={80} 
            height={50}
            className="object-contain"
            priority
          />
        </Link>
    
        {/* Menu de navegação */}
        <nav>
          <ul className="flex items-center space-x-6 text-base font-medium">
            <li>
              <Link href="/" className="hover:underline transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link href="/joias" className="hover:underline transition-colors">
                Jóias
              </Link>
            </li>
            <li>
              <Link href="/colecoes" className="hover:underline transition-colors">
                Coleções
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:underline transition-colors">
                Sobre
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}