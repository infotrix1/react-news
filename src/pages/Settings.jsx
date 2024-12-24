import React from 'react';
import SettingsLayout from '../components/Settings/SettingsLayout';
import PreferencesForm from '../components/Settings/PreferencesForm';

export default function Settings() {
  return (
    <SettingsLayout title="News Preferences">
      <PreferencesForm />
    </SettingsLayout>
  );
}