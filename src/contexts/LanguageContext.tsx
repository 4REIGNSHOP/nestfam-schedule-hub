
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    calendar: 'Calendar',
    
    // Homepage
    heroTitle: 'Keep Your Family',
    heroTitleHighlight: 'Connected',
    heroDescription: 'NestFam helps families stay organized with a shared calendar where everyone can add their schedules, appointments, and special events. Never miss a family moment again!',
    getStarted: 'Get Started',
    
    // Features
    featuresTitle: 'Everything Your Family Needs',
    sharedCalendarTitle: 'Shared Calendar',
    sharedCalendarDesc: 'One calendar for the whole family to see everyone\'s schedule at a glance',
    familyMembersTitle: 'Family Members',
    familyMembersDesc: 'Track each family member\'s activities and commitments separately',
    eventCategoriesTitle: 'Event Categories',
    eventCategoriesDesc: 'Organize events by type: work, school, family time, sports, and more',
    familyFirstTitle: 'Family First',
    familyFirstDesc: 'Designed with families in mind - simple, intuitive, and accessible for all ages',
    
    // CTA
    ctaTitle: 'Ready to Organize Your Family Life?',
    ctaDescription: 'Start using NestFam today and keep your family connected and organized.',
    viewFamilyCalendar: 'View Family Calendar',
    
    // Footer
    footerTagline: 'Bringing families together, one schedule at a time.',
    
    // Calendar Page
    familyCalendar: 'Family Calendar',
    calendarDescription: 'Keep track of everyone\'s schedule in one place',
    addEvent: 'Add Event',
    eventsFor: 'Events for',
    noEventsScheduled: 'No events scheduled for this day',
    
    // Add Event Form
    addNewFamilyEvent: 'Add New Family Event',
    eventTitle: 'Event Title',
    eventTitlePlaceholder: 'Soccer practice, Family dinner...',
    description: 'Description (Optional)',
    descriptionPlaceholder: 'Additional details...',
    date: 'Date',
    pickDate: 'Pick a date',
    time: 'Time',
    category: 'Category',
    selectCategory: 'Select category',
    familyMember: 'Family Member',
    selectFamilyMember: 'Select family member',
    
    // Categories
    work: 'Work',
    school: 'School',
    family: 'Family Time',
    sports: 'Sports/Activities',
    medical: 'Medical',
    social: 'Social',
    other: 'Other',
    
    // Family Members
    mom: 'Mom',
    dad: 'Dad',
    child1: 'Child 1',
    child2: 'Child 2',
    wholeFamily: 'Whole Family'
  },
  fr: {
    // Navigation
    home: 'Accueil',
    calendar: 'Calendrier',
    
    // Homepage
    heroTitle: 'Gardez Votre Famille',
    heroTitleHighlight: 'Connectée',
    heroDescription: 'NestFam aide les familles à rester organisées avec un calendrier partagé où chacun peut ajouter ses horaires, rendez-vous et événements spéciaux. Ne ratez plus jamais un moment en famille !',
    getStarted: 'Commencer',
    
    // Features
    featuresTitle: 'Tout Ce Dont Votre Famille A Besoin',
    sharedCalendarTitle: 'Calendrier Partagé',
    sharedCalendarDesc: 'Un calendrier pour toute la famille pour voir l\'horaire de chacun en un coup d\'œil',
    familyMembersTitle: 'Membres de la Famille',
    familyMembersDesc: 'Suivez les activités et engagements de chaque membre de la famille séparément',
    eventCategoriesTitle: 'Catégories d\'Événements',
    eventCategoriesDesc: 'Organisez les événements par type : travail, école, temps en famille, sports, et plus',
    familyFirstTitle: 'La Famille d\'Abord',
    familyFirstDesc: 'Conçu avec les familles à l\'esprit - simple, intuitif et accessible pour tous les âges',
    
    // CTA
    ctaTitle: 'Prêt à Organiser Votre Vie de Famille ?',
    ctaDescription: 'Commencez à utiliser NestFam dès aujourd\'hui et gardez votre famille connectée et organisée.',
    viewFamilyCalendar: 'Voir le Calendrier Familial',
    
    // Footer
    footerTagline: 'Rassembler les familles, un horaire à la fois.',
    
    // Calendar Page
    familyCalendar: 'Calendrier Familial',
    calendarDescription: 'Gardez une trace de l\'horaire de chacun en un seul endroit',
    addEvent: 'Ajouter un Événement',
    eventsFor: 'Événements pour',
    noEventsScheduled: 'Aucun événement prévu pour cette journée',
    
    // Add Event Form
    addNewFamilyEvent: 'Ajouter un Nouvel Événement Familial',
    eventTitle: 'Titre de l\'Événement',
    eventTitlePlaceholder: 'Entraînement de soccer, Dîner familial...',
    description: 'Description (Optionnel)',
    descriptionPlaceholder: 'Détails supplémentaires...',
    date: 'Date',
    pickDate: 'Choisir une date',
    time: 'Heure',
    category: 'Catégorie',
    selectCategory: 'Sélectionner une catégorie',
    familyMember: 'Membre de la Famille',
    selectFamilyMember: 'Sélectionner un membre de la famille',
    
    // Categories
    work: 'Travail',
    school: 'École',
    family: 'Temps en Famille',
    sports: 'Sports/Activités',
    medical: 'Médical',
    social: 'Social',
    other: 'Autre',
    
    // Family Members
    mom: 'Maman',
    dad: 'Papa',
    child1: 'Enfant 1',
    child2: 'Enfant 2',
    wholeFamily: 'Toute la Famille'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
