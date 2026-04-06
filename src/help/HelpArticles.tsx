import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Book,
  Compass,
  Star,
  Code,
  Database,
  Shield,
  ArrowLeft
} from 'lucide-react'; // Import icons
import HelpLayout from './HelpLayout';

const categories = [
  {
    title: 'Lead Explorer',
    icon: '🔍',
    articles: [
      { title: 'What is Lead Explorer?', id: 'le-1', icon: Book, color: '#60A5FA' },
      { title: 'How to Search for People in Lead Explorer', id: 'le-2', icon: Compass, color: '#60A5FA' },
      { title: 'How to Search for Companies in Lead Explorer', id: 'le-3', icon: Compass, color: '#60A5FA' },
      { title: 'How to Enrich a Lead Profile in Lead Explorer', id: 'le-4', icon: Database, color: '#60A5FA' },
      { title: 'How to Save Leads to a List in Lead Explorer', id: 'le-5', icon: Star, color: '#60A5FA' },
      { title: 'How to Export Leads from Lead Explorer', id: 'le-6', icon: Code, color: '#60A5FA' },
      { title: 'How to Send Leads to Other SalesTarget.ai Tools', id: 'le-7', icon: Shield, color: '#60A5FA' },
      { title: 'Enrichments & Credits — Complete Guide', id: 'le-8', icon: Star, color: '#60A5FA' },
      { title: 'What is Contact Enrichment?', id: 'le-9', icon: Database, color: '#60A5FA' },
    ],
  },
];



import { useSearch } from './SearchContext';
const HelpArticles = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { searchQuery } = useSearch(); // Get global search state

  const decodedCategory = decodeURIComponent(categoryName || '')
    .toLowerCase()
    .trim()
    .replace(/\?/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  const category = categories.find(
    (cat) =>
      cat.title
        .toLowerCase()
        .trim()
        .replace(/\?/g, '')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-') === decodedCategory
  );

  const handleArticleClick = (articleId: string) => {
    navigate(`/articles/${categoryName}/${articleId}`);
  };

  return (
    <div className="w-full mx-auto">
      <HelpLayout>
        {() => { // No need to pass searchQuery explicitly, it's now global
          if (!category) {
            return <p className="text-gray-400 text-center">Category not found.</p>;
          }

          const filteredArticles = category.articles.filter((article) =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
          );

          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              <button className="flex items-center cursor-pointer gap-2 text-black mb-2" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-5 h-5" /> Back to Main
              </button>
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => {
                  const IconComponent = article.icon;
                  return (
                    <div
                      key={article.id}
                      className="flex items-center justify-between bg-transparent p-5 py-7 mb-3 border border-gray-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] cursor-pointer"
                      onClick={() => handleArticleClick(article.id)}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-6 h-6" style={{ color: article.color, display: "none" }} />
                        <h3 className="text-md font-semibold text-black">{article.title}</h3>
                      </div>
                      <ChevronRight className="text-gray-400" />
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-400 text-center">No matching articles found.</p>
              )}
            </div>
          );
        }}
      </HelpLayout>
    </div>
  );
};

export default HelpArticles;
