import React from 'react';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Subscribe to our Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md">Subscribe</button>
          </div>
          <div className="md:ml-auto">
            <div className="flex space-x-4">
              {[
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-600 hover:text-gray-900"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
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
