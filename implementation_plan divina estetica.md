# Plan de Implementación: Landing Page Divina Estética

Este documento detalla el plan de diseño y desarrollo para la landing page premium, moderna y minimalista del centro de estética **Divina Estética**, ubicado en Pocitos, Montevideo.

---

## Filosofía de Diseño e Identidad Visual (Actualizado)

Para capturar la esencia real del Instagram de la marca y seguir la dirección visual solicitada:
1. **Comportamiento Visual de la Interfaz**:
   - **Liviana, editorial y fluida**: Evitaremos bloques con bordes duros, separación excesiva de secciones mediante franjas de colores contrastantes o tarjetas rígidas tipo dashboard.
   - **Ritmo visual y espacio**: Usaremos un espaciado amplio y fluido (`py-24` a `py-32` en desktop) para que el contenido respire.
   - **Composición asimétrica**: Combinaremos tipografía de gran jerarquía con imágenes de alta calidad en composiciones que recuerden a una revista de moda o cuidado de la piel de lujo (Vogue, Harper's Bazaar, marcas de skincare premium como Glossier o Aesop).
2. **Paleta de Colores Curada**:
   - Fondo: Crema cálido (`#FAF8F5`), Blanco cálido (`#FFFDFB`), Nude/Champagne (`#F3ECE3`).
   - Acentos: Rosado Maquillaje/Nude Rosado (`#EADCD2`, `#DFCDC3`), Dorado suave/oro satinado (`#D4AF37` / `#C5A880`).
   - Texto: Gris cálido oscuro (`#2C2A29` o `#3C3935`) para un contraste elegante y suave, eliminando el uso de negro puro.
3. **Dirección Fotográfica**:
   - **Naturalidad y bienestar**: Imágenes cálidas con luz natural suave, texturas de piel reales, detalles de productos y gestos delicados.
   - **Evitar stock clínico/corporativo**: Nada de sonrisas falsas mirando a cámara, batas blancas rígidas ni imágenes fitness agresivas. La fotografía debe evocar calma y bienestar emocional.
4. **Enfoque de Conversión Orgánico**:
   - La reserva no se venderá de forma invasiva. La conversión ocurrirá de forma natural gracias a la elegancia y confianza que transmite la marca.
   - Los CTAs principales se integrarán sutilmente mediante transiciones elegantes y tipografía sofisticada.

---

## Estructura de Secciones

### 1. Navbar
- Barra de navegación minimalista, con un efecto de desenfoque de fondo ultra suave (`backdrop-blur-md bg-[#FAF8F5]/80`).
- Enlaces limpios sin decoraciones toscas: Inicio, Tratamientos, Experiencia, Reservas, Contacto.
- Botón "Reservar turno" discreto y refinado.

### 2. Hero Section
- Composición editorial asimétrica.
- Texto emocional y de alta jerarquía tipográfica a la izquierda con badges tipo píldora sumamente elegantes y minimalistas (ej: `+10 años mejorando pieles`, `Atención personalizada`).
- Imagen grande y cálida a la derecha, con un encuadre artístico que transmita cuidado personal y suavidad.
- CTAs integrados orgánicamente.

### 3. Tratamientos Destacados
- Grid de composición libre, evitando el look estructurado de tarjetas de comercio electrónico tradicionales.
- Imágenes suaves con transiciones de hover finas (ej: opacidad sutil, zoom lento de la imagen dentro de su contenedor redondeado).
- Tratamientos reales extraídos del Instagram de la marca:
  - **Limpieza Facial Profunda**
  - **Depilación Láser Definitiva**
  - **Radiofrecuencia Facial y Corporal**
  - **Remodelación y Microvibración**
  - **Exosomas & Regeneración Celular**

### 4. Sección "Experiencia Divina"
- Una narrativa editorial que resalte la calidez de Noelia, la atención personalizada y el ambiente del centro en Pocitos.
- Disposición de texto fluida combinada con una o dos imágenes de detalles estéticos (textura de crema, luz solar filtrada).

### 5. Reservas Online (Arquitectura Preparada)
- Contenedor responsive optimizado para el widget de *Agendarme*.
- Mockup interactivo extremadamente estético y minimalista que ilustra el proceso de reserva en 3 pasos sencillos.
- Estructura HTML limpia y comentarios técnicos listos para la futura inserción del iframe y la telemetría de conversión (Analytics, Meta Pixel).

### 6. Testimonios Reales
- Citas textuales minimalistas con tipografía itálica elegante y nombres de clientas reales.
- Sin recuadros rígidos ni estrellas amarillas de stock comercial; solo tipografía pura y espacio para respirar.

### 7. CTA Final & Footer
- Un cierre cálido y emocional invitando al cuidado personal.
- Footer minimalista con dirección en Pocitos, enlaces a redes reales (Instagram, Facebook, WhatsApp), horarios y un branding de cierre muy limpio.

---

## Plan de Ejecución

1. **Inicialización**: Crear proyecto Next.js en el directorio actual.
2. **Configuración de Estilos y Fuentes**: Integrar `Cormorant Garamond` (títulos) y `Montserrat`/`Outfit` (cuerpo) y definir la paleta de colores personalizada en Tailwind.
3. **Maquetación y Componentes**:
   - `Navbar`
   - `HeroSection`
   - `TreatmentsSection`
   - `ExperienceSection`
   - `BookingSection`
   - `TestimonialsSection`
   - `Footer`
4. **Optimización de Contenido y SEO Local**: Ajustar encabezados semánticos y preparar el marcado para SEO local.
5. **Verificación**: Realizar build de producción y asegurar responsividad móvil excelente.
