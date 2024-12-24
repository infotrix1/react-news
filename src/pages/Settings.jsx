import React, { useState } from 'react';
import SettingsLayout from '../components/Settings/SettingsLayout';
import PreferencesForm from '../components/Settings/PreferencesForm';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Settings() {
  // State for categories, authors, and sources
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [sources, setSources] = useState([]);

  // Function to update categories
  const updateCategories = (newCategories) => {
    setCategories(newCategories);
  };

  // Function to update authors
  const updateAuthors = (newAuthors) => {
    setAuthors(newAuthors);
  };

  // Function to update sources
  const updateSources = (newSources) => {
    setSources(newSources);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <SettingsLayout title="News Preferences">
        {/* Pass state and updater functions to PreferencesForm */}
        <PreferencesForm
          preferences={{ categories, authors, sources }}
          updateCategories={updateCategories}
          updateAuthors={updateAuthors}
          updateSources={updateSources}
        />
      </SettingsLayout>
      <Footer />
    </div>
  );
}
