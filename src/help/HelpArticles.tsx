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
    title: 'What is Lead Explorer?',
    icon: '🔍',
    articles: [
      { title: 'What Lead explorer does in a cold email platform?', id: 10, icon: Code, color: '#FF00FF' }, // Orange
      { title: 'What to ask when researching leads?', id: 11, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'What should we see in lead searching platform?', id: 12, icon: Shield, color: '#FF00FF' }, // Orange
    ],
  },
  {
    title: 'Setup',
    icon: '🔍',
    articles: [
      { title: 'Transferring domains from one email provider to another', id: 13, icon: Code, color: '#FF00FF' }, // Orange
      { title: 'Setting up Reply-to email address', id: 14, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'Checklist before campaign launch', id: 15, icon: Shield, color: '#FF00FF' }, // Orange
      { title: 'Create a separate workspace and invite team members', id: 16, icon: Shield, color: '#FF00FF' }, // Orange
      { title: 'Email Service Providers Matching', id: 17, icon: Shield, color: '#FF00FF' }, // Orange
      { title: 'Why do I need DNS records?', id: 18, icon: Shield, color: '#FF00FF' }, // Orange
      { title: 'How to set up SPF and DKIM for cPanel email accounts', id: 19, icon: Shield, color: '#FF00FF' }, // Orange
      { title: 'Ways to add a signature', id: 20, icon: Shield, color: '#FF00FF' }, // Orange
    ],
  },
  {
    title: 'Account \'Warm-Up\' and how it works',
    icon: '🔍',
    articles: [
      { title: 'How Warm-Up Works and Why it\'s Important 🤓', id: 21, icon: Code, color: '#FF00FF' }, // Orange
      { title: 'What is "read emulation" in Warmup', id: 22, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'Warmup filters - Google and Microsoft🚦', id: 23, icon: Shield, color: '#FF00FF' }, // Orange
     
    ],
  },
  {
    title: 'Best Practices',
    icon: '🔍',
    articles: [
      { title: 'How do I make sure my emails will get delivered? 📦', id: 24, icon: Code, color: '#FF00FF' }, // Orange
      { title: "Scale Your Cold Email Campaigns With Secondary Sending Domains - The Strategy & How To Implement It", id: 25, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'Cold Email Copywriting Framework We Use To Get 400+ Replies Monthly', id: 26, icon: Shield, color: '#FF00FF' }, // Orange
     
    ],
  },
  {
    title: 'Troubleshooting',
    icon: '🔍',
    articles: [
      { title: 'What to do if your \'Open Rate\' is low📉', id: 27, icon: Code, color: '#FF00FF' }, // Orange
      { title: "Why do emails bounce?", id: 28, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'Why am I getting 100% open rate?💯', id: 29, icon: Shield, color: '#FF00FF' }, // Orange
     
    ],
  },
  {
    title: 'Integrations',
    icon: '🔍',
    articles: [
      { title: 'CRM Import', id: 30, icon: Code, color: '#FF00FF' }, // Orange
      { title: "Slack integration", id: 31, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'How to use Webhooks? 🕸🪝', id: 32, icon: Shield, color: '#FF00FF' }, // Orange
     
    ],
  },
  {
    title: 'Leads and Data',
    icon: '🔍',
    articles: [
      { title: 'How To Create High-ROI Cold Email Campaigns by Scraping B2B Emails from Twitter (incl. Template)', id: 33, icon: Code, color: '#FF00FF' }, // Orange
      { title: "How to use Builtwith for lead mining", id: 34, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'How to use Launch Gravity to extract leads', id: 35, icon: Shield, color: '#FF00FF' }, // Orange
     
    ],
  },
  {
    title: 'Unibox',
    icon: '🔍',
    articles: [
      { title: 'How to manage the Unibox & Best Practices on how to reply to leads', id: 36, icon: Code, color: '#FF00FF' }, // Orange
      { title: "Schedule a reply", id: 37, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'How to remove a lead from campaigns', id: 38, icon: Shield, color: '#FF00FF' }, // Orange
     
    ],
  },
  {
    title: 'Account and Billing',
    icon: '🔍',
    articles: [
      { title: 'Email Outreach plans comparison', id: 39, icon: Code, color: '#FF00FF' }, // Orange
      { title: "Lead Finder plans comparison", id: 40, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'Add-on pricing', id: 41, icon: Shield, color: '#FF00FF' }, // Orange
     
    ],
  },
  {
    title: 'Salestarget Privacy Center',
    icon: '🔍',
    articles: [
      { title: 'Request access to collected data', id: 42, icon: Code, color: '#FF00FF' }, // Orange
      { title: "Opt out of salestarget - object to our processing, opt out of sales, and request deletion of your profile", id: 43, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'Salestarget Sub-processors', id: 44, icon: Shield, color: '#FF00FF' }, // Orange
     
    ],
  },
  {
    title: 'CRM',
    icon: '🔍',
    articles: [
      { title: 'Salestarget CRM', id: 45, icon: Code, color: '#FF00FF' }, // Orange
      { title: "CRM Features", id: 46, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'How to purchase phone numbers', id: 47, icon: Shield, color: '#FF00FF' }, // Orange
     
    ],
  },
  {
    title: 'Website Visitors',
    icon: '🔍',
    articles: [
      { title: 'How to add the Website Visitors script to Webflow?', id: 48, icon: Code, color: '#FF00FF' }, // Orange
      { title: "Getting started with the Website Visitors feature", id: 49, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'How do I add the Website Visitors Pixel to my website?', id: 50, icon: Shield, color: '#FF00FF' }, // Orange
     
    ],
  },
  {
    title: 'Deliverability',
    icon: '🔍',
    articles: [
      { title: 'Inbox Placement feature', id: 51, icon: Code, color: '#FF00FF' }, // Orange
      { title: "Inbox Placement: one-time tests", id: 52, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'Inbox Placement - automated tests', id: 53, icon: Shield, color: '#FF00FF' }, // Orange
     
    ],
  },
  {
    title: 'Calculate your costs',
    icon: '🔍',
    articles: [
      { title: 'Total Monthly Costs', id: 57, icon: Shield, color: '#FF00FF' }, // Orange
      
      { title: "Required email accounts", id: 55, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'Required domains', id: 56, icon: Shield, color: '#FF00FF' }, // Orange
      { title: 'Monthly email volume', id: 54, icon: Code, color: '#FF00FF' }, // Orange
      
     
    ],
  },
  {
    title: 'Best Practices for Warming Your Domain and Email Accounts',
    icon: '🔍',
    articles: [
      { title: 'Importantance of warming up domain and email accounts', id: 58, icon: Shield, color: '#FF00FF' }, // Orange
      
      { title: "Limits for domain and email accounts on SalesTarget.ai?", id: 59, icon: Database, color: '#FF00FF' }, // Orange
      { title: 'Warm-up plan for SalesTarget.ai users?', id: 60, icon: Shield, color: '#FF00FF' }, // Orange
      { title: 'Tips for a successful warm-up', id: 61, icon: Code, color: '#FF00FF' }, // Orange
      
     
    ],
  },
  {
    title: 'How to Set Up Your Email Account on SalesTarget.ai',
    icon: '🔍',
    articles: [
      { title: 'How to Set Up Your Email Account on SalesTarget.ai', id: 62, icon: Shield, color: '#FF00FF' }, // Orange
      
      // { title: "How do I add a new email account on SalesTarget.ai?", id: 63, icon: Database, color: '#FF00FF' }, // Orange
      // { title: 'What are the four options for setting up an email account on SalesTarget.ai?', id: 64, icon: Shield, color: '#FF00FF' }, // Orange
      // { title: 'How to handle DNS propagation and account setup delay?', id: 65, icon: Code, color: '#FF00FF' }, // Orange
      
     
    ],
  },
  {
    title: 'Meet copilot - The Free AI Sales Assistant in SalesTarget.ai',
    icon: '🔍',
    articles: [
      { title: 'Meet Copilot - The Free AI Sales Assistant in SalesTarget.ai', id: 67, icon: Shield, color: '#FF00FF' }, // Orange
        
    ],
  },

  {
    title: 'Try SalesTarget.ai Free — Do Real Sales Work in 7 Days',
    icon: '🔍',
    articles: [
      { title: 'Try SalesTarget.ai Free — Do Real Sales Work in 7 Days', id: 68, icon: Shield, color: '#FF00FF' }, // Orange
        
    ],
  },

  {
    title: 'The Ultimate Cold Email Warm-Up Plan to Build a Strong Sender Reputation',
    icon: '🔍',
    articles: [
      { title: 'The Ultimate Cold Email Warm-Up Plan to Build a Strong Sender Reputation', id: 69, icon: Shield, color: '#FF00FF' }, // Orange
        
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

  const handleArticleClick = (articleId: number) => {
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
