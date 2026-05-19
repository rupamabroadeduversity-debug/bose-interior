import { motion } from 'framer-motion';
import { businessDetails, featurePoints, serviceAreas, studioHighlights } from '../data';

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[2.25rem] bg-[var(--color-brand-charcoal)] p-8 text-white shadow-[0_26px_80px_rgba(29,24,20,0.22)] sm:p-10"
          >
            <p className="section-kicker text-[var(--color-brand-cream-strong)]">About The Studio</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Founder-led interiors with a more refined, consultation-first presentation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              {businessDetails.legalName} is best positioned when the brand feels premium, approachable, and grounded
              in real project thinking. This homepage concept leans into that balance through cleaner hierarchy,
              stronger project framing, and easier first-contact pathways.
            </p>

            <div className="mt-10 grid gap-4">
              {studioHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-brand-cream-strong)]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/70">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="space-y-6"
          >
            <div className="luxury-card p-8 sm:p-10">
              <p className="section-kicker">Why This Positioning Works</p>
              <h3 className="mt-4 text-3xl font-semibold text-[var(--color-brand-charcoal)] sm:text-4xl">
                The strongest Bose Interior website should feel trustworthy before it feels salesy.
              </h3>
              <p className="mt-5 text-lg leading-8 text-[var(--color-brand-stone)]">
                Clients looking for interior work want clarity, finish quality, and a sense that the team understands
                their daily life. The design direction here highlights practical scope, founder visibility, and better
                project storytelling instead of generic promotional clutter.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="luxury-card p-7">
                <h4 className="text-2xl font-semibold text-[var(--color-brand-charcoal)]">Service Areas</h4>
                <div className="mt-5 flex flex-wrap gap-3">
                  {serviceAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(107,75,53,0.12)] bg-[rgba(246,239,231,0.82)] px-4 py-2 text-sm font-semibold text-[var(--color-brand-charcoal)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="luxury-card p-7">
                <h4 className="text-2xl font-semibold text-[var(--color-brand-charcoal)]">What To Emphasize</h4>
                <div className="mt-5 space-y-3">
                  {featurePoints.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-brand-stone)]">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-gold)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
