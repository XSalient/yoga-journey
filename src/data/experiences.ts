export interface Experience {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

export const experiences: Experience[] = [
  {
    id: '1',
    slug: 'yoga-spiritual-retreats',
    title: 'Yoga and Spiritual Retreats',
    description: 'Immersive retreats designed for reflection, mindful movement and deeper connection.',
    category: 'Wellness',
    tags: ['Wellness', 'Spiritual'],
    imageUrl: '[YOGA RETREAT IMAGE]',
  },
  {
    id: '2',
    slug: 'himalayan-trekking',
    title: 'Himalayan Trekking',
    description: 'Guided mountain journeys combining dramatic landscapes, cultural encounters and carefully planned routes.',
    category: 'Adventure',
    tags: ['Adventure', 'Himalayas'],
    imageUrl: '[HIMALAYAN TREKKING IMAGE]',
  },
  {
    id: '3',
    slug: 'adventure-biking',
    title: 'Adventure Biking',
    description: 'Scenic cycling and motorbike journeys created for travellers who prefer to experience a destination in motion.',
    category: 'Adventure',
    tags: ['Adventure', 'Active Travel'],
    imageUrl: '[ADVENTURE BIKING IMAGE]',
  },
  {
    id: '4',
    slug: 'kerala-ayurveda-wellness',
    title: 'Kerala Ayurveda and Wellness',
    description: 'Restorative Kerala journeys centred on wellness, natural surroundings and traditional Ayurveda experiences.',
    category: 'Wellness',
    tags: ['Wellness', 'Kerala'],
    imageUrl: '[KERALA WELLNESS IMAGE]',
  },
  {
    id: '5',
    slug: 'cultural-india-journeys',
    title: 'Cultural India Journeys',
    description: "Curated journeys through India's heritage, communities, landscapes, traditions and living culture.",
    category: 'Culture',
    tags: ['Culture', 'India'],
    imageUrl: '[CULTURAL INDIA IMAGE]',
  },
  {
    id: '6',
    slug: 'yoga-wellness-cruises',
    title: 'Yoga and Wellness Cruises',
    description: 'A distinctive combination of mindful practice, wellness experiences and travel by water.',
    category: 'Wellness',
    tags: ['Wellness', 'Cruise'],
    imageUrl: '[WELLNESS CRUISE IMAGE]',
  },
];

export const getExperienceBySlug = (slug: string) =>
  experiences.find((e) => e.slug === slug);
