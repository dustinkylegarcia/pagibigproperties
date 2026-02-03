import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroContent, siteConfig } from '@/data/siteContent';

export function HeroSection() {
  const handleScrollToProperties = () => {
    const element = document.querySelector('#properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

   return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - Keep but consider video or gradient overlay variation */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury home exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container-custom pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* REMOVE BADGE */}
          
          {/* Headline - Integrated & Bold */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-xl text-foreground mb-4 leading-tight"
          >
            Find Your <span className="text-gradient">Perfect Home</span>
            <div className="text-lg font-normal text-muted-foreground mt-2">
              Trusted by 15,000+ Filipino families across the Philippines
            </div>
          </motion.h1>

          {/* Subheadline - More focused */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl"
          >
            From modern condos in Metro Manila to beachfront villas in Cebu. Transparent pricing, expert guidance, and properties verified just for you.
          </motion.p>

          {/* Search Bar - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 p-3 bg-card rounded-2xl shadow-xl border border-border mb-10"
          >
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Location, property type..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button onClick={handleScrollToProperties} className="btn-hero whitespace-nowrap">
              {heroContent.primaryCTA}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={handleScrollToContact}
              className="border-foreground/20 hover:bg-foreground/5"
            >
              {heroContent.secondaryCTA}
            </Button>
          </motion.div>

          {/* REMOVE Stats Grid & Scroll Indicator */}
        </div>
      </div>
    </section>
  );
}