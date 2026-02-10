import { supabase } from '../lib/supabaseClient';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

// NOTE : On ne ré-importe PAS le Header ici, car il est déjà dans layout.js
export default async function Page() {
  const { data: jus } = await supabase.from('jus').select('*');

  return (
    <div className="min-h-screen bg-[#f1f1f1] pb-24">
      {/* 1. LE HEADER A ÉTÉ SUPPRIMÉ D'ICI CAR IL EST DANS LE LAYOUT */}

      {/* Bannière Catégorie Rapide */}
      <div className="bg-white p-4 border-b flex gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
        {['Tous', 'Pur Canne', 'Citron', 'Gingembre', 'Ananas'].map((cat) => (
          <button key={cat} className="px-4 py-1.5 bg-gray-100 rounded-full text-xs font-bold text-gray-600">
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de Produits */}
      <section className="p-2 grid grid-cols-2 gap-2">
        {jus?.map((item) => (
          <ProductCard key={item.id} produit={item} />
        ))}
      </section>

      {/* Bouton WhatsApp Flottant Zokana */}
      <a 
        href="https://wa.me/2250769712227?text=Bonjour Zokana, je souhaite passer une commande."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-[99] hover:scale-110 transition-transform flex items-center justify-center"
      >
        <span className="text-2xl">💬</span>
      </a>

      <Footer />
    </div>
  );
}