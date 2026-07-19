import React, { useEffect } from 'react';
import { Header, Footer } from '@/components/Layout';
import { Button } from '@/components/Button';
import { ExperienceCard, ServiceModeCard, BenefitCard, TestimonialCard } from '@/components/Cards';
import { experiences } from '@/data/experiences';
import { benefits, processSteps, testimonials, travelModes, trustIndicators } from '@/data';
import { setSEOMeta } from '@/lib/seo';

interface HomePageProps {
  onNavigate?: (page: string, data?: Record<string, string>) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  useEffect(() => {
    setSEOMeta({
      title: 'Journey Within | Bespoke Yoga, Wellness & Adventure Travel',
      description: 'Journey Within — Curated yoga, wellness, cultural, and adventure journeys for transformation. 25+ years of crafting extraordinary travel experiences.',
      keywords: 'yoga retreats, wellness travel, adventure journeys, travel packages, spiritual retreat, yoga holidays',
    });
  }, []);

  return (
  <>
    <Header />

    {/* Hero Section */}
    <section className="relative bg-gradient-to-b from-forest-500 to-forest-600 text-white py-24 md:py-32">
      <div className="container-max text-center">
        <p className="text-eyebrow mb-4">Bespoke • Group • Corporate Journeys</p>
        <h1 className="text-display font-serif font-bold mb-6 max-w-3xl mx-auto">
          25 Years of Crafting Extraordinary Journeys
        </h1>
        <p className="text-body mb-8 max-w-2xl mx-auto opacity-95">
          Thoughtfully curated journeys across wellness, spirituality, culture and adventure—designed around how you want to explore, connect and experience the world.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <Button variant="primary" size="lg" onClick={() => onNavigate?.('plan')}>
            Plan My Journey
          </Button>
          <Button variant="secondary" size="lg" onClick={() => onNavigate?.('experiences')}>
            Explore Experiences
          </Button>
        </div>
        <p className="text-body-sm opacity-85">Private journeys • Curated groups • Corporate retreats</p>
      </div>
    </section>

    {/* Trust Strip */}
    <section className="bg-bg-secondary py-12">
      <div className="container-max grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
        {trustIndicators.map((indicator, i) => (
          <div key={i}>
            <p className="text-eyebrow text-text-muted uppercase">{indicator}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Positioning */}
    <section className="py-24">
      <div className="container-max flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center">
            <span className="text-gray-500">[EDITORIAL IMAGE]</span>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-h1 font-serif font-semibold mb-4">Travel That Begins With You</h2>
          <p className="text-body mb-6 max-w-md">
            Journey Within creates meaningful travel experiences for individuals, private groups and organisations. Each journey is shaped through personal consultation, careful planning and dependable on-ground coordination.
          </p>
          <a href="#" className="text-forest-500 font-semibold hover:text-terra-500">
            Discover Our Approach →
          </a>
        </div>
      </div>
    </section>

    {/* Travel Modes */}
    <section className="py-24">
      <div className="container-max">
        <h2 className="text-h1 font-serif font-semibold text-center mb-12">Three Ways to Travel</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {travelModes.map((mode, i) => (
            <ServiceModeCard key={i} title={mode.title} description={mode.description} cta={mode.cta} />
          ))}
        </div>
      </div>
    </section>

    {/* Experiences */}
    <section className="py-24 bg-bg-secondary">
      <div className="container-max">
        <h2 className="text-h1 font-serif font-semibold mb-4">Signature Experiences</h2>
        <p className="text-body text-text-muted mb-12 max-w-xl">
          Explore a selection of journey themes. Every itinerary can be discussed and adapted through a personal consultation.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-24">
      <div className="container-max">
        <h2 className="text-h1 font-serif font-semibold mb-12">Why Travel With Journey Within</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div />
          <div className="grid gap-8">
            {benefits.map((benefit, i) => (
              <BenefitCard key={i} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 bg-bg-secondary">
      <div className="container-max">
        <h2 className="text-h1 font-serif font-semibold mb-4">From First Conversation to Meaningful Journey</h2>
        <p className="text-body-sm text-text-muted mb-12">
          The MVP does not generate an instant automated itinerary. Journey requests are reviewed personally before a proposal is prepared.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-serif font-bold text-gold-500 mb-3">{step.number}</div>
              <h3 className="text-h3 font-serif font-semibold mb-2">{step.title}</h3>
              <p className="text-body-sm text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24">
      <div className="container-max">
        <h2 className="text-h1 font-serif font-semibold mb-12">Traveller Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} quote={testimonial.quote} author={testimonial.author} journey={testimonial.journey} />
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24 bg-forest-500 text-white rounded-lg my-24">
      <div className="container-max text-center">
        <h2 className="text-h1 font-serif font-semibold mb-4">What Kind of Journey Are You Looking For?</h2>
        <p className="text-body mb-8 max-w-2xl mx-auto">
          Tell us what you have in mind. A Journey Within travel specialist will review your request and contact you to discuss the next step.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            className="!bg-white !text-forest-500 hover:!bg-gray-100"
            onClick={() => onNavigate?.('plan')}
          >
            Plan My Journey
          </Button>
          <a href="https://wa.me/[WHATSAPP_NUMBER]" target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg">
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </>
  );
};
