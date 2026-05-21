import Image from 'next/image';

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 lg:py-32 bg-divina-nude/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-divina-blush/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-t-full overflow-hidden shadow-2xl">
              <Image 
                src="/experience_interior.png" 
                alt="Experiencia Divina Estética en Pocitos" 
                fill 
                className="object-cover object-center"
              />
              <div className="absolute inset-0 border border-divina-softGold/20 rounded-t-full m-4 pointer-events-none"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-divina-softGold">
              Nuestra Filosofía
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-divina-dark leading-tight">
              Más de 10 años dedicados a tu <i className="text-divina-softGold font-light">bienestar integral.</i>
            </h2>
            <div className="space-y-6 text-divina-charcoal/80 font-light text-lg leading-relaxed">
              <p>
                En Divina Estética, creemos que el cuidado personal no es un lujo, sino una forma esencial de amor propio. Ubicados en el corazón de Pocitos, hemos creado un refugio donde la tecnología avanzada se encuentra con la calidez humana.
              </p>
              <p>
                Cada diagnóstico es único, porque cada piel cuenta una historia distinta. Noelia y su equipo te acompañan en un proceso de transformación sutil y respetuoso, realzando tu belleza natural sin alterar tu esencia.
              </p>
            </div>
            
            <div className="pt-6">
              <p className="font-serif italic text-2xl text-divina-dark mb-8">"Tu piel en las mejores manos."</p>
              <a href="https://wa.me/59892807070" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 border border-divina-dark/20 text-divina-dark rounded-full font-medium tracking-[0.2em] uppercase text-[0.65rem] transition-all duration-500 hover:border-divina-dark hover:bg-divina-dark hover:text-divina-cream">
                Consulta por WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
