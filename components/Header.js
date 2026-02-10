'use client';
import { useState } from 'react';
import { useCart } from '../lib/CartContext';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100 font-sans text-black">
        {/* Ligne 1 : Logo et Icônes */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className="text-2xl p-1">☰</button>
            <Link href="/">
              <h1 className="text-xl font-black italic tracking-tighter cursor-pointer">ZOKANA</h1>
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <button className="text-xl">👤</button>
            <Link href="/panier" className="relative cursor-pointer p-1">
              <span className="text-2xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#E61E2A] text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Ligne 2 : Barre de recherche (RETOUR) */}
        <div className="px-4 pb-3">
          <div className="relative flex items-center">
            <span className="absolute left-3 text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="Chercher un jus, une saveur..." 
              className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-full text-sm outline-none focus:ring-1 focus:ring-gray-200"
            />
          </div>
        </div>
      </header>

      {/* Menu Drawer (Optionnel - à remplir si tu veux) */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white w-64 h-full p-5 shadow-xl">
             <button onClick={() => setIsOpen(false)} className="mb-5 text-xl font-bold">✕ Fermer</button>
             <nav className="flex flex-col gap-4 font-bold">
               <Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link>
               <Link href="/panier" onClick={() => setIsOpen(false)}>Mon Panier ({cartCount})</Link>
             </nav>
          </div>
        </div>
      )}
    </>
  );
}