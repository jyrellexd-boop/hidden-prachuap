import { motion } from 'framer-motion';
import { places } from '@/lib/placesData';
import DestinationCard from './DestinationCard';

export default function ExploreSection() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Destinations</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mt-3">
            Explore Places
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-lg mx-auto">
            Discover the most enchanting attractions that Hua Hin and Prachuap Khiri Khan have to offer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {places.map((place, i) => (
            <DestinationCard key={place.id} place={place} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}