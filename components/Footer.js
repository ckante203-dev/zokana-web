export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white border-t border-gray-100 px-6 py-2 flex justify-between items-center z-50 h-16">
      <button className="flex flex-col items-center gap-1 text-black font-bold">
        <span className="text-xl">🏠</span>
        <span className="text-[10px] uppercase">Accueil</span>
      </button>
      
      <button className="flex flex-col items-center gap-1 text-gray-400">
        <span className="text-xl">📋</span>
        <span className="text-[10px] uppercase">Catégories</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-gray-400">
        <span className="text-xl">⭐</span>
        <span className="text-[10px] uppercase">Favoris</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-gray-400">
        <span className="text-xl">⚙️</span>
        <span className="text-[10px] uppercase">Compte</span>
      </button>
    </footer>
  );
}