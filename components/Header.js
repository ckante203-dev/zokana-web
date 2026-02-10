'use client';
import { useState, useEffect, Suspense } from 'react';
import { useCart } from '../lib/CartContext';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

function HeaderContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { cartCount } = useCart();
  
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  // Synchronisation avec l'URL
  useEffect(() => {
    const queryInUrl = searchParams.get('search') || '';
    setSearchTerm(queryInUrl);
  }, [searchParams]);

  // Tooltip panier
  useEffect(() => {
    if (cartCount > 0) {
      setShowTooltip(true);
      const timer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  // FONCTION CORRIGÉE (Retrait du ": string")
  const handleSearch = (value) => {
    setSearchTerm(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    router.replace(`/?${params.toString()}`);
  };

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100 font-sans text-black">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className="text-2xl p-1 active:scale-90 transition-transform">☰</button>
            <Link href="/"><h1 className="text-xl font-black italic tracking-tighter cursor-pointer">ZOKANA</h1></Link>
          </div>

          <div className="flex items-center gap-2">
            {cartCount > 0 && (
              <span className={`text-[9px] font-black text-[#E61E2A] uppercase tracking-tighter transition-all duration-500 ${showTooltip ? 'opacity-100' : 'opacity-40'}`}>
                Payer ici →
              </span>
            )}
            <Link href="/panier" className="relative p-2 active:scale-90 transition-transform text-2xl">
              🛒
              {cartCount > 0 && (
                <span className="absolute top-1 right-0 bg-[#E61E2A] text-white text-[9px] font-black h-4 w-4 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        <div className="px-4 pb-3">
          <div className="relative flex items-center">
            <span className="absolute left-3 text-gray-400 text-xs pointer-events-none">🔍</span>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Chercher un jus, une saveur..." 
              className="w-full bg-gray-100 py-2.5 pl-10 pr-10 rounded-xl text-sm outline-none focus:bg-gray-200/50 transition-colors text-black font-medium"
            />
            {searchTerm && (
              <button onClick={() => handleSearch('')} className="absolute right-3 text-gray-400 p-1 font-bold">✕</button>
            )}
          </div>
        </div>
      </header>

      {/* Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white w-72 h-full p-6 shadow-2xl flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-black italic text-xl text-black">ZOKANA</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 text-sm font-bold p-2">✕</button>
              </div>
              <nav className="flex flex-col gap-6 font-black uppercase text-sm tracking-widest text-black">
                <Link href="/" onClick={() => setIsOpen(false)}>🏠 Accueil</Link>
                <Link href="/panier" onClick={() => setIsOpen(false)} className="flex items-center justify-between">
                  <span>🥤 Mes Commandes</span>
                  {cartCount > 0 && <span className="bg-[#E61E2A] text-white text-[10px] px-2 py-0.5 rounded-full">{cartCount}</span>}
                </Link>
                <hr className="border-gray-100" />
                <Link href="/a-propos" onClick={() => setIsOpen(false)}>À propos</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default function Header() {
  return (
    <Suspense fallback={<div className="h-24 bg-white border-b" />}>
      <HeaderContent />
    </Suspense>
  );
}