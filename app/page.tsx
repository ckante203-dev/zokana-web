import { supabase } from '../lib/supabaseClient';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import Link from 'next/link';

interface PageProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.search?.toLowerCase() || '';
  
  const { data: jus } = await supabase.from('jus').select('*');

  const jusFiltres = jus?.filter((item) => {
    const nom = item.nom?.toLowerCase() || '';
    const description = item.description?.toLowerCase() || '';
    return nom.includes(query) || description.includes(query);
  });

  return (
    <div className="min-h-screen bg-[#f1f1f1] pb-24">
      
      {/* 1. Barre des Catégories */}
      <div className="bg-white p-4 border-b flex gap-3 overflow-x-auto no-scrollbar whitespace-nowrap sticky top-[120px] z-40">
        {['Tous', 'Pur Canne', 'Citron', 'Gingembre', 'Ananas'].map((cat) => {
          const catLower = cat.toLowerCase();
          const isActive = (query === catLower) || (cat === 'Tous' && !query);
          
          return (
            <Link 
              key={cat}
              href={cat === 'Tous' ? '/' : `/?search=${catLower}`}
              className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${
                isActive
                  ? 'bg-[#E61E2A] text-white shadow-md' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat}
            </Link>
          );
        })}
      </div>

      {/* 2. Grille de Produits */}
      <section className="p-2 min-h-[60vh]">
        {jusFiltres && jusFiltres.length > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            {jusFiltres.map((item) => (
              <ProductCard key={item.id} produit={item} />
            ))}
          </div>
        ) : (
          /* ÉTAT VIDE : Quand on ne trouve rien */
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 animate-pulse">
              <span className="text-5xl">🥤</span>
            </div>
            <h2 className="text-black font-black uppercase text-sm tracking-[3px] mb-2">
              Aucun jus trouvé
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed mb-8 max-w-[220px]">
              Désolé, nous n'avons rien trouvé pour <span className="text-[#E61E2A] font-bold">"{query}"</span>. 
              Essayez une autre saveur !
            </p>
            {/* Ce bouton renvoie vers "/" ce qui videra le champ grâce au useEffect du Header */}
            <Link 
              href="/" 
              className="bg-black text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[2px] active:scale-95 transition-transform shadow-lg"
            >
              Retour au catalogue
            </Link>
          </div>
        )}
      </section>

      {/* 3. Bouton WhatsApp */}
      <a 
        href="https://wa.me/2250769712227?text=Bonjour Zokana, je souhaite passer une commande."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-[99] active:scale-90 transition-all flex items-center justify-center hover:rotate-12"
      >
        <span className="text-2xl">💬</span>
      </a>

      <Footer />
    </div>
  );
}