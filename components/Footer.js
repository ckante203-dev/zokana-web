'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    /* mt-20 crée l'espace entre tes articles et le début du footer */
    <footer className="bg-[#F9FBF9] text-gray-800 mt-20 pt-16 pb-32 px-6 border-t border-gray-100 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Section Identité de Marque */}
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-4xl font-black italic tracking-tighter text-[#1A2C1D]">ZOKANA</h2>
          <div className="h-1.5 w-12 bg-[#E61E2A] rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-medium">
            Partenaire de vos moments d'exception. Un service sur-mesure pour rafraîchir vos invités avec le meilleur du jus de canne à Abidjan.
          </p>
        </div>

        {/* Section Services (Inspiré SPEJ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {/* Carte Événementiel */}
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 group hover:border-green-100 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💍</span>
              <h4 className="font-black text-gray-900 uppercase text-[10px] tracking-[2px]">Événementiel</h4>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
              Mariages, baptêmes ou anniversaires : profitez de nos <strong>cocktails à volonté</strong> (Nature, Citron, Ananas). Notre équipe se déplace pour assurer le service.
            </p>
          </div>

          {/* Carte B2B / Gros */}
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 group hover:border-green-100 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🏬</span>
              <h4 className="font-black text-gray-900 uppercase text-[10px] tracking-[2px]">Boutiques & Pro</h4>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
              Vente en détail et <strong>en gros</strong>. Nous approvisionnons vos restaurants, boutiques et supermarchés avec des livraisons régulières.
            </p>
          </div>
        </div>

        {/* Contact et Navigation */}
        <div className="space-y-12">
          {/* Gros numéro de contact */}
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-[3px]">Service Client & Commandes</p>
            <a 
              href="tel:+2250769712227" 
              className="inline-block text-2xl md:text-3xl font-black text-[#1A2C1D] hover:text-[#E61E2A] transition-colors"
            >
              +225 07 69 71 22 27
            </a>
            <p className="text-sm text-gray-400 font-medium italic">Disponible 7j/7 pour vos livraisons</p>
          </div>

          {/* Liens de bas de page */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-gray-100 pt-10">
            <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Accueil</Link>
            <Link href="/panier" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Mon Panier</Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">Hygiène & Qualité</Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black">CGV</Link>
          </div>
        </div>

        {/* Copyright final */}
        <div className="mt-16 text-center">
          <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[5px]">
            ZOKANA JUICE × SPEJ © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}