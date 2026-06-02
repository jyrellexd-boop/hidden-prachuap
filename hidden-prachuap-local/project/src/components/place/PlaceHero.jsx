import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlaceHero({ place }) {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src={place.image}
        alt={`${place.name} banner - scenic view`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

      {/* Back button — fixed top left, won't overlap title */}
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 text-white hover:text-white/80 transition-colors bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium shadow-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      {/* Title — pushed down enough to not overlap back button */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-secondary/80 backdrop-blur px-3 py-1 rounded-full mb-4">
            <span className="text-xs font-semibold text-white">{place.tag}</span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-6xl text-white leading-tight">
            {place.name}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
