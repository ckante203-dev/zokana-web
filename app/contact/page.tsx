import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="p-6 max-w-2xl mx-auto pt-10 pb-20">
        <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-2">Contactez-nous</h1>
        <p className="text-gray-400 font-bold text-xs uppercase tracking-[3px] mb-10">Une question ? Une commande spéciale ?</p>

        <div className="space-y-8">
          {/* WhatsApp Direct */}
          <a href="https://wa.me/2250769712227" className="flex items-center gap-5 p-6 bg-green-50 rounded-[32px] border border-green-100 active:scale-95 transition-transform">
            <span className="text-3xl">💬</span>
            <div>
              <h4 className="font-black uppercase text-[10px] tracking-widest text-green-700">WhatsApp</h4>
              <p className="font-black text-lg text-green-900">Cliquez pour discuter</p>
            </div>
          </a>

          {/* Appel Direct */}
          <a href="tel:+2250769712227" className="flex items-center gap-5 p-6 bg-gray-50 rounded-[32px] border border-gray-100 active:scale-95 transition-transform">
            <span className="text-3xl">📞</span>
            <div>
              <h4 className="font-black uppercase text-[10px] tracking-widest text-gray-400">Appelez-nous</h4>
              <p className="font-black text-lg text-black">+225 07 69 71 22 27</p>
            </div>
          </a>

          {/* Email ou Localisation */}
          <div className="p-6 border-2 border-dashed border-gray-100 rounded-[32px] space-y-2">
            <h4 className="font-black uppercase text-[10px] tracking-widest text-gray-300 text-center">Horaires de livraison</h4>
            <p className="text-center font-bold text-sm text-gray-600">Lundi — Dimanche<br/>08:00 — 19:00</p>
            <p className="text-center text-[10px] text-gray-400 mt-4">Abidjan, Côte d'Ivoire</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}