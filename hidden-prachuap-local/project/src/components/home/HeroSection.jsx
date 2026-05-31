
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HERO_IMAGE = '/images/hero.png';

export default function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Breathtaking sunrise over the Gulf of Thailand coastline at Prachuap Khiri Khan"
          className="w-full h-full object-cover scale-110 parallax-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-white/90 text-xs font-medium tracking-wider uppercase">QR Verified Destination</span>
          </div>
          
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] max-w-4xl">
            Hidden<br />Prachuap
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mt-6 max-w-lg leading-relaxed font-light">
            Exploring the Hidden Gems of Hua Hin Through QR Technology
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </div>
    </section>
  );
}