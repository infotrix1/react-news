import React, { useState } from 'react';
import { useNewsPreferences } from '../../hooks/useNewsPreferences';
import CategorySelector from './CategorySelector';
import SourceSelector from './SourceSelector';
import AuthorSelector from './AuthorSelector';

export default function PreferencesForm() {
  const { preferences, updatePreferences } = useNewsPreferences();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await updatePreferences(preferences);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6">
      <CategorySelector />
      <SourceSelector />
      <AuthorSelector />
      
      <div className="pt-4 border-t">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : 'Save Preferences'}
        </button>
      </div>
    </form>
  );
}
