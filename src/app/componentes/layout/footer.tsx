"use client";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Semijoias Luxo. Todos os direitos reservados.</p>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="/sobre" className="hover:underline">
            Sobre
          </a>
          <a href="/contato" className="hover:underline">
            Contato
          </a>
          <a href="/politica-de-privacidade" className="hover:underline">
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
