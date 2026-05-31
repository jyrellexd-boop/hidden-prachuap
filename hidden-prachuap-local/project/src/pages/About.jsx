
import { motion } from 'framer-motion';
import { QrCode, Globe, MapPin, Smartphone } from 'lucide-react';

const ABOUT_IMAGE = '/images/about.png';

const features = [
  {
    icon: QrCode,
    title: 'QR-Powered Discovery',
    desc: 'Each tourist location features a unique QR code that instantly connects visitors to detailed digital guides.',
  },
  {
    icon: Globe,
    title: 'Accessible to All',
    desc: 'Designed for both local and international tourists with clear, visual-focused information.',
  },
  {
    icon: MapPin,
    title: 'Smart Navigation',
    desc: 'Integrated Google Maps directions from your current location to any destination.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Optimized for smartphones so tourists can explore on the go without any app downloads.',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src={ABOUT_IMAGE}
          alt="Tourist scanning QR code at a scenic Thai viewpoint"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-3xl sm:text-4xl md:text-6xl text-white"
          >
            About the Project
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Our Mission</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 leading-tight">
            Promoting Tourism Through Digital Innovation
          </h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Hidden Prachuap is a digital tourism initiative that promotes tourism awareness and 
            accessibility in Prachuap Khiri Khan through QR technology and digital tourism information. 
            Our goal is to bridge the gap between physical tourist destinations and the digital world, 
            making it easier for travelers to discover, learn about, and navigate to the hidden gems 
            of Hua Hin and surrounding areas.
          </p>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            By placing QR codes at key tourist locations, we empower visitors with instant access to 
            comprehensive information about each destination — including descriptions, photo galleries, 
            highlights, and one-tap navigation — all without the need to download any application.
          </p>
        </motion.div>
      </section>

      {/* Features grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted/50 rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <feat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg">{feat.title}</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}