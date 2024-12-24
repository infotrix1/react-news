import { useState } from 'react';

export function useNewsPreferences() {
  const [preferences, setPreferences] = useState({
    categories: [],
    sources: [],
    authors: [],
  });

  const updateCategories = (updater) => {
    setPreferences(prev => ({
      ...prev,
      categories: updater(prev.categories),
    }));
  };

  const updateSources = (updater) => {
    setPreferences(prev => ({
      ...prev,
      sources: updater(prev.sources),
    }));
  };

  const updateAuthors = (updater) => {
    setPreferences(prev => ({
      ...prev,
      authors: updater(prev.authors),
    }));
  };

  const updatePreferences = async (newPreferences) => {
    // TODO: Implement API call to save preferences
    console.log('Saving preferences:', newPreferences);
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  return {
    preferences,
    updateCategories,
    updateSources,
    updateAuthors,
    updatePreferences,
  };
}
