import { Home, BarChart2, MessageSquare, MapPin, Settings, Plus } from 'lucide-react';
import { Tab } from '../App';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <>
      <div className="fixed bottom-24 right-6 z-40">
        <button className="w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full shadow-lg shadow-primary/20 flex flex-col items-center justify-center active:scale-95 transition-transform hover:opacity-90">
          <Plus className="w-7 h-7" />
        </button>
      </div>

      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center h-16 px-4 pb-safe bg-surface/90 backdrop-blur-xl border-t border-white/5 shadow-lg rounded-t-xl">
        <button 
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center justify-center rounded-xl px-4 py-1.5 active:scale-90 transition-transform ${activeTab === 'home' ? 'bg-primary-container/20 text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-mono tracking-wider uppercase">Home</span>
        </button>
        
        <button 
          onClick={() => onTabChange('stats')}
          className={`flex flex-col items-center justify-center rounded-xl px-4 py-1.5 active:scale-90 transition-transform ${activeTab === 'stats' ? 'bg-primary-container/20 text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
        >
          <BarChart2 className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-mono tracking-wider uppercase">Stats</span>
        </button>

        <button 
          onClick={() => onTabChange('board')}
          className={`flex flex-col items-center justify-center rounded-xl px-4 py-1.5 active:scale-90 transition-transform ${activeTab === 'board' ? 'bg-primary-container/20 text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
        >
          <MessageSquare className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-mono tracking-wider uppercase">Board</span>
        </button>

        <button 
          onClick={() => onTabChange('location')}
          className={`flex flex-col items-center justify-center rounded-xl px-4 py-1.5 active:scale-90 transition-transform ${activeTab === 'location' ? 'bg-primary-container/20 text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
        >
          <MapPin className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-mono tracking-wider uppercase">Location</span>
        </button>

        <button 
          onClick={() => onTabChange('settings')}
          className={`flex flex-col items-center justify-center rounded-xl px-4 py-1.5 active:scale-90 transition-transform ${activeTab === 'settings' ? 'bg-primary-container/20 text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
        >
          <Settings className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-mono tracking-wider uppercase">Settings</span>
        </button>
      </nav>
    </>
  );
}
