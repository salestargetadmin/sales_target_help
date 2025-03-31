import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatWidget from "./ChatWidget";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearch } from "./SearchContext";

const HelpLayout = ({ children }: { children: (searchQuery: string, setIsChatOpen: (open: boolean) => void) => JSX.Element }) => {
  const { searchQuery, setSearchQuery } = useSearch(); // Global search state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  // Handle Enter key search
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Function to clear search input
  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div className="w-full layoutbg p-5 pb-[80px] pt-[26px] relative overflow-hidden">
        <h1 className="text-[18px] max-w-4xl mx-auto font-[500] text-white mb-16">
          Salestarget Help Center
        </h1>

        {/* Search Bar */}
        <div className="relative max-w-4xl mx-auto">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search for articles..."
            className="w-full pl-10 pr-10 py-3 text-white rounded-lg bg-transparent border border-borderColor focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress} // Trigger search on Enter
          />
          
          {/* Clear (X) Button - Only visible if there's text */}
          {searchQuery && (
            <button
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-200"
              onClick={clearSearch}
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>

        <img src="/bg3.svg" alt="" className="image1 absolute"></img>
        <img src="/bg2.svg" alt="" className="image2 absolute"></img>
      </div>

      <div className="max-w-4xl mx-auto p-8 pt-2 mt-5">{children(searchQuery, setIsChatOpen)}</div>

      <div className="fixed bottom-4 right-4">
        <ChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      </div>
    </div>
  );
};

export default HelpLayout;
