import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Check } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-chocolate-dark via-chocolate to-chocolate-dark" />
      
      {/* Animated Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a961' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{
          x: [0, 60],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="text-4xl">🍫</span>
          </motion.div>

          {/* Content */}
          <motion.h2
            className="font-display text-4xl md:text-5xl text-cream font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Stay Indulged
          </motion.h2>
          <motion.p
            className="font-body text-cream/70 text-lg mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Subscribe for exclusive recipes, new product launches, and 
            special offers delivered to your inbox.
          </motion.p>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className={`relative flex items-center rounded-full overflow-hidden border-2 transition-colors ${
                isFocused ? 'border-primary' : 'border-cream/20'
              }`}
              animate={{
                boxShadow: isFocused 
                  ? '0 0 30px hsla(40, 50%, 55%, 0.2)' 
                  : '0 0 0 transparent',
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent text-cream placeholder:text-cream/40 font-body focus:outline-none"
                required
              />
              <motion.button
                type="submit"
                className="px-6 py-4 bg-primary text-primary-foreground font-body flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
                data-hover
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span className="hidden sm:inline">Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Subscribe</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Success Message */}
            <motion.p
              className="absolute -bottom-8 left-0 right-0 text-center text-primary font-body text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: isSubmitted ? 1 : 0,
                y: isSubmitted ? 0 : -10,
              }}
            >
              Welcome to the Amul family! 🎉
            </motion.p>
          </motion.form>

          {/* Trust Badges */}
          <motion.div
            className="flex items-center justify-center gap-8 mt-16 text-cream/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-body text-xs uppercase tracking-wider">No Spam</span>
            <span className="w-1 h-1 rounded-full bg-cream/30" />
            <span className="font-body text-xs uppercase tracking-wider">Unsubscribe Anytime</span>
            <span className="w-1 h-1 rounded-full bg-cream/30" />
            <span className="font-body text-xs uppercase tracking-wider">Weekly Updates</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
