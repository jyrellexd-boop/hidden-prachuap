import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GOOGLE_FORM_URL = 'https://forms.gle/UPiJpyaVH19Hpvfu5';

export default function ReviewSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-6 md:mx-auto max-w-7xl bg-secondary/20 rounded-3xl overflow-hidden">
        <div className="px-8 md:px-16 py-16 md:py-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            
            <h2 className="font-heading font-bold text-3xl md:text-4xl">
              Visited a place already?
            </h2>
            
            <p className="text-muted-foreground text-lg mt-4 max-w-md mx-auto leading-relaxed">
              Share your experience and help other travelers discover the best of Prachuap Khiri Khan.
            </p>
            
            <Button
              size="lg"
              className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-13 text-base font-semibold rounded-full"
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            >
              Leave a Review
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
