import { ThemeProvider } from '@/hooks/useTheme';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { PropertyCategories } from '@/components/PropertyCategories';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { TeamSection } from '@/components/TeamSection';
import { Testimonials } from '@/components/Testimonials';
import { AIAssistant } from '@/components/AIAssistant';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/data/siteContent';
import { useEffect } from 'react';

const Index = () => {
  // Set document title and meta for SEO
  useEffect(() => {
    document.title = siteConfig.seo.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', siteConfig.seo.description);

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: siteConfig.seo.title },
      { property: 'og:description', content: siteConfig.seo.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: siteConfig.name },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: siteConfig.seo.title },
      { property: 'twitter:description', content: siteConfig.seo.description },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Add keywords meta
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', siteConfig.seo.keywords.join(', '));
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <FeaturedProperties />
          <PropertyCategories />
          <WhyChooseUs />
          <TeamSection />
          <Testimonials />
          <AIAssistant />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
