import { useNavigate } from 'react-router-dom';
import HelpLayout from './HelpLayout';

const categories = [
  {
    title: 'Lead Explorer',
    icon: '🔍',
    articles: [
      { title: 'What is Lead Explorer?', id: 'le-1' },
      { title: 'How to Search for People in Lead Explorer', id: 'le-2' },
      { title: 'How to Search for Companies in Lead Explorer', id: 'le-3' },
      { title: 'How to Enrich a Lead Profile in Lead Explorer', id: 'le-4' },
      { title: 'How to Save Leads to a List in Lead Explorer', id: 'le-5' },
      { title: 'How to Export Leads from Lead Explorer', id: 'le-6' },
      { title: 'How to Send Leads to Other SalesTarget.ai Tools', id: 'le-7' },
      { title: 'Enrichments & Credits — Complete Guide', id: 'le-8' },
      { title: 'What is Contact Enrichment?', id: 'le-9' },
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
      {(searchQuery: string) => {
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
