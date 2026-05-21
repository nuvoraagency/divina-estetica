import Image from 'next/image';

const treatments = [
  {
    title: "Limpieza Facial Profunda",
    desc: "Renovación celular para una piel luminosa, libre de impurezas y radiante.",
    img: "/treatment_facial.png",
    colSpan: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/9]",
  },
  {
    title: "Depilación Láser Definitiva",
    desc: "Tecnología avanzada para una piel suave permanente. Sin dolor, resultados reales.",
    img: "/treatment_body.png",
    colSpan: "md:col-span-5",
    aspect: "aspect-square md:aspect-[4/3]",
  },
  {
    title: "Radiofrecuencia Facial y Corporal",
    desc: "Estimulación de colágeno para combatir la flacidez y mejorar la elasticidad.",
    img: "/treatment_radio.png",
    colSpan: "md:col-span-4",
    aspect: "aspect-square",
  },
  {
    title: "Remodelación y Microvibración",
    desc: "Tratamiento no invasivo que tonifica, reduce celulitis y mejora la circulación.",
    img: "/treatment_micro.png",
    colSpan: "md:col-span-4",
    aspect: "aspect-square",
  },
  {
    title: "Exosomas & Regeneración",
    desc: "Lo último en biotecnología estética para reparar y rejuvenecer a nivel celular.",
    img: "/treatment_exosomas.png",
    colSpan: "md:col-span-4",
    aspect: "aspect-square",
  }
];

export default function Treatments() {
  return (
    <section id="tratamientos" className="py-16 lg:py-32 bg-divina-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-divina-dark mb-6">
            Tratamientos diseñados para <i className="text-divina-softGold font-light">resultados reales.</i>
          </h2>
          <p className="text-divina-charcoal/80 text-lg font-light">
            Combinamos tecnología de vanguardia con un enfoque humano y personalizado para cuidar cada detalle de tu piel y tu cuerpo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-min pb-32">
          {treatments.map((t, i) => (
            <div key={i} className={`group cursor-pointer ${t.colSpan}`}>
              <div className={`relative w-full rounded-2xl overflow-hidden bg-divina-cream ${t.aspect}`}>
                <Image 
                  src={t.img} 
                  alt={t.title} 
                  fill 
                  className="object-cover object-center transition-all duration-[10s] ease-out group-hover:scale-110 group-hover:opacity-90"
                />
                {/* Subtle gradient overlay for text readability if needed, though we place text outside */}
                <div className="absolute inset-0 bg-divina-dark/0 transition-colors duration-500 group-hover:bg-divina-dark/10"></div>
              </div>
              <div className="mt-6 flex flex-col items-start">
                <h3 className="font-serif text-2xl text-divina-dark mb-2 group-hover:text-divina-softGold transition-colors">{t.title}</h3>
                <p className="text-sm text-divina-charcoal/70 font-light leading-relaxed max-w-sm">{t.desc}</p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-divina-softGold flex items-center gap-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Saber más <span className="text-lg leading-none">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
