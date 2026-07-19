import React from 'react';
import { Button } from './Button';
import type { Experience } from '@/data/experiences';

export const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className="group overflow-hidden rounded-lg border border-border bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-102 flex flex-col">
    <div className="relative w-full overflow-hidden bg-gray-200" style={{ aspectRatio: '16/9' }}>
      <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500 text-sm">{experience.imageUrl}</span>
      </div>
      <div className="absolute top-4 left-4">
        <span className="inline-block rounded-full bg-terra-500 px-3 py-1 text-sm font-semibold text-white">
          {experience.category}
        </span>
      </div>
    </div>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-h3 font-serif font-semibold mb-2 text-forest-500">{experience.title}</h3>
      <p className="text-body-sm text-text-muted mb-4 flex-1">{experience.description}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {experience.tags?.map((tag) => (
          <span key={tag} className="text-eyebrow text-text-muted uppercase">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-3 pt-4 border-t border-border">
        <a href={`/experiences/${experience.slug}`} className="text-forest-500 font-semibold hover:text-terra-500 transition-colors">
          Explore Journey →
        </a>
        <Button variant="primary" size="md" fullWidth className="text-sm">
          Enquire Now
        </Button>
      </div>
    </div>
  </div>
);

export const ServiceModeCard: React.FC<{ title: string; description: string; cta: string }> = ({ title, description, cta }) => (
  <div className="p-8 text-center hover:bg-bg-secondary transition-colors rounded-lg">
    <h3 className="text-h3 font-serif font-semibold mb-3 text-forest-500">{title}</h3>
    <p className="text-body text-text-primary mb-6">{description}</p>
    <Button variant="primary" size="md">
      {cta}
    </Button>
  </div>
);

export const BenefitCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div>
    <h3 className="text-h3 font-serif font-semibold mb-2 text-forest-500">{title}</h3>
    <p className="text-body text-text-primary">{description}</p>
  </div>
);

export const TestimonialCard: React.FC<{ quote: string; author: string; journey: string }> = ({ quote, author, journey }) => (
  <div className="flex flex-col p-6 rounded-lg bg-bg-secondary min-h-60">
    <p className="text-body text-text-primary mb-4 flex-1 italic">{quote}</p>
    <div>
      <p className="text-body-sm font-semibold text-text-primary">{author}</p>
      <p className="text-eyebrow text-text-muted">{journey}</p>
    </div>
  </div>
);
