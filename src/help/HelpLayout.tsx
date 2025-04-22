import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatWidget from "./ChatWidget";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearch } from "./SearchContext";
import mockArticles from "../utilities/constants";

const HelpLayout = ({ children }) => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Filter articles whenever search query changes
  

  useEffect(() => {
    if (searchQuery.trim()) {
      const queryWords = searchQuery.toLowerCase().split(/\s+/); // split by spaces
  
      const results = mockArticles.filter((article) => {
        const title = article.title.toLowerCase();
        const content = article.content?.toLowerCase() || "";
        const featureText = article.features
          .map((feature) => `${feature.title} ${feature.description}`)
          .join(" ")
          .toLowerCase();
  
        // Combine all searchable text
        const searchableText = `${title} ${content} ${featureText}`;
  
        // Return true only if all words are found somewhere in the text
        return queryWords.every((word) => searchableText.includes(word));
      });
  
      setFilteredArticles(results);
      setIsDropdownOpen(true);
    } else {
      setFilteredArticles([]);
      setIsDropdownOpen(false);
    }
  }, [searchQuery]);
  
  

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setIsDropdownOpen(false); // Close the dropdown after navigation
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredArticles([]);
    setIsDropdownOpen(false); // Close the dropdown when search is cleared
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div className="w-full layoutbg p-5 pb-[80px] pt-[26px] relative overflow-hidden">
        <h1 className="text-[18px] max-w-4xl mx-auto font-[500] text-white mb-16">
          Salestarget Help Center
        </h1>

        {/* Search Bar with Suggestions */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search for articles..."
              className="w-full pl-10 pr-10 py-3 text-white rounded-lg bg-transparent border border-borderColor focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            {searchQuery && (
              <button
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-200"
                onClick={clearSearch}
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Suggestions Dropdown */}
         {/* Suggestions Dropdown */}
         {isDropdownOpen && (
            <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl max-h-60 overflow-y-auto">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => {
                     navigate(`/articles/${article.category}/${article.id}`);
                      
                      setIsDropdownOpen(false); // Close the dropdown after navigation
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-700 border-b last:border-b-0"
                  >
                    <p className="font-medium">{article.title}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {article.content}
                    </p>
                  </button>
                ))
              ) : (
                <div className="p-4 text-gray-500">
                  No articles found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        <img src="/bg3.svg" alt="" className="image1 absolute" />
        <img src="/bg2.svg" alt="" className="image2 absolute" />
      </div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto p-8 pt-2 mt-5">
        {children(searchQuery, setIsChatOpen)}
      </div>

    </div>
  );
};

export default HelpLayout;
