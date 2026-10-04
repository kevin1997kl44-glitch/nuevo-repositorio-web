
import { TranslationStrings } from './types';

export const translations: Record<'es' | 'en', TranslationStrings> = {
  es: {
    nav: {
      home: 'Inicio',
      lodging: 'Hospedaje',
      restaurant: 'Restaurante',
      experiences: 'El destino',
      about: 'Nosotros'
    },
    hero: {
      title: 'Vive la magia del Cabo de la Vela',
      subtitle: 'Hospedaje auténtico, gastronomía local y aventuras frente al mar — todo en un solo lugar.',
      cta: 'Reserva ahora'
    },
    home: {
      welcomeTag: 'Bienvenidos',
      quote: '"Bienvenido a Apalanchii, tu refugio frente al mar en el Cabo de la Vela. Aquí todo está diseñado para que encuentres la calma: cabañas y enramadas con identidad Wayuu, habitaciones frescas y un equipo local que te brinda una atención cercana y genuina. Despierta con la brisa, camina por la orilla y al final del día regresa a un espacio acogedor para recargar energías. Estamos a pocos pasos de las experiencias que hacen único al Cabo: atardeceres inolvidables, paseos en lancha y momentos para conectar con lo esencial."',
      instagramTag: 'Síguenos en Redes',
      instagramTitle: 'Sintoniza con el Cabo de la Vela',
      instagramButton: 'Ver más en Instagram',
      previewsTag: '',
      previewsTitle: 'Conoce lo que tenemos para ti',
      previews: {
        lodging: {
          badge: 'Hospedaje',
          tag: 'Frente al Mar Caribe',
          desc: 'Cabañas tradicionales en yotojoro y chinchorros típicos arrullados por la brisa marina del Cabo.',
          cta: 'Ver Cabañas & Habitaciones'
        },
        restaurant: {
          badge: 'Restaurante',
          tag: 'Pesca Fresca & Tradición',
          desc: 'Langostas al ajillo, pargo rojo frito, arroz de coco y sabores con el calor de nuestra tierra Wayuu.',
          cta: 'Conocer Nuestro Comedor'
        },
        experiences: {
          badge: 'El Destino',
          tag: 'Aventura & Viento',
          desc: 'Kitesurf en la meca del viento, dunas doradas, Pilón de Azúcar y los atardeceres más mágicos.',
          cta: 'Explorar Atractivos'
        }
      }
    },
    lodging: {
      title: 'Tu descanso frente al mar',
      subtitle: '',
      reserve: 'Reservar',
      lead: 'En nuestro hospedaje encontrarás un espacio acogedor y auténtico donde podrás descansar y disfrutar plenamente del entorno natural del Cabo de la Vela. Te ofrecemos habitaciones cómodas construidas en material tradicional, diseñadas para brindarte frescura y tranquilidad mientras vives la esencia cultural del territorio.\n\nTambién podrás elegir descansar en chinchorros y hamacas ubicados en cabañas típicas, una forma única de vivir una experiencia cercana a las tradiciones locales. Nuestro ambiente familiar y la atención cercana están pensados para que te sientas cómodo desde tu llegada y disfrutes de una estadía agradable en un entorno natural y diferente.',
      rooms: {
        double: {
          title: 'Habitación Doble (Interior)',
          desc: 'Ideal para parejas o amigos que buscan un descanso reparador. Cuenta con baño privado y ventilación optimizada para el clima del Cabo.',
          includesTitle: '¿Qué incluyen las habitaciones?',
          includes: [
            'Baño privado',
            'Ventilador',
            'Cama doble o camas sencillas',
            'Construcción en material tradicional (yotojoro)',
            'Iluminación básica',
            'Espacio para pertenencias',
            'Ambiente fresco e independiente'
          ]
        },
        enramada: {
          title: 'Enramada con Chinchorro',
          desc: 'La verdadera experiencia Wayuu: descansa en un chinchorro bajo un techo tradicional, arrullado por la brisa marina y el sonido de las olas.',
          includesTitle: '¿Qué incluye el hospedaje en chinchorro?',
          includes: [
            'Chinchorro o hamaca tradicional',
            'Espacio en enramada típica (cabaña abierta)',
            'Acceso a baños y duchas compartidas',
            'Lockers de seguridad para pertenencias',
            'Ventilación natural constante (brisa marina)',
            'Experiencia cultural auténtica'
          ]
        },
        multiple: {
          title: 'Habitación Múltiple',
          desc: 'Perfecta para familias o grupos que desean compartir sin sacrificar comodidad. Incluye baño privado, excelente ventilación y una distribución funcional.',
          includesTitle: '¿Qué incluyen las habitaciones?',
          includes: [
            'Baño privado',
            'Ventilador',
            'Distribución de camas para grupos o familias',
            'Espacio amplio y funcional',
            'Construcción en material tradicional (yotojoro)',
            'Iluminación básica',
            'Ambiente familiar y tranquilo'
          ]
        }
      }
    },
    restaurant: {
      tag: 'Tradición en cada plato',
      title: 'Restaurante',
      subtitle: '',
      desc: 'Sabores locales, vista al mar y pesca responsable. Disfruta de una variedad de platos típicos de la región, preparados por manos locales que cuidan cada detalle y la frescura de los ingredientes. Priorizamos los productos de nuestro territorio.',
      galleryAlt: 'Galería del restaurante',
      mustTryTitle: 'Platos que debes probar',
      mustTrySubtitle: 'Recetas emblemáticas preparadas con ingredientes del territorio y el auténtico sazón de La Guajira.',
      dishes: {
        friche: {
          title: 'Friche',
          badge: 'Ancestral Wayuu',
          note: 'Carne de chivo frita en su propia grasa · Sabor profundo y auténtico',
          desc: 'Un plato ancestral de la cultura Wayuu, preparado con carne de chivo frita en su propia grasa, logrando un sabor profundo y auténtico que representa la esencia de nuestra tierra.'
        },
        pargo: {
          title: 'Pargo rojo frito',
          badge: 'Pesca del Día',
          note: 'Mar Caribe · Piel crocante y carne jugosa por dentro',
          desc: 'Fresco del mar Caribe, frito al punto perfecto para lograr una piel crocante y una carne jugosa por dentro. Servido tal como lo preparan las manos locales, respetando su sabor natural.'
        },
        arrozCamarones: {
          title: 'Arroz de camarones',
          badge: 'Sabor Costero',
          note: 'Camarones frescos · Sazonado con especias locales',
          desc: 'Camarones frescos de la región, cocinados junto a un arroz sazonado con especias locales que resaltan el sabor del mar en cada bocado.'
        }
      },
      dining: {
        tag: 'Espacio & Arquitectura',
        title: 'Nuestro comedor',
        desc: 'Construido con yotojoro, material del cactus, y envuelto en la arquitectura ancestral wayúu. Es un espacio abierto, lleno de frescura y tranquilidad, donde nos encantaría atenderte con todo el calor de nuestra tierra.',
        features: [
          { label: 'Madera de Yotojoro', desc: 'Material del cactus que brinda aislamiento térmico natural y belleza artesanal.' },
          { label: 'Ventilación Marina Abierta', desc: 'Espacio fresco y ventilado con vista directa a la bahía del Cabo de la Vela.' },
          { label: 'Calor de Nuestra Tierra', desc: 'Atención cercana, cálida y atenta para que disfrutes de cada momento.' }
        ]
      },
      landToTable: {
        tag: 'Compromiso Local',
        title: 'De nuestra tierra a tu mesa',
        desc: 'Trabajamos con pescadores y productores locales para garantizar ingredientes frescos y apoyar la economía de las comunidades cercanas. Cada plato refleja nuestro compromiso con la pesca responsable y el respeto por el territorio.',
        pillars: [
          { title: 'Pesca Responsable', desc: 'Respeto por el mar y sus ciclos naturales, priorizando capturas del día.' },
          { title: 'Economía Comunitaria', desc: 'Apoyo constante y directo a los pescadores y familias de la zona.' },
          { title: 'Ingredientes Frescos', desc: 'Productos de nuestro propio territorio preparados con esmero y tradición.' }
        ],
        cta: 'Consultar menú del día por WhatsApp'
      },
      items: {
        comedor: {
          title: 'Nuestro Comedor',
          desc: 'Construido con yotojoro, material del cactus, y envuelto en la arquitectura ancestral wayúu. Es un espacio abierto, lleno de frescura y tranquilidad, donde nos encantaría atenderte con todo el calor de nuestra tierra.'
        },
        langosta: {
          title: 'Langostas al Ajillo',
          desc: 'Jugosa langosta dorada al ajillo, acompañada de arroz de coco, ensalada fresca y patacones crujientes. Un bocado lleno de sabor, tradición y el espíritu cálido de La Guajira.'
        },
        pargo: {
          title: 'Pargo Rojo',
          desc: 'El pargo rojo es nuestra estrella del mar: capturado por pescadores locales, es un pescado fresquísimo. Lo servimos con arroz de coco o blanco, ensalada y patacones. Cada bocado es una ola de sabor fresco y auténtico, directo del mar a tu mesa.'
        }
      }
    },
    experiences: {
      tag: 'El destino',
      title: 'El destino',
      lead: 'Ubicado en la mística península de La Guajira, el Cabo de la Vela es uno de los destinos más magnéticos del Caribe colombiano. Este paraje se define por un contraste natural salvaje: dunas de arena dorada que mueren en aguas de un azul profundo, creando un paisaje que parece de otro mundo. Más que un destino visual, es el corazón ancestral del pueblo Wayuu. Visitarlo es sumergirse en una cultura que late a través de su lengua, sus tejidos y su respeto sagrado por la tierra.\n\nMás allá de su mística contemplativa, el Cabo de la Vela se ha consolidado como la meca del kitesurf en el Caribe. Gracias a los vientos alisios del noreste que soplan con una constancia quirúrgica, este destino ofrece una "ventana de viento" excepcionalmente larga que se extiende de diciembre a septiembre. Con intensidades promedio que oscilan entre los 25 y 35 nudos, y ráfagas que raramente bajan de los 15 nudos incluso en temporada baja, las costas guajiras son una pista de velocidad natural sin parangón. Aquí, la configuración geográfica crea condiciones de agua plana ideales tanto para el aprendizaje seguro como para maniobras de freestyle de alto nivel. No es solo un deporte; es una simbiosis perfecta donde el cielo se tiñe con el cromatismo de las velas, convirtiendo cada ráfaga en una oportunidad para desafiar la gravedad sobre un espejo de agua turquesa.',
      ctaButton: 'Descubre el destino',
      reviewsTitle: 'Lo que dicen nuestros visitantes',
      cta: 'Solicitar información de tours',
      viewMore: 'Ver más detalles',
      bookWhatsAppPrompt: 'Hola, me interesa reservar o recibir información sobre la experiencia: ',
      mapSatellite: 'Satélite',
      mapTitle: 'Ubicación en el Cabo',
      mapSubtitle: 'Cómo llegar a Apalanchii',
      mapLocationDesc: 'Nos encontramos ubicados frente al mar, en la playa principal de rancherías del Cabo de la Vela. Un oasis de calma ideal para descansar, disfrutar de la gastronomía y practicar kitesurf.',
      mapCta: 'Ver en Google Maps',
      mapDirectionsTitle: 'Cómo llegar a nuestro refugio',
      mapDirectionsText: 'El Cabo de la Vela se encuentra en la alta Guajira. Tradicionalmente puedes llegar en vehículos 4x4 o tours autorizados desde Riohacha o Uribia. El trayecto dura unas 2 a 3 horas cruzando hermosos parajes de desierto, salinas e impresionantes contrastes naturales.',
      items: {
        kitesurfing: {
          title: 'Kitesurfing',
          desc: 'El Cabo de la Vela es reconocido mundialmente como uno de los mejores destinos para la práctica del kitesurfing. Gracias a sus vientos constantes que soplan casi todo el año y sus aguas tranquilas, es el lugar ideal tanto para principiantes como para expertos que buscan perfeccionar sus saltos y maniobras.'
        },
        kayak: {
          title: 'Kayak',
          desc: 'Deslízate sobre las aguas cristalinas del Cabo de la Vela en kayak. Una experiencia tranquila y diferente para explorar la costa, disfrutar del paisaje marino y descubrir rincones mágicos desde una perspectiva única sobre el mar.'
        },
        pilonAzucar: {
          title: 'Pilón de Azúcar / Cerro Kamaichi',
          desc: 'El Pilón de Azúcar, sagrado para el pueblo Wayuu como Cerro Kamaichi, es un hito emblemático del Cabo de la Vela. Este cerro se alza frente al Caribe y ofrece, tras un breve ascenso, una vista panorámica inigualable del desierto guajiro fundiéndose con el océano.'
        },
        cuevaDiablo: {
          title: 'Jepirra (Cueva del Diablo)',
          desc: 'Conocida turísticamente como Cueva del Diablo, su nombre ancestral es Jepirra. Posee un profundo significado espiritual para los Wayuu: es el lugar sagrado donde las almas de los difuntos descansan antes de seguir su tránsito hacia el mundo espiritual.'
        },
        ojoAgua: {
          title: 'Playa Ojo de Agua / Lojou',
          desc: 'Llamada Lojou en wayuunaiki, esta playa es famosa por sus aguas tranquilas y cristalinas, ideales para un baño relajante. Rodeada de formaciones rocosas y arena clara, ofrece un paisaje de ensueño. En sus cercanías, las rancherías locales ofrecen artesanías y la pesca del día.'
        }
      }
    },
    aboutUs: {
      tag: 'Conoce Apalanchii',
      title: 'Nosotros',
      whoTitle: '¿Quiénes somos?',
      whoP1: 'Somos una empresa familiar profundamente comprometida con la preservación del medio ambiente y la cultura local. En Apalanchii, ofrecemos un espacio diseñado para vivir aventuras auténticas y memorables.',
      whoP2: 'Ubicados en el corazón del Cabo de la Vela, somos el punto de partida ideal para sumergirse en la naturaleza virgen y apreciar la majestuosidad de los paisajes de La Guajira.',
      whoQuote: '"Nuestro objetivo es que cada momento de tu viaje sea especial. Trabajamos con calidez y dedicación para que te sientas parte de nuestra familia y disfrutes de la verdadera esencia del Cabo."',
      missionTitle: 'Misión',
      missionDesc: 'Brindar una hospitalidad excepcional a través de servicios de alojamiento y gastronomía de alta calidad, impulsando el desarrollo económico y turístico sostenible del Cabo de la Vela con un enfoque humano y cultural.',
      visionTitle: 'Visión',
      visionDesc: 'Consolidarnos como el referente de hospitalidad en el Cabo de la Vela, innovando constantemente en nuestros servicios para ofrecer el máximo confort y experiencias inolvidables a nuestros huéspedes.',
      valuesTitle: 'Valores Corporativos',
      valuesSubtitle: 'La brújula que nos guía',
      values: {
        integrity: { n: 'Integridad', d: 'Actuamos con coherencia y ética.' },
        honesty: { n: 'Honradez y Respeto', d: 'Los pilares de nuestra casa.' },
        kindness: { n: 'Amabilidad', d: 'Atención dedicada a cada persona.' },
        commitment: { n: 'Compromiso', d: 'Con nuestra tierra, cultura y clientes.' },
        quality: { n: 'Calidez Humana', d: 'Hacerte sentir siempre en casa.' }
      }
    },
    assistant: {
      greeting: '¡Hola, navegante! Soy Ka\'la. ¿En qué puedo ayudarte hoy?',
      placeholder: 'Escribe tu mensaje...'
    },
    footer: {
      address: 'Cabo de la Vela, Uribia – La Guajira, Colombia',
      contact: 'Contacto',
      follow: 'Síguenos',
      rights: 'Todos los derechos reservados'
    },
    cookie: {
      title: 'Uso de Cookies',
      message: 'Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación y realizar tareas de análisis.',
      accept: 'Aceptar',
      reject: 'Rechazar',
      close: 'Cerrar'
    },
    common: {
      prevPhoto: 'Foto anterior',
      nextPhoto: 'Foto siguiente',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      scrollToTop: 'Subir al inicio',
      viewImage: 'Ver imagen',
      close: 'Cerrar',
      reserve: 'Reservar'
    }
  },
  en: {
    nav: {
      home: 'Home',
      lodging: 'Lodging',
      restaurant: 'Restaurant',
      experiences: 'The destination',
      about: 'About Us'
    },
    hero: {
      title: 'Experience the Magic of Cabo de la Vela',
      subtitle: 'Authentic lodging, local gastronomy, and seaside adventures — all in one place.',
      cta: 'Book Now'
    },
    home: {
      welcomeTag: 'Welcome',
      quote: '"Welcome to Apalanchii, your seaside sanctuary in Cabo de la Vela. Everything here is designed for you to find peace: cabins and enramadas with Wayuu identity, fresh rooms, and a local team providing warm and genuine service. Wake up to the breeze, walk along the shore, and at the end of the day return to a cozy space to recharge. We are just steps away from the experiences that make the Cabo unique: unforgettable sunsets, boat trips, and moments to reconnect with the essential."',
      instagramTag: 'Follow Our Journey',
      instagramTitle: 'Connect with our Sanctuary',
      instagramButton: 'View more on Instagram',
      previewsTag: '',
      previewsTitle: 'Discover What We Have For You',
      previews: {
        lodging: {
          badge: 'Lodging',
          tag: 'Facing the Caribbean Sea',
          desc: 'Traditional cabins built in yotojoro and classic hammocks lulled by the sea breeze of the Cape.',
          cta: 'View Cabins & Rooms'
        },
        restaurant: {
          badge: 'Restaurant',
          tag: 'Fresh Catch & Tradition',
          desc: 'Garlic butter lobster, fried red snapper, coconut rice, and authentic flavors with the warmth of our Wayuu land.',
          cta: 'Discover Our Dining Area'
        },
        experiences: {
          badge: 'The Destination',
          tag: 'Adventure & Wind',
          desc: 'Kitesurfing in the wind mecca, golden sand dunes, Kamaichi Hill (Pilón de Azúcar), and magical sunsets.',
          cta: 'Explore Attractions'
        }
      }
    },
    lodging: {
      title: 'Rest Facing the Sea',
      subtitle: '',
      reserve: 'Book',
      lead: 'In our lodging, you will find a cozy and authentic space where you can rest and fully enjoy the natural environment of Cabo de la Vela. We offer comfortable rooms built with traditional materials, designed to provide you with freshness and tranquility while you experience the cultural essence of the territory.\n\nYou can also choose to rest in hammocks and chinchorros located in typical cabins, a unique way to live an experience close to local traditions. Our family atmosphere and close attention are designed to make you feel comfortable from your arrival and enjoy a pleasant stay in a natural and different setting.',
      rooms: {
        double: {
          title: 'Double Room (Interior)',
          desc: 'Ideal for couples or friends looking for a restful stay. Features a private bathroom and optimized ventilation for the Cabo climate.',
          includesTitle: 'What do the rooms include?',
          includes: [
            'Private bathroom',
            'Fan',
            'Double bed or single beds',
            'Built with traditional material (yotojoro)',
            'Basic lighting',
            'Space for belongings',
            'Fresh and independent environment'
          ]
        },
        enramada: {
          title: 'Enramada with Hammock',
          desc: 'The true Wayuu experience: rest in a hammock under a traditional roof, lulled by the sea breeze and the sound of the waves.',
          includesTitle: 'What does hammock lodging include?',
          includes: [
            'Traditional chinchorro or hammock',
            'Space in a typical "enramada" (open cabin)',
            'Access to shared bathrooms and showers',
            'Security lockers for belongings',
            'Constant natural ventilation (sea breeze)',
            'Authentic cultural experience'
          ]
        },
        multiple: {
          title: 'Multiple Room',
          desc: 'Perfect for families or groups who want to share without sacrificing comfort. Includes a private bathroom, excellent ventilation, and a practical layout.',
          includesTitle: 'What do the rooms include?',
          includes: [
            'Private bathroom',
            'Fan',
            'Bed layout for groups or families',
            'Spacious and functional environment',
            'Built with traditional material (yotojoro)',
            'Basic lighting',
            'Family and peaceful atmosphere'
          ]
        }
      }
    },
    restaurant: {
      tag: 'Tradition in every dish',
      title: 'Restaurant',
      subtitle: '',
      desc: 'Local flavors, ocean views, and responsible fishing. Enjoy a variety of typical regional dishes, prepared by local hands that care for every detail and the freshness of the ingredients. We prioritize products from our territory.',
      galleryAlt: 'Restaurant gallery',
      mustTryTitle: 'Must-Try Dishes',
      mustTrySubtitle: 'Iconic recipes prepared with territory ingredients and the authentic flavor of La Guajira.',
      dishes: {
        friche: {
          title: 'Friche',
          badge: 'Wayuu Ancestral',
          note: 'Locally raised goat · Fried in its own natural fat',
          desc: 'An ancestral dish of the Wayuu culture, prepared with goat meat fried in its own fat, achieving a deep and authentic flavor that represents the essence of our land.'
        },
        pargo: {
          title: 'Fried Red Snapper',
          badge: 'Catch of the Day',
          note: 'Caribbean Sea · Crispy skin and succulent juicy meat',
          desc: 'Fresh from the Caribbean Sea, fried to perfection to achieve crispy skin and juicy meat inside. Served just as prepared by local hands, respecting its natural flavor.'
        },
        arrozCamarones: {
          title: 'Shrimp Rice',
          badge: 'Coastal Flavor',
          note: 'Fresh regional shrimp · Cooked with coastal spices',
          desc: 'Fresh shrimp from the region, cooked alongside rice seasoned with local spices that highlight the sea\'s flavor in every bite.'
        }
      },
      dining: {
        tag: 'Architecture & Ambience',
        title: 'Our Dining Area',
        desc: 'Built with yotojoro, a cactus material, and wrapped in ancestral Wayúu architecture. It is an open space, full of freshness and tranquility, where we would love to serve you with all the warmth of our land.',
        features: [
          { label: 'Yotojoro Wood', desc: 'Heart of the cactus wood providing natural thermal insulation and ancestral charm.' },
          { label: 'Open Sea Breeze', desc: 'Airy open-sided structure facing the turquoise bay of Cabo de la Vela.' },
          { label: 'Warmth of Our Land', desc: 'Attentive, warm and genuine local service making you feel at home.' }
        ]
      },
      landToTable: {
        tag: 'Local Commitment',
        title: 'From our land to your table',
        desc: 'We work with local fishermen and producers to guarantee fresh ingredients and support the economy of nearby communities. Each dish reflects our commitment to responsible fishing and respect for the territory.',
        pillars: [
          { title: 'Responsible Fishing', desc: 'Respect for marine seasons and local cycles, prioritizing daily fresh catches.' },
          { title: 'Community Economy', desc: 'Direct trade empowering artisan fishing families and local producers.' },
          { title: 'Fresh Territory Ingredients', desc: 'Sourced directly from our coastal desert territory with genuine care.' }
        ],
        cta: 'Ask for today\'s menu on WhatsApp'
      },
      items: {
        comedor: {
          title: 'Our Dining Area',
          desc: 'Built with yotojoro, a cactus material, and wrapped in ancestral Wayúu architecture. It is an open space, full of freshness and tranquility, where we would love to serve you with all the warmth of our land.'
        },
        langosta: {
          title: 'Garlic Butter Lobster',
          desc: 'Juicy golden garlic lobster, served with coconut rice, fresh salad, and crispy fried plantains. A bite full of flavor, tradition, and the warm spirit of La Guajira.'
        },
        pargo: {
          title: 'Red Snapper',
          desc: 'The Red Snapper is our star of the sea: caught by local fishermen, it is incredibly fresh. We serve it with coconut or white rice, salad, and fried plantains. Each bite is a wave of fresh, authentic flavor, straight from the sea to your table.'
        }
      }
    },
    experiences: {
      tag: 'The destination',
      title: 'The destination',
      lead: 'Located in the mystical La Guajira peninsula, Cabo de la Vela is one of the most magnetic destinations in the Colombian Caribbean. This place is defined by a wild natural contrast: golden sand dunes that meet deep blue waters, creating a landscape that seems out of this world. More than a visual destination, it is the ancestral heart of the Wayuu people. Visiting it is to immerse yourself in a culture that beats through its language, its weavings, and its sacred respect for the land.\n\nBeyond its contemplative mysticism, Cabo de la Vela has established itself as the kitesurfing mecca of the Caribbean. Thanks to the northeast trade winds that blow with surgical consistency, this destination offers an exceptionally long "wind window" that extends from December to September. With average intensities ranging between 25 and 35 knots, and gusts that rarely drop below 15 knots even in the low season, the Guajira coasts are an unparalleled natural speed track. Here, the geographic configuration creates flat water conditions ideal for both safe learning and high-level freestyle maneuvers. It is not just a sport; it is a perfect symbiosis where the sky is tinged with the chromatism of the kites, turning every gust into an opportunity to defy gravity over a mirror of turquoise water.',
      ctaButton: 'Discover the destination',
      reviewsTitle: 'What our visitors say',
      cta: 'Request tour information',
      viewMore: 'View details',
      bookWhatsAppPrompt: 'Hello, I am interested in booking or receiving information about the experience: ',
      mapSatellite: 'Satellite',
      mapTitle: 'Location in the Cape',
      mapSubtitle: 'How to Get to Apalanchii',
      mapLocationDesc: 'We are located right in front of the sea, on the main beach of rancherías in Cabo de la Vela. A peaceful oasis ideal for resting, enjoying local cuisine, and kitesurfing.',
      mapCta: 'View on Google Maps',
      mapDirectionsTitle: 'How to reach our sanctuary',
      mapDirectionsText: 'Cabo de la Vela is located in the Upper Guajira. You can easily reach us via 4x4 transport or authorized tours from Riohacha or Uribia. The journey is an unforgettable 2 to 3 hour trip traversing magnificent desert vistas and beautiful salt flats.',
      items: {
        kitesurfing: {
          title: 'Kitesurfing',
          desc: 'Cabo de la Vela is world-renowned as one of the best destinations for kitesurfing. Thanks to its constant winds that blow almost all year round and its calm waters, it is the ideal place for both beginners and experts looking to perfect their jumps and maneuvers.'
        },
        kayak: {
          title: 'Kayak',
          desc: 'Glide over the crystal-clear waters of Cabo de la Vela in a kayak. A peaceful and different experience to explore the coast, enjoy the marine landscape, and discover magical corners from a unique perspective on the sea.'
        },
        pilonAzucar: {
          title: 'Pilón de Azúcar / Kamaichi Hill',
          desc: 'Pilón de Azúcar, sacred to the Wayuu people as Kamaichi Hill, is an iconic landmark of Cabo de la Vela. This hill rises in front of the Caribbean and offers, after a short climb, an unparalleled panoramic view of the Guajira desert merging with the ocean.'
        },
        cuevaDiablo: {
          title: 'Jepirra (Devil\'s Cave)',
          desc: 'Known touristically as Devil\'s Cave, its ancestral name is Jepirra. It holds deep spiritual significance for the Wayuu: it is the sacred place where the souls of the deceased rest before continuing their journey to the spiritual world.'
        },
        ojoAgua: {
          title: 'Ojo de Agua Beach / Lojou',
          desc: 'Called Lojou in Wayuunaiki, this beach is famous for its calm and crystal-clear waters, ideal for a relaxing swim. Surrounded by rock formations and light sand, it offers a dreamlike landscape. Nearby, local rancherías offer crafts and the catch of the day.'
        }
      }
    },
    aboutUs: {
      tag: 'Get to know Apalanchii',
      title: 'About Us',
      whoTitle: 'Who are we?',
      whoP1: 'We are a family business deeply committed to the preservation of the environment and local culture. At Apalanchii, we offer a space designed for authentic and memorable adventures.',
      whoP2: 'Located in the heart of Cabo de la Vela, we are the ideal starting point to immerse yourself in untouched nature and appreciate the majesty of La Guajira\'s landscapes.',
      whoQuote: '"Our goal is to make every moment of your trip special. We work with warmth and dedication so you feel like part of our family and enjoy the true essence of the Cabo."',
      missionTitle: 'Mission',
      missionDesc: 'To provide exceptional hospitality through high-quality accommodation and gastronomy services, driving sustainable economic and tourism development in Cabo de la Vela with a human and cultural focus.',
      visionTitle: 'Vision',
      visionDesc: 'To establish ourselves as the benchmark for hospitality in Cabo de la Vela, constantly innovating our services to offer maximum comfort and unforgettable experiences to our guests.',
      valuesTitle: 'Corporate Values',
      valuesSubtitle: 'The compass that guides us',
      values: {
        integrity: { n: 'Integrity', d: 'We act with coherence and ethics.' },
        honesty: { n: 'Honesty & Respect', d: 'The pillars of our house.' },
        kindness: { n: 'Kindness', d: 'Dedicated attention to every person.' },
        commitment: { n: 'Commitment', d: 'To our land, culture, and clients.' },
        quality: { n: 'Human Warmth', d: 'Making you always feel at home.' }
      }
    },
    assistant: {
      greeting: 'Hello, navigator! I\'m Ka\'la. How can I help you today?',
      placeholder: 'Type your message...'
    },
    footer: {
      address: 'Cabo de la Vela, Uribia – La Guajira, Colombia',
      contact: 'Contact',
      follow: 'Follow us',
      rights: 'All rights reserved'
    },
    cookie: {
      title: 'Cookie Usage',
      message: 'We use our own and third-party cookies to improve your browsing experience and perform analysis tasks.',
      accept: 'Accept',
      reject: 'Reject',
      close: 'Close'
    },
    common: {
      prevPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      scrollToTop: 'Scroll to top',
      viewImage: 'View image',
      close: 'Close',
      reserve: 'Book'
    }
  }
};
