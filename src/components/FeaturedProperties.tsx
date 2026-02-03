import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemVariants,
} from "@/components/AnimatedSection";
import { properties } from "@/data/properties";
import { Property } from "@/data/types";

function formatPrice(price: number, priceLabel?: string): string {
  if (price >= 1000000) {
    return `₱${(price / 1000000).toFixed(1)}M${priceLabel || ""}`;
  }
  return `₱${price.toLocaleString()}${priceLabel || ""}`;
}

function PropertyCard({
  property,
  index,
}: {
  property: Property;
  index: number;
}) {
  return (
    <motion.div variants={staggerItemVariants} className="property-card group">
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
            <Badge className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          {property.isNew && (
            <Badge className="bg-success text-success-foreground">New</Badge>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge
            variant="secondary"
            className="bg-background/90 text-foreground capitalize"
          >
            {property.category === "sale" ? "For Sale" : "For Rent"}
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
  const featuredProperties = properties.slice(0, 6);
  const featuredProp = featuredProperties[0]; // Primary feature
  const restProps = featuredProperties.slice(1); // Secondary properties

  return (
    <section id="properties" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-3">
            Curated Listings
          </span>
          <h2 className="heading-lg text-foreground">
            Properties We Love Right Now
          </h2>
        </AnimatedSection>

        {/* ASYMMETRIC MASONRY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Property - Larger Card (takes 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group relative rounded-2xl overflow-hidden h-96"
          >
            <img
              src={featuredProp.images.main}
              alt={featuredProp.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent" />

            {/* Info Overlay - Minimal by default, expands on hover */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              {/* Top - Small tag */}
              <div>
                <span className="text-xs font-semibold text-primary-foreground bg-primary/40 px-3 py-1 rounded-full inline-block">
                  Featured
                </span>
              </div>

              {/* Bottom - Expands on hover */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="text-primary-foreground"
              >
                <h3 className="text-2xl font-bold mb-2">
                  {featuredProp.title}
                </h3>
                <p className="text-sm text-primary-foreground/90 mb-3">
                  {featuredProp.location.area}, {featuredProp.location.city}
                </p>
                <div className="text-xl font-bold text-primary mb-4">
                  ₱{formatPrice(featuredProp.price)}
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Secondary Properties - Smaller Cards Stacked */}
          <div className="space-y-6">
            {restProps.slice(0, 3).map((prop, idx) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 h-32 flex flex-row"
              >
                {/* Image - Left side */}
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                  <img
                    src={prop.images.main}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content - Right side */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm line-clamp-1">
                      {prop.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {prop.location.city}
                    </p>
                  </div>
                  <div className="text-primary font-bold text-sm">
                    ₱{formatPrice(prop.price)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="btn-hero">
            Explore All {properties.length}+ Properties
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
