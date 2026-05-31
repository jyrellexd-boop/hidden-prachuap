import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function HighlightsSection({ highlights }) {
  return (
    <div>
      <h2 className="font-heading font-bold text-2xl mb-6">Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 bg-muted/50 rounded-xl p-4"
          >
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-sm leading-relaxed">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}