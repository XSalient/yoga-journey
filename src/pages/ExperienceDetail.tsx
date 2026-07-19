import React, { useEffect } from 'react';
import { Header, Footer } from '@/components/Layout';
import { Button } from '@/components/Button';
import { experiences, getExperienceBySlug } from '@/data/experiences';
import { setSEOMeta } from '@/lib/seo';

interface ExperienceDetailProps {
  slug?: string;
  onNavigate?: (page: string, data?: Record<string, string>) => void;
}

export const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ slug = 'yoga-spiritual-retreats', onNavigate }) => {
  const experience = getExperienceBySlug(slug);

  useEffect(() => {
    if (experience) {
      setSEOMeta({
        title: `${experience.title} | Journey Within`,
        description: experience.description,
        keywords: `${experience.title}, ${experience.category}, ${experience.tags.join(', ')}, wellness travel, adventure`,
      });
    }
  }, [experience]);

  if (!experience) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-h1 font-serif mb-4">Journey Not Found</h1>
            <p className="text-body text-text-muted mb-8">The experience you're looking for doesn't exist.</p>
            <Button variant="primary" onClick={() => onNavigate?.('home')}>
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedExperiences = experiences.filter((e) => e.slug !== experience.slug).slice(0, 3);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-forest-50 to-white py-16 sm:py-24">
          <div className="container-max">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-forest-100 text-forest-700">
                  {experience.category}
                </span>
                {experience.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sage-100 text-sage-700">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-h1 font-serif text-text-primary mb-6">{experience.title}</h1>
              <p className="text-h3 text-text-muted">{experience.description}</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="bg-sage-100 py-16 sm:py-24">
          <div className="container-max">
            <div className="w-full h-96 sm:h-[500px] bg-sage-200 rounded-lg flex items-center justify-center overflow-hidden">
              <div className="text-center text-sage-600">
                <div className="text-6xl mb-4">🖼️</div>
                <p className="text-body">{experience.imageUrl}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Details */}
        <div className="py-16 sm:py-24">
          <div className="container-max">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <div className="space-y-12">
                  <section>
                    <h2 className="text-h2 font-serif text-text-primary mb-6">About This Journey</h2>
                    <p className="text-body text-text-muted leading-relaxed mb-4">
                      {experience.description}
                    </p>
                    <p className="text-body text-text-muted leading-relaxed">
                      Each Journey Within experience is thoughtfully designed to combine travel, wellness, and meaningful encounters. Our expert guides and local partners ensure every moment reflects our commitment to quality, authenticity, and your wellbeing.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-h2 font-serif text-text-primary mb-6">What's Included</h2>
                    <ul className="space-y-4">
                      {['Expert-guided experiences', 'Thoughtfully selected accommodations', 'Curated meals and local cuisine', 'Small group settings', 'Daily yoga or wellness practices', 'Cultural immersion opportunities'].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-forest-500 text-xl mt-1">✓</span>
                          <span className="text-body text-text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-h2 font-serif text-text-primary mb-6">How Journey Within Works</h2>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-forest-500 text-white font-semibold">1</div>
                        </div>
                        <div>
                          <h3 className="text-h4 text-text-primary mb-2">Share Your Vision</h3>
                          <p className="text-body text-text-muted">Tell us about your interests, travel style, and what matters most to you in an experience.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-forest-500 text-white font-semibold">2</div>
                        </div>
                        <div>
                          <h3 className="text-h4 text-text-primary mb-2">We Customize</h3>
                          <p className="text-body text-text-muted">Our team designs a journey tailored to your preferences, timeline, and budget — whether you want a fixed itinerary or complete flexibility.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-forest-500 text-white font-semibold">3</div>
                        </div>
                        <div>
                          <h3 className="text-h4 text-text-primary mb-2">You Experience</h3>
                          <p className="text-body text-text-muted">Travel with confidence, supported by our local guides, partners, and 24/7 assistance. Enjoy a journey that feels personal, authentic, and deeply meaningful.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-h2 font-serif text-text-primary mb-6">Ready to Explore?</h2>
                    <p className="text-body text-text-muted mb-8">
                      Whether you're ready to commit or just exploring possibilities, we'd love to hear from you. Share your interests and we'll craft something unforgettable.
                    </p>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => onNavigate?.('plan', { experience: experience.slug })}
                    >
                      Plan Your Journey
                    </Button>
                  </section>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-forest-50 rounded-lg p-8 sticky top-8">
                  <h3 className="text-h3 font-serif text-text-primary mb-6">Journey Details</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-body-sm text-text-muted mb-2">Category</p>
                      <p className="text-body font-semibold text-text-primary">{experience.category}</p>
                    </div>
                    <div>
                      <p className="text-body-sm text-text-muted mb-2">Duration</p>
                      <p className="text-body font-semibold text-text-primary">5–21 days</p>
                    </div>
                    <div>
                      <p className="text-body-sm text-text-muted mb-2">Group Size</p>
                      <p className="text-body font-semibold text-text-primary">2–12 participants</p>
                    </div>
                    <div>
                      <p className="text-body-sm text-text-muted mb-2">Best Time</p>
                      <p className="text-body font-semibold text-text-primary">Year-round options</p>
                    </div>
                    <hr className="my-6" />
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      onClick={() => onNavigate?.('plan', { experience: experience.slug })}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Experiences */}
        {relatedExperiences.length > 0 && (
          <div className="bg-sage-50 py-16 sm:py-24">
            <div className="container-max">
              <h2 className="text-h2 font-serif text-text-primary mb-12">Other Journeys to Explore</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedExperiences.map((exp) => (
                  <div
                    key={exp.slug}
                    className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => onNavigate?.('experiences', { slug: exp.slug })}
                  >
                    <div className="h-48 bg-sage-200 flex items-center justify-center">
                      <p className="text-sage-600 text-center text-sm">{exp.imageUrl}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-body-sm text-forest-600 font-semibold mb-2">{exp.category}</p>
                      <h3 className="text-h4 font-serif text-text-primary mb-3">{exp.title}</h3>
                      <p className="text-body-sm text-text-muted line-clamp-2">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
