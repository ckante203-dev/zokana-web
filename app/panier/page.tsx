'use client';
import { useCart } from '../../lib/CartContext';
import Link from 'next/link';

export default function PanierPage() {
  const { items, cartCount, removeFromCart, updateQuantity } = useCart();

  const total = items.reduce((sum: any, item: any) => sum + (item.prix_025 * item.quantity), 0);

  const commanderWhatsApp = () => {
    const message = items
      .map((item: any) => `- ${item.nom} (x${item.quantity}) : ${item.prix_025 * item.quantity} FCFA`)
      .join('%0A');
    const url = `https://wa.me/2250769712227?text=Bonjour Zokana, voici ma commande :%0A${message}%0A%0ATotal : ${total} FCFA`;
    window.open(url, '_blank');
  };

  if (cartCount === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
        <span className="text-8xl mb-4">🥤</span>
        <h2 className="text-2xl font-bold text-gray-800">Votre panier est vide</h2>
        <Link href="/" className="mt-4 bg-[#E61E2A] text-white px-8 py-3 rounded-full font-bold shadow-lg">Découvrir nos jus</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8] pb-40">
      <div className="bg-white p-4 border-b flex items-center justify-between">
        <h1 className="text-xl font-black italic">MON PANIER ({cartCount})</h1>
        <Link href="/" className="text-xs text-[#E61E2A] font-bold">CONTINUER VOS ACHATS</Link>
      </div>

      <div className="p-4 space-y-3">
        {items.map((item: any) => (
          <div key={item.id} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3">
            <div className="flex gap-4">
              <img src={item.image_url} alt={item.nom} className="w-20 h-20 object-contain bg-gray-50 rounded-lg" />
              <div className="flex-1">
                <h3 className="font-bold text-sm text-gray-800">{item.nom}</h3>
                <p className="text-[#E61E2A] font-bold text-sm">{item.prix_025} FCFA</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500 text-xl"
              >
                🗑️
              </button>
            </div>

            {/* Contrôles de quantité dans le panier */}
            <div className="flex justify-between items-center border-t pt-2">
               <div className="flex items-center bg-gray-100 rounded-lg">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-10 h-8 flex items-center justify-center font-bold text-gray-600"
                  >-</button>
                  <span className="px-4 font-bold text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-10 h-8 flex items-center justify-center font-bold text-gray-600"
                  >+</button>
               </div>
               <p className="font-black text-gray-900">{item.prix_025 * item.quantity} FCFA</p>
            </div>
          </div>
        ))}
      </div>

      {/* Barre de paiement */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-5 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 font-bold text-xs uppercase">Total à payer</span>
          <span className="text-2xl font-black text-[#E61E2A]">{total} FCFA</span>
        </div>
        <button onClick={commanderWhatsApp} className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black shadow-xl active:scale-95 transition-transform">
          COMMANDER VIA WHATSAPP
        </button>
      </div>
    </div>
  );
}