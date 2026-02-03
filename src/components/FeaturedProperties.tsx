import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection, StaggerContainer, staggerItemVariants } from '@/components/AnimatedSection';
import { properties } from '@/data/properties';
import { Property } from '@/data/types';

function formatPrice(price: number, priceLabel?: string): string {
  if (price >= 1000000) {
    return `₱${(price / 1000000).toFixed(1)}M${priceLabel || ''}`;
  }
  return `₱${price.toLocaleString()}${priceLabel || ''}`;
}

function PropertyCard({ property, index }: { property: Property; index: number }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="property-card group"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.images.main}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {property.isFeatured && (
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          )}
          {property.isNew && (
            <Badge className="bg-success text-success-foreground">New</Badge>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground capitalize">
            {property.category === 'sale' ? 'For Sale' : 'For Rent'}
          </Badge>
        </div>

        {/* Quick View Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            View Property
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="text-2xl font-bold text-primary mb-2">
          {formatPrice(property.price, property.priceLabel)}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm truncate">
            {property.location.area}, {property.location.city}
          </span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          {property.specs.bedrooms > 0 && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Bed className="h-4 w-4" />
              <span>{property.specs.bedrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Bath className="h-4 w-4" />
            <span>{property.specs.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Square className="h-4 w-4" />
            <span>{property.specs.area} sqm</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProperties() {
  const featuredProperties = properties.filter((p) => p.isFeatured || p.isNew).slice(0, 6);

  return (
    <section id="properties" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Featured Listings
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Discover Your Perfect Property
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked properties from our collection of the finest homes in the Philippines.
            Each listing is verified and ready for viewing.
          </p>
        </AnimatedSection>

        {/* Property Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <AnimatedSection className="text-center">
          <Button size="lg" className="btn-hero">
            View All Properties
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
