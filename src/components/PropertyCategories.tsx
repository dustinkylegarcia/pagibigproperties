import { motion } from 'framer-motion';
import { Home, Building, Key, Briefcase, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, staggerItemVariants } from '@/components/AnimatedSection';
import { categories } from '@/data/properties';
import { Category } from '@/data/types';

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  building: Building,
  key: Key,
  briefcase: Briefcase,
};

function CategoryCard({ category }: { category: Category }) {
  const Icon = iconMap[category.icon] || Home;

  return (
    <motion.div
      variants={staggerItemVariants}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* Background Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-secondary-foreground mb-2">
          {category.name}
        </h3>

        {/* Description */}
        <p className="text-secondary-foreground/80 text-sm mb-3 line-clamp-2">
          {category.description}
        </p>

        {/* Property Count */}
        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold">
            {category.propertyCount} Properties
          </span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-1 text-secondary-foreground group-hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">Explore</span>
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function PropertyCategories() {
  return (
    <section id="categories" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Property Types
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking for a family home, an investment condo, or commercial space,
            we have the perfect property for you.
          </p>
        </AnimatedSection>

        {/* Category Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
