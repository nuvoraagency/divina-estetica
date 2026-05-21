export default function Booking() {
  const dates = [
    { day: "LUN", num: "14", active: false },
    { day: "MAR", num: "15", active: true },
    { day: "MIE", num: "16", active: false },
    { day: "JUE", num: "17", active: false },
    { day: "VIE", num: "18", active: false },
  ];

  const times = [
    "10:00", "11:30", "14:00", "15:15", "16:30", "18:00"
  ];

  return (
    <section id="reservas" className="py-16 lg:py-32 bg-divina-cream relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-divina-dark mb-6">
          Agendá tu <i className="text-divina-softGold font-light">diagnóstico.</i>
        </h2>
        <p className="text-divina-charcoal/80 text-lg font-light mb-16 max-w-2xl mx-auto">
          Reserva tu lugar de forma rápida y sencilla. Elige el tratamiento, el profesional y el horario que mejor se adapte a ti.
        </p>

        {/* Agendarme Widget Fake UI */}
        <div className="w-full bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-divina-nude/50 p-6 md:p-12 overflow-hidden relative text-left">
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left side: Services */}
            <div className="w-full md:w-1/3 border-r border-divina-nude/30 pr-0 md:pr-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-divina-dark mb-6">Tratamiento</h3>
              <div className="space-y-3">
                <div className="p-4 border border-divina-softGold bg-divina-cream/50 rounded-xl cursor-pointer">
                  <p className="font-serif text-lg text-divina-dark">Diagnóstico Facial</p>
                  <p className="text-xs text-divina-softGold uppercase tracking-widest mt-1">30 min</p>
                </div>
                <div className="p-4 border border-divina-nude rounded-xl cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                  <p className="font-serif text-lg text-divina-dark">Limpieza Profunda</p>
                  <p className="text-xs text-divina-charcoal/50 uppercase tracking-widest mt-1">60 min</p>
                </div>
                <div className="p-4 border border-divina-nude rounded-xl cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                  <p className="font-serif text-lg text-divina-dark">Depilación Láser</p>
                  <p className="text-xs text-divina-charcoal/50 uppercase tracking-widest mt-1">45 min</p>
                </div>
              </div>
            </div>

            {/* Right side: Calendar */}
            <div className="w-full md:w-2/3">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-divina-dark">Diciembre 2026</h3>
                <div className="flex gap-2 text-divina-softGold">
                  <button className="w-8 h-8 rounded-full border border-divina-nude flex items-center justify-center hover:bg-divina-nude/20">→</button>
                  <button className="w-8 h-8 rounded-full border border-divina-nude flex items-center justify-center hover:bg-divina-nude/20">→</button>
                </div>
              </div>

              {/* Dates */}
              <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {dates.map((d, i) => (
                  <div key={i} className={`min-w-[4rem] p-3 rounded-xl text-center cursor-pointer transition-colors ${d.active ? 'bg-divina-dark text-divina-white' : 'border border-divina-nude text-divina-charcoal hover:border-divina-softGold'}`}>
                    <p className={`text-[0.65rem] uppercase tracking-widest ${d.active ? 'text-divina-white/70' : 'text-divina-charcoal/50'}`}>{d.day}</p>
                    <p className="font-serif text-xl mt-1">{d.num}</p>
                  </div>
                ))}
              </div>

              {/* Times */}
              <div className="grid grid-cols-3 gap-3 mb-10">
                {times.map((t, i) => (
                  <button key={i} className={`py-3 rounded-lg text-sm tracking-widest transition-colors ${i === 1 ? 'bg-divina-softGold text-white font-medium' : 'border border-divina-nude text-divina-dark hover:border-divina-softGold'}`}>
                    {t}
                  </button>
                ))}
              </div>

              <button className="w-full py-4 bg-divina-dark text-divina-white rounded-full text-xs font-semibold uppercase tracking-[0.2em] hover:bg-divina-softGold transition-colors">
                Confirmar Reserva
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center border-t border-divina-nude/30 pt-6">
             <p className="text-[0.55rem] tracking-[0.1em] text-divina-charcoal/30 uppercase italic">
               * El widget de Agendarme será integrado en este bloque. Diseño ilustrativo.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
