import { motion } from 'framer-motion';
import { QrCode, Map, Navigation } from 'lucide-react';

const steps = [
  { icon: QrCode, title: 'Scan', desc: 'Scan any QR code at tourist spots across Prachuap Khiri Khan.' },
  { icon: Map, title: 'Discover', desc: 'Explore detailed information, photos, and highlights of each destination.' },
  { icon: Navigation, title: 'Navigate', desc: 'Get instant Google Maps directions from your current location.' },
];

export default function WelcomeSection() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Welcome</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mt-3 leading-tight">
            Your Digital Guide to Prachuap Khiri Khan
          </h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Heart of Prachuap helps tourists discover the most captivating attractions in Hua Hin 
            and Prachuap Khiri Khan through digital information and navigation. Simply scan, explore, 
            and let us guide you to unforgettable experiences.
          </p>
        </motion.div>

        {/* 3-step process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl">{step.title}</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}