import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { PlanYourJourney } from './pages/PlanYourJourney';
import { ExperienceDetail } from './pages/ExperienceDetail';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import './styles/globals.css';

type Page = 'home' | 'plan' | 'experiences' | 'about' | 'privacy';

interface PageState {
  current: Page;
  experienceSlug?: string;
}

function App() {
  const [pageState, setPageState] = useState<PageState>({ current: 'home' });

  const handleNavigate = (page: Page, data?: Record<string, string>) => {
    setPageState({
      current: page,
      experienceSlug: data?.experience || pageState.experienceSlug,
    });
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (pageState.current) {
      case 'plan':
        return <PlanYourJourney onNavigate={handleNavigate} />;
      case 'experiences':
        return (
          <ExperienceDetail
            slug={pageState.experienceSlug}
            onNavigate={handleNavigate}
          />
        );
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'privacy':
        return <Privacy />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
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
            const path = href.slice(1) || 'home';
            const [page, ...params] = path.split('/');
            const slug = params.join('/');

            if (page === 'experiences' && slug) {
              handleNavigate('experiences', { experience: slug });
            } else {
              handleNavigate(page as Page);
            }
          }
        }
      }}
    >
      {renderPage()}
    </div>
  );
}

export default App;
