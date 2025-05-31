
import { useState, useEffect } from 'react';
import { Search, ArrowUp, ArrowDown, X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [matches, setMatches] = useState<Element[]>([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

  // Show search bar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      // Clear highlights
      document.querySelectorAll('.search-highlight').forEach(el => {
        const parent = el.parentNode;
        if (parent) {
          parent.replaceChild(document.createTextNode(el.textContent || ''), el);
          parent.normalize();
        }
      });
      setMatches([]);
      setCurrentMatchIndex(0);
      return;
    }

    // Remove existing highlights
    document.querySelectorAll('.search-highlight').forEach(el => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ''), el);
        parent.normalize();
      }
    });

    // Find and highlight matches
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          
          const excludedTags = ['SCRIPT', 'STYLE', 'INPUT', 'TEXTAREA'];
          if (excludedTags.includes(parent.tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          
          if (parent.closest('.search-bar-container')) {
            return NodeFilter.FILTER_REJECT;
          }
          
          return node.textContent && node.textContent.toLowerCase().includes(searchQuery.toLowerCase())
            ? NodeFilter.FILTER_ACCEPT 
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    const matchingNodes: Node[] = [];
    let node;
    while (node = walker.nextNode()) {
      matchingNodes.push(node);
    }

    const newMatches: Element[] = [];
    matchingNodes.forEach(textNode => {
      const text = textNode.textContent || '';
      const parent = textNode.parentElement;
      if (!parent) return;

      const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      const parts = text.split(regex);
      
      const fragment = document.createDocumentFragment();
      parts.forEach((part, index) => {
        if (index % 2 === 0) {
          fragment.appendChild(document.createTextNode(part));
        } else {
          const highlight = document.createElement('span');
          highlight.className = 'search-highlight';
          highlight.textContent = part;
          fragment.appendChild(highlight);
          newMatches.push(highlight);
        }
      });
      
      parent.replaceChild(fragment, textNode);
    });

    setMatches(newMatches);
    setCurrentMatchIndex(0);
  }, [searchQuery]);

  const scrollToMatch = (index: number) => {
    if (matches.length === 0) return;
    
    const match = matches[index];
    match.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center',
      inline: 'center'
    });
    
    // Highlight current match
    matches.forEach((m, i) => {
      m.style.backgroundColor = i === index ? '#EF4444' : '#FACC15';
    });
  };

  const handleNext = () => {
    if (matches.length === 0) return;
    const nextIndex = (currentMatchIndex + 1) % matches.length;
    setCurrentMatchIndex(nextIndex);
    scrollToMatch(nextIndex);
  };

  const handlePrevious = () => {
    if (matches.length === 0) return;
    const prevIndex = (currentMatchIndex - 1 + matches.length) % matches.length;
    setCurrentMatchIndex(prevIndex);
    scrollToMatch(prevIndex);
  };

  const handleOk = () => {
    if (matches.length > 0) {
      scrollToMatch(currentMatchIndex);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    document.querySelectorAll('.search-highlight').forEach(el => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ''), el);
        parent.normalize();
      }
    });
  };

  if (!isVisible) return null;

  return (
    <div className="search-bar-container fixed top-20 right-4 z-50 glass-effect rounded-lg p-4 min-w-80">
      <div className="flex items-center gap-2 mb-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search CV content..."
            className="w-full pl-10 pr-4 py-2 bg-netflix-dark border border-netflix-light-gray rounded-md text-white text-sm focus:outline-none focus:border-netflix-red"
          />
        </div>
        <button
          onClick={clearSearch}
          className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      {searchQuery && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">
            {matches.length === 0 
              ? 'No matches found' 
              : `${currentMatchIndex + 1} of ${matches.length} matches`
            }
          </span>
          
          {matches.length > 0 && (
            <div className="flex gap-1">
              <button
                onClick={handleOk}
                className="px-3 py-1 bg-netflix-red hover:bg-red-700 text-white text-xs rounded transition-colors duration-300"
              >
                OK
              </button>
              <button
                onClick={handlePrevious}
                className="p-1 bg-netflix-gray hover:bg-netflix-light-gray text-white rounded transition-colors duration-300"
              >
                <ArrowUp className="w-3 h-3" />
              </button>
              <button
                onClick={handleNext}
                className="p-1 bg-netflix-gray hover:bg-netflix-light-gray text-white rounded transition-colors duration-300"
              >
                <ArrowDown className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
