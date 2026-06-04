import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Train, Bus, Navigation } from 'lucide-react';

export default function Location() {
  const pageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className="pb-32 overflow-x-hidden min-h-screen"
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >
      {/* Map Section */}
      <section className="w-full h-[309px] relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-lowest flex items-center justify-center">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKDJvBNb9pS6kLeBv5wEWGSN7ptWmcMqhvVixeAufQj0dktVI8mSdwLLgGnlQQdeVZ45J8mjSy0dIpp8I_1zX6T38NaCAaA-fTNjnvqsEbyAYftAphaYCtbIizSaG1wF99UCLFLaX3D7-q5qxrTBFZj2UCTM5iHqr6_Bp8s9BcKRXxipNuCxjM0k1dcDGhiWNLui5eBUXh228B0TzoiYdsQhuVDUhC1QL-VlKKQtRsEdpOcCEe5VAMsQOR6AeT3jLWB9IOZgjqqeNA" alt="Map" className="w-full h-full object-cover opacity-60 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        </div>
        
        {/* Pin Interaction Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping" />
            <div className="relative w-6 h-6 bg-primary rounded-full border-4 border-background flex items-center justify-center">
              <MapPin className="w-3 h-3 text-on-primary fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Info Card */}
      <div className="px-6 -mt-8 relative z-10 space-y-4 max-w-md mx-auto">
        <section className="glass-card rounded-xl p-6 shadow-2xl shadow-background/50">
          <div className="flex flex-col gap-1 mb-4">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">Headquarters</span>
            <h1 className="text-2xl font-bold text-on-surface tracking-tight">VITALITY Hub Tokyo</h1>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
                <MapPin className="text-primary w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-0.5">Address</span>
                <p className="text-sm font-medium">3-2-1 Ginza, Chuo City, Tokyo<br/>104-0061, Japan</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0">
                <Phone className="text-primary w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-0.5">Phone</span>
                <p className="text-sm font-medium">+81 3-5555-0123</p>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full h-[44px] bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(87,241,219,0.3)] active:scale-95 transition-transform hover:opacity-90">
            <Navigation className="w-5 h-5 fill-current" />
            Get Directions
          </button>
        </section>

        {/* Operating Hours */}
        <section className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-secondary" />
            <h2 className="text-lg font-semibold">Operating Hours</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-sm text-on-surface-variant">Monday — Friday</span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">06:00 — 22:00</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-sm text-on-surface-variant">Saturday</span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">08:00 — 20:00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-on-surface-variant">Sunday</span>
              <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">Closed</span>
            </div>
          </div>
        </section>

        {/* Public Transport */}
        <section className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Train className="w-5 h-5 text-tertiary" />
            <h2 className="text-lg font-semibold">Public Transport</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Train className="w-4 h-4 text-secondary" />
                </div>
                <div className="w-0.5 h-6 bg-white/5 my-1" />
              </div>
              <div className="flex flex-col pt-1">
                <p className="text-sm font-medium">Ginza Station (Marunouchi Line)</p>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">3 min walk • Exit C2</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0">
                <Bus className="w-4 h-4 text-tertiary" />
              </div>
              <div className="flex flex-col pt-1">
                <p className="text-sm font-medium">Ginza 4-chome Bus Stop</p>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">5 min walk • Line 88 / 90</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
