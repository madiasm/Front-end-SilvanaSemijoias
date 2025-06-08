// Em: src/app/(cliente)/layout.tsx

import {Footer} from "@/app/componentes/layout/footerCliente";
import {Header} from "@/app/componentes/layout/headerCliente";

export default function ClienteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}