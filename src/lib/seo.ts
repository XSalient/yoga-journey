export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export const setSEOMeta = (metadata: SEOMetadata) => {
  document.title = metadata.title;

  const setMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const setOgTag = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  setMetaTag('description', metadata.description);
  if (metadata.keywords) {
    setMetaTag('keywords', metadata.keywords);
  }

  setOgTag('og:title', metadata.title);
  setOgTag('og:description', metadata.description);
  if (metadata.ogImage) {
    setOgTag('og:image', metadata.ogImage);
  }
  if (metadata.ogUrl) {
    setOgTag('og:url', metadata.ogUrl);
  }
};
