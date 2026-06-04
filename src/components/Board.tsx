import { motion } from 'motion/react';
import { MoreVertical, Heart, MessageSquare, Share2 } from 'lucide-react';

export default function Board() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
      {/* Welcome Section */}
      <motion.section variants={itemVariants} className="mb-6">
        <h2 className="text-2xl font-bold text-primary mb-1">Community Board</h2>
        <p className="text-sm text-on-surface-variant">Connect, share, and grow with the Vitality collective.</p>
      </motion.section>

      {/* Category Pills */}
      <motion.div variants={itemVariants} className="flex gap-3 overflow-x-auto pb-4 no-scrollbar mb-4">
        <button className="bg-primary text-on-primary px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest whitespace-nowrap active:scale-95 transition-all">All Posts</button>
        {['Workouts', 'Nutrition', 'Events', 'Recovery'].map((pill) => (
          <button key={pill} className="bg-surface-highest text-on-surface-variant px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest whitespace-nowrap hover:bg-surface-highest/80 active:scale-95 transition-all">
            {pill}
          </button>
        ))}
      </motion.div>

      {/* Board Grid */}
      <div className="grid grid-cols-1 gap-4">
        {/* Post 1: Workout */}
        <motion.article variants={itemVariants} className="glass-card rounded-xl p-5 flex flex-col gap-4 group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCouIK4B7A01_d78wvi2kIYczYC6gDL8xMjN9OKbx2m_pqsDFfMmb7zmnaiYAaMNoIqBMwO2Tr-j7NJx4J8o13Q8XSF8IJj7QKqgFx9kjUJMsWxmjPyMlzDgBJiMDFvU5FXlCfwzv7XLkOekWN8O7SArMiCOX9_cs_-We10EnO8lpRt1CXbYUt1wIZE7GIMntHI_KQkqq8YOn9jBHlaFuowprIOWjPpv-mPG6oF0Il8U_vFPr7uygOPB1e1_3lUGMHa5CySrJhhWgpl" alt="Marcus" className="w-10 h-10 rounded-full border border-primary/30" />
              <div>
                <p className="font-semibold text-sm">Marcus Chen</p>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">2 hours ago • Elite Member</p>
              </div>
            </div>
            <MoreVertical className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Today's Workout Routine</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Just crushed a 45-minute HIIT session focusing on explosive power and core stability. Who's joining the 6 AM squad tomorrow? ⚡️</p>
          </div>
          <div className="rounded-lg overflow-hidden h-48 bg-surface-highest relative">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Ecj3V4jRckWD0EFCR0aFGy5ATePrG03H_wPOl4y9DM-Qz0Ilioq6ridklYtmA-e_TE5AC9HRayew_KuLXOc0w76k96OExmVv9gMycOyZm-XfkufUmOL1fsbPndA3GwKgdH4HKOmg_LiL-qXUZEBdCWNYkBsAOAvSXd-Yh9pACkhwAKu4bEEnpMSEjr1hfOGhSnN00lluN1IA_R7oWfByfqbhaPySIGpl-fuOuzD1telMj4AJgIxF519DFm2vR7e_crzFdJCcLHAI" alt="Workout" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-3 left-3 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30">
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">HIIT • 45 Min</span>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-2">
            <button className="flex items-center gap-2 text-primary active:scale-90 transition-transform">
              <Heart fill="currentColor" className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest">124</span>
            </button>
            <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors active:scale-90">
              <MessageSquare className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest">18</span>
            </button>
            <button className="flex items-center gap-2 text-on-surface-variant ml-auto hover:text-primary transition-colors active:scale-90">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </motion.article>

        {/* Post 2: Breakfast */}
        <motion.article variants={itemVariants} className="glass-card rounded-xl p-5 flex flex-col gap-4 group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaRpTlR5f2CBRHH_2dICoWzgQvStAT0qr9VzQGlHRGSOC4BhiWQIOtQ-rh4RpGHgMKUTZBCjzxDoCCYH4IylQMmcQMICRjqVm3WfeHNAuak0TThlwDn9YRPjTpay-o8NWdKi2tzHgtOB656tRVYHpEGSgSbRMd5hcEnqDSQzQgGVHaVFnNEq9N2h74B_nwqlwTZ1pYhw08OoPhHj3XUkjyx1Tr1pMNSn2i2f7LlM7z2uINew8WLgSZopGnyJn0CNsgsB4W8E09LF6g" alt="Elena" className="w-10 h-10 rounded-full border border-tertiary/30" />
              <div>
                <p className="font-semibold text-sm">Elena Rodriguez</p>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">5 hours ago • Nutritionist</p>
              </div>
            </div>
            <MoreVertical className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Healthy Breakfast Ideas</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Switching from sugary cereals to overnight oats with chia seeds and almond butter. The energy boost is insane!</p>
            </div>
            <div className="w-24 h-24 rounded-lg overflow-hidden bg-surface-highest shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2i1GJFGFMRQ_rFNoAkFMx9TGYVTWKJCiozddHQ_pwS1Ghe_eNtdPlw1d8dqzFrfhYLIQ9zqWgmOUxr4LhWY1o76s7RdivxxSmUNCo-NYTTtTsZVonLtHH5oMF_RQg7EF_Wr9yGvrVvnbbNrx5qLvOdSnHf1_0T_iO89iLCyPFgwbhvrn5VQw3qki_3sBlnL97yiv_K49nB0HBcve-IqGykJkaXZYoPuzCe4OKr0Hu6T4wNkFyge6xsDe1pWP9eH0qBkbd822QpwGA" alt="Oats" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex items-center gap-6 pt-2 border-t border-white/5">
            <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
              <Heart className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest">89</span>
            </button>
            <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest">12</span>
            </button>
          </div>
        </motion.article>

        {/* Post 3: Event */}
        <motion.article variants={itemVariants} className="glass-card rounded-xl p-5 flex flex-col gap-4 group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDixapIrFdYiK-DNqSK2S-8BAT-RL0ghA_3tVcn-t3RWx2_tebI4Y3B-sXnCa3AHdgy3m1tzqh7kFLOustMhfH0Yj3k8tQRM_9QG0g_qjURLhMzA3_ZTpwQZu2Tt5SvAUvf1hlKTYpIS0VYAnhE_NvYCaNQtjo_7l1bo9JgeuXEfmBPwYdKhlooaQ_QmKPj9DwFshSyIxFiTEptbaRmmrcxTogDBB2DYa1ssYPmGlnQKrOWpvmyVFcyARdPLhUXRm7TOS-WI67n_sf4" alt="Jordan" className="w-10 h-10 rounded-full border border-secondary/30" />
              <div>
                <p className="font-semibold text-sm">Jordan Smith</p>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">Yesterday • Community Lead</p>
              </div>
            </div>
            <MoreVertical className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Billiards Meetup Recap</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">Great turnout for our monthly coordination social! It's not all about the gym—hand-eye coordination and mental focus are key health pillars too. Check out the highlights!</p>
            <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
              <div className="h-32 bg-surface-highest">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTn_YuZHmkhyUD0xyVHqqe2tPEENnqyUPVR-EE2BNVV_L7e9rsKzuNavGB1g3Zxk0JVmBDqgP7fIV9n0clFVHmJsT1HxZctQhZkaRHzXuzyB0cduegFGVG0GqVH-SYh5anCLtfRguQusFMQ4_ozR6hQwMXt7c8962YdEi4S6H4AQ4Ox4jqVs5Nu4EQCZRiRYWyLknmafS9DfwNmYdMKtwCx_CFIfkjTVvNF-rMAcjsteC1r0ZC7o3wwrT0GcmeVsliFXo56G44AGF6" alt="Billiards" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="h-32 bg-surface-highest">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO1hjtpl-42fWDKWTTnG7n1hwb-o9sXisfy4NnpaA_qc6yVCmWQGVRw1xKkT_0KbCiUvDvIdCC3mM19QGp86lDkAq4-inxVbScYJ12ZspmIULjaMGPBwgg4snrr6vMu_T9B_H0uDl9lrhxOaP1sI-JnqN2WNc11ApPOhkrGV_heH7qEL1FCYFoIPTFGcsSixufUzTR6AP9Ujuu-GMUWCIQ9qwtZKEzdeWen13QL_Cg4noW7mto2H62pQofHOZrEg_8vmOSt_suZXDK" alt="Social" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-75" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-2">
            <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
              <Heart className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest">256</span>
            </button>
            <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest">42</span>
            </button>
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}
