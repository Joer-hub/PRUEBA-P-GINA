'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reintenta reproducir el video al montar (por si el autoplay se bloquea)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* LOGO (logo.png con fondo sutil para verse mejor) */}
            <a href="#inicio" className="flex items-center">
              <span className="bg-white/90 rounded-md shadow-md p-1.5">
                <img
                  src="/images/logo.png"
                  alt="Tavo's House"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </span>
            </a>

            {/* MENÚ DESKTOP */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { href: '#inicio', label: 'INICIO' },
                { href: '#stay', label: 'HABITACIONES' },
                { href: '#offers', label: 'OFERTAS' },
                { href: '#experiencias', label: 'EXPERIENCIAS' },
                { href: '#galeria', label: 'GALERÍA' },
                { href: '#contact', label: 'CONTACTO' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium tracking-wider hover:text-red-500 transition-colors duration-300 ${
                    scrollY > 50 ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="tel:+51949296410"
                className={`text-sm font-medium tracking-wider ${
                  scrollY > 50 ? 'text-gray-700' : 'text-white'
                }`}
              >
                +51 949 296 410
              </a>
              <a
                href="#contact"
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 text-sm font-medium tracking-wider rounded transition-all duration-300"
              >
                RESERVAR AHORA
              </a>
            </div>

            {/* MENÚ MÓVIL */}
            <button
              className={`lg:hidden inline-flex items-center justify-center rounded-md p-2 ${
                scrollY > 50 ? 'text-neutral-900' : 'text-white'
              }`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {[
                { href: '#inicio', label: 'INICIO' },
                { href: '#stay', label: 'HABITACIONES' },
                { href: '#offers', label: 'OFERTAS' },
                { href: '#experiencias', label: 'EXPERIENCIAS' },
                { href: '#galeria', label: 'GALERÍA' },
                { href: '#contact', label: 'CONTACTO' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2 text-sm tracking-wider text-neutral-800 hover:text-red-600"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-2">
                <a href="tel:+51949296410" className="text-sm text-neutral-800">
                  +51 949 296 410
                </a>
                <a href="#contact" className="rounded bg-red-500 px-4 py-2 text-white text-sm">
                  RESERVAR AHORA
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO CON VIDEO */}
      <section id="inicio" className="relative h-screen overflow-hidden">
        {/* VIDEO de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            {/* Tus fuentes originales */}
            <source src="/videos/istockphoto-1214186685-640_adpp_is" type="video/mp4" />
            <source src="/videos/pruebavideo (online-video-cutter.com).mp4" type="video/mp4" />
            <source src="/videos/istockphoto-1214186685-640_adpp_is.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>

        {/* CONTENIDO CENTRADO */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="w-full max-w-5xl mx-auto text-white">
            {/* Caja central: más compacta en móvil y texto justificado */}
            <div className="mx-auto w-full max-w-md sm:max-w-xl md:max-w-3xl rounded-xl bg-black/20 md:bg-black/30 backdrop-blur-[2px] px-3 py-3 sm:px-6 sm:py-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight text-center">
                TAVO'S HOUSE
              </h1>
              <div className="mt-2 text-base sm:text-lg md:text-xl font-light italic text-red-400 tracking-wide text-center">
                Bienvenidos
              </div>
              <div className="mt-1 text-[11px] sm:text-xs md:text-base font-medium tracking-[0.25em] text-white/90 text-center">
                CAJAMARCA HISTORIC LODGING
              </div>

              <p
                className="mt-3 md:mt-5 text-sm sm:text-base md:text-xl font-light leading-relaxed text-white/90"
                style={{ textAlign: 'justify' }}
              >
                Vive la experiencia de una hospitalidad auténtica en el corazón del centro histórico de Cajamarca.
                Encanto colonial y comodidad moderna se unen a solo unos pasos de la Plaza de Armas. Un espacio acogedor
                que combina la arquitectura tradicional con detalles contemporáneos, ideal para disfrutar de la ciudad a pie.
                ¡Te esperamos con el calor de nuestra tierra!
              </p>
            </div>

            {/* STATS: SIEMPRE EN FILA (también en móvil) */}
            <div className="mt-5 md:mt-8 flex justify-center items-center gap-4 sm:gap-10 text-white/85">
              <div className="text-center min-w-[88px]">
                <div className="text-base sm:text-xl md:text-2xl font-light whitespace-nowrap">★ 4.74</div>
                <div className="text-[10px] sm:text-xs md:text-sm tracking-wider">RATING</div>
              </div>
              <div className="w-px h-8 sm:h-10 md:h-12 bg-white/30"></div>
              <div className="text-center min-w-[110px]">
                <div className="text-base sm:text-xl md:text-2xl font-light whitespace-nowrap">2 BLOCKS</div>
                <div className="text-[10px] sm:text-xs md:text-sm tracking-wider whitespace-nowrap">FROM PLAZA</div>
              </div>
              <div className="w-px h-8 sm:h-10 md:h-12 bg-white/30"></div>
              <div className="text-center min-w-[96px]">
                <div className="text-base sm:text-xl md:text-2xl font-light whitespace-nowrap">HISTORIC</div>
                <div className="text-[10px] sm:text-xs md:text-sm tracking-wider">CENTER</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN STORYTELLING */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 leading-tight">
              A True Historic Hotel in Cajamarca
            </h2>
            <div className="w-24 h-px bg-red-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700 mb-8">
              Authentic historic accommodations in Cajamarca's colonial center are rare — and we are unique. Built in the
              heart of Peru's most beautiful colonial city, our charming guesthouse has grown over the years, but we've always
              remained true to our roots.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
              Living 'tranquilo' is a way of life. Whether you choose our room with Plaza de Armas views or our cozy interior
              space, the history and magic of Cajamarca are just outside your door.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCIAS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-8">
                <div className="w-full h-full border border-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏛️</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-4">Step from your room to history</h3>
              <p className="text-gray-600 leading-relaxed">
                Located just two blocks from the magnificent Plaza de Armas, every step takes you deeper
                into Peru's colonial heritage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-8">
                <div className="w-full h-full border border-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌅</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-4">Panoramic historic views</h3>
              <p className="text-gray-600 leading-relaxed">
                Wake up to stunning views of baroque towers and colonial rooftops that have inspired poets
                and travelers for centuries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-8">
                <div className="w-full h-full border border-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-3xl">❤️</span>
                </div>
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-4">Personalization is key</h3>
              <p className="text-gray-600 leading-relaxed">
                Every guest receives personalized attention and local insights that transform visitors into
                family and trips into treasured memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HABITACIONES */}
      <section id="stay" className="py-24 bg-stone-50">
        {/* Room 1 */}
        <div className="max-w-8xl mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-96 lg:h-auto">
              <img src="/images/TAVOS1.png" alt="Centrica Tavos" className="w-full h-full object-cover" />
            </div>

            <div className="bg-white p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-6">
                <div className="text-sm text-red-500 font-medium tracking-wide mb-2">MOST POPULAR</div>
                <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Centrica Tavos</h3>
                <div className="text-2xl font-light text-gray-600">
                  From S/ 95 <span className="text-base">per night</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our signature accommodation in the heart of historic Cajamarca. With privileged views of Plaza de Armas,
                this spacious retreat combines colonial charm with modern amenities.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  2 spacious bedrooms
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Direct Plaza de Armas views
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Fully equipped kitchen
                </div>
              </div>

              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors duration-300 self-start">
                VIEW AVAILABILITY
              </button>
            </div>
          </div>
        </div>

        {/* Room 2 */}
        <div className="max-w-8xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="bg-white p-12 lg:p-16 flex flex-col justify-center lg:order-1">
              <div className="mb-6">
                <div className="text-sm text-amber-600 font-medium tracking-wide mb-2">ROMANTIC RETREAT</div>
                <h3 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Matri Simple</h3>
                <div className="text-2xl font-light text-gray-600">
                  From S/ 80 <span className="text-base">per night</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                An intimate sanctuary perfect for couples seeking romance in the magical atmosphere of colonial Cajamarca.
                Where love stories are written against a backdrop of history.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Intimate double room
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Private courtyard view
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Romantic setting for two
                </div>
              </div>

              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-sm font-medium tracking-wider transition-colors duration-300 self-start">
                DISCOVER ROMANCE
              </button>
            </div>

            <div className="relative h-96 lg:h-auto lg:order-2">
              <img src="/images/TAVOS1.png" alt="Matri Simple" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-32" id="contact">
        <div className="absolute inset-0">
          <img src="/images/TAVOS1.png" alt="TAVO'S HOUSE Experience" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-6xl font-light mb-8 italic">You are welcome</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-12">
            Experience the warmth of Cajamarcan hospitality in the heart of Peru's colonial jewel.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+51949296410"
              className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-gray-800 text-white px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300"
            >
              LLAMAR +51 949 296 410
            </a>
            <a
              href="#contact"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-medium tracking-wider transition-colors duration-300"
            >
              RESERVAR AHORA
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <img src="/images/logo.png" alt="Tavo's House Logo" className="w-10 h-10 object-contain mr-4" />
                <div>
                  <div className="text-2xl font-script italic">Tavo's House</div>
                  <div className="text-xs tracking-widest text-red-500">CAJAMARCA HOTEL</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Authentic hospitality in the heart of Cajamarca's historic center. Where every guest becomes family.
              </p>
              <div className="text-red-400 font-light italic">You are welcome</div>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-red-400 tracking-wider">CONTACTO</h4>
              <div className="space-y-2 text-gray-300">
                <p>+51 949 296 410</p>
                <p>hola@tavoshouse.com</p>
                <p>Centro Histórico, Cajamarca</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-red-400 tracking-wider">SÍGUENOS</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors">Instagram</a>
                <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors">Facebook</a>
                <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors">Airbnb</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} TAVO'S HOUSE. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fuentes script + smooth scroll */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
        .font-script { font-family: 'Dancing Script', cursive; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
