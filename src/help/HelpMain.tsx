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
    icon: '📂',
    articles: [
      { title: 'Setting up your account', id: 4 },
      { title: 'Navigating the dashboard', id: 5 },
      { title: 'First steps with campaigns', id: 6 },
    ],
  },
  {
    title: 'Creating Cold Campaigns',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 7 },
      { title: 'Data processing pipelines', id: 8 },
      { title: 'Security best practices', id: 9 },
    ],
  },
  {
    title: 'What is Lead Explorer?',
    icon: '📂',
    articles: [
      { title: 'What Lead explorer does in a cold email platform?', id: 10 },
      { title: 'What to ask when researching leads?', id: 11 },
      { title: 'What should we see in lead searching platform?', id: 12 },
    ],
  },
  {
    title: 'Setup',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 13 },
      { title: 'Data processing pipelines', id: 14 },
      { title: 'Security best practices', id: 15 },
    ],
  },
  {
    title: "Account 'Warm-Up' and how it works",
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 21 },
      { title: 'Data processing pipelines', id: 22 },
      { title: 'Security best practices', id: 23 },
    ],
  },
  {
    title: 'Best Practices',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 19 },
      { title: 'Data processing pipelines', id: 20 },
      { title: 'Security best practices', id: 21 },
    ],
  },
  {
    title: 'Troubleshooting',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 22 },
      { title: 'Data processing pipelines', id: 23 },
      { title: 'Security best practices', id: 24 },
    ],
  },
  {
    title: 'Integrations',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 25 },
      { title: 'Data processing pipelines', id: 26 },
      { title: 'Security best practices', id: 27 },
    ],
  },
  {
    title: 'Leads and Data',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 28 },
      { title: 'Data processing pipelines', id: 29 },
      { title: 'Security best practices', id: 30 },
    ],
  },
  {
    title: 'Unibox',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 31 },
      { title: 'Data processing pipelines', id: 32 },
      { title: 'Security best practices', id: 33 },
    ],
  },
  {
    title: 'Account and Billing',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 34 },
      { title: 'Data processing pipelines', id: 35 },
      { title: 'Security best practices', id: 36 },
    ],
  },
  {
    title: 'Salestarget Privacy Center',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 37 },
      { title: 'Data processing pipelines', id: 38 },
      { title: 'Security best practices', id: 39 },
    ],
  },
  {
    title: 'CRM',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 40 },
      { title: 'Data processing pipelines', id: 41 },
      { title: 'Security best practices', id: 42 },
    ],
  },
  {
    title: 'Website Visitors',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 43 },
      { title: 'Data processing pipelines', id: 44 },
      { title: 'Security best practices', id: 45 },
    ],
  },
  {
    title: 'Deliverability',
    icon: '📂',
    articles: [
      { title: 'Understanding API connections', id: 46 },
      { title: 'Data processing pipelines', id: 47 },
      { title: 'Security best practices', id: 48 },
    ],
  },
  {
    title: 'Calculate Your Costs',
    icon: '📂',
    articles: [
      { title: 'Monthly email volume', id: 49 },
      { title: 'Required email accounts', id: 50 },
      { title: 'Required domains', id: 51 },
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
