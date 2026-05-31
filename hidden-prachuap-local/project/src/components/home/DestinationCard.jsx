import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DestinationCard({ place, index }) {
  const isLarge = index === 0 || index === 3;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={isLarge ? 'md:col-span-2' : ''}
    >
      <Link to={`/place/${place.id}`} className="group block relative rounded-2xl overflow-hidden">
        <div className={`relative ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
          <img
            src={place.image}
            alt={`${place.name} - ${place.tag} destination in Prachuap Khiri Khan`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          
          {/* Tag */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
            <span className="text-white text-xs font-medium">{place.tag}</span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-heading font-bold text-xl md:text-2xl text-white">{place.name}</h3>
            <p className="text-white/70 text-sm mt-2 line-clamp-2 max-w-md">{place.preview}</p>
            <div className="flex items-center gap-2 mt-4 text-white/80 text-sm font-medium group-hover:text-secondary transition-colors">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}