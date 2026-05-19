import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  MessageCircle,
  PlayCircle,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { businessDetails, trustSignals } from '../data';

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(163,141,114,0.24),_transparent_28%),radial-gradient(circle_at_20%_30%,_rgba(40,53,47,0.09),_transparent_28%)]" />

      <div className="section-shell relative z-10 pb-18 sm:pb-22">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(163,141,114,0.24)] bg-white/78 px-4 py-2 text-sm font-semibold text-[var(--color-brand-charcoal)] shadow-sm backdrop-blur">
              <MapPin className="h-4 w-4 text-[var(--color-brand-gold)]" />
              Uluberia, Howrah and Kolkata interior consultations
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-none text-[var(--color-brand-charcoal)] sm:text-6xl lg:text-7xl">
              Premium interiors that bring
              <span className="block text-[var(--color-brand-gold)]">warmth, order, and visual confidence home.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-brand-stone)] sm:text-xl">
              Bose Interior - Design My Life creates residential and commercial spaces with a founder-led approach,
              stronger portfolio storytelling, and a cleaner path from first inquiry to final handover.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary text-base" id="hero-primary-cta">
                Book Interior Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href={`https://wa.me/${businessDetails.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base"
                id="hero-secondary-cta"
              >
                <MessageCircle size={18} />
                WhatsApp Inquiry
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {businessDetails.stats.map((item) => (
                <div key={item.label} className="luxury-card p-5">
                  <div className="text-3xl font-semibold text-[var(--color-brand-charcoal)]">{item.value}</div>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-stone)]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative space-y-5"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle,_rgba(163,141,114,0.16),_transparent_64%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/65 bg-[#e8ddd0] shadow-[0_28px_90px_rgba(29,24,20,0.18)]">
              <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-[rgba(23,20,17,0.72)] px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                <PlayCircle className="h-4 w-4 text-[var(--color-brand-gold)]" />
                Featured interior reel
              </div>

              <video
                src="/remove_the_person_only_the_roo.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-[560px] w-full object-cover object-center sm:h-[620px] lg:h-[640px]"
                aria-label="Featured Bose Interior project reel"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,16,14,0.8)] via-[rgba(18,16,14,0.12)] to-transparent" />
            </div>

            <div className="luxury-card relative p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-kicker">What This Homepage Emphasizes</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--color-brand-charcoal)]">
                    Better portfolio visibility. Cleaner consultation flow.
                  </h3>
                </div>
                <Sparkles className="mt-1 h-6 w-6 text-[var(--color-brand-gold)]" />
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--color-brand-stone)]">
                The visual direction is premium and modern, but still grounded in the kinds of rooms, materials, and
                decisions real homeowners and business clients care about.
              </p>
            </div>

            <div className="absolute -left-3 top-12 hidden rounded-[1.6rem] bg-[var(--color-brand-charcoal)] p-5 text-white shadow-2xl md:block">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-[var(--color-brand-gold)]" />
                <div>
                  <div className="text-lg font-semibold">Founder-led studio</div>
                  <div className="text-sm text-white/70">Direct contact, local accountability</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {trustSignals.map((signal) => (
            <div
              key={signal}
              className="flex items-center justify-center gap-3 rounded-full border border-[rgba(163,141,114,0.18)] bg-white/72 px-5 py-3 text-sm font-semibold text-[var(--color-brand-charcoal)] backdrop-blur"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-gold)]" />
              {signal}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
