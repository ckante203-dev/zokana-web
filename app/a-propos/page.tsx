import Footer from '../../components/Footer';

export default function Apropos() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="p-6 max-w-2xl mx-auto space-y-10 pt-10">
        <section className="space-y-4">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">L'aventure ZOKANA</h1>
          <div className="h-1.5 w-20 bg-[#E61E2A]"></div>
          <p className="text-gray-600 leading-relaxed font-medium">
            Zokana est né d'une mission simple : redonner au jus de canne à sucre ses lettres de noblesse en Côte d'Ivoire. Nous croyons que la nature n'a pas besoin d'artifices.
          </p>
        </section>

        <div className="grid gap-6">
          <div className="bg-[#F9FBF9] p-6 rounded-3xl border border-green-50">
            <h3 className="font-black uppercase text-xs tracking-widest mb-2">100% Naturel</h3>
            <p className="text-sm text-gray-500">Aucun sucre ajouté, aucun conservateur. Juste la canne, pressée avec soin.</p>
          </div>
          <div className="bg-[#F9FBF9] p-6 rounded-3xl border border-green-50">
            <h3 className="font-black uppercase text-xs tracking-widest mb-2">Engagement local</h3>
            <p className="text-sm text-gray-500">Nos cannes sont sélectionnées auprès des meilleurs planteurs locaux pour garantir une fraîcheur absolue.</p>
          </div>
        </div>

        <section className="pt-6">
          <h2 className="text-xl font-black uppercase italic mb-4 text-[#E61E2A]">Notre Vision</h2>
          <p className="text-gray-600 text-sm leading-relaxed italic">
            "Offrir une alternative saine et rafraîchissante aux boissons industrielles, tout en célébrant la richesse de notre terroir."
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}