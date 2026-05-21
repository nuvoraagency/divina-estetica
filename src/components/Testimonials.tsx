export default function Testimonials() {
  const testimonials = [
    {
      text: "Hace un año que me atiendo con Noelia. La dedicación que le pone a cada sesión es increíble. Mi piel cambió por completo, se ve más sana y luminosa que nunca.",
      author: "Valentina G.",
      treatment: "Limpieza Facial Profunda"
    },
    {
      text: "El nivel de profesionalismo es altísimo. Te explican cada paso del tratamiento y los resultados de la depilación láser fueron notorios desde la primera sesión. Un ambiente súper relajante.",
      author: "Camila R.",
      treatment: "Depilación Láser Definitiva"
    },
    {
      text: "Llegué buscando mejorar la textura de mi piel y encontré un lugar donde realmente se preocupan por tu bienestar integral. 100% recomendado, es mi momento favorito del mes.",
      author: "Sofía M.",
      treatment: "Radiofrecuencia Facial"
    }
  ];

  return (
    <section id="testimonios" className="py-16 lg:py-32 bg-divina-dark text-divina-cream text-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-divina-softGold mb-8 block">
          Lo que dicen de nosotros
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-6 text-divina-softGold opacity-50">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="font-serif italic text-lg lg:text-xl font-light leading-relaxed mb-6 flex-grow">
                "{t.text}"
              </p>
              <div>
                <p className="text-sm font-semibold tracking-wide">{t.author}</p>
                <p className="text-xs text-divina-cream/60 mt-1">{t.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
