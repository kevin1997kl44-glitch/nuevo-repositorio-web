
export type Language = 'es' | 'en';

export interface TranslationStrings {
  nav: {
    home: string;
    lodging: string;
    restaurant: string;
    experiences: string;
    about: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  home: {
    welcomeTag: string;
    quote: string;
    instagramTag: string;
    instagramTitle: string;
    instagramButton: string;
    previewsTag: string;
    previewsTitle: string;
    previews: {
      lodging: { badge: string; tag: string; desc: string; cta: string };
      restaurant: { badge: string; tag: string; desc: string; cta: string };
      experiences: { badge: string; tag: string; desc: string; cta: string };
    };
  };
  lodging: {
    title: string;
    subtitle: string;
    reserve: string;
    lead: string;
    rooms: {
      double: {
        title: string;
        desc: string;
        includesTitle?: string;
        includes?: string[];
      };
      enramada: {
        title: string;
        desc: string;
        includesTitle?: string;
        includes?: string[];
      };
      multiple: {
        title: string;
        desc: string;
        includesTitle?: string;
        includes?: string[];
      };
    };
  };
  restaurant: {
    title: string;
    subtitle: string;
    tag: string;
    desc: string;
    galleryAlt: string;
    mustTryTitle: string;
    mustTrySubtitle: string;
    dishes: {
      friche: { title: string; desc: string; badge: string; note: string };
      pargo: { title: string; desc: string; badge: string; note: string };
      arrozCamarones: { title: string; desc: string; badge: string; note: string };
    };
    dining: {
      tag: string;
      title: string;
      desc: string;
      features: { label: string; desc: string }[];
    };
    landToTable: {
      tag: string;
      title: string;
      desc: string;
      pillars: { title: string; desc: string }[];
      cta: string;
    };
    items?: {
      comedor: { title: string; desc: string };
      langosta: { title: string; desc: string };
      pargo: { title: string; desc: string };
    };
  };
  experiences: {
    tag: string;
    title: string;
    lead: string;
    ctaButton: string;
    reviewsTitle: string;
    cta: string;
    viewMore: string;
    bookWhatsAppPrompt: string;
    mapSatellite: string;
    mapTitle: string;
    mapSubtitle: string;
    mapLocationDesc: string;
    mapCta: string;
    mapDirectionsTitle: string;
    mapDirectionsText: string;
    items: {
      kitesurfing: { title: string; desc: string };
      kayak: { title: string; desc: string };
      pilonAzucar: { title: string; desc: string };
      cuevaDiablo: { title: string; desc: string };
      ojoAgua: { title: string; desc: string };
    };
  };
  aboutUs: {
    tag: string;
    title: string;
    whoTitle: string;
    whoP1: string;
    whoP2: string;
    whoQuote: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    valuesTitle: string;
    valuesSubtitle: string;
    values: {
      integrity: { n: string; d: string };
      honesty: { n: string; d: string };
      kindness: { n: string; d: string };
      commitment: { n: string; d: string };
      quality: { n: string; d: string };
    };
  };
  footer: {
    address: string;
    contact: string;
    follow: string;
    rights: string;
  };
  cookie: {
    title: string;
    message: string;
    accept: string;
    reject: string;
    close: string;
  };
  common: {
    prevPhoto: string;
    nextPhoto: string;
    openMenu: string;
    closeMenu: string;
    scrollToTop: string;
    viewImage: string;
    close: string;
    reserve: string;
  };
  assistant: {
    greeting: string;
    placeholder: string;
  };
}
