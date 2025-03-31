import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelpMain from './help/HelpMain';
import HelpArticles from './help/HelpArticles';
import HelpArticlesDetails from './help/HelpArticlesDetails';
import SearchResults from './help/SearchResults';
import { SearchProvider } from './help/SearchContext';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <SearchProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelpMain />} />
        <Route path="/articles/:categoryName" element={<HelpArticles />} />
        <Route path="/articles/:categoryName/:articleId" element={<HelpArticlesDetails setIsChatOpen={setIsChatOpen} />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
    </SearchProvider>

  );
};

export default App;
