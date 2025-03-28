import { useNavigate } from 'react-router-dom';
import HelpLayout from './HelpLayout';

const categories = [
  {
    title: 'What is Salestarget?',
    icon: '📂',
    articles: [
      { title: 'Overview of Salestarget', id: 1 },
      { title: 'How it works', id: 2 },
      { title: 'Key Features', id: 3 },
    ],
  },
  {
    title: 'Account Connection',
    icon: '🚀',
    articles: [
      { title: 'Setting up your account', id: 4 },
      { title: 'Navigating the dashboard', id: 5 },
      { title: 'First steps with campaigns', id: 6 },
    ],
  },
  {
    title: 'Creating Cold Campaigns',
    icon: '🛠️',
    articles: [
      { title: 'Understanding API connections', id: 7 },
      { title: 'Data processing pipelines', id: 8 },
      { title: 'Security best practices', id: 9 },
    ],
  },
  {
    title: 'What is LeadExplorer?',
    icon: '🔍',
    articles: [
      { title: 'What Lead explorer does in a cold email platform?', id: 10 },
      { title: 'What to ask when researching leads?', id: 11 },
      { title: 'What should we see in lead searching platform?', id: 12 },
    ],
  },
];

const HelpMain = () => {
  const navigate = useNavigate();

  // ✅ Fixing navigation format
  const handleNavigation = (categoryTitle: string) => {
    const formattedCategory = categoryTitle
      .toLowerCase()
      .trim()
      .replace(/\?/g, '') // Remove question marks
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-'); // Replace spaces with '-'
  
    navigate(`/articles/${encodeURIComponent(formattedCategory)}`);
  };
  

  return (
    <HelpLayout>
      {(searchQuery) => {
        const filteredCategories = categories.filter((category) =>
          category.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 gap-y-5">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((card, index) => (
                <div
                  key={index}
                  className="bg-transparent p-6 border border-gray-600 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  onClick={() => handleNavigation(card.title)} // ✅ Pass the correct title
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-[20px]">{card.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1">{card.title}</h3>
                      <p className="text-sm text-gray-500">{card.articles.length} articles</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center">No matching categories found.</p>
            )}
          </div>
        );
      }}
    </HelpLayout>
  );
};

export default HelpMain;
