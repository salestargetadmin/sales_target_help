import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Book,
  Compass,
  Star,
  Code,
  Database,
  Shield,
  ArrowLeft,
  LayoutDashboard,
  UserPlus,
  Flag
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
  {
    title: 'Cold Email Outreach',
    icon: '📧',
    articles: [
      { title: 'What is Cold Email Outreach?', id: 'ceo-1', icon: Book, color: '#34D399' },
      { title: 'How to Connect Your Email Account', id: 'ceo-2', icon: Shield, color: '#34D399' },
      { title: 'How to Set Up Email Warm-up', id: 'ceo-3', icon: Star, color: '#34D399' },
      { title: 'How to Create an Email Sequence', id: 'ceo-4', icon: Compass, color: '#34D399' },
      { title: 'How to Set Up Follow-up Automation', id: 'ceo-5', icon: Code, color: '#34D399' },
      { title: 'How to Use Personalization & Custom Variables', id: 'ceo-6', icon: Database, color: '#34D399' },
      { title: 'How to Set Up A/B Testing', id: 'ceo-7', icon: LayoutDashboard, color: '#34D399' },
      { title: 'How to Use Inbox Rotation', id: 'ceo-8', icon: UserPlus, color: '#34D399' },
      { title: 'How to Validate Emails', id: 'ceo-9', icon: Flag, color: '#34D399' },
      { title: 'How to Use AI Sequences', id: 'ceo-10', icon: Compass, color: '#34D399' },
      { title: 'How to Manage Unsubscribes', id: 'ceo-11', icon: Shield, color: '#34D399' },
      { title: 'How to Read Your Analytics & Reports', id: 'ceo-12', icon: Database, color: '#34D399' },
      { title: 'How to Use the AI Content Generator', id: 'ceo-13', icon: Code, color: '#34D399' },
      { title: 'How to Use the AI Spintax Generator', id: 'ceo-14', icon: Star, color: '#34D399' },
    ],
  },
  {
    title: 'LinkedIn Outreach',
    icon: '💼',
    articles: [
      { title: 'What is LinkedIn Outreach?', id: 'lio-1', icon: Book, color: '#818CF8' },
      { title: 'How to Connect Your LinkedIn Account', id: 'lio-2', icon: Shield, color: '#818CF8' },
      { title: 'LinkedIn Account Safety & Daily Limits', id: 'lio-3', icon: Flag, color: '#818CF8' },
      { title: 'How to Create a LinkedIn Campaign', id: 'lio-4', icon: LayoutDashboard, color: '#818CF8' },
      { title: 'How to Automate Connection Requests', id: 'lio-5', icon: UserPlus, color: '#818CF8' },
      { title: 'How to Set Up Message Sequences', id: 'lio-6', icon: Compass, color: '#818CF8' },
      { title: 'How to Send InMail Outreach', id: 'lio-7', icon: Code, color: '#818CF8' },
      { title: 'How to Automate Profile Visits', id: 'lio-8', icon: Compass, color: '#818CF8' },
      { title: 'How to Automate Follows & Post Engagement', id: 'lio-9', icon: Star, color: '#818CF8' },
      { title: 'How to Use Personalization & Custom Variables', id: 'lio-10', icon: Database, color: '#818CF8' },
      { title: 'How to Use AI Message Writing', id: 'lio-11', icon: Code, color: '#818CF8' },
      { title: 'How to Read Your Analytics & Reports', id: 'lio-12', icon: LayoutDashboard, color: '#818CF8' },
      { title: 'LinkedIn Sending Limits & Warmup Schedule', id: 'lio-13', icon: Shield, color: '#818CF8' },
    ],
  },
  {
    title: 'Co-pilot',
    icon: '🤖',
    articles: [
      { title: 'What is the SalesTarget.ai Co-pilot?', id: 'cp-0', icon: Book, color: '#F59E0B' },
      { title: 'Co-pilot: Create a Campaign', id: 'cp-1', icon: Compass, color: '#F59E0B' },
      { title: 'Co-pilot: Create a List', id: 'cp-3', icon: Database, color: '#F59E0B' },
      { title: 'Co-pilot: Get All Lists', id: 'cp-4', icon: Star, color: '#F59E0B' },
      { title: 'Co-pilot: Add Leads to a List', id: 'cp-5', icon: UserPlus, color: '#F59E0B' },
      { title: 'Co-pilot: Update Campaign Sequence', id: 'cp-6', icon: Code, color: '#F59E0B' },
      { title: 'Co-pilot: Get My Campaigns', id: 'cp-7', icon: LayoutDashboard, color: '#F59E0B' },
      { title: 'Co-pilot: Query Meetings', id: 'cp-8', icon: Compass, color: '#F59E0B' },
      { title: 'Co-pilot: Query Deals', id: 'cp-9', icon: Shield, color: '#F59E0B' },
      { title: 'Co-pilot: Query Tasks', id: 'cp-10', icon: Flag, color: '#F59E0B' },
      { title: 'Co-pilot: Add List to Campaign', id: 'cp-11', icon: Database, color: '#F59E0B' },
      { title: 'Co-pilot: Create, Update & Assign Tasks', id: 'cp-12', icon: UserPlus, color: '#F59E0B' },
      { title: 'Co-pilot: Weekly Analytics', id: 'cp-13', icon: LayoutDashboard, color: '#F59E0B' },
      { title: 'Co-pilot: Best Campaign', id: 'cp-14', icon: Star, color: '#F59E0B' },
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
