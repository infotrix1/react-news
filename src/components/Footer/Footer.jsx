import React from 'react';
import FooterLinks from './FooterLinks';
import Newsletter from './Newsletter';
import SocialLinks from './SocialLinks';

const footerSections = [
  {
    title: 'Categories',
    links: [
      { label: 'Technology', href: '#' },
      { label: 'Business', href: '#' },
      { label: 'Sports', href: '#' },
      { label: 'Entertainment', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Writing Tips', href: '#' },
      { label: 'Career', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'API', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Open Source', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <Newsletter />
          <div className="md:ml-auto">
            <SocialLinks />
          </div>
        </div>
        
        <FooterLinks sections={footerSections} />
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Dripnews. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}