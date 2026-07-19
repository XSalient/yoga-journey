import React, { useEffect } from 'react';
import { Header, Footer } from '@/components/Layout';
import { Button } from '@/components/Button';
import { setSEOMeta } from '@/lib/seo';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  useEffect(() => {
    setSEOMeta({
      title: 'About Yoga Within | 25+ Years of Travel Expertise',
      description: 'Discover our story. For over 25 years, Yoga Within has been crafting transformative yoga, wellness, and adventure journeys. Learn about our values, team, and commitment to meaningful travel.',
      keywords: 'about journey within, yoga travel company, wellness retreats, adventure travel, sustainable tourism',
    });
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-forest-50 to-white py-16 sm:py-24">
          <div className="container-max">
            <div className="max-w-3xl">
              <h1 className="text-h1 font-serif text-text-primary mb-6">About Yoga Within</h1>
              <p className="text-h3 text-text-muted">
                Crafting meaningful travel experiences that transform how you see the world—and yourself.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-16 sm:py-24">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-h2 font-serif text-text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-body text-text-muted">
                  <p>
                    Yoga Within was founded on a simple belief: travel should feed the soul, not just the camera roll. With over 25 years of experience designing extraordinary journeys, we've learned that the best trips happen when intention meets authenticity.
                  </p>
                  <p>
                    We work with small groups, local guides, and vetted partners who share our values. Every itinerary is designed to balance structure with spontaneity, comfort with challenge, and exploration with reflection.
                  </p>
                  <p>
                    Whether you're seeking wellness, adventure, cultural immersion, or spiritual reconnection, we create journeys that stay with you—not just as memories, but as growth.
                  </p>
                </div>
              </div>
              <div className="bg-sage-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-sage-600">
                  <div className="text-6xl mb-4">🌍</div>
                  <p className="text-body">[EDITORIAL IMAGE]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-sage-50 py-16 sm:py-24">
          <div className="container-max">
            <h2 className="text-h2 font-serif text-text-primary mb-12 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Authenticity',
                  description: 'Real experiences with real people. No staged performances or tourist traps—just genuine encounters that matter.',
                },
                {
                  icon: '🌱',
                  title: 'Responsibility',
                  description: 'We travel with respect for communities, cultures, and the environment. Your journey leaves a positive impact.',
                },
                {
                  icon: '💎',
                  title: 'Quality',
                  description: 'Thoughtful accommodations, expert guides, and meaningful moments. We believe in substance over spectacle.',
                },
                {
                  icon: '🤝',
                  title: 'Personalization',
                  description: 'Your journey is unique. We listen, customize, and adapt—creating an experience that feels personal to you.',
                },
                {
                  icon: '🛡️',
                  title: 'Safety & Support',
                  description: '24/7 assistance, experienced guides, and careful planning ensure you can relax and enjoy your journey.',
                },
                {
                  icon: '✨',
                  title: 'Transformation',
                  description: 'We design journeys to shift perspective, spark growth, and create lasting meaning—not just pleasant memories.',
                },
              ].map((value) => (
                <div key={value.title} className="bg-white rounded-lg p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-h4 font-serif text-text-primary mb-3">{value.title}</h3>
                  <p className="text-body-sm text-text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="py-16 sm:py-24">
          <div className="container-max">
            <div className="max-w-3xl">
              <h2 className="text-h2 font-serif text-text-primary mb-6">Our Experience</h2>
              <div className="bg-forest-50 rounded-lg p-8 mb-8">
                <div className="flex items-baseline gap-4">
                  <div>
                    <div className="text-h1 font-serif text-forest-600">25+</div>
                    <p className="text-body text-text-muted">Years crafting journeys</p>
                  </div>
                  <div className="hidden sm:block h-12 w-px bg-forest-200"></div>
                  <div>
                    <div className="text-h1 font-serif text-forest-600">2000+</div>
                    <p className="text-body text-text-muted">Journeys completed</p>
                  </div>
                  <div className="hidden sm:block h-12 w-px bg-forest-200"></div>
                  <div>
                    <div className="text-h1 font-serif text-forest-600">50+</div>
                    <p className="text-body text-text-muted">Destinations worldwide</p>
                  </div>
                </div>
              </div>
              <p className="text-body text-text-muted mb-4">
                From intimate group retreats in the Himalayas to transformative yoga journeys in Kerala, from cultural deep-dives across India to wellness cruises in exotic waters, we've had the privilege of creating thousands of meaningful experiences.
              </p>
              <p className="text-body text-text-muted">
                Our team of experts—guides, partners, and journey designers—share a passion for creating travel that nourishes both body and spirit. We work with local communities, vetted accommodations, and thoughtful partners to ensure every detail reflects our commitment to quality and authenticity.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-sage-50 py-16 sm:py-24">
          <div className="container-max">
            <h2 className="text-h2 font-serif text-text-primary mb-12 text-center">Meet Our Team</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-body text-text-muted text-center mb-8">
                Our team brings decades of experience in travel, wellness, hospitality, and cultural exchange. We're committed to creating journeys that transform—for you and for the communities we visit.
              </p>
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="w-24 h-24 bg-sage-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👥</span>
                </div>
                <h3 className="text-h3 font-serif text-text-primary mb-2">Our Yoga Within Team</h3>
                <p className="text-body text-text-muted mb-6">
                  Guides, designers, and hospitality experts dedicated to crafting your perfect journey.
                </p>
                <p className="text-body-sm text-text-muted">
                  Contact us to learn more about our team and the stories behind the journeys we create.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-forest-600 text-white py-16 sm:py-24">
          <div className="container-max">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-h2 font-serif mb-6">Ready to Yoga Within?</h2>
              <p className="text-white text-body mb-8 opacity-90">
                Let's create a journey tailored to you—one that nourishes your spirit and expands your perspective.
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate?.('plan')}
              >
                Plan Your Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
