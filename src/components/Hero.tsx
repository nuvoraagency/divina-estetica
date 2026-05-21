import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 lg:pt-32 pb-20 overflow-hidden flex items-center bg-divina-cream">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-divina-nude/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-divina-blush/30 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content (Left) */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-8 mt-2 lg:mt-0">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-divina-softGold/30 bg-divina-white/50 text-[0.65rem] font-semibold uppercase tracking-widest text-divina-softGold backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-divina-softGold mr-2 animate-pulse"></span>
                +10 años mejorando pieles
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-divina-softGold/30 bg-divina-white/50 text-[0.65rem] font-semibold uppercase tracking-widest text-divina-softGold backdrop-blur-sm">
                Atención Personalizada
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.1] text-divina-dark tracking-tight">
                El arte de resaltar tu <span className="italic text-divina-softGold font-light">belleza natural.</span>
              </h1>
              <p className="text-lg lg:text-xl text-divina-charcoal/80 font-light max-w-lg leading-relaxed pt-2">
                Descubrí una experiencia estética premium en Pocitos. Tratamientos avanzados diseñados para devolverle a tu piel su luminosidad y vitalidad.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <a href="#reservas" className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-divina-dark text-divina-cream overflow-hidden rounded-full font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[0.65rem] sm:text-[0.7rem] whitespace-nowrap transition-all duration-500 hover:shadow-2xl hover:shadow-divina-softGold/20">
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-3 transition-transform duration-500 group-hover:-translate-x-1">
                  Agendá tu diagnóstico
                </span>
                <span className="absolute right-4 sm:right-6 opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </a>
              <a href="#tratamientos" className="inline-flex items-center justify-center px-6 sm:px-8 py-4 border border-divina-dark/20 text-divina-dark rounded-full font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[0.65rem] sm:text-[0.7rem] whitespace-nowrap transition-all duration-500 hover:border-divina-dark hover:bg-divina-dark/5">
                Ver Tratamientos
              </a>
            </div>
          </div>

          {/* Image (Right) */}
          <div className="w-full lg:w-7/12 relative">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/hero.png" 
                alt="Mujer recibiendo tratamiento facial en Divina Estética" 
                fill
                className="object-cover object-center transition-transform duration-[20s] hover:scale-105"
                priority
              />
              {/* Soft overlay to blend image borders slightly */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
            </div>

            {/* Floating Element (Optional touch of elegance) */}
            <div className="absolute -bottom-8 -left-8 bg-divina-white/95 p-6 rounded-2xl shadow-xl shadow-divina-dark/5 backdrop-blur-md hidden md:block max-w-[240px]">
              <p className="font-serif italic text-2xl text-divina-dark mb-1">Resultados reales</p>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-divina-softGold">Tecnología & Bienestar</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
