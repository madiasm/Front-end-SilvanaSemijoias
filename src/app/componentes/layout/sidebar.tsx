"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Dashboard", href: "/adm" },
  { label: "Joias", href: "/adm/joias" },
  { label: "Coleções", href: "/adm/colecoes" },
  { label: "Maletas", href: "/adm/maletas" },
  { label: "Pedidos", href: "/adm/pedidos" },
  { label: "Promoções", href: "/adm/promocoes" },
  { label: "Clientes", href: "/adm/clientes" },
  { label: "Vendedoras", href: "/adm/vendedoras" },
  { label: "Usuários", href: "/adm/usuarios" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-700 border-r h-full shadow-sm flex flex-col font-">
      {/* Logo */}
      <div className="p-4 flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="Logo da Marca"
          width={150}
          height={50}
          className="object-contain"
          priority
        />
      </div>

      {/* Navegação */}
      <nav className="flex flex-col gap-1 px-4 py-4 flex-1 overflow-y-auto">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          const baseClasses = "py-2 px-3 rounded hover:bg-gray-500 transition cursor-pointer";
          const activeClasses = "bg-gray-400 font-semibold";
          return (
            <Link
              key={href}
              href={href}
              className={`${baseClasses} ${isActive ? activeClasses : ""}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
