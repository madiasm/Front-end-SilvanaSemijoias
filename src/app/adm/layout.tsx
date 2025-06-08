// app/admin/layout.tsx
import { ReactNode } from "react";
import { Sidebar } from "@/app/componentes/layout/sidebarAdm";
import { Header } from "@/app/componentes/layout/headerAdm";
import { Footer } from "@/app/componentes/layout/footerAdm";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        
        <Footer />
      </div>
    </main>
  );
}
