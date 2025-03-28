// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const HelpArticleDetail = ({ openChat }: { openChat: () => void }) => {
//   const { articleId } = useParams();
//   const navigate = useNavigate();
//   const [article, setArticle] = useState<any>(null);

//   useEffect(() => {
//     // Mock article data (Replace this with actual API call)
//     const mockArticles = [
//       {
//         id: '1', // Unique ID for routing
//         title: 'What is SalesTarget?',
//         updated: 'Updated over 8 months ago',
//         content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
//                   It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
//         features: [
//           {
//             title: 'Unlimited Email Accounts',
//             description: 'You may connect as many email accounts as you need.'
//           },
//           {
//             title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
//             description: 'An outstanding feature that will save you countless hours on your campaign setup.'
//           },
//           {
//             title: 'Unlimited Warmup',
//             description: 'With the largest warmup pool on the market, Instantly ensures your emails never land in spam.'
//           }
//         ]
//       },
//       {
//         id: '2', // Unique ID for routing
//         title: 'Quick Start Guide?',
//         updated: 'Updated over 8 months ago',
//         content: `salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
//                   It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
//         features: [
//           {
//             title: 'Unlimited Email Accounts',
//             description: 'You may connect as many email accounts as you need.'
//           },
//           {
//             title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
//             description: 'An outstanding feature that will save you countless hours on your campaign setup.'
//           },
//           {
//             title: 'Unlimited Warmup',
//             description: 'With the largest warmup pool on the market, Instantly ensures your emails never land in spam.'
//           }
//         ]
//       },
//       {
//         id: '3', // Unique ID for routing
//         title: 'Backend Infrastructure?',
//         updated: 'Updated over 8 months ago',
//         content: `Infrastructure is a cold email software that offers various features tailored to enhance outreach campaigns. 
//                   It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
//         features: [
//           {
//             title: 'Unlimited Email Accounts',
//             description: 'You may connect as many email accounts as you need.'
//           },
//           {
//             title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
//             description: 'An outstanding feature that will save you countless hours on your campaign setup.'
//           },
//           {
//             title: 'Unlimited Warmup',
//             description: 'With the largest warmup pool on the market, Instantly ensures your emails never land in spam.'
//           }
//         ]
//       },
//       {
//         id: '4', // Unique ID for routing
//         title: 'Quick Start Guide?',
//         updated: 'Updated over 8 months ago',
//         content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
//                   It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
//         features: [
//           {
//             title: 'Unlimited Email Accounts',
//             description: 'You may connect as many email accounts as you need.'
//           },
//           {
//             title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
//             description: 'An outstanding feature that will save you countless hours on your campaign setup.'
//           },
//           {
//             title: 'Unlimited Warmup',
//             description: 'With the largest warmup pool on the market, Instantly ensures your emails never land in spam.'
//           }
//         ]
//       },
//       {
//         id: '5', // Unique ID for routing
//         title: 'Quick Start Guide?',
//         updated: 'Updated over 8 months ago',
//         content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
//                   It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
//         features: [
//           {
//             title: 'Unlimited Email Accounts',
//             description: 'You may connect as many email accounts as you need.'
//           },
//           {
//             title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
//             description: 'An outstanding feature that will save you countless hours on your campaign setup.'
//           },
//           {
//             title: 'Unlimited Warmup',
//             description: 'With the largest warmup pool on the market, Instantly ensures your emails never land in spam.'
//           }
//         ]
//       },
//       {
//         id: '6', // Unique ID for routing
//         title: 'Quick Start Guide?',
//         updated: 'Updated over 8 months ago',
//         content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
//                   It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
//         features: [
//           {
//             title: 'Unlimited Email Accounts',
//             description: 'You may connect as many email accounts as you need.'
//           },
//           {
//             title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
//             description: 'An outstanding feature that will save you countless hours on your campaign setup.'
//           },
//           {
//             title: 'Unlimited Warmup',
//             description: 'With the largest warmup pool on the market, Instantly ensures your emails never land in spam.'
//           }
//         ]
//       },
//       {
//         id: '7', // Unique ID for routing
//         title: 'Quick Start Guide?',
//         updated: 'Updated over 8 months ago',
//         content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
//                   It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
//         features: [
//           {
//             title: 'Unlimited Email Accounts',
//             description: 'You may connect as many email accounts as you need.'
//           },
//           {
//             title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
//             description: 'An outstanding feature that will save you countless hours on your campaign setup.'
//           },
//           {
//             title: 'Unlimited Warmup',
//             description: 'With the largest warmup pool on the market, Instantly ensures your emails never land in spam.'
//           }
//         ]
//       },
//       {
//         id: '8', // Unique ID for routing
//         title: 'Quick Start Guide?',
//         updated: 'Updated over 8 months ago',
//         content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
//                   It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
//         features: [
//           {
//             title: 'Unlimited Email Accounts',
//             description: 'You may connect as many email accounts as you need.'
//           },
//           {
//             title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
//             description: 'An outstanding feature that will save you countless hours on your campaign setup.'
//           },
//           {
//             title: 'Unlimited Warmup',
//             description: 'With the largest warmup pool on the market, Instantly ensures your emails never land in spam.'
//           }
//         ]
//       },
//       {
//         id: '9', // Unique ID for routing
//         title: 'Quick Start Guide?',
//         updated: 'Updated over 8 months ago',
//         content: `Salestarget is a cold email software that offers various features tailored to enhance outreach campaigns. 
//                   It helps to generate more meetings and revenue by scaling your outreach campaigns with unlimited email-sending accounts and warmup, B2B Lead Database, and AI.`,
//         features: [
//           {
//             title: 'Unlimited Email Accounts',
//             description: 'You may connect as many email accounts as you need.'
//           },
//           {
//             title: 'Done-For-You Automatic Email Accounts/ Domains Setup',
//             description: 'An outstanding feature that will save you countless hours on your campaign setup.'
//           },
//           {
//             title: 'Unlimited Warmup',
//             description: 'With the largest warmup pool on the market, Instantly ensures your emails never land in spam.'
//           }
//         ]
//       },
//     ];

