
// Section types must be defined before usage
type SectionId = 'title' | 'features' | 'accounts' | 'msaccounts' | 'imap' | 'faq' | 'feedback' ; 
type SectionRefs = Partial<Record<SectionId, HTMLElement | null>>;

import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HelpLayout from './HelpLayout';
import mockArticles from '../utilities/constants';



// Add Intercom to window type
declare global {
  interface Window {
    Intercom: (command: string) => void;
  }
}

interface HelpArticleDetailProps {
  openChat?: unknown;
}

const HelpArticleDetail: React.FC<HelpArticleDetailProps> = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any>(null);
  const sectionsRef = useRef<SectionRefs>({});
  const listRef = useRef<HTMLUListElement | null>(null);
  const [activeSection, setActiveSection] = useState<SectionId>('title');
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  useEffect(() => {
    const selectedArticle = mockArticles.find((article) => article.id === articleId);
    setArticle(selectedArticle || null);
  }, [articleId]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection: SectionId = 'title';
      const scrollPosition = window.scrollY + 120;
      (Object.entries(sectionsRef.current) as [SectionId, HTMLElement | null][]).forEach(([key, ref]) => {
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
  {(_: unknown, setIsChatOpen: (open: boolean) => void) => (
        <div className="bg-white p-6 rounded-lg pt-0 pb-55 relative">
          <button className="flex items-center cursor-pointer gap-2 text-black mb-4" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" /> Back to Articles
          </button>
          {article ? (
            <div className="relative flex gap-6">
              {/* Main Content */}
              <div className="w-full md:w-3/4">
                <h1
                  className="text-3xl font-bold text-black"
                  ref={(el) => {
                    sectionsRef.current['title'] = el;
                  }}
                >
                  {article.title}
                </h1>
                <p className="text-gray-500 text-sm mt-1">{article.updated}</p>
                <p className="mt-4 text-gray-700">{article.content}</p>

                <h2
                  className="mt-6 text-xl text-black font-semibold"
                  ref={(el) => {
                    sectionsRef.current['features'] = el;
                  }}
                >
                  Features
                </h2>
                <div className="mt-4">
                  {(article.features as any[]).map((feature: any, index: number) => (
                    feature.isHeading ? (
                      <h2 key={index} className="text-lg font-semibold mb-4 mt-6 text-black">
                        {feature.title}
                      </h2>
                    ) : feature.isParagraph ? (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {feature.content}
                      </p>
                    ) : feature.isStep ? (
                      <h2 key={index} className="text-base font-bold mb-4 mt-8 text-black">
                        {feature.stepTitle}
                      </h2>
                    ) : feature.isTable ? (
                      <div key={index} className="mb-6 overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                          <thead>
                            <tr className="bg-gray-50">
                              {feature.headers.map((header: string, headerIndex: number) => (
                                <th 
                                  key={headerIndex} 
                                  className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {feature.rows.map((row: string[], rowIndex: number) => (
                              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                {row.map((cell: string, cellIndex: number) => (
                                  <td 
                                    key={cellIndex} 
                                    className="border border-gray-200 px-4 py-3 text-gray-700"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : feature.isImage ? (
                      <div key={index} className="mb-6">
                        <img 
                          src={feature.src} 
                          alt={feature.alt} 
                          className="w-full max-w-2xl rounded-lg shadow-md mx-auto block"
                        />
                        {feature.caption && (
                          <p className="text-sm text-gray-500 mt-2 text-center italic">
                            {feature.caption}
                          </p>
                        )}
                      </div>
                    ) : (
                      <ul key={index} className="list-disc pl-6 text-gray-700">
                        <li className="mt-2">
                          <strong>{feature.title}</strong>
                          {feature.image && (
                            <img src={feature.image} alt={feature.title} className="mt-2 mb-2 rounded-md w-full max-w-md" />
                          )}
                          <p className="text-gray-600">{feature.description}</p>
                        </li>
                      </ul>
                    )
                  ))}
                </div>


                {/* Related Sections */}
                {['accounts', 'msaccounts', 'imap', 'faq'].map((section) => (
  article[section] && (article[section] as any[]).length > 0 && (
    <div
      key={section}
      className="mt-6"
      ref={(el) => {
        sectionsRef.current[section as SectionId] = el;
      }}
    >
      <h2 className="text-xl text-black font-semibold">
        {section === 'msaccounts' ? 'Microsoft/O365 Accounts' : section.charAt(0).toUpperCase() + section.slice(1)}
      </h2>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        {(article[section] as any[]).map((item: any, index: number) => (
          <li key={index} className="mt-2">
            <strong>{item.title}</strong>
            {item.image && (
              <img src={item.image} alt={item.title} className="mt-2 mb-2 rounded-md w-full max-w-md" />
            )}
            <p className="text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
))}


                <div
                  className="mt-8 border-t pt-4"
                  ref={(el) => {
                    sectionsRef.current['feedback'] = el;
                  }}
                >
                  <p className="text-gray-600">Was this article helpful?</p>
                  <div className="mt-3 flex gap-4">
                    <button
                      className={`text-3xl hover:cursor-pointer transition-all ${
                        selectedEmoji === 'happy'
                          ? 'opacity-100 scale-125'
                          : selectedEmoji
                          ? 'opacity-50 hover:opacity-75 hover:scale-125'
                          : 'opacity-100 hover:scale-125'
                      }`}
                      onClick={() => {
                        setSelectedEmoji('happy');
                        setIsChatOpen(true);
                        window.Intercom && window.Intercom('show');
                      }}
                    >
                      😃
                    </button>
                    
                    <button
                      className={`text-3xl hover:cursor-pointer transition-all ${
                        selectedEmoji === 'neutral'
                          ? 'opacity-100 scale-125'
                          : selectedEmoji
                          ? 'opacity-50 hover:opacity-75 hover:scale-125'
                          : 'opacity-100 hover:scale-125'
                      }`}
                      onClick={() => {
                        setSelectedEmoji('neutral');
                        setIsChatOpen(true);
                        window.Intercom && window.Intercom('show');
                      }}
                    >
                      😐
                    </button>
                    <button
                      className={`text-3xl hover:cursor-pointer transition-all ${
                        selectedEmoji === 'sad'
                          ? 'opacity-100 scale-125'
                          : selectedEmoji
                          ? 'opacity-50 hover:opacity-75 hover:scale-125'
                          : 'opacity-100 hover:scale-125'
                      }`}
                      onClick={() => {
                        setSelectedEmoji('sad');
                        setIsChatOpen(true);
                        window.Intercom && window.Intercom('show');
                      }}
                    >
                      😞
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar Table of Contents */}
              <div className="w-1/4 relative hidden md:block">
                <div className="sticky top-20">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-300"></div>
                  <h3 className="text-lg font-semibold text-black ml-4">On this page</h3>
                  <ul className="mt-4 space-y-2 ml-4" ref={listRef}>
                    {(() => {
                      if (!article) return null;
                      const tocSections = [
                        { id: 'title', label: 'Introduction' },
                        { id: 'features', label: 'Features' },
                        ...(['accounts', 'msaccounts', 'imap', 'faq'] as SectionId[])
                          .filter((section) => Array.isArray(article[section]) && (article[section] as any[]).length > 0)
                          .map((id) => ({
                            id,
                            label: id === 'msaccounts' ? 'Microsoft/O365 Accounts' : id.charAt(0).toUpperCase() + id.slice(1)
                          })),
                        { id: 'feedback', label: 'Feedback' }
                      ];
                      return tocSections.map(({ id, label }) => (
                        <li key={id}>
                          <button
                            className={`block w-full text-left py-1 pl-4 transition-all cursor-pointer ${
                              activeSection === id ? 'text-black font-semibold' : 'text-gray-700'
                            }`}
                            onClick={() => {
                              (sectionsRef.current[id as SectionId] as HTMLElement | null)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              setActiveSection(id as SectionId);
                            }}
                          >
                            {label}
                          </button>
                        </li>
                      ));
                    })()}
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