
import React, { useState, useEffect, useMemo, memo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Menu, ChevronLeft, ChevronRight, MessageCircle, MapPin, ArrowRight, Utensils, Fish, Flame, Sparkles, HeartHandshake, Eye, Check } from 'lucide-react';
import { translations } from './translations.ts';
import { Language, TranslationStrings } from './types.ts';
import { LanguageToggle } from './components/LanguageToggle.tsx';
import { CookieConsent } from './components/CookieConsent.tsx';

type View = 'inicio' | 'hospedaje' | 'restaurante' | 'experiencias' | 'legal';

// --- COMPONENTE HERO PARA SUBPÁGINAS ---
const SubpageHero = memo(({ title, subtitle, bgImage, fadeTo = "bg-white" }: { title: string, subtitle: string, bgImage: string, fadeTo?: string }) => (
  <section className="h-[50vh] sm:h-[60vh] md:h-[75vh] relative flex items-center justify-center overflow-hidden bg-[#0b3b52]">
    <div 
      className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
      style={{ backgroundImage: `url('${bgImage}')` }}
    />
    
    <div className="absolute inset-0 bg-gradient-to-b from-[#0b3b52]/70 via-[#0b3b52]/30 to-black/40" />
    
    <div className="relative text-center px-5 sm:px-6 z-10 animate-reveal max-w-4xl">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-3 sm:mb-6 drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)] tracking-tighter uppercase leading-[0.95]">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm sm:text-lg md:text-2xl text-white/95 max-w-2xl mx-auto font-light tracking-wide italic leading-relaxed drop-shadow-lg">
          {subtitle}
        </p>
      )}
    </div>
    
    <div className={`absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t ${fadeTo === 'bg-white' ? 'from-white' : 'from-[#f7f0e3]'} via-transparent to-transparent pointer-events-none`} />
  </section>
));