//     // Find the article that matches the articleId
//     const selectedArticle = mockArticles.find(article => article.id === articleId);

//     setArticle(selectedArticle || null);
//   }, [articleId]);

//   const handleFeedback = (emoji: string) => {
//     if (emoji === '😞' || emoji === '😠') {
//       openChat();
//     }
//   };

//   return (
    
//     <div className="max-w-3xl mx-auto p-6 bg-buttonTextColor mt-[50px] rounded-lg shadow-md">
//       <button className="flex items-center gap-2 text-gray-500 hover:text-black" onClick={() => navigate(-1)}>
//         <ArrowLeft className="w-5 h-5" /> Back to Articles
//       </button>

//       {article ? (
//         <div className="mt-6">
//           <h1 className="text-3xl font-bold text-black">{article.title}</h1>
//           <p className="text-gray-500 text-sm mt-1">{article.updated}</p>
//           <p className="mt-4 text-gray-700">{article.content}</p>

//           <h2 className="mt-6 text-xl font-semibold">Here are some of our features:</h2>
//           <ul className="mt-4 list-disc pl-6 text-gray-700">
//             {article.features.map((feature, index) => (
//               <li key={index} className="mt-2">
//                 <strong>{feature.title}</strong>
//                 <p className="text-gray-600">{feature.description}</p>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-8 border-t pt-4">
//             <p className="text-gray-600">Was this article helpful?</p>
//             <div className="mt-3 flex gap-4">
//               <button className="text-3xl hover:scale-125 transition-all" onClick={() => handleFeedback('😊')}>😊</button>
//               <button className="text-3xl hover:scale-125 transition-all" onClick={() => handleFeedback('😞')}>😞</button>
//               <button className="text-3xl hover:scale-125 transition-all" onClick={() => handleFeedback('😠')}>😠</button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-center mt-6">Article not found</p>
//       )}
//     </div>
//   );
// };

// export default HelpArticleDetail;
import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HelpLayout from './HelpLayout';
import mockArticles from '../utilities/constants';

