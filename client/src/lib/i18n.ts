export type Language = 'en' | 'fr';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      greeting: 'Hello, I\'m',
      title: 'Aymane Aaraba',
      subtitle: 'Software Engineer',
      description: 'Passionate about building elegant solutions to complex problems. Specialized in full-stack development, system design, and creative problem-solving.',
      cta: 'View My Work',
      ctaContact: 'Contact Me',
    },
    // About Section
    about: {
      title: 'About Me',
      intro: 'I\'m a dedicated software engineer with a passion for creating innovative solutions and pushing the boundaries of what\'s possible.',
      background: 'Background',
      backgroundText: 'Graduated from 42 School, a peer-to-peer learning institution known for its rigorous curriculum and innovative teaching methods. I\'ve completed over 50 projects spanning from low-level systems programming to full-stack web development.',
      education: 'Education',
      educationText: '42 School - Khouribga (2023-Present)\nISTAG Bab Tizimi - Meknes (2019)',
      experience: 'Experience',
      experienceText: 'Continuous learning and project-based development across multiple domains including systems programming, web development, DevOps, and software architecture.',
    },
    // Projects Section
    projects: {
      title: 'Featured Projects',
      viewProject: 'View Project',
      viewCode: 'View Code',
      skills: 'Skills',
      hours: 'Hours',
      status: 'Status',
      passed: 'Passed',
      passedBonus: 'Passed with Bonus',
    },
    // Skills Section
    skills: {
      title: 'Skills & Expertise',
      languages: 'Languages',
      frameworks: 'Frameworks & Tools',
      concepts: 'Core Concepts',
    },
    // Contact Section
    contact: {
      title: 'Get In Touch',
      description: 'Have a project in mind? Let\'s collaborate and create something amazing together.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email',
    },
    // Footer
    footer: {
      followMe: 'Follow Me',
      copyright: '© 2025 Aymane Aaraba. All rights reserved.',
    },
  },
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      greeting: 'Bonjour, je suis',
      title: 'Aymane Aaraba',
      subtitle: 'Ingénieur Logiciel',
      description: 'Passionné par la création de solutions élégantes à des problèmes complexes. Spécialisé en développement full-stack, conception de systèmes et résolution créative de problèmes.',
      cta: 'Voir Mon Travail',
      ctaContact: 'Me Contacter',
    },
    // About Section
    about: {
      title: 'À Propos de Moi',
      intro: 'Je suis un ingénieur logiciel dévoué passionné par la création de solutions innovantes et le dépassement des limites du possible.',
      background: 'Parcours',
      backgroundText: 'Diplômé de l\'école 42, une institution d\'apprentissage par les pairs connue pour son curriculum rigoureux et ses méthodes d\'enseignement innovantes. J\'ai complété plus de 50 projets couvrant la programmation système bas niveau jusqu\'au développement web full-stack.',
      education: 'Formation',
      educationText: '42 School - Khouribga (2023-Présent)',
      experience: 'Expérience',
      experienceText: 'Apprentissage continu et développement basé sur des projets dans plusieurs domaines incluant la programmation système, le développement web, DevOps et l\'architecture logicielle.',
    },
    // Projects Section
    projects: {
      title: 'Projets en Vedette',
      viewProject: 'Voir le Projet',
      viewCode: 'Voir le Code',
      skills: 'Compétences',
      hours: 'Heures',
      status: 'Statut',
      passed: 'Réussi',
      passedBonus: 'Réussi avec Bonus',
    },
    // Skills Section
    skills: {
      title: 'Compétences et Expertise',
      languages: 'Langages',
      frameworks: 'Frameworks et Outils',
      concepts: 'Concepts Clés',
    },
    // Contact Section
    contact: {
      title: 'Prenez Contact',
      description: 'Vous avez un projet en tête ? Collaborons et créons quelque chose d\'extraordinaire ensemble.',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Échec de l\'envoi du message. Veuillez réessayer.',
      required: 'Ce champ est obligatoire',
      invalidEmail: 'Veuillez entrer une adresse email valide',
    },
    // Footer
    footer: {
      followMe: 'Me Suivre',
      copyright: '© 2025 Aymane Aaraba. Tous droits réservés.',
    },
  },
};

export function getTranslation(lang: Language, path: string): string {
  const keys = path.split('.');
  let value: any = translations[lang];
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || path;
}
