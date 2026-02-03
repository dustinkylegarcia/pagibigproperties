import { motion } from 'framer-motion';
import { Home, Building, Key, Briefcase, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, staggerItemVariants } from '@/components/AnimatedSection';
import { categories } from '@/data/properties';
import { Category } from '@/data/types';
export function PropertyCategories() {
  return (
    <section id="categories" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-3">
            Browse by Type
          </span>
          <h2 className="heading-lg text-foreground">
            Find What You're Looking For
          </h2>
        </AnimatedSection>

        {/* CATEGORY CARDS - Image-First, Details on Hover/Tap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay - Gradient only */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent opacity-80" />

              {/* Content - Minimal by default */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Title - Always visible */}
                <h3 className="text-2xl font-bold text-primary-foreground leading-tight">
                  {category.name}
                </h3>

                {/* Details - Hidden, reveal on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <p className="text-sm text-primary-foreground/90 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">
                      {category.propertyCount} Properties
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary-foreground" />
                  </div>
                </motion.div>
              </div>

              {/* Mobile Tap State - Show details inline */}
              <div className="md:hidden absolute inset-0 bg-gradient-to-t from-secondary to-secondary/30 opacity-0 group-active:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}