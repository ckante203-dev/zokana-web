'use client';
import { useState } from 'react';
import { useCart } from '../lib/CartContext';

export default function ProductCard({ produit }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setIsAdding(true);
    addToCart(produit, quantity);
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 1000);
  };

  return (
    <div className="bg-white flex flex-col shadow-sm border border-gray-100 rounded-2xl overflow-hidden p-3 h-[420px] relative">
      {/* Badge Promo */}
      <div className="absolute top-4 left-4 z-10 bg-[#E61E2A] text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
        PROMO
      </div>

      {/* ZONE IMAGE (60%) */}
      <div className="h-60 w-full flex justify-center items-center relative bg-[#F4F4F4] rounded-xl overflow-hidden mb-3 p-4">
        <img 
          src={produit.image_url} 
          alt={produit.nom}
          /* drop-shadow-2xl fait ressortir la bouteille PNG en 3D */
          className="h-full w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
        />
        <button className="absolute top-2 right-2 text-gray-300 text-xl hover:text-red-500 transition-colors">
          ♡
        </button>
      </div>

      {/* ZONE INFOS (40%) */}
      <div className="flex flex-col justify-between flex-grow px-1">
        <div>
          <h3 className="text-[14px] font-bold text-gray-800 leading-tight line-clamp-2 uppercase tracking-tight">
            {produit.nom}
          </h3>
          <p className="text-[#E61E2A] font-black text-xl mt-1">
            {produit.prix_025} <span className="text-[10px] font-normal">FCFA</span>
          </p>
        </div>

        {/* Sélecteur et Bouton */}
        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between bg-gray-100 rounded-xl p-1">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-200 rounded-lg transition-all"
            > - </button>
            <span className="font-black text-sm text-gray-800">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-200 rounded-lg transition-all"
            > + </button>
          </div>

          <button 
            onClick={handleAdd}
            disabled={isAdding}
            className={`w-full py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
              isAdding 
              ? 'bg-green-600 text-white' 
              : 'bg-[#E61E2A] text-white active:scale-95 hover:shadow-lg'
            }`}
          >
            {isAdding ? `✓ Ajouté` : 'Ajouter au panier'}
          </button>
        </div>
      </div>
    </div>
  );
}