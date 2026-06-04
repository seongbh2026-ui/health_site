import { Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md flex justify-between items-center px-6 h-16 border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-highest overflow-hidden border border-white/10 cursor-pointer hover:opacity-80 transition-opacity">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuF0B8F4B8VF4CbOc9kKfeFq-9QPgGkNxWLox3WNAmIRFQ8dV3sekbqY1fnUHSrXLO3i0HkIdkQRZP80hqNBBOcaPqOuIRaiJY84KkV6KBG1hvS_7S1B97vrlNg0tB_cUTchV0n61yfXNM-UfOiWrtW-yGhnVyl0nkxGE6kKm74wHGPwC_c1BNKkpbsE5syyiZA26W5EXzRo1UZX-E2r5IC9Mhrc6TZhlNqL4gTwUcg2wUvGzpLatMi8LCthbU0FiMCWYpo68t_X1L" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-xl font-bold tracking-tighter text-primary">VITALITY</h1>
      <button className="text-primary hover:opacity-80 transition-opacity p-2 active:scale-95">
        <Bell className="w-6 h-6" />
      </button>
    </header>
  );
}
