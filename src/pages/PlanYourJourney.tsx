import React, { useEffect } from 'react';
import { Header, Footer } from '@/components/Layout';
import { EnquiryForm } from '@/components/EnquiryForm';
import { setSEOMeta } from '@/lib/seo';

interface PlanYourJourneyProps {
  onNavigate?: (page: string, data?: Record<string, string>) => void;
}

export const PlanYourJourney: React.FC<PlanYourJourneyProps> = ({ onNavigate }) => {
  useEffect(() => {
    setSEOMeta({
      title: 'Plan Your Journey | Journey Within',
      description: 'Share your travel interests with our specialists. Plan your perfect yoga, wellness, or cultural journey with expert guidance and personalized recommendations.',
      keywords: 'journey planning, travel consultation, wellness travel, yoga retreats, cultural tours',
    });
  }, []);

  return (
  <>
    <Header />

    <section className="bg-bg-secondary py-16">
      <div className="container-max text-center">
        <h1 className="text-h1 font-serif font-semibold mb-4">Plan Your Journey</h1>
        <p className="text-body text-text-muted max-w-2xl mx-auto">
          Share what you're looking for. A Journey Within specialist will review your interests and contact you to discuss the next step.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container-max">
        <EnquiryForm />
      </div>
    </section>

    <Footer />
  </>
  );
};
