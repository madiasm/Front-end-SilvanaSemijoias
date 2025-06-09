"use client"

import StatCard from '@/app/componentes/cards/statCard'
import { motion } from 'framer-motion';
import { DollarSign, ShoppingBag, SquareActivity, Users } from 'lucide-react';
import React from "react";

export default function AdminDashboardPage() {
  return (
    <main className="flex-1 overflow-auto relative z-10">
      <div className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
        >
          <StatCard name="Valor Total" icon={DollarSign} value="$182,450" />
          <StatCard name="Clientes" icon={Users} value="350" />
          <StatCard name="Joias em Maletas" icon={ShoppingBag} value="200" />
          <StatCard name="Joias em Estoque" icon={SquareActivity} value="600" /> 
        </motion.div>
      </div>
    </main>
  );
}
