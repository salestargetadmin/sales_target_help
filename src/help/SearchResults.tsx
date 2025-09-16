import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo, useCallback } from "react";
import mockArticles from "../utilities/constants";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import HelpLayout from "./HelpLayout";

// Define search result types for better type safety
interface SearchResult {
  id: string;
  title: string;
  content?: string;
  updated: string;
  category?: string;
  matchType: 'title' | 'heading' | 'content';
  matchScore: number; // Higher score = higher priority
  [key: string]: any;
}

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredArticles, setFilteredArticles] = useState<SearchResult[]>([]);

  // Extract query from URL with memoization
  const query = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("query")?.toLowerCase().trim() || "";
  }, [location.search]);

  // PRIORITY 1: Search in main article title (highest priority)
  const searchInMainTitle = useCallback((article: any, searchQuery: string): boolean => {
    return article.title?.toLowerCase().includes(searchQuery) || false;
  }, []);

  // PRIORITY 2: Search in heading items (medium priority)
  const searchInHeadings = useCallback((article: any, searchQuery: string): boolean => {
    const sectionsToCheck = ['features', 'accounts', 'msaccounts', 'imap', 'faq'];
    
    return sectionsToCheck.some(section => 
      article[section] && article[section].some((item: any) => 
        item?.isHeading && item?.title?.toLowerCase().includes(searchQuery)
      )
    );
  }, []);

  // PRIORITY 3: Search in content (lowest priority)
  const searchInContent = useCallback((article: any, searchQuery: string): boolean => {
    // Search in main article content/description
    if (article.content?.toLowerCase().includes(searchQuery)) {
      return true;
    }

    // Search in non-heading items in all sections
    const sectionsToCheck = ['features', 'accounts', 'msaccounts', 'imap', 'faq'];
    
    return sectionsToCheck.some(section => 
      article[section] && article[section].some((item: any) => 
        !item?.isHeading && (
          item?.title?.toLowerCase().includes(searchQuery) ||
          item?.description?.toLowerCase().includes(searchQuery)
        )
      )
    );
  }, []);

  // Advanced search with three-tier priority system
  const performAdvancedSearch = useMemo(() => {
    if (!query) return [];

    const titleMatches: SearchResult[] = [];
    const headingMatches: SearchResult[] = [];
    const contentMatches: SearchResult[] = [];
    const processedArticles = new Set<string>();

    mockArticles.forEach(article => {
      // TIER 1: HIGHEST PRIORITY - Main title matches
      if (searchInMainTitle(article, query)) {
        titleMatches.push({
          ...article,
          matchType: 'title',
          matchScore: 100 // Highest score
        });
        processedArticles.add(article.id);
        return; // Skip other checks for this article
      }

      // TIER 2: MEDIUM PRIORITY - Heading matches (isHeading: true items)
      if (searchInHeadings(article, query)) {
        headingMatches.push({
          ...article,
          matchType: 'heading',
          matchScore: 50 // Medium score
        });
        processedArticles.add(article.id);
        return; // Skip content check for this article
      }

      // TIER 3: LOWEST PRIORITY - Content matches
      if (searchInContent(article, query)) {
        contentMatches.push({
          ...article,
          matchType: 'content',
          matchScore: 10 // Lowest score
        });
      }
    });

    // Combine all results with proper prioritization
    return [
      ...titleMatches,    // First: "Setting up your account" when searching "account"
      ...headingMatches,  // Second: Articles with "account" in headings
      ...contentMatches   // Third: Articles with "account" in content
    ];
  }, [query, searchInMainTitle, searchInHeadings, searchInContent]);

  useEffect(() => {
    setFilteredArticles(performAdvancedSearch);
  }, [performAdvancedSearch]);

  return (
    <HelpLayout>
      {(_: any, __: any) => (
        <div className="max-w-4xl mx-auto p-6">
          <button
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors mb-4"
            onClick={() => navigate(-1)}
          >
            &larr; Back to Help Center
          </button>

          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Search Results for: <span className="text-purple-600">"{query}"</span>
          </h2>

          {filteredArticles.length > 0 ? (
            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between bg-white p-5 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                  onClick={() => navigate(`/articles/${article.category || 'general'}/${article.id}`)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{article.updated}</p>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
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
