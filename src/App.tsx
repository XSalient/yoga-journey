import React, { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { PlanYourJourney } from './pages/PlanYourJourney';
import './styles/globals.css';

type Page = 'home' | 'plan' | 'experiences' | 'about' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'plan':
        return <PlanYourJourney />;
      case 'privacy':
        return (
          <>
            <div className="min-h-screen bg-white">
              <div className="container-max py-24">
                <h1 className="text-h1 font-serif font-semibold mb-8">Privacy Policy</h1>
                <p className="text-body mb-4">[PRIVACY POLICY CONTENT REQUIRED]</p>
              </div>
            </div>
          </>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A') {
          const href = target.getAttribute('href');
          if (href?.startsWith('/')) {
            e.preventDefault();
            const page = href.slice(1) || 'home';
            setCurrentPage(page as Page);
            window.scrollTo(0, 0);
          }
        }
      }}
    >
      {renderPage()}
    </div>
  );
}

export default App;
