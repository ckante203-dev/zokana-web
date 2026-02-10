export default function ProductCard({ produit }) {
  return (
    <div className="product-card">
      {/* Badge St Valentin / Promo */}
      <div className="promo-badge">PROMO</div>

      {/* Image avec container pour centrage parfait */}
      <div className="h-40 w-full flex justify-center items-center py-2 relative">
        <img 
          src={produit.image_url} 
          alt={produit.nom}
          className="max-h-full object-contain"
        />
        {/* Petit cœur de favoris comme sur ta capture */}
        <button className="absolute bottom-0 right-0 text-orange-400 text-lg">♡</button>
      </div>

      {/* Titre & Prix */}
      <div className="mt-2">
        <h3 className="text-[12px] text-gray-700 leading-snug line-clamp-2 h-8">
          {produit.nom} - Pur jus de canne pressé
        </h3>
        
        <div className="mt-2">
          <span className="text-[16px] font-bold text-black">{produit.prix_025} FCFA</span>
          <div className="flex items-center gap-2">
             <span className="text-[11px] text-gray-400 line-through">1,200 FCFA</span>
             <span className="text-[10px] text-orange-500 bg-orange-50 px-1">-15%</span>
          </div>
        </div>

        {/* Étoiles Jumia */}
        <div className="flex items-center mt-1 text-[10px] text-[#f6b01e]">
          ★★★★★ <span className="text-gray-400 ml-1">(15)</span>
        </div>

        {/* Bouton Orange Jumia */}
        <button className="add-to-cart-btn w-full shadow-lg active:brightness-90 transition-all">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}