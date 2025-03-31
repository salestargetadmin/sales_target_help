import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import mockArticles from "../utilities/constants";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import HelpLayout from "./HelpLayout";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Extract query from URL
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query")?.toLowerCase() || "";

  useEffect(() => {
    if (query) {
      const results = mockArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query) ||
          (article.features &&
            article.features.some(
              (feature) =>
                feature.title.toLowerCase().includes(query) ||
                feature.description.toLowerCase().includes(query)
            )) ||
          (article.accounts &&
            article.accounts.some(
              (account) =>
                account.title.toLowerCase().includes(query) ||
                account.description.toLowerCase().includes(query)
            ))
      );

      setFilteredArticles(results);
    }
  }, [query]);

  return (
    <HelpLayout>
      {(searchQuery, setIsChatOpen) => (
        <div className="max-w-4xl mx-auto p-6">
          <button
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors mb-4"
            onClick={() => navigate(-1)}
          >
            &larr; Back to Help Center
          </button>

          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Search Results for: <span className="text-purple-600">{query}</span>
          </h2>

          {filteredArticles.length > 0 ? (
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between bg-white p-5 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                  onClick={() => navigate(`/articles/${article.category}/${article.id}`)}

                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                    <p className="text-sm text-gray-500">{article.updated}</p>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No matching articles found.</p>
          )}
        </div>
      )}
    </HelpLayout>
  );
};

export default SearchResults;
