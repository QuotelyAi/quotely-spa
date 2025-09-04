import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ExternalLink, FileText, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'feature' | 'external';
  relevance: number;
}

const SearchAtlasOtto: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Static search data - in production this would connect to Atlas Otto API
  const searchDatabase: SearchResult[] = [
    // Pages
    {
      title: 'Home',
      description: 'Quotely Insurance Intelligence Platform - Modern insurance quoting with AI',
      url: '/',
      type: 'page',
      relevance: 1
    },
    {
      title: 'Solutions & Pricing',
      description: 'Flexible pricing plans for agencies of all sizes. Contact sales@tryquotely.com',
      url: '/pricing',
      type: 'page',
      relevance: 1
    },
    {
      title: 'ROI Calculator',
      description: 'Calculate your return on investment with Quotely',
      url: '/calculator',
      type: 'page',
      relevance: 1
    },
    {
      title: 'Compare Platforms',
      description: 'See how Quotely compares to other insurance platforms',
      url: '/compare',
      type: 'page',
      relevance: 1
    },
    {
      title: 'FAQ',
      description: 'Frequently asked questions about Quotely',
      url: '/faq',
      type: 'page',
      relevance: 1
    },
    {
      title: 'Blog',
      description: 'Latest insights on insurance technology and AI innovations',
      url: '/blog',
      type: 'page',
      relevance: 1
    },
    // Blog Posts
    {
      title: 'Why AI is Making Legacy Insurance Raters Obsolete',
      description: 'How AI is revolutionizing insurance rating systems',
      url: '/blog/ai-legacy-raters',
      type: 'blog',
      relevance: 0.9
    },
    {
      title: 'The Quotely AI Revolution: $1.37/Hour vs $15+/Hour Staff',
      description: 'Cost comparison of AI vs traditional staffing',
      url: '/blog/quotely-ai-revolution',
      type: 'blog',
      relevance: 0.9
    },
    // Features
    {
      title: 'TurboRater Integration',
      description: 'Verified carrier data through TurboRater partnership',
      url: '/pricing#integrations',
      type: 'feature',
      relevance: 0.8
    },
    {
      title: 'GAIL AI Market Intelligence',
      description: 'Advanced market insights powered by GAIL AI',
      url: '/pricing#intelligence',
      type: 'feature',
      relevance: 0.8
    },
    {
      title: 'Momentum AMP Compatibility',
      description: 'Seamless integration with Momentum AMP',
      url: '/pricing#momentum',
      type: 'feature',
      relevance: 0.8
    },
    {
      title: '24/7 AI Operation',
      description: 'Platform operates continuously at just $1.37/hour',
      url: '/#stats',
      type: 'feature',
      relevance: 0.8
    },
    // External/Contact
    {
      title: 'Contact Sales',
      description: 'Get custom pricing - sales@tryquotely.com',
      url: 'mailto:sales@tryquotely.com',
      type: 'external',
      relevance: 0.7
    }
  ];

  // Search algorithm
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const lowerQuery = searchQuery.toLowerCase();
    const words = lowerQuery.split(/\s+/).filter(word => word.length > 0);

    // Score and filter results
    const scored = searchDatabase.map(item => {
      let score = 0;
      const lowerTitle = item.title.toLowerCase();
      const lowerDesc = item.description.toLowerCase();

      // Exact title match
      if (lowerTitle === lowerQuery) score += 10;
      
      // Title contains full query
      if (lowerTitle.includes(lowerQuery)) score += 5;
      
      // Description contains full query
      if (lowerDesc.includes(lowerQuery)) score += 3;
      
      // Individual word matches
      words.forEach(word => {
        if (lowerTitle.includes(word)) score += 2;
        if (lowerDesc.includes(word)) score += 1;
      });

      // Apply relevance multiplier
      score *= item.relevance;

      return { ...item, score };
    });

    // Filter and sort results
    const filtered = scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    setTimeout(() => {
      setResults(filtered);
      setIsSearching(false);
    }, 200);
  };

  // Handle search input
  useEffect(() => {
    const debounce = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(debounce);
  }, [query]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleResultClick = (result: SearchResult) => {
    if (result.type === 'external') {
      window.location.href = result.url;
    } else {
      navigate(result.url);
    }
    setIsOpen(false);
    setQuery('');
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <FileText size={16} />;
      case 'feature':
        return <Info size={16} />;
      case 'external':
        return <ExternalLink size={16} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
        aria-label="Search"
      >
        <Search size={20} />
        <span className="hidden md:inline">Search</span>
        <kbd className="hidden md:inline px-2 py-1 text-xs bg-white/10 rounded">⌘K</kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Search Container */}
          <div ref={searchRef} className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Search Header */}
            <div className="flex items-center border-b border-neutral-200">
              <Search className="ml-4 text-neutral-400" size={20} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search Quotely... (Atlas Otto powered search)"
                className="flex-1 px-4 py-4 text-lg focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-4 hover:bg-neutral-100 transition-colors"
                aria-label="Close search"
              >
                <X size={20} className="text-neutral-500" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {isSearching && (
                <div className="p-8 text-center text-neutral-500">
                  <div className="animate-pulse">Searching...</div>
                </div>
              )}
              
              {!isSearching && query && results.length === 0 && (
                <div className="p-8 text-center">
                  <p className="text-neutral-500">No results found for "{query}"</p>
                  <p className="text-sm text-neutral-400 mt-2">
                    Try searching for pages, features, or blog posts
                  </p>
                </div>
              )}
              
              {!isSearching && results.length > 0 && (
                <div className="py-2">
                  {results.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result)}
                      className="w-full px-4 py-3 hover:bg-neutral-50 flex items-start gap-3 transition-colors text-left"
                    >
                      <div className="mt-0.5 text-neutral-400">
                        {getIcon(result.type)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-neutral-900">{result.title}</div>
                        <div className="text-sm text-neutral-600 line-clamp-1">
                          {result.description}
                        </div>
                      </div>
                      {result.type === 'external' && (
                        <ExternalLink size={14} className="text-neutral-400 mt-1" />
                      )}
                    </button>
                  ))}
                </div>
              )}
              
              {!query && (
                <div className="p-6">
                  <p className="text-sm text-neutral-500 mb-3">Quick Links</p>
                  <div className="grid grid-cols-2 gap-2">
                    {searchDatabase.slice(0, 6).map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(item)}
                        className="text-left px-3 py-2 hover:bg-neutral-50 rounded-lg transition-colors"
                      >
                        <div className="font-medium text-sm text-neutral-700">{item.title}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-neutral-200 bg-neutral-50 text-xs text-neutral-500">
              <span className="mr-4">Atlas Otto Search Integration</span>
              <span>Press <kbd className="px-1.5 py-0.5 bg-white rounded border border-neutral-300">ESC</kbd> to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchAtlasOtto;