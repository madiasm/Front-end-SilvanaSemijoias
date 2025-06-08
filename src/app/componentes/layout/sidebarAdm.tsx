"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DollarSign,
  House,
  Info,
  ShoppingCart,
  Users,
  Briefcase,
  Gem,
  List,
  CircleUserRound,
  Menu,
} from "lucide-react";
import { useState, useEffect } from "react";

const icons = {
  House,
  DollarSign,
  ShoppingCart,
  Users,
  Briefcase,
  Gem,
  List,
  CircleUserRound,
};

type IconName = keyof typeof icons;

interface SidebarItem {
  name: string;
  href: string;
  icon: IconName;
}

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setSidebarItems(data.sidebarItems));
  }, []);

  return (
    <aside className={`Relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}>
      <div className="h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]">

      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer">
        <Menu size={24} color="white"/>
      </button>
        <nav className="mt-8 flex-grow">
          {sidebarItems.map((item) => {
            const IconComponent = icons[item.icon] || Info;
            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 ${
                    pathname === item.href ? "bg-[#2f2f2f]" : ""
                  }`}
                >
                  <IconComponent size={20} color="white" />
                  {isSidebarOpen && (
                    <span className="ml-4 whitespace-nowrap text-white">{item.name}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
