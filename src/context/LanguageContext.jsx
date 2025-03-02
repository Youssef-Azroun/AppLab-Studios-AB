import { createContext, useState, useContext } from 'react';
import Svenska from '../Languages/Svenska';
import English from '../Languages/English';

// Create the context
const LanguageContext = createContext(null);

// Provider component
export function LanguageProvider({ children }) {
  // Check localStorage for saved language preference, default to 'sv' if none exists
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'sv';
  });
  
  // Get the appropriate language file
  const lang = currentLanguage === 'en' ? English : Svenska;
  
  // Function to change language
  const toggleLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    // Save to localStorage whenever language changes
    localStorage.setItem('language', langCode);
  };
  
  // Value to be provided to consuming components
  const value = {
    currentLanguage,
    lang,
    toggleLanguage
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 