import { Factory, Handshake, Headphones, Settings, BarChart3, Bell, ChevronDown } from 'lucide-react';
import { Header } from './components/Header';
import { HeroLogo } from './components/HeroLogo';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F7F9] flex flex-col font-sans">
      
      <Header />

      <main className="flex-1 flex flex-col items-center pt-16 px-4">
        
        {/* Administrador Toggle (Canto direito superior do main) */}
        <div className="w-full max-w-6xl flex justify-end mb-8">
          <button className="bg-[#0067A5] text-white px-4 py-1.5 rounded text-sm font-medium shadow-sm hover:bg-[#005892]">
            Administrador
          </button>
        </div>

        <HeroLogo />

      </main>

      {/* Botão Feedback */}
      <button className="fixed bottom-4 right-4 bg-[#005892] text-white px-4 py-2 rounded flex items-center gap-2 shadow-lg text-sm">
        <Bell size={16} /> Feedback
      </button>
    </div>
  );
}

// Componente de Card para evitar repetição
function Card({ title, icon, gradient }: { title: string, icon: React.ReactNode, gradient: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1">
      <div 
        className="h-32 flex items-center justify-center text-white"
        style={{ background: gradient }}
      >
        {icon}
      </div>
      <div className="py-4 text-center font-bold text-[#333] uppercase text-sm tracking-tight px-2">
        {title}
      </div>
    </div>
  );
}

export default App;