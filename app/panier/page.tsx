'use client';
import { useState } from 'react';
import { useCart } from '../../lib/CartContext';
import Link from 'next/link';

// Sécurité : Déclaration de l'interface CinetPay pour TypeScript
declare global {
  interface Window {
    CinetPay?: any;
  }
}

export default function PanierPage() {
  const { items, cartCount, removeFromCart, updateQuantity } = useCart();
  
  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    quartier: ''
  });

  const formatPrix = (prix: number) => {
    return prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const total = items.reduce((sum: any, item: any) => sum + (item.prix_025 * item.quantity), 0);

  // --- LOGIQUE PAIEMENT AUTOMATIQUE (CINETPAY) ---
  const payerAutomatique = () => {
    if (!form.nom || !form.telephone || !form.quartier) {
        alert("Veuillez remplir vos informations de livraison");
        return;
    }

    // Sécurité : on vérifie si CinetPay est chargé au moment du clic
    if (typeof window !== "undefined" && window.CinetPay) {
        try {
        window.CinetPay.setConfig({
            apiKey: 'TA_CLE_API', 
            site_id: 'TON_SITE_ID',
            notify_url: 'https://zokana.ci/api/payment-notify'
        });

        window.CinetPay.getCheckout({
            transaction_id: Math.floor(Math.random() * 100000000).toString(),
            amount: total,
            currency: 'XOF',
            channels: 'ALL',
            description: `Commande Jus Zokana - ${form.nom}`,
            customer_name: form.nom,
            customer_phone_number: form.telephone,
            customer_address: form.quartier,
            customer_city: "Abidjan",
            customer_country: "CI"
        });

        window.CinetPay.waitResponse(function(data: any) {
            if (data.status === "ACCEPTED") {
            // On peut envoyer un message de succès ici
            alert("Paiement validé ! Votre jus arrive.");
            }
        });
        } catch (error) {
        console.error("Erreur CinetPay:", error);
        alert("Une erreur est survenue lors du lancement du paiement.");
        }
    } else {
        // Si ce n'est pas chargé, on donne un conseil au client
        alert("Le module de paiement sécurisé charge encore... Veuillez patienter 3 secondes et réessayez.");
    }
    };

  // --- LOGIQUE WHATSAPP ---
  const commanderWhatsApp = () => {
    if (!form.nom || !form.telephone || !form.quartier) {
      alert("Veuillez remplir vos informations de livraison");
      return;
    }

    const message = items
      .map((item: any) => `- ${item.nom} (x${item.quantity}) : ${formatPrix(item.prix_025 * item.quantity)} FCFA`)
      .join('%0A');
    
    const infosClient = `%0A%0A*LIVRAISON :*%0A👤 Nom : ${form.nom}%0A📞 Tel : ${form.telephone}%0A📍 Quartier : ${form.quartier}`;
    
    const url = `https://wa.me/2250769712227?text=Bonjour Zokana, voici ma commande :%0A${message}%0A%0ATotal : ${formatPrix(total)} FCFA${infosClient}`;
    window.open(url, '_blank');
  };

  if (cartCount === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
        <span className="text-8xl mb-4">🥤</span>
        <h2 className="text-2xl font-bold text-gray-800">Votre panier est vide</h2>
        <Link href="/" className="mt-4 bg-[#E61E2A] text-white px-10 py-4 rounded-full font-black shadow-lg uppercase text-sm">Découvrir nos jus</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8] pb-80 text-black">
      {/* Header */}
      <div className="bg-white p-5 border-b sticky top-0 z-50 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
            <h1 className="text-xl font-black italic uppercase text-black">Mon Panier</h1>
            <span className="bg-[#E61E2A] text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm">{cartCount}</span>
        </div>
        <Link href="/" className="text-[10px] font-bold text-gray-400 uppercase">Retour</Link>
      </div>

      <div className="p-4 space-y-4">
        {/* Liste des produits */}
        <div className="space-y-3">
          {items.map((item: any) => (
            <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className="flex gap-4">
                <img src={item.image_url} alt={item.nom} className="w-16 h-16 object-contain" />
                <div className="flex-1">
                  <h3 className="font-bold text-[13px] text-gray-800 uppercase leading-tight">{item.nom}</h3>
                  <p className="text-[#E61E2A] font-black text-sm">{formatPrix(item.prix_025)} FCFA</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between items-center bg-[#FAFAFA] rounded-xl p-2 px-4">
                 <div className="flex items-center gap-4">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 font-bold text-gray-500">-</button>
                    <span className="font-black text-gray-800">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 font-bold text-gray-500">+</button>
                 </div>
                 <p className="font-black text-gray-900">{formatPrix(item.prix_025 * item.quantity)} FCFA</p>
              </div>
            </div>
          ))}
        </div>

        {/* FORMULAIRE DE LIVRAISON */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <h2 className="font-black text-gray-900 italic uppercase border-b pb-2 tracking-tight">Infos de livraison</h2>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Nom complet</label>
              <input 
                type="text" 
                placeholder="Ex: Jean Koffi" 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#E61E2A] focus:bg-white text-gray-900 placeholder:text-gray-600 text-sm transition-all"
                value={form.nom}
                onChange={(e) => setForm({...form, nom: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Téléphone</label>
              <input 
                type="tel" 
                placeholder="Ex: 07 00 00 00 00" 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#E61E2A] focus:bg-white text-gray-900 placeholder:text-gray-600 text-sm transition-all"
                value={form.telephone}
                onChange={(e) => setForm({...form, telephone: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase ml-1">Quartier & Précisions</label>
              <input 
                type="text" 
                placeholder="Ex: Cocody Angré, près de l'église" 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#E61E2A] focus:bg-white text-gray-900 placeholder:text-gray-600 text-sm transition-all"
                value={form.quartier}
                onChange={(e) => setForm({...form, quartier: e.target.value})}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Barre de paiement fixe */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-6 shadow-[0_-15px_30px_rgba(0,0,0,0.08)] z-50 rounded-t-[32px]">
        <div className="flex justify-between items-end mb-5">
          <div className="flex flex-col text-black">
            <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-1">Total à payer</span>
            <span className="text-3xl font-black text-[#E61E2A] leading-none">{formatPrix(total)} <small className="text-xs font-bold uppercase">Fcfa</small></span>
          </div>
          <span className="text-[10px] text-gray-500 font-medium italic">Livraison non incluse</span>
        </div>
        
        <div className="flex flex-col gap-3">
            <button 
                onClick={payerAutomatique} 
                disabled={!form.nom || !form.telephone || !form.quartier}
                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[2px] transition-all flex justify-center items-center gap-3 ${
                  (!form.nom || !form.telephone || !form.quartier) ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-black text-white shadow-xl active:scale-95'
                }`}
            >
                💳 Payer Maintenant
            </button>

            <button 
                onClick={commanderWhatsApp} 
                disabled={!form.nom || !form.telephone || !form.quartier}
                className={`w-full py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex justify-center items-center gap-2 ${
                   (!form.nom || !form.telephone || !form.quartier) ? 'border-gray-200 text-gray-300' : 'border-2 border-[#25D366] text-[#25D366] active:scale-95'
                }`}
            >
                COMMANDER VIA WHATSAPP
            </button>
        </div>
      </div>
    </div>
  );
}