import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { api } from '../../constants';
import { Link } from 'react-router-dom'; 

export default function NavLinks({ className = "" }) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAuthorOpen, setIsAuthorOpen] = useState(false); 
  const [isSourceOpen, setIsSourceOpen] = useState(false); 
  const [categoryMenuItems, setCategoryMenuItems] = useState([]);
  const [authorMenuItems, setAuthorMenuItems] = useState([]); 
  const [sourceMenuItems, setSourceMenuItems] = useState([ 
    { name: 'News Api' },
    { name: 'New York Times' },
    { name: 'The Guardian' },
  ]);
  const categoryDropdownRef = useRef(null); 
  const authorDropdownRef = useRef(null); 
  const sourceDropdownRef = useRef(null); 

  useEffect(() => {
    async function fetchCategoryData() {
      try {
        const response = await api.get('/category');
        setCategoryMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    }

    fetchCategoryData();
  }, []);

  useEffect(() => {
    async function fetchAuthorData() {
      try {
        const response = await api.get('/authors');
        setAuthorMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching author data:', error);
      }
    }

    fetchAuthorData();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) &&
        (authorDropdownRef.current && !authorDropdownRef.current.contains(event.target)) &&
        (sourceDropdownRef.current && !sourceDropdownRef.current.contains(event.target))
      ) {
        setIsCategoryOpen(false);
        setIsAuthorOpen(false); 
        setIsSourceOpen(false); 
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const links = [
    {
      component: () => (
        <div className="relative" ref={categoryDropdownRef}>
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <span>Category</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
          </button>
          {isCategoryOpen && (
            <div className={`
              absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50
              left-0 w-screen sm:w-[90vw] md:w-[720px] 
              sm:left-1/2 sm:-translate-x-1/2 md:-translate-x-1/2
              max-h-[80vh] overflow-y-auto
            `}>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {categoryMenuItems.map((item, index) => (
                  item.category && (
                    <Link
                      key={item.category} 
                      to={`/category/${item.category}`} 
                      className={`flex items-start p-5 hover:bg-gray-50 transition-colors ${index !== categoryMenuItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                      <div className="ml-3">
                        <div className="font-medium text-gray-900">{item.category}</div>
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      component: () => (
        <div className="relative" ref={authorDropdownRef}>
          <button
            onClick={() => setIsAuthorOpen(!isAuthorOpen)}
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <span>Author</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isAuthorOpen ? 'rotate-180' : ''}`} />
          </button>
          {isAuthorOpen && (
            <div className={`
              absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50
              left-0 w-screen sm:w-[90vw] md:w-[720px] 
              sm:left-1/2 sm:-translate-x-1/2 md:-translate-x-1/2
              max-h-[80vh] overflow-y-auto
            `}>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {authorMenuItems.map((item, index) => (
                  item.author && (
                    <Link
                      key={item.author} 
                      to={`/author/${item.author}`} // Redirect to the author page with author
                      className={`flex items-start p-5 hover:bg-gray-50 transition-colors ${index !== authorMenuItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                      <div className="ml-3">
                        <div className="font-medium text-gray-900">{item.author}</div>
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      component: () => (
        <div className="relative" ref={sourceDropdownRef}>
          <button
            onClick={() => setIsSourceOpen(!isSourceOpen)}
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <span>Sources</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isSourceOpen ? 'rotate-180' : ''}`} />
          </button>
          {isSourceOpen && (
            <div className={`
              absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50
              left-0 w-screen sm:w-[90vw] md:w-[720px] 
              sm:left-1/2 sm:-translate-x-1/2 md:-translate-x-1/2
              max-h-[80vh] overflow-y-auto
            `}>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {sourceMenuItems.map((item, index) => (
                  item.name && (
                    <Link
                      key={item.name} 
                      to={`/source/${item.name.toLowerCase().replace(/\s+/g, ' ')}`} // Redirect to the source page with source name
                      className={`flex items-start p-5 hover:bg-gray-50 transition-colors ${index !== sourceMenuItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                      <div className="ml-3">
                        <div className="font-medium text-gray-900">{item.name}</div>
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <ul className={className}>
      {links.map((link, index) => (
        <li key={link.label ? link.label.toLowerCase() : index}>
          {link.component ? (
            <link.component />
          ) : (
            <a href={link.href} className="text-gray-600 hover:text-gray-900">
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
