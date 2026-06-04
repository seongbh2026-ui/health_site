import { motion } from 'motion/react';
import { Footprints, Moon, Flame, Users, ChevronRight, Activity, TrendingUp, Minus } from 'lucide-react';

export default function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4 } }
  };

  return (
    <motion.div 
      className="pt-24 pb-32 px-6 max-w-md mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Header Section */}
      <motion.section variants={itemVariants} className="mb-8">
        <p className="font-mono text-xs font-medium tracking-widest text-on-surface-variant mb-1 uppercase">Thursday, Oct 24</p>
        <h2 className="text-2xl font-bold">Daily Performance</h2>
      </motion.section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Main Steps Card */}
        <motion.div variants={itemVariants} className="col-span-2 glass-card rounded-xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="font-mono text-xs font-medium tracking-widest text-on-surface-variant uppercase">Today's Steps</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-bold tracking-tight text-primary">8,432</span>
                <span className="text-sm text-on-surface-variant">/ 10,000</span>
              </div>
            </div>
            <div className="bg-primary/10 p-2 rounded-lg">
              <Footprints className="text-primary w-5 h-5" />
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-3 bg-surface-lowest rounded-full overflow-hidden mb-2 relative z-10">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '84%' }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            />
          </div>
          <div className="flex justify-between relative z-10">
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">84% of daily goal</span>
            <span className="font-mono text-[10px] text-primary uppercase tracking-wider">1,568 left</span>
          </div>
          {/* Sparkline Placeholder */}
          <div className="absolute bottom-0 left-0 w-full h-12 chart-gradient opacity-30" />
        </motion.div>

        {/* Sleep Card */}
        <motion.div variants={itemVariants} className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform">
          <div className="bg-secondary/10 w-fit p-2 rounded-lg mb-4">
            <Moon className="text-secondary w-5 h-5" />
          </div>
          <span className="font-mono text-xs font-medium tracking-widest text-on-surface-variant uppercase">Sleep</span>
          <div className="mt-1">
            <span className="text-2xl font-bold text-secondary">7h 20m</span>
          </div>
          <div className="mt-3 flex items-center gap-1">
            <TrendingUp className="text-primary w-3 h-3" />
            <span className="text-[10px] font-mono text-primary tracking-wider uppercase">+12% vs avg</span>
          </div>
        </motion.div>

        {/* Calories Card */}
        <motion.div variants={itemVariants} className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform">
          <div className="bg-tertiary/10 w-fit p-2 rounded-lg mb-4">
            <Flame className="text-tertiary w-5 h-5" />
          </div>
          <span className="font-mono text-xs font-medium tracking-widest text-on-surface-variant uppercase">Calories</span>
          <div className="mt-1">
            <span className="text-2xl font-bold text-tertiary">450 <span className="text-sm font-normal">kcal</span></span>
          </div>
          <div className="mt-3 flex items-center gap-1">
            <Minus className="text-on-surface-variant w-3 h-3" />
            <span className="text-[10px] font-mono text-on-surface-variant tracking-wider uppercase">On track</span>
          </div>
        </motion.div>

        {/* Heart Rate Card */}
        <motion.div variants={itemVariants} className="col-span-2 glass-card rounded-xl p-6 overflow-hidden hover:-translate-y-1 transition-transform">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="font-mono text-xs font-medium tracking-widest text-on-surface-variant uppercase">Heart Rate</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-error">72</span>
                <span className="font-mono text-[10px] text-on-surface-variant uppercase">BPM</span>
              </div>
            </div>
            <Activity className="text-error w-8 h-8 opacity-80" />
          </div>
          <div className="h-20 flex items-end justify-between gap-1">
            {[40, 60, 80, 95, 70, 50, 30].map((height, i) => (
              <div key={i} className="flex-1 h-12 bg-surface-lowest rounded-t-sm relative group cursor-pointer hover:bg-surface-highest transition-colors">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + (i * 0.1) }}
                  className="absolute bottom-0 w-full bg-primary/40 group-hover:bg-primary/60 transition-colors rounded-t-sm" 
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Community Highlight */}
        <motion.div variants={itemVariants} className="col-span-2 glass-card rounded-xl p-6 overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-mono text-xs font-medium tracking-widest text-on-surface-variant uppercase">Community Highlight</h3>
            <div className="bg-primary/10 p-1.5 rounded-lg">
              <Users className="text-primary w-4 h-4" />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden mb-4 border border-white/10 group cursor-pointer">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo9ejGFpPUYwmNAFUujRpHFdPXG3-cVkv3bCLdQ90pULdRSHLr4NfXcW63euUA2Xre3K4LIiJod-09-QIJkAQsPDnb7jwDGQomM0L_GRxadUZml-I0VJ2Fxk7St6ft9I8zaMtbYcRBlmnI2_rx-GGZroeJLIWOOlFGGGyB8h-vGFaAc_RHUr2T4e1a4wI8vc2-yiumFpvwtEplALsaJNgDJxlHGNb3w4URzmHV1u_AgNctKSRXDtqurJT8uoHmNGlormrPxoWkFl_V" 
              alt="Community Winner" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-semibold">Weekly Winner</p>
              <p className="text-xs text-on-surface-variant mt-0.5">Team SN42 Billiards Tournament</p>
            </div>
            <div className="bg-secondary/10 px-3 py-1 rounded-full">
              <span className="text-[10px] font-mono text-secondary tracking-widest uppercase">Champion</span>
            </div>
          </div>
        </motion.div>

        {/* Recovery Status */}
        <motion.div variants={itemVariants} className="col-span-2 glass-card rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-surface-highest transition-colors">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-surface-lowest" strokeWidth="4" stroke="currentColor" fill="transparent" r="20" cx="24" cy="24" />
                <motion.circle 
                  className="text-primary" 
                  strokeWidth="4" 
                  strokeDasharray="125.6" 
                  strokeDashoffset="125.6"
                  animate={{ strokeDashoffset: 125.6 - (125.6 * 0.7) }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  strokeLinecap="round"
                  stroke="currentColor" 
                  fill="transparent" 
                  r="20" cx="24" cy="24" 
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">70%</span>
            </div>
            <div>
              <h4 className="text-base font-semibold">High Recovery</h4>
              <p className="text-xs text-on-surface-variant mt-0.5">Ready for intense training</p>
            </div>
          </div>
          <ChevronRight className="text-on-surface-variant w-5 h-5" />
        </motion.div>

      </div>
    </motion.div>
  );
}
