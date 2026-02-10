import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default async function Page() {
  const { data: jus } = await supabase.from('jus').select('*');

  return (
    <div className="min-h-screen bg-[#f1f1f1] pb-24">
      <Header />

      {/* Bannière Catégorie Rapide */}
      <div className="bg-white p-4 border-b flex gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
        {['Tous', 'Pur Canne', 'Citron', 'Gingembre', 'Ananas'].map((cat) => (
          <button key={cat} className="px-4 py-1.5 bg-gray-100 rounded-full text-xs font-bold text-gray-600">
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de Produits (Style Jumia : 2 colonnes avec espace) */}
      <section className="p-2 grid grid-cols-2 gap-2">
        {jus?.map((item) => (
          <ProductCard key={item.id} produit={item} />
        ))}
      </section>

      <Footer />
    </div>
  );
}