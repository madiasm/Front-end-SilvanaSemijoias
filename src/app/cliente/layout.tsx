import {Footer} from "@/app/componentes/layout/footerCliente";
import {Header} from "@/app/componentes/layout/headerCliente";

export default function ClienteLayout({ children }: { children: React.ReactNode }) {
  return (
    // O contêiner principal que organiza a página inteira
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* O 'main' que cresce para empurrar o footer para baixo */}
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}