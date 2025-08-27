import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearch } from "./SearchContext";
import mockArticles from "../utilities/constants";

const HelpLayout = ({ children }: { children: any }) => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState<any[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Filter articles for dropdown only - don't affect current page content
  useEffect(() => {
    if (searchQuery.trim()) {
      const queryWords = searchQuery.toLowerCase().split(/\s+/);

      const results = mockArticles.filter((article) => {
        const title = article.title?.toLowerCase() || "";
        const content = article.content?.toLowerCase() || "";
        const featureText = article.features
          ?.map((feature) => `${feature?.title || ""} ${feature?.description || ""}`)
          .join(" ")
          .toLowerCase() || "";

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      const query = searchQuery; // Store query before clearing
      setSearchQuery(""); // Clear search query immediately
      setIsDropdownOpen(false); // Close the dropdown immediately
      setFilteredArticles([]); // Clear filtered articles immediately
      navigate(`/search?query=${encodeURIComponent(query)}`); // Navigate with stored query
      (e.target as HTMLInputElement).blur(); // Remove focus from input
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
        <div className="flex justify-between items-center max-w-4xl mx-auto text-white mb-10">
          <h1 className="text-[18px] font-[500]">Salestarget Help Center</h1>
          <Link
            to="/calculate"
            className="text-[16px] px-4 py-1 border-0 outline-0 bg-white text-black rounded-[20px] font-[500] hover:bg-purple-400 hover:text-white hover:shadow-[1px_1px_1px_black]"
          >
            Calculate Your Cost
          </Link>
        </div>

        {/* Search Bar with Suggestions */}
        <div className="relative max-w-4xl mx-auto" ref={searchContainerRef}>
          <div className="relative z-20">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for articles..."
              className="w-full pl-10 pr-10 py-3 z-10 text-white border border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
    shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-text"
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
          {isDropdownOpen && (
            <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 h-screen overflow-y-auto backdrop-blur-sm">
              {filteredArticles.length > 0 ? (
                <div className="p-2">
                  <div className="text-xs font-medium text-gray-500 px-4 py-2 uppercase tracking-wide">
                    Search Results ({filteredArticles.length})
                  </div>
                  {filteredArticles.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => {
                        navigate(`/articles/${article.category}/${article.id}`);
                        setSearchQuery(""); // Clear search query
                        setIsDropdownOpen(false); // Close the dropdown after navigation
                        setFilteredArticles([]); // Clear filtered articles
                      }}
                      className="w-full px-4 py-4 text-left hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 text-gray-700 rounded-lg mb-2 transition-all duration-200 hover:shadow-md border border-transparent hover:border-purple-100 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-colors">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors mb-1 line-clamp-2">
                            {article.title}
                          </p>
                          <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors line-clamp-2">
                            {article.content}
                          </p>
                          <div className="flex items-center mt-2 text-xs text-gray-400">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {article.updated}
                          </div>
                        </div>
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">No articles found</p>
                  <p className="text-sm text-gray-400 mt-1">Try searching with different keywords</p>
                </div>
              )}
            </div>
          )}
        </div>

        <img src="/bg3.svg" alt="" className="image1 absolute z-0 hidden md:block" />
        <img src="/bg2.svg" alt="" className="image2 absolute z-0 hidden md:block" />
      </div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto p-8 pt-2 mt-5">
        {children("", setIsChatOpen)} {/* Pass empty string so current page content doesn't filter */}
      </div>
    </div>
  );
};

export default HelpLayout;
