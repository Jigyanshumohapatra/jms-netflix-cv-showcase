
import React, { useState, useEffect } from 'react';
import { Search, X, ChevronUp, ChevronDown } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [matches, setMatches] = useState<Element[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [highlightedElements, setHighlightedElements] = useState<Element[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const removeHighlights = () => {
    highlightedElements.forEach(element => {
      const parent = element.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(element.textContent || ''), element);
        parent.normalize();
      }
    });
    setHighlightedElements([]);
  };

  const createHighlightElement = (text: string): HTMLElement => {
    const mark = document.createElement('mark');
    mark.className = 'search-highlight';
    mark.textContent = text;
    return mark;
  };

  const highlightMatches = (query: string) => {
    // Input validation - limit query length and sanitize
    if (!query.trim() || query.length > 100) {
      removeHighlights();
      setMatches([]);
      return;
    }

    // Sanitize query - only allow alphanumeric, spaces, and basic punctuation
    const sanitizedQuery = query.replace(/[^a-zA-Z0-9\s\-_.]/g, '');
    if (!sanitizedQuery) {
      removeHighlights();
      setMatches([]);
      return;
    }

    removeHighlights();

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          if (node.nodeValue && node.nodeValue.toLowerCase().includes(sanitizedQuery.toLowerCase())) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_REJECT;
        }
      }
    );

    const textNodes: Node[] = [];
    let node;
    while ((node = walker.nextNode())) {
      textNodes.push(node);
    }

    const newHighlightedElements: Element[] = [];
    const newMatches: Element[] = [];

    textNodes.forEach(textNode => {
      const text = textNode.nodeValue || '';
      const lowerText = text.toLowerCase();
      const lowerQuery = sanitizedQuery.toLowerCase();
      
      if (lowerText.includes(lowerQuery)) {
        const parent = textNode.parentNode;
        if (parent) {
          const fragment = document.createDocumentFragment();
          let lastIndex = 0;
          let index = lowerText.indexOf(lowerQuery);
          
          while (index !== -1) {
            // Add text before match
            if (index > lastIndex) {
              fragment.appendChild(document.createTextNode(text.slice(lastIndex, index)));
            }
            
            // Create and add highlight element
            const matchText = text.slice(index, index + sanitizedQuery.length);
            const highlightElement = createHighlightElement(matchText);
            fragment.appendChild(highlightElement);
            newHighlightedElements.push(highlightElement);
            newMatches.push(highlightElement);
            
            lastIndex = index + sanitizedQuery.length;
            index = lowerText.indexOf(lowerQuery, lastIndex);
          }
          
          // Add remaining text
          if (lastIndex < text.length) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
          }
          
          parent.replaceChild(fragment, textNode);
        }
      }
    });

    setHighlightedElements(newHighlightedElements);
    setMatches(newMatches);
    setCurrentMatchIndex(0);
  };

  const scrollToMatch = (index: number) => {
    if (matches[index]) {
      matches[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
      setCurrentMatchIndex(index);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    highlightMatches(query);
  };

  const goToFirstMatch = () => {
    if (matches.length > 0) {
      scrollToMatch(0);
    }
  };

  const goToNextMatch = () => {
    if (matches.length > 0) {
      const nextIndex = (currentMatchIndex + 1) % matches.length;
      scrollToMatch(nextIndex);
    }
  };

  const goToPreviousMatch = () => {
    if (matches.length > 0) {
      const prevIndex = currentMatchIndex === 0 ? matches.length - 1 : currentMatchIndex - 1;
      scrollToMatch(prevIndex);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 glass-effect rounded-lg p-4 max-w-sm w-full mx-4 md:mx-0">
      <div className="flex items-center gap-2 mb-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search content..."
            maxLength={100}
            className="w-full pl-10 pr-4 py-2 bg-netflix-darker border border-netflix-light-gray rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-netflix-red"
          />
        </div>
        <button
          onClick={() => {
            setSearchQuery('');
            removeHighlights();
            setMatches([]);
          }}
          className="p-2 hover:bg-netflix-red rounded-md transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {searchQuery && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-gray-300">
            <span>
              {matches.length === 0 
                ? 'No matches found' 
                : `${currentMatchIndex + 1} of ${matches.length} matches`
              }
            </span>
            {matches.length > 0 && (
              <div className="flex gap-1">
                <button
                  onClick={goToPreviousMatch}
                  className="p-1 hover:bg-netflix-red rounded transition-colors"
                  title="Previous match"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  onClick={goToNextMatch}
                  className="p-1 hover:bg-netflix-red rounded transition-colors"
                  title="Next match"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          
          {matches.length > 0 && (
            <button
              onClick={goToFirstMatch}
              className="w-full py-2 px-3 bg-netflix-red hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors"
            >
              Go to First Match
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
