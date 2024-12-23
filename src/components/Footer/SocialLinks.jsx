import React from 'react';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ Icon, href, label }) => (
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
  );
}