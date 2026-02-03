import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Handshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { AnimatedSection, StaggerContainer, staggerItemVariants } from '@/components/AnimatedSection';
import { valuePropositions } from '@/data/siteContent';
import { ValueProposition } from '@/data/types';
export function WhyChooseUs() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - Minimal Text + Visual Rhythm */}
          <AnimatedSection direction="left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-3">
              Why Choose Us
            </span>
            <h2 className="heading-lg text-foreground mb-8">
              Your Trusted<br />
              Real Estate<br />
              <span className="text-gradient">Partner</span>
            </h2>
            
            {/* SHORT bullets - not paragraphs */}
            <div className="space-y-4 mb-10">
              {[
                '15,000+ families trust us',
                'Licensed professionals',
                '24/7 after-sales support',
                'Pre-selling access',
              ].map((point, idx) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Decorative accent */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </AnimatedSection>

          {/* RIGHT - Visual-Heavy, Not Text-Heavy */}
          <AnimatedSection direction="right" delay={0.2}>
            {/* Option: Animated stats or visual representation */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '15K+', label: 'Happy Families' },
                { number: '50+', label: 'Expert Agents' },
                { number: '2.5K', label: 'Properties' },
                { number: '12+', label: 'Years' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border text-center group hover:border-primary/30 transition-all"
                >
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}