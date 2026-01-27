'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <section className="py-20 lg:py-28 bg-primary-500 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Stay informed about mental health tips, treatment updates, and
            wellness resources delivered to your inbox.
          </p>

          <div className="mt-8">
            {isSubmitted ? (
              <div className="inline-flex items-center justify-center gap-3 p-4 bg-white/10 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-white" />
                <span className="text-white font-medium">
                  Thank you for subscribing!
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-medium rounded-full hover:bg-neutral-100 transition-colors disabled:opacity-70"
                >
                  {isLoading ? (
                    'Subscribing...'
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <p className="mt-4 text-sm text-white/60">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
