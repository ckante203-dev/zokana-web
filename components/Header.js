export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Menu & Logo */}
        <div className="flex items-center gap-4">
          <button className="text-2xl text-gray-800">☰</button>
          <h1 className="text-xl font-black italic tracking-tighter text-black">ZOKANA</h1>
        </div>

        {/* Profil & Panier */}
        <div className="flex items-center gap-5">
          <button className="flex flex-col items-center">
            <span className="text-xl">👤</span>
          </button>
          <div className="relative cursor-pointer">
            <span className="text-2xl">🛒</span>
            {/* Le Zéro Rouge */}
            <span className="absolute -top-1 -right-2 bg-[#e61601] text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-white">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Barre de Recherche Grise (Amazon Style) */}
      <div className="px-4 pb-3">
        <div className="flex items-center bg-[#f0f2f2] rounded-md px-3 py-2.5 border border-gray-200">
          <span className="mr-2 text-gray-400 text-sm">🔍</span>
          <input 
            type="text" 
            placeholder="Rechercher sur Zokana" 
            className="bg-transparent w-full outline-none text-sm text-black placeholder:text-gray-500"
          />
        </div>
      </div>
    </header>
  );
}