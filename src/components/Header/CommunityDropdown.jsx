import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Users, MessageCircle, Calendar } from 'lucide-react';

export default function CommunityDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    {
      icon: Users,
      label: 'Discussion Forums',
      description: 'Join conversations with fellow readers',
      href: '#'
    },
    {
      icon: MessageCircle,
      label: 'Live Chat',
      description: 'Real-time discussions with the community',
      href: '#'
    },
    {
      icon: Calendar,
      label: 'Events',
      description: 'Upcoming meetups and webinars',
      href: '#'
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <span>Community</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                flex items-start p-4 hover:bg-gray-50 transition-colors
                ${index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''}
              `}
            >
              <item.icon className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div className="ml-3">
                <div className="font-medium text-gray-900">{item.label}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