const HelpArticleDetail = ({ openChat }: { openChat: () => void }) => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any>(null);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const listRef = useRef(null);
  const [activeSection, setActiveSection] = useState('title');

  useEffect(() => {
    const selectedArticle = mockArticles.find((article) => article.id === articleId);
    setArticle(selectedArticle || null);
  }, [articleId]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'title';
      const scrollPosition = window.scrollY + 120; // Adjust based on header height

      Object.entries(sectionsRef.current).forEach(([key, ref]) => {
        if (ref) {
          const offsetTop = ref.offsetTop;
          if (offsetTop <= scrollPosition) {
            currentSection = key;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HelpLayout>
      {(_, setIsChatOpen) => (
        <div className="bg-white p-6 rounded-lg pt-0 pb-55 relative">
          <button className="flex items-center gap-2 text-black mb-4" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" /> Back to Articles
          </button>
          {article ? (
            <div className="relative flex gap-6">
              {/* Main Content */}
              <div className="w-full md:w-3/4">
                <h1 className="text-3xl font-bold text-black" ref={(el) => (sectionsRef.current['title'] = el)}>
                  {article.title}
                </h1>
                <p className="text-gray-500 text-sm mt-1">{article.updated}</p>
                <p className="mt-4 text-gray-700">{article.content}</p>

                <h2 className="mt-6 text-xl text-black font-semibold" ref={(el) => (sectionsRef.current['features'] = el)}>
                  Features
                </h2>
                <ul className="mt-4 list-disc pl-6 text-gray-700">
                  {article.features.map((feature, index) => (
                    <li key={index} className="mt-2">
                      <strong>{feature.title}</strong>
                      <p className="text-gray-600">{feature.description}</p>
                    </li>
                  ))}
                </ul>

                {/* Related Sections */}
                {['accounts', 'msaccounts', 'imap', 'faq'].map((section) => (
                  article[section] && article[section].length > 0 && (
                    <div key={section} className="mt-6" ref={(el) => (sectionsRef.current[section] = el)}>
                      <h2 className="text-xl text-black font-semibold">
                        {section === 'msaccounts' ? 'Microsoft/O365 Accounts' : section.charAt(0).toUpperCase() + section.slice(1)}
                      </h2>
                      <ul className="mt-4 list-disc pl-6 text-gray-700">
                        {article[section].map((item, index) => (
                          <li key={index} className="mt-2">
                            <strong>{item.title}</strong>
                            <p className="text-gray-600">{item.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                ))}

                <div className="mt-8 border-t pt-4" ref={(el) => (sectionsRef.current['feedback'] = el)}>
                  <p className="text-gray-600">Was this article helpful?</p>
                  <div className="mt-3 flex gap-4">
                    <button className="text-3xl hover:scale-125 transition-all" onClick={() => setIsChatOpen(false)}>😊</button>
                    <button className="text-3xl hover:scale-125 transition-all" onClick={() => setIsChatOpen(true)}>😞</button>
                    <button className="text-3xl hover:scale-125 transition-all" onClick={() => setIsChatOpen(true)}>😠</button>
                  </div>
                </div>
              </div>

              {/* Sidebar Table of Contents */}
              <div className="w-1/4 relative hidden md:block">
                <div className="sticky top-20">
                  {/* Vertical Line Before Sidebar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-300"></div>

                  <h3 className="text-lg font-semibold text-black ml-4">On this page</h3>
                  <ul className="mt-4 space-y-2 ml-4" ref={listRef}>
  {['title', 'features', 'accounts', 'msaccounts', 'imap', 'faq', 'feedback'].map((id) => (
    <li key={id}>
      <button
        className={`block w-full text-left py-1 pl-4 transition-all ${
          activeSection === id ? 'text-black font-semibold' : 'text-gray-700'
        }`}
        onClick={() => {
          sectionsRef.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(id); // Update active section
        }}
      >
        {id === 'title' ? 'Introduction' : id.charAt(0).toUpperCase() + id.slice(1)}
      </button>
    </li>
  ))}
</ul>

                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-6">Article not found</p>
          )}
        </div>
      )}
    </HelpLayout>
  );
};

export default HelpArticleDetail;
