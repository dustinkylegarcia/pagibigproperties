import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Handshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { AnimatedSection, StaggerContainer, staggerItemVariants } from '@/components/AnimatedSection';
import { valuePropositions } from '@/data/siteContent';
import { ValueProposition } from '@/data/types';

const iconMap: Record<string, React.ElementType> = {
  'shield-check': ShieldCheck,
  'map-pin': MapPin,
  handshake: Handshake,
  sparkles: Sparkles,
};

function ValueCard({ value, index }: { value: ValueProposition; index: number }) {
  const Icon = iconMap[value.icon] || CheckCircle2;

  return (
    <motion.div
      variants={staggerItemVariants}
      className="relative p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:border-primary/20 group"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7 text-primary-foreground" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">{value.description}</p>

      {/* Decorative Number */}
      <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
        0{index + 1}
      </div>
    </motion.div>
  );
}

export function WhyChooseUs() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
              Why Choose Us
            </span>
            <h2 className="heading-lg text-foreground mb-6">
              Your Trusted Partner in Finding the{' '}
              <span className="text-gradient">Perfect Home</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              For over a decade, Haven Homes PH has been helping Filipino families find their dream
              properties. Our commitment to transparency, expertise, and exceptional service has made
              us one of the most trusted names in Philippine real estate.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                'Over 15,000 families served since 2012',
                'Licensed and accredited real estate professionals',
                'Comprehensive after-sales support',
                'Exclusive access to pre-selling projects',
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right - Value Cards */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.15}>
            {valuePropositions.map((value, index) => (
              <ValueCard key={value.id} value={value} index={index} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