// --- COMPONENTE CARRUSEL PARA HABITACIONES ---
const RoomCarousel = memo(({ images, title, t }: { images: string[]; title: string; t: TranslationStrings }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-200 group">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={title}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center z-20 hover:bg-black/60 active:scale-90 transition-all shadow-md"
            aria-label={t.common.prevPhoto}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center z-20 hover:bg-black/60 active:scale-90 transition-all shadow-md"
            aria-label={t.common.nextPhoto}
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-sm">
            {images.map((_, i) => (
              <button 
                key={i} 
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-white w-5' : 'bg-white/50 w-1.5'}`}
                aria-label={`${t.common.viewImage} ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
});

// --- COMPONENTE HERO CON VIDEO ---
const VideoHero = memo(({ title, subtitle, videoId, fadeTo = "bg-white" }: { title: string, subtitle: string, videoId: string, fadeTo?: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
          '*'
        );
      }
    };

    const handleWindowFocus = () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
          '*'
        );
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleWindowFocus);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, []);

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <section className="h-[52vh] sm:h-[62vh] md:h-[75vh] relative flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full pointer-events-none bg-black">
        <iframe
          ref={iframeRef}
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-full min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-[1.1] bg-black"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&enablejsapi=1&playsinline=1&vq=hd1080&origin=${origin}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title={title}
        ></iframe>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" />
      
      <div className="relative text-center px-5 sm:px-6 z-10 animate-reveal max-w-4xl">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-3 sm:mb-6 drop-shadow-[0_8px_40px_rgba(0,0,0,0.6)] tracking-tighter uppercase leading-[0.95]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-lg md:text-2xl text-white/95 max-w-2xl mx-auto font-light tracking-wide italic leading-relaxed drop-shadow-lg">
            {subtitle}
          </p>
        )}
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t ${fadeTo === 'bg-white' ? 'from-white' : 'from-slate-50'} via-transparent to-transparent pointer-events-none`} />
    </section>
  );
});

// --- COMPONENTE PREVIEW DE SUBPÁGINAS PARA MOBILE ---
const MobileSubpagePreviews = memo(({ t, onNavigate }: { t: TranslationStrings, onNavigate: (view: View) => void }) => {
  const previews = [
    { 
      id: 'hospedaje' as View, 
      badge: t.home.previews.lodging.badge,
      tag: t.home.previews.lodging.tag,
      title: t.nav.lodging, 
      desc: t.home.previews.lodging.desc,
      cta: t.home.previews.lodging.cta,
      img: "https://static.wixstatic.com/media/be13c5_ee83f1d399684f28a09c50de5ed13c61~mv2.jpg" 
    },
    { 
      id: 'restaurante' as View, 
      badge: t.home.previews.restaurant.badge,
      tag: t.home.previews.restaurant.tag,
      title: t.nav.restaurant, 
      desc: t.home.previews.restaurant.desc,
      cta: t.home.previews.restaurant.cta,
      img: "https://static.wixstatic.com/media/be13c5_b2ca0fb067644b06a5e49ef05df3f223~mv2.jpg" 
    },
    { 
      id: 'experiencias' as View, 
      badge: t.home.previews.experiences.badge,
      tag: t.home.previews.experiences.tag,
      title: t.nav.experiences, 
      desc: t.home.previews.experiences.desc,
      cta: t.home.previews.experiences.cta,
      img: "https://static.wixstatic.com/media/1074d5_2889bf5c122c4fdcb86d3fa3cd0a962a~mv2.jpg" 
    }
  ];

  return (
    <section className="md:hidden py-14 px-5 bg-[#fbf9f4] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/sandpaper.png')` }} />
      
      <div className="text-center mb-10 relative z-10">
        {t.home.previewsTag ? (
          <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#1f7a8c] inline-block px-3.5 py-1 bg-[#1f7a8c]/10 rounded-full mb-3">
            {t.home.previewsTag}
          </span>
        ) : null}
        <h2 className="text-[#0b3b52] font-black text-2xl uppercase tracking-tight">
          {t.home.previewsTitle}
        </h2>
        <div className="w-10 h-0.5 bg-[#CBA76B] mx-auto mt-3 rounded-full" />
      </div>

      <div className="flex flex-col gap-7 relative z-10">
        {previews.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            onClick={() => onNavigate(item.id)}
            className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden border border-[#0b3b52]/10 shadow-[0_12px_30px_-8px_rgba(11,59,82,0.12)] active:scale-[0.98] transition-all"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0b3b52] text-[9px] font-black uppercase tracking-wider shadow-sm">
                  {item.badge}
                </span>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] text-[#CBA76B] font-black uppercase tracking-widest block mb-1">
                  {item.tag}
                </span>
                <h3 className="text-white font-black text-2xl uppercase tracking-tight leading-none drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="p-5 flex flex-col gap-4">
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
              
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-[#0b3b52] font-black text-[11px] uppercase tracking-wider">
                  {item.cta}
                </span>
                <span className="w-8 h-8 rounded-full bg-[#1f7a8c] text-white flex items-center justify-center shadow-md group-hover:bg-[#0b3b52] transition-colors">
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

// --- VISTA INICIO ---
const HomeView = memo(({ t, onNavigate }: { t: TranslationStrings, onNavigate: (view: View) => void }) => (
  <div className="view-transition">
    <section className="h-[92vh] sm:h-[95vh] relative flex items-center justify-center overflow-hidden bg-[#0b3b52]">
      <div 
        className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
        style={{ 
          backgroundImage: `url('https://static.wixstatic.com/media/be13c5_5ebe13dd73004d7b8c4c673575b610d3~mv2.jpg')` 
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b3b52]/80 via-transparent to-[#0b3b52]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b3b52]/40 via-transparent to-[#0b3b52]/40" />
      
      <div className="relative text-center px-5 sm:px-6 max-w-5xl z-10 animate-reveal">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-6 drop-shadow-2xl tracking-tight leading-tight uppercase">
          {t.hero.title}
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-white/95 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg">
          {t.hero.subtitle}
        </p>
        <div className="flex justify-center">
          <a 
            href="https://wa.me/573126306637"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 sm:px-12 py-3.5 sm:py-4 bg-[#1f7a8c] text-white text-xs sm:text-sm font-extrabold rounded-2xl shadow-2xl hover:bg-[#2692a8] transform transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-[0.2em] border border-[#1f7a8c80]"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
    
    <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <span className="inline-block px-4 py-1.5 bg-[#f7f0e3] text-[#0b3b52] rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
            {t.home.welcomeTag}
          </span>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[#0b3b52] leading-[1.8] text-base sm:text-lg md:text-2xl font-light italic">
            {t.home.quote}
          </p>
          <div className="mt-8 sm:mt-12 w-16 sm:w-20 h-1 bg-[#1f7a8c]/20 rounded-full mx-auto md:mx-0"></div>
        </div>
      </div>
    </section>

    <MobileSubpagePreviews t={t} onNavigate={onNavigate} />
  </div>
));

// --- VISTA HOSPEDAJE ---
const LodgingView = memo(({ t }: { t: TranslationStrings }) => (
  <div className="view-transition">
    <VideoHero 
      title={t.lodging.title} 
      subtitle={t.lodging.subtitle} 
      videoId="d25sxqLPYO0"
    />
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 max-w-3xl mx-auto animate-reveal px-2">
           <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-light italic text-center md:text-left whitespace-pre-line">{t.lodging.lead}</p>
        </div>
        <div className="flex flex-col gap-10 sm:gap-16 lg:gap-24">
          {[
            { ...t.lodging.rooms.double, images: [
              "https://static.wixstatic.com/media/1074d5_dbe55e4ddd604ea4b9e39205f4bbd0f3~mv2.jpg",
              "https://static.wixstatic.com/media/1074d5_f8749b42bd0f4a7585839320a422e183~mv2.jpg",
              "https://static.wixstatic.com/media/1074d5_ee0fdbd53c9d47528aaeeb3b6652c3cd~mv2.jpg"
            ]},
            { ...t.lodging.rooms.enramada, images: ["https://static.wixstatic.com/media/1074d5_c6deb4b0ecbd455abf6ac0389c60b700~mv2.jpeg"] },
            { ...t.lodging.rooms.multiple, images: [
              "https://static.wixstatic.com/media/1074d5_7c9432b2d717408e8448c494ef167062~mv2.jpeg",
              "https://static.wixstatic.com/media/1074d5_a238697c22994371890cbf5838c5ae2b~mv2.jpg",
              "https://static.wixstatic.com/media/1074d5_58c260bbcc4d468f8066528fc3b589c9~mv2.jpeg"
            ] }
          ].map((room, i) => (
            <div 
              key={i} 
              className={`group overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-slate-50 border border-slate-100 transition-all hover:shadow-2xl animate-reveal stagger-1 max-w-5xl w-full flex flex-col md:flex-row
                ${i % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto md:flex-row-reverse'}
              `}
            >
              <div className="relative h-64 sm:h-72 md:h-auto md:w-1/2 overflow-hidden shrink-0">
                <RoomCarousel images={room.images} title={room.title} t={t} />
              </div>
              <div className="p-6 sm:p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0b3b52] mb-3">{room.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg font-light mb-5">{room.desc}</p>
                
                {room.includes && (
                  <div className="mt-2 pt-5 border-t border-slate-200">
                    <h4 className="text-[#1f7a8c] font-black text-[10px] tracking-[0.2em] uppercase mb-3">
                      {room.includesTitle}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                      {room.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-500 text-xs sm:text-sm">
                          <span className="text-[#CBA76B] mt-0.5 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-8 sm:mt-10 flex justify-center md:justify-start">
                  <a 
                    href="https://wa.me/573126306637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#0b3b52] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_15px_35px_-10px_rgba(11,59,82,0.4)] hover:bg-[#1f7a8c] transition-all transform hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>{t.lodging.reserve}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
));

// --- VISTA RESTAURANTE ---
const RestaurantView = memo(({ t }: { t: TranslationStrings }) => {
  const [selectedDish, setSelectedDish] = useState<{
    title: string;
    badge: string;
    note: string;
    desc: string;
    img: string;
  } | null>(null);
  const [activeDiningView, setActiveDiningView] = useState<'interior' | 'mar'>('interior');

  useEffect(() => {
    if (selectedDish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedDish]);

  const diningViews = {
    interior: {
      url: 'https://static.wixstatic.com/media/be13c5_ae1fd1d3645445508b0c25fc8320335a~mv2.jpg',
      label: 'Interior en Yotojoro',
      caption: 'Techo artesanal en madera de cactus y mobiliario rústico'
    },
    mar: {
      url: 'https://static.wixstatic.com/media/be13c5_b2ca0fb067644b06a5e49ef05df3f223~mv2.jpg',
      label: 'Frente al Mar Caribe',
      caption: 'Comedor abierto a la brisa permanente de la bahía'
    }
  };

  const dishes = [
    {
      ...t.restaurant.dishes.friche,
      img: '/images/friche_wayuu.jpg'
    },
    {
      ...t.restaurant.dishes.pargo,
      img: 'https://static.wixstatic.com/media/1074d5_db45c32e498b4b55b0e9de648707450e~mv2.jpg'
    },
    {
      ...t.restaurant.dishes.arrozCamarones,
      img: 'https://static.wixstatic.com/media/be13c5_d45abe7d3da740ebae28fcd72dea4c02~mv2.jpg'
    }
  ];

  return (
    <div className="view-transition bg-white">
      <SubpageHero 
        title={t.restaurant.title} 
        subtitle={t.restaurant.subtitle} 
        bgImage="https://static.wixstatic.com/media/be13c5_b2ca0fb067644b06a5e49ef05df3f223~mv2.jpg"
        fadeTo="bg-[#faf8f5]"
      />
      
      {/* 1. INTRODUCCIÓN EDITORIAL */}
      <section className="py-20 sm:py-28 px-6 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[#1f7a8c] mb-6">
            {t.restaurant.tag}
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#0b3b52] leading-relaxed italic">
            "{t.restaurant.desc}"
          </p>
          <div className="w-12 h-px bg-[#CBA76B] mx-auto mt-8 opacity-70" />
        </div>
      </section>

      {/* 2. PLATOS QUE DEBES PROBAR */}
      <section className="py-20 sm:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0b3b52] uppercase">
              {t.restaurant.mustTryTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-light mt-2.5">
              {t.restaurant.mustTrySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {dishes.map((dish, i) => (
              <div 
                key={i}
                className="group flex flex-col justify-between"
              >
                <div>
                  {/* Imagen limpia sin sobrecargas visuales */}
                  <div 
                    onClick={() => setSelectedDish(dish)}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100 mb-5"
                  >
                    <img 
                      src={dish.img} 
                      alt={dish.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-[#0b3b52] shadow-sm">
                      {dish.badge}
                    </span>
                  </div>

                  <h3 className="text-[#0b3b52] font-bold text-xl uppercase tracking-tight">
                    {dish.title}
                  </h3>

                  {dish.note && (
                    <p className="text-xs text-[#1f7a8c] font-medium mt-1">
                      {dish.note}
                    </p>
                  )}

                  <p className="text-slate-600 text-sm leading-relaxed font-light mt-2.5">
                    {dish.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NUESTRO COMEDOR */}
      <section className="py-20 sm:py-28 px-6 bg-[#faf8f5] border-y border-slate-200/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Texto en tipografía limpia */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1f7a8c] mb-3">
                {t.restaurant.dining.tag}
              </span>
              
              <h2 className="text-[#0b3b52] font-bold text-3xl sm:text-4xl uppercase tracking-tight mb-5">
                {t.restaurant.dining.title}
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-light">
                {t.restaurant.dining.desc}
              </p>
            </div>

            {/* Fotografía y selector minimalista */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeDiningView}
                    src={diningViews[activeDiningView].url}
                    alt={diningViews[activeDiningView].label}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Botones de perspectiva limpios */}
              <div className="flex items-center justify-between px-1">
                <p className="text-xs text-slate-500 font-light italic">
                  {diningViews[activeDiningView].caption}
                </p>
                <div className="flex gap-2">
                  {(['interior', 'mar'] as const).map((viewKey) => {
                    const isActive = activeDiningView === viewKey;
                    return (
                      <button
                        key={viewKey}
                        onClick={() => setActiveDiningView(viewKey)}
                        className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                          isActive 
                            ? 'bg-[#0b3b52] text-white' 
                            : 'text-slate-600 hover:text-[#0b3b52] bg-white border border-slate-200'
                        }`}
                      >
                        {diningViews[viewKey].label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL DETALLE DE PLATO */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedDish(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl relative flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedDish(null)}
                aria-label="Cerrar modal"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X size={16} />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden shrink-0 bg-slate-100">
                <img 
                  src={selectedDish.img} 
                  alt={selectedDish.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1f7a8c]">
                  {selectedDish.badge}
                </span>

                <h3 className="text-[#0b3b52] font-bold text-2xl uppercase tracking-tight">
                  {selectedDish.title}
                </h3>

                {selectedDish.note && (
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedDish.note}
                  </p>
                )}

                <p className="text-slate-600 text-sm leading-relaxed font-light mt-1">
                  {selectedDish.desc}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 mt-2">
                  <span className="text-xs text-slate-400 font-light">
                    Cabo de la Vela · La Guajira
                  </span>
                  <a
                    href={`https://wa.me/573126306637?text=${encodeURIComponent(`Hola Apalanchii, me interesa el plato "${selectedDish.title}". ¿Tienen disponibilidad hoy?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#0b3b52] hover:bg-[#124e6b] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <MessageCircle size={14} />
                    <span>Consultar en WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

// --- VISTA EXPERIENCIAS ---
const ExperiencesView = memo(({ t, onSelectExp }: { t: TranslationStrings; onSelectExp: (exp: any) => void }) => {
  const experiences = [
    { ...t.experiences.items.kitesurfing, img: 'https://static.wixstatic.com/media/1074d5_2889bf5c122c4fdcb86d3fa3cd0a962a~mv2.jpg' },
    { ...t.experiences.items.kayak, img: 'https://static.wixstatic.com/media/1074d5_b738e7d2bbad47d6b1b5bff782eb8d17~mv2.jpg' },
    { ...t.experiences.items.pilonAzucar, img: 'https://static.wixstatic.com/media/be13c5_f3a9de846dee4298bd09a2134f8c7a3e~mv2.jpg' },
    { ...t.experiences.items.cuevaDiablo, img: 'https://static.wixstatic.com/media/be13c5_be1ef171c3cf4733adc637f6a1e0dc03~mv2.png' },
    { ...t.experiences.items.ojoAgua, img: 'https://static.wixstatic.com/media/be13c5_5ca5c936fc874ea1ba50c59d5ceaf470~mv2.png' }
  ];

  return (
    <div className="view-transition">
      <VideoHero 
        title={t.experiences.title} 
        subtitle="" 
        videoId="2nTitFsp148"
        fadeTo="bg-slate-50"
      />
      <section className="py-10 sm:py-12 px-5 sm:px-6 bg-slate-50 text-center md:text-left animate-reveal">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg md:text-xl font-light italic mb-6 sm:mb-8 whitespace-pre-line text-center md:text-left">
            {t.experiences.lead}
          </p>
          <div className="flex flex-col items-center gap-4">
            <button className="px-7 sm:px-8 py-3 bg-[#CBA76B] text-[#0b3b52] text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] rounded-xl shadow-lg cursor-default">
              {t.experiences.ctaButton}
            </button>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#CBA76B]"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-24 px-5 sm:px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((item, i) => (
              <div 
                key={i} 
                onClick={() => onSelectExp({ ...item, index: i })}
                className={`group relative h-[340px] sm:h-[400px] md:h-[420px] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-slate-200 animate-reveal stagger-${i+1} shadow-lg cursor-pointer active:scale-[0.98] transition-all`}
              >
                <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src={item.img} 
                  className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] z-10" 
                  alt={item.title}
                  onLoad={(e) => (e.currentTarget.previousElementSibling as HTMLElement).style.display = 'none'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 z-20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-30">
                  <p className="text-white font-black text-xl sm:text-2xl tracking-tighter uppercase">{item.title}</p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[#CBA76B] opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-black uppercase tracking-widest">{t.experiences.viewMore}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

// --- VISTA NOSOTROS ---
const LegalView = memo(({ t }: { t: TranslationStrings }) => (
  <div className="view-transition pt-24 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-6 bg-[#fdfbf7]">
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 sm:mb-16 animate-reveal text-center md:text-left">
        <span className="text-[#1f7a8c] font-black text-[10px] tracking-[0.5em] uppercase mb-3 sm:mb-4 block text-center md:text-left">{t.aboutUs.tag}</span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#0b3b52] uppercase tracking-tighter leading-none text-center md:text-left">{t.aboutUs.title}</h1>
      </div>
      
      <div className="mb-14 sm:mb-24 animate-reveal stagger-1">
        <div className="bg-white p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0b3b52] uppercase tracking-tight mb-6 sm:mb-8">
            {t.aboutUs.whoTitle}
          </h2>
          <div className="space-y-5 sm:space-y-6 text-slate-600 font-light leading-relaxed text-base sm:text-lg max-w-2xl mx-auto md:mx-0">
            <p>{t.aboutUs.whoP1}</p>
            <p>{t.aboutUs.whoP2}</p>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-10 border-t border-slate-50">
            <p className="italic text-[#1f7a8c] font-medium text-lg sm:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
              {t.aboutUs.whoQuote}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-24 animate-reveal stagger-2">
        <div className="bg-[#0b3b52] p-6 sm:p-10 rounded-[2rem] text-white shadow-lg transition-transform hover:-translate-y-1">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5 sm:mb-6">
            <svg className="w-5 h-5 text-[#CBA76B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-3 sm:mb-4">{t.aboutUs.missionTitle}</h3>
          <p className="text-white/70 font-light leading-relaxed text-sm sm:text-base">
            {t.aboutUs.missionDesc}
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-[2rem] border border-slate-100 shadow-lg transition-transform hover:-translate-y-1">
          <div className="w-10 h-10 bg-[#f7f0e3] rounded-xl flex items-center justify-center mb-5 sm:mb-6">
            <svg className="w-5 h-5 text-[#1f7a8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-[#0b3b52] uppercase tracking-tight mb-3 sm:mb-4">{t.aboutUs.visionTitle}</h3>
          <p className="text-slate-500 font-light leading-relaxed text-sm sm:text-base">
            {t.aboutUs.visionDesc}
          </p>
        </div>
      </div>

      <div className="animate-reveal stagger-3">
        <div className="text-center md:text-left mb-8 sm:mb-10">
           <h3 className="text-xl sm:text-2xl font-black text-[#0b3b52] uppercase tracking-tight">{t.aboutUs.valuesTitle}</h3>
           <p className="text-slate-400 text-[9px] sm:text-[10px] mt-1.5 font-bold tracking-[0.3em] uppercase">{t.aboutUs.valuesSubtitle}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {[
            t.aboutUs.values.integrity,
            t.aboutUs.values.honesty,
            t.aboutUs.values.kindness,
            t.aboutUs.values.commitment,
            t.aboutUs.values.quality
          ].map((v, i) => (
            <div key={i} className="bg-white p-5 sm:px-4 sm:py-8 rounded-2xl sm:rounded-3xl border border-slate-100 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-all hover:bg-slate-50">
              <div className="w-1.5 h-1.5 bg-[#CBA76B] rounded-full mb-3 sm:mb-4"></div>
              <h4 className="text-[10px] sm:text-[11px] font-black text-[#0b3b52] uppercase tracking-widest mb-1.5">{v.n}</h4>
              <p className="text-[9px] text-slate-400 font-medium leading-tight">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
));

// --- COMPONENTE BOTÓN SUBIR (SCROLL TO TOP) ---
const ScrollToTop = memo(({ t }: { t: TranslationStrings }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 550);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-5 z-[79] w-10 h-10 bg-white/95 backdrop-blur-md text-[#0b3b52] rounded-full shadow-lg border border-slate-200 flex items-center justify-center active:scale-90 transition-all md:hidden"
          aria-label={t.common.scrollToTop}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
});

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [currentView, setCurrentView] = useState<View>('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState<{ title: string; img: string; desc: string; index: number } | null>(null);
  
  const t = useMemo(() => translations[lang], [lang]);

  // Manejo de parámetros de URL para Google Ads y navegación directa
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view') as View;
    if (viewParam && ['inicio', 'hospedaje', 'restaurante', 'experiencias', 'legal'].includes(viewParam)) {
      setCurrentView(viewParam);
    }
  }, []);

  // Bloqueo de scroll al abrir modal o menú móvil
  useEffect(() => {
    if (selectedExp || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedExp, isMenuOpen]);

  // Actualizar el idioma del documento y el título de la pestaña según la vista
  useEffect(() => {
    document.documentElement.lang = lang;
    const baseTitle = lang === 'en'
      ? "Apalanchii – Cabo de la Vela | Lodging & Restaurant"
      : "Apalanchii – Cabo de la Vela | Hospedaje y Restaurante";
    if (currentView === 'inicio') {
      document.title = baseTitle;
    } else {
      const viewLabels: Record<string, string> = {
        hospedaje: t.nav.lodging,
        restaurante: t.nav.restaurant,
        experiencias: t.nav.experiences,
        legal: t.nav.about
      };
      document.title = `${viewLabels[currentView]} | ${baseTitle}`;
    }
  }, [currentView, t, lang]);

  useEffect(() => {
    document.body.classList.add('loaded');
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const changeView = useCallback((v: View) => {
    if (v === currentView) {
      setIsMenuOpen(false);
      return;
    }
    setCurrentView(v);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentView]);

  const navItems: { id: View; label: string }[] = useMemo(() => [
    { id: 'inicio', label: t.nav.home },
    { id: 'hospedaje', label: t.nav.lodging },
    { id: 'restaurante', label: t.nav.restaurant },
    { id: 'experiencias', label: t.nav.experiences }
  ], [t]);

  const isTransparentHeader = !scrolled && (currentView === 'inicio');

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <header className={`fixed top-0 left-0 right-0 z-50 glass-header ${
        isTransparentHeader ? 'bg-transparent py-4 sm:py-5' : 'bg-white/90 shadow-md py-2.5'
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between">
          <button onClick={() => changeView('inicio')} className="active:scale-95 transition-transform flex items-center">
            <img 
              src="https://static.wixstatic.com/media/be13c5_abf5374c2bc448dda014a47f245f7cbc~mv2.png" 
              alt="Apalanchii" 
              width="140"
              height="32"
              decoding="async"
              fetchPriority="high"
              className="h-6 sm:h-7 md:h-8 w-auto transition-all" 
            />
          </button>
          
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(s => (
              <button 
                key={s.id} 
                onClick={() => changeView(s.id)}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  currentView === s.id
                    ? 'bg-[#CBA76B] text-[#0b3b52]'
                    : `${isTransparentHeader ? 'text-white' : 'text-[#0b3b52]'} hover:bg-[#f7f0e3]`
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageToggle current={lang} onToggle={setLang} dark={isTransparentHeader} />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-xl active:scale-90 transition-all ${
                isTransparentHeader 
                  ? 'text-white bg-black/20 backdrop-blur-sm' 
                  : 'text-[#0b3b52] bg-slate-100'
              }`}
              aria-label={isMenuOpen ? t.common.closeMenu : t.common.openMenu}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú Móvil Elegante */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] md:hidden"
            >
              {/* Overlay oscuro */}
              <div 
                className="absolute inset-0 bg-[#0b3b52]/80 backdrop-blur-md"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Panel de navegación */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative bg-white shadow-2xl rounded-b-[2rem] p-6 pt-5 pb-8 border-b border-slate-100"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://static.wixstatic.com/media/be13c5_abf5374c2bc448dda014a47f245f7cbc~mv2.png" 
                      alt="Apalanchii" 
                      width="120"
                      height="24"
                      loading="lazy"
                      decoding="async"
                      className="h-6 w-auto" 
                    />
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full bg-slate-100 text-[#0b3b52] active:scale-90 transition-transform"
                    aria-label={t.common.closeMenu}
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-2">
                  {navItems.map(s => (
                    <button 
                      key={s.id} 
                      onClick={() => changeView(s.id)}
                      className={`flex items-center justify-between w-full px-5 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all active:scale-[0.98] ${
                        currentView === s.id 
                          ? 'bg-[#0b3b52] text-white shadow-md' 
                          : 'text-[#0b3b52] hover:bg-slate-50'
                      }`}
                    >
                      <span>{s.label}</span>
                      {currentView === s.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CBA76B]" />
                      )}
                    </button>
                  ))}
                  
                  <div className="pt-2">
                    <button 
                      onClick={() => changeView('legal')}
                      className={`flex items-center justify-between w-full px-5 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all active:scale-[0.98] ${
                        currentView === 'legal' 
                          ? 'bg-[#CBA76B] text-[#0b3b52]' 
                          : 'text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      <span>{t.nav.about}</span>
                      {currentView === 'legal' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0b3b52]" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href="https://wa.me/573126306637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1f7a8c] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-md active:scale-95 transition-transform"
                  >
                    <span>{t.hero.cta}</span>
                    <ArrowRight size={13} />
                  </a>
                  <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                    Cabo de la Vela, La Guajira
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        {currentView === 'inicio' && <HomeView t={t} onNavigate={changeView} />}
        {currentView === 'hospedaje' && <LodgingView t={t} />}
        {currentView === 'restaurante' && <RestaurantView t={t} />}
        {currentView === 'experiencias' && <ExperiencesView t={t} onSelectExp={setSelectedExp} />}
        {currentView === 'legal' && <LegalView t={t} />}
      </main>

      <footer className="relative mt-12 text-white">
        <div className="w-full leading-[0] overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-10 md:h-16">
            <defs>
              <linearGradient id="gradWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0b3b52"/>
                <stop offset="100%" stopColor="#1f7a8c"/>
              </linearGradient>
            </defs>
            <path d="M0,30 C300,10 900,50 1200,30 L1200,60 L0,60 Z" fill="url(#gradWave)"></path>
          </svg>
        </div>
        
        <div className="bg-gradient-to-br from-[#0b3b52] to-[#1f7a8c] px-6">
          <div className="max-w-7xl mx-auto py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 items-start">
              <div className="flex flex-col items-center md:items-start space-y-6">
                <button onClick={() => changeView('inicio')} className="active:scale-95 transition-transform">
                  <img 
                    src="https://static.wixstatic.com/media/be13c5_abf5374c2bc448dda014a47f245f7cbc~mv2.png" 
                    alt="Apalanchii" 
                    width="140"
                    height="40"
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto drop-shadow-sm" 
                  />
                </button>
                <div className="space-y-4 text-center md:text-left">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] leading-loose max-w-[220px]">
                    {t.footer.address}
                  </p>
                  <div className="block pt-1">
                    <button 
                      onClick={() => changeView('legal')}
                      className="inline-block text-[9px] text-[#CBA76B] hover:text-white transition-colors uppercase tracking-[0.3em] font-black border-b border-[#CBA76B]/30 pb-1"
                    >
                      {t.nav.about}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-8 w-full">
                <div className="text-center md:text-left">
                  <h4 className="text-white/40 font-black uppercase text-[9px] tracking-[0.5em] leading-none mb-2">
                    {t.footer.contact}
                  </h4>
                </div>
                <div className="flex flex-col items-center md:items-start gap-5 w-full">
                  <a href="https://wa.me/573126306637" target="_blank" className="group flex items-center gap-4 text-white/80 hover:text-white transition-all">
                    <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#CBA76B] group-hover:text-[#0b3b52] transition-all border border-white/10 shadow-lg shrink-0">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0 11.96 11.96 0 0 0 2.2 18.37L0 24l5.8-2.19a12 12 0 0 0 6.26 1.73h.01c6.63 0 12.03-5.4 12.03-12.05 0-3.22-1.25-6.24-3.58-8.51ZM12.07 21.9h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.45 1.3 1.3-3.36-.23-.35A9.93 9.93 0 0 1 2.1 12c0-5.49 4.47-9.95 9.96-9.95 2.66 0 5.17 1.04 7.05 2.92a9.9 9.9 0 0 1 2.92 7.04c0 5.5-4.47 9.97-9.96 9.97Zm5.7-7.43c-.31-.16-1.84-.91-2.13-1.01-.29-.1-.5-.16-.72.16-.21.31-.83 1.01-1.02 1.22-.19.21-.37.23-.69.08-.31-.16-1.3-.48-2.47-1.51-.91-.8-1.52-1.78-1.7-2.09-.18-.31-.02-.48.14-.64.14-.14.31-.37.46-.55.15-.19.2-.31.31-.52.1-.21.05-.39-.02-.55-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.72-.55h-.62c-.21 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56 0 1.5 1.1 2.95 1.26 3.16.16.21 2.16 3.3 5.24 4.62.73.32 1.31.5 1.76.64.74.24 1.41.2 1.94.12.59-.09 1.84-.75 2.1-1.47.26-.72.26-1.33.18-1.47-.08-.14-.28-.22-.59-.38Z"/></svg>
                    </span>
                    <span className="text-[12px] font-black tracking-[0.1em]">+57 312 630 6637</span>
                  </a>
                  <a href="mailto:apalanchii@hotmail.com" className="group flex items-center gap-4 text-white/80 hover:text-white transition-all">
                    <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#CBA76B] group-hover:text-[#0b3b52] transition-all border border-white/10 shadow-lg shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </span>
                    <span className="text-[12px] font-black tracking-[0.1em] lowercase">apalanchii@hotmail.com</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-8 w-full">
                <div className="text-center md:text-left">
                  <h4 className="text-white/40 font-black uppercase text-[9px] tracking-[0.5em] leading-none mb-2">
                    {t.footer.follow}
                  </h4>
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.facebook.com/apalanchii1168/" 
                    target="_blank" 
                    className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#CBA76B] hover:text-[#0b3b52] transition-all transform hover:-translate-y-1 border border-white/10 shadow-md"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M22 12.07C22 6.5 17.52 2 11.94 2 6.36 2 2 6.5 2 12.07c0 5.05 3.69 9.23 8.51 10.03v-7.09H7.9v-2.94h2.61V9.03c0-2.58 1.54-4 3.9-4 1.13 0 2.31.2 2.31.2v2.55h-1.3c-1.28 0-1.68.8-1.68 1.62v1.95h2.85l-.46 2.94h-2.39V22.1C18.31 21.3 22 17.12 22 12.07Z"/></svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/apalanchii_cabodelavela/" 
                    target="_blank" 
                    className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#CBA76B] hover:text-[#0b3b52] transition-all transform hover:-translate-y-1 border border-white/10 shadow-md"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 7.75 2v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com/@apalanchii3875" 
                    target="_blank" 
                    className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#CBA76B] hover:text-[#0b3b52] transition-all transform hover:-translate-y-1 border border-white/10 shadow-md"
                    aria-label="YouTube"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-4 w-full">
                <div className="text-center md:text-left">
                  <h4 className="text-white/40 font-black uppercase text-[9px] tracking-[0.5em] leading-none mb-2">
                    {t.experiences.mapTitle}
                  </h4>
                </div>
                <div className="w-full h-32 rounded-2xl overflow-hidden relative border border-white/10 shadow-lg bg-slate-900 block group hover:border-[#CBA76B]/40 transition-all duration-300 transform hover:scale-[1.02]">
                  <iframe
                    title="Apalanchii Footer Map"
                    src="https://maps.google.com/maps?q=Apalanchii%2C%20Cabo%20de%20la%20Vela&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* Etiqueta flotante indicadora de vista satelital */}
                  <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-white/90 text-[8px] font-black uppercase tracking-widest border border-white/15 shadow-sm">
                      {t.experiences.mapSatellite}
                    </span>
                  </div>
                  {/* Capa total que muestra el botón interactivo al hacer hover */}
                  <div className="absolute inset-0 bg-[#0b3b52]/0 group-hover:bg-[#0b3b52]/10 transition-all duration-300 flex items-center justify-center z-10">
                    <div className="bg-white/95 backdrop-blur-sm text-[#0b3b52] px-3.5 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 border border-slate-100 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <svg className="w-3 h-3 text-[#1f7a8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {t.experiences.mapTitle}
                    </div>
                  </div>
                  {/* Enlace absoluto sobre todo el bloque para garantizar redirección sin interferencia */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Apalanchii%2C%20Cabo%20de%20la%20Vela&basemap=satellite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 cursor-pointer"
                    aria-label={t.experiences.mapTitle}
                  />
                </div>
              </div>

            </div>

            <div className="mt-16 pt-8 border-t border-white/5 text-center">
              <p className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-medium">
                © {new Date().getFullYear()} Apalanchii – {t.footer.rights}
              </p>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-3 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-[#0b3b52]/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.2, ease: "easeIn" } }}
              transition={{ 
                type: 'spring', 
                damping: 26, 
                stiffness: 320,
                mass: 0.5
              }}
              className="relative bg-white w-full max-w-lg md:max-w-5xl rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-50"
            >
              <button 
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 z-50 p-2.5 sm:p-3 bg-black/40 md:bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-[#0b3b52] transition-all shadow-xl active:scale-90"
                aria-label={t.common.close}
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-3/5 h-[32vh] sm:h-[40vh] md:h-auto relative overflow-hidden shrink-0">
                <img 
                  src={selectedExp.img} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover" 
                  alt={selectedExp.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
              </div>

              <div className="w-full md:w-2/5 p-6 sm:p-8 md:p-12 flex flex-col bg-white overflow-y-auto">
                <div>
                  <span className="text-[#1f7a8c] font-black text-[10px] tracking-[0.4em] uppercase mb-3 sm:mb-4 block">
                    {t.experiences.tag}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#0b3b52] uppercase tracking-tighter leading-none mb-4 sm:mb-6">
                    {selectedExp.title}
                  </h2>
                  <div className="w-12 h-1 bg-[#CBA76B] mb-6 sm:mb-8 rounded-full"></div>
                  <p className="text-slate-600 font-light leading-relaxed text-sm sm:text-base md:text-lg italic mb-8">
                    {selectedExp.desc}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={`https://wa.me/573126306637?text=${encodeURIComponent(`${t.experiences.bookWhatsAppPrompt}${selectedExp.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0b3b52] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-[#1f7a8c] transition-all active:scale-95 shadow-lg text-center"
                    >
                      <span>{t.common.reserve}</span>
                      <ArrowRight size={13} className="text-[#CBA76B]" />
                    </a>
                    <button 
                      onClick={() => setSelectedExp(null)}
                      className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-slate-200 transition-all active:scale-95 text-center"
                    >
                      {t.common.close}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CookieConsent t={t} />
      <ScrollToTop t={t} />
    </div>
  );
};

export default App;
