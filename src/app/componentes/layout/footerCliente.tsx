import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-[#aa8c38] py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Silvana Semijoias - CNPJ 25.589.265/0001-88 </p>
        <p>
          <a href="/politica-de-privacidade" className="text-[#aa8c38] hover:underline">
            Política de Privacidade
          </a>
        </p>
      </div>
    </footer>
  );
}