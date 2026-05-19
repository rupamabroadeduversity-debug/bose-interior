import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../data';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-kicker">Reviews & Trust</p>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--color-brand-charcoal)] sm:text-5xl">
            Public trust signals deserve the same polish as the design story.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-brand-stone)]">
            This section turns scattered credibility into clearer reasons to move forward: local rating signal,
            founder-led accountability, and stronger regional relevance.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="luxury-card relative p-8"
            >
              <div className="inline-flex rounded-full bg-[rgba(163,141,114,0.12)] px-4 py-2 text-sm font-semibold text-[var(--color-brand-charcoal)]">
                {testimonial.metric}
              </div>
              <div className="mt-5 flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={`${testimonial.id}-${idx}`}
                    className="h-4 w-4 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]"
                  />
                ))}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[var(--color-brand-charcoal)]">{testimonial.title}</h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-brand-stone)]">{testimonial.content}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
