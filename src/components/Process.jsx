import { motion } from 'framer-motion';
import { processSteps } from '../data';

const Process = () => {
  return (
    <section id="process" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker">Process</p>
          <h2 className="mt-4 text-4xl font-semibold text-[var(--color-brand-charcoal)] sm:text-5xl">
            A consultation-to-handover path that feels clear from the first click.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-brand-stone)]">
            The process section is written to reduce hesitation. It helps a lead understand what happens next, why the
            conversation matters, and how design direction turns into a finished space.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="luxury-card relative p-7"
              >
                <div className="absolute right-6 top-5 text-6xl font-heading leading-none text-[rgba(163,141,114,0.16)]">
                  {item.step}
                </div>
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                  style={{ background: 'linear-gradient(135deg, #a38d72, #6b4b35)' }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--color-brand-charcoal)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-brand-stone)]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
