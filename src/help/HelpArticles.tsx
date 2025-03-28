import { useParams, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Book, 
  Compass, 
  Star, 
  UserPlus, 
  LayoutDashboard, 
  Flag, 
  Code, 
  Database, 
  Shield,
  ArrowLeft
} from 'lucide-react'; // Import icons
import HelpLayout from './HelpLayout';

const categories = [
  {
    title: 'What is Salestarget?',
    icon: '📂',
    articles: [
      { title: 'What is Salestarget', id: 1, icon: Book, color: '#60A5FA' }, // Blue
      { title: 'Quick Start Guide', id: 2, icon: Compass, color: '#60A5FA' }, // Blue
      { title: 'Rotating IP\'s and sending algorithms in the cold email space = high deliverability', id: 3, icon: Star, color: '#60A5FA' }, // Blue
    ],
  },
  {
    title: 'Account Connection',
    icon: '🚀',
    articles: [
      { title: 'Setting up your account', id: 4, icon: UserPlus, color: '#34D399' }, // Green
      { title: 'Navigating the dashboard', id: 5, icon: LayoutDashboard, color: '#34D399' }, // Green
      { title: 'First steps with campaigns', id: 6, icon: Flag, color: '#34D399' }, // Green
    ],
  },
  {
    title: 'Creating Cold Campaigns',
    icon: '🛠️',
    articles: [
      { title: 'Understanding API connections', id: 7, icon: Code, color: '#FBBF24' }, // Orange
      { title: 'Data processing pipelines', id: 8, icon: Database, color: '#FBBF24' }, // Orange
      { title: 'Security best practices', id: 9, icon: Shield, color: '#FBBF24' }, // Orange
    ],
  },
  {
    title: 'What is LeadExplorer?',
    icon: '🔍',
    articles: [
      { title: 'What Lead explorer does in a cold email platform?', id: 10, icon: Code, color: '#FF00FF' }, // Orange
      { title: 'What to ask when researching leads?', id: 11, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'What should we see in lead searching platform?', id: 12, icon: Shield, color: '#FF00FF' }, // Orange
    ],
  },
];

const HelpArticles = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

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

  const handleArticleClick = (articleId: number) => {
    navigate(`/articles/${categoryName}/${articleId}`);
  };

  return (
    <div className="w-full mx-auto  ">
      <HelpLayout>
        {(searchQuery) => {
          if (!category) {
            return <p className="text-gray-400 text-center">Category not found.</p>;
          }

          const filteredArticles = category.articles.filter((article) =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
          );

          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
               <button className="flex items-center gap-2 text-black mb-2 " onClick={() => navigate(-1)}>
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
                        <IconComponent className="w-6 h-6" style={{ color: article.color }} /> {/* Colorful Icons */}
                        <h3 className="text-lg font-semibold text-black">{article.title}</h3>
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
