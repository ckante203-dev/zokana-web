'use client';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100 font-sans text-black">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Menu Burger & Logo */}
          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className="text-2xl hover:bg-gray-100 p-1 rounded-md transition">
              ☰
            </button>
            <h1 className="text-xl font-black italic tracking-tighter">ZOKANA</h1>
          </div>

          {/* Profil & Panier */}
          <div className="flex items-center gap-5 text-black">
            <button className="text-xl">👤</button>
            <div className="relative">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-1 -right-2 bg-[#ff0000] text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-white">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Barre de Recherche Grise */}
        <div className="px-4 pb-3">
          <div className="flex items-center bg-[#f0f2f2] rounded-md px-3 py-2 border border-gray-200">
            <span className="mr-2 text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="Rechercher sur Zokana" 
              className="bg-transparent w-full outline-none text-sm"
            />
          </div>
        </div>
      </header>

      {/* --- MENU LATÉRAL (DRAWER) --- */}
      {/* Overlay (le fond noir transparent) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu lui-même */}
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-black text-white p-6 flex items-center justify-between">
          <span className="font-bold italic">MENU ZOKANA</span>
          <button onClick={() => setIsOpen(false)} className="text-xl text-gray-400">✕</button>
        </div>

        <nav className="p-4 space-y-6">
          <div className="space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Catégories</p>
            <a href="#" className="flex items-center gap-3 text-sm font-medium hover:text-orange-500">🍹 Tous les jus</a>
            <a href="#" className="flex items-center gap-3 text-sm font-medium hover:text-orange-500">🍋 Citron & Canne</a>
            <a href="#" className="flex items-center gap-3 text-sm font-medium hover:text-orange-500">🔥 Gingembre Boost</a>
            <a href="#" className="flex items-center gap-3 text-sm font-medium hover:text-orange-500">🍍 Ananas Frais</a>
          </div>

          <hr className="border-gray-100" />

          <div className="space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Aide & Contact</p>
            <a href="#" className="block text-sm">Mon compte</a>
            <a href="#" className="block text-sm">Commander via WhatsApp</a>
            <a href="#" className="block text-sm">À propos de nous</a>
          </div>
        </nav>
      </div>
    </>
  );
}