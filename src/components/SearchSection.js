import React, { useState, useEffect, useRef } from 'react';
import { popularSearches, medicines } from '../data/medicines';
import '../styles/SearchSection.css';

const SearchSection = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
      onSearch('');
      return;
    }

    // Filter suggestions
    const filtered = popularSearches.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    const matchingMedicines = medicines
      .filter(medicine =>
        medicine.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5)
      .map(medicine => medicine.name);

    const allSuggestions = [...new Set([...filtered, ...matchingMedicines])].slice(0, 8);
    setSuggestions(allSuggestions);
    setShowSuggestions(allSuggestions.length > 0);

    // Trigger search
    onSearch(query);
  }, [query, onSearch]);

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onSearch(suggestion);
  };

  return (
    <section id="search" className="search-section">
      <div className="container">
        <div className="search-wrapper">
          <div className="search-box" ref={searchRef}>
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => query && setShowSuggestions(true)}
              placeholder="Search medicines, syrups, injections, health supplements…"
              autoComplete="off"
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="search-suggestions show" ref={suggestionsRef}>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;

