import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Bot, User, Sparkles, X, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const suggestedQuestions = [
  "What properties are available in BGC?",
  "How much is a 2-bedroom condo in Makati?",
  "Can you help me find a family home in Alabang?",
  "What are the requirements for buying property?",
];

const mockResponses: Record<string, string> = {
  default: "I'd be happy to help you find your perfect property! I can assist with searching listings, answering questions about locations, pricing, and the buying process. What would you like to know?",
  bgc: "We have several exciting properties in BGC! Currently featuring a stunning penthouse at High Street South (₱85M), modern 2-bedroom units starting at ₱15M, and studio condos for rent from ₱50K/month. Would you like me to show you specific listings?",
  makati: "In Makati, 2-bedroom condos typically range from ₱8M to ₱25M depending on the location and amenities. Premium units in Ayala Center area command higher prices. For rentals, expect ₱60K-150K/month. Would you like to see available units?",
  alabang: "Alabang is perfect for families! We have beautiful house-and-lot properties in gated communities like Alabang Hills and Ayala Alabang Village. Prices range from ₱25M to ₱80M. These homes often include gardens, multiple bedrooms, and are near excellent schools. Interested in scheduling a viewing?",
  requirements: "For purchasing property in the Philippines, you'll typically need: valid IDs, proof of income/employment, Tax Identification Number (TIN), and reservation fee. For foreigners, condo units are allowed but land ownership has restrictions. Would you like me to explain the process in detail?",
};

function getAIResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes('bgc') || lowerMessage.includes('bonifacio')) {
    return mockResponses.bgc;
  }
  if (lowerMessage.includes('makati') || lowerMessage.includes('2-bedroom') || lowerMessage.includes('2 bedroom')) {
    return mockResponses.makati;
  }
  if (lowerMessage.includes('alabang') || lowerMessage.includes('family')) {
    return mockResponses.alabang;
  }
  if (lowerMessage.includes('requirement') || lowerMessage.includes('buying') || lowerMessage.includes('process')) {
    return mockResponses.requirements;
  }
  return mockResponses.default;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your AI property assistant. I can help you find properties, answer questions about locations, pricing, and guide you through the buying or renting process. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(inputValue),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {/* Section Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <h2 className="heading-lg text-foreground mb-6">
                Meet Your Personal{' '}
                <span className="text-gradient">Property Assistant</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our AI assistant is available 24/7 to answer your questions about properties, 
                locations, pricing, and the buying process. Get instant responses and personalized 
                recommendations based on your preferences.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Instant answers about any property listing',
                  'Personalized recommendations based on your needs',
                  'Information on neighborhoods and amenities',
                  'Guidance on financing and documentation',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="h-3 w-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => setIsOpen(true)}
                className="btn-hero"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Try AI Assistant
              </Button>
            </AnimatedSection>

            {/* Right - Chat Preview */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">Haven AI Assistant</h4>
                    <p className="text-xs text-primary-foreground/80">Always here to help</p>
                  </div>
                </div>

                {/* Chat Preview Content */}
                <div className="p-4 space-y-4 h-64 overflow-hidden">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        Hi there! Looking for your dream home in the Philippines? I can help! 🏠
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                      <p className="text-sm">What condos are available in BGC?</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-secondary-foreground" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        Great choice! We have 45 condos in BGC ranging from ₱8M to ₱85M...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Suggested Questions */}
                <div className="p-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.slice(0, 2).map((q, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : '600px'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground">Haven AI</h4>
                  <p className="text-xs text-primary-foreground/80">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}
                    >
                      {message.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={`rounded-2xl p-3 max-w-[80%] ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground rounded-tr-none'
                            : 'bg-muted rounded-tl-none'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      {message.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-secondary-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-none p-3">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse" />
                          <span className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse delay-100" />
                          <span className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse delay-200" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Suggested Questions */}
                {messages.length < 3 && (
                  <div className="px-4 pb-2 flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-border flex-shrink-0">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask about properties..."
                      className="flex-1 px-4 py-2 rounded-full bg-muted border-none outline-none text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                    />
                    <Button
                      onClick={handleSend}
                      disabled={!inputValue.trim()}
                      size="icon"
                      className="rounded-full bg-primary hover:bg-primary/90"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
