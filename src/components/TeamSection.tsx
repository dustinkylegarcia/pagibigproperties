import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, staggerItemVariants } from '@/components/AnimatedSection';
import { agents } from '@/data/properties';
import { Agent } from '@/data/types';

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-xl hover:border-primary/20"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Social Links - Appear on Hover */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          {agent.social?.facebook && (
            <a
              href={agent.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
          )}
          {agent.social?.instagram && (
            <a
              href={agent.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
          {agent.social?.linkedin && (
            <a
              href={agent.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-1">{agent.name}</h3>
        <p className="text-primary font-medium text-sm mb-3">{agent.title}</p>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{agent.bio}</p>

        {/* Specializations */}
        <div className="flex flex-wrap gap-1 mb-4">
          {agent.specializations.slice(0, 3).map((spec) => (
            <span
              key={spec}
              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Contact Buttons */}
        <div className="flex gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="flex-1"
          >
            <a href={`tel:${agent.phone}`}>
              <Phone className="h-4 w-4 mr-1" />
              Call
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href={`mailto:${agent.email}`}>
              <Mail className="h-4 w-4 mr-1" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Our Team
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Meet Our Expert Agents
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of licensed professionals brings years of experience and local expertise
            to help you navigate the Philippine real estate market.
          </p>
        </AnimatedSection>

        {/* Agent Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
