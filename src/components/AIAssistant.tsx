import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Bot, User, Sparkles, X, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    'Instant property matches',
    'Smart filtering',
    'Virtual tours',
    '24/7 availability',
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - Minimal Text */}
          <AnimatedSection direction="left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-3">
              Smart Search
            </span>
            <h2 className="heading-lg text-foreground mb-6">
              AI That Understands Your Home
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Describe your dream home. Our AI handles the rest—finding matches, comparing properties, and answering questions 24/7.
            </p>

            {/* Quick Feature List - Visual Bullets */}
            <div className="space-y-2 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button onClick={() => setIsOpen(true)} className="btn-hero">
              <MessageCircle className="h-5 w-5 mr-2" />
              Try Now
            </Button>
          </AnimatedSection>

          {/* RIGHT - Chat Preview (Keep visual, reduce text in bubbles) */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">Haven AI</h4>
                  <p className="text-xs text-primary-foreground/80">Always here to help</p>
                </div>
              </div>

              {/* Chat Messages - Simplified */}
              <div className="p-4 space-y-3 h-64 overflow-hidden">
                <div className="flex gap-2">
                  <div className="max-w-xs bg-muted rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">
                      Looking for a 2BR in BGC under ₱5M?
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="max-w-xs bg-primary rounded-lg p-3">
                    <p className="text-sm text-primary-foreground">
                      Found 8 perfect matches! 🎯
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
