import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Board from './components/Board';
import Location from './components/Location';
import BottomNav from './components/BottomNav';

export type Tab = 'home' | 'stats' | 'board' | 'location' | 'settings';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  return (
    <div className="min-h-screen bg-background font-sans text-on-surface selection:bg-primary/30">
      <Header />
      {activeTab === 'home' && <Dashboard />}
      {activeTab === 'board' && <Board />}
      {activeTab === 'location' && <Location />}
      {(activeTab === 'stats' || activeTab === 'settings') && (
        <div className="pt-32 px-6 flex flex-col items-center justify-center text-on-surface-variant">
          <span className="font-mono text-xs uppercase tracking-widest">Coming Soon</span>
        </div>
      )}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
