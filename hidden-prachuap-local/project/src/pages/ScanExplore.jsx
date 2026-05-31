
import { motion } from 'framer-motion';
import { QrCode, Smartphone, MapPin, MessageSquare } from 'lucide-react';

const QR_IMAGE = './images/scan-qr.png';
const PANORAMA = './images/scan-panorama.png';

const steps = [
  { icon: Smartphone, title: 'Step 1: Open Camera', desc: 'Open your smartphone camera or any QR scanner app.' },
  { icon: QrCode, title: 'Step 2: Scan the Code', desc: 'Point your camera at any Hidden Prachuap QR code.' },
  { icon: MapPin, title: 'Step 3: Explore & Navigate', desc: 'Browse destination info and get directions instantly.' },
  { icon: MessageSquare, title: 'Step 4: Share Your Experience', desc: 'Leave a review to help other travelers.' },
];

export default function ScanExplore() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[300px] overflow-hidden">
        <img
          src={PANORAMA}
          alt="Panoramic view of Hua Hin coastline at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-3xl sm:text-4xl md:text-6xl text-white"
          >
            Scan & Explore
          </motion.h1>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Pulse rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl border-2 border-primary/30 animate-pulse-ring" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl border-2 border-primary/20 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* QR Code */}
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl relative z-10 bg-white p-4">
              <img
                src={QR_IMAGE}
                alt="Hidden Prachuap QR Code - scan to explore tourist destinations"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <h2 className="font-heading font-bold text-2xl md:text-3xl">
              Scan to Start Exploring
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-md mx-auto leading-relaxed">
              Point your smartphone camera at the QR location to access the Hidden Prachuap 
              digital tourism guide instantly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 pb-20 md:pb-32">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-muted/50 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base">{step.title}</h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project info */}
      <section className="bg-muted/30 py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl">Project Information</h2>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Hidden Prachuap is a tourism technology project designed to enhance the visitor experience 
            in Prachuap Khiri Khan, Thailand. Through strategically placed QR codes, tourists gain 
            instant access to curated destination information, photo galleries, and smart navigation 
            — making every journey seamless and memorable.
          </p>
          <div className="mt-8 text-sm text-muted-foreground">
            <p>Contact: info@hiddenprachuap.com</p>
            <p className="mt-1">Prachuap Khiri Khan, Thailand</p>
          </div>
        </div>
      </section>
    </div>
  );
}
