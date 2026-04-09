import { Factory, Handshake, Headphones, Settings, BarChart3, Bell, ChevronDown } from 'lucide-react';
import { Header } from './components/Header';

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

        {/* Logo Central ROMI Pulse */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center">
             <div className="flex items-center gap-3">
                <span className="border-4 border-[#005892] rounded-full p-2 w-16 h-16 flex items-center justify-center text-3xl font-bold text-[#005892]">Q</span>
                <h1 className="text-6xl font-black text-[#333] tracking-tighter">ROMI</h1>
             </div>
             <div className="flex items-center gap-2 mt-[-10px] ml-12">
                <div className="h-[2px] w-12 bg-[#005892]"></div>
                <span className="text-4xl font-light italic text-[#003D66] font-serif">pulse</span>
             </div>
          </div>
        </div>

        {/* --- GRID DE CARDS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full max-w-6xl">
          
          {/* Card: Fábrica */}
          <Card 
            title="Fábrica" 
            icon={<Factory size={48} />} 
            gradient="linear-gradient(90deg, #005892 0%, #003D66 100%)" 
          />

          {/* Card: Locação */}
          <Card 
            title="Locação" 
            icon={<Handshake size={48} />} 
            gradient="linear-gradient(90deg, #00945E 0%, #006B44 100%)" 
          />

          {/* Card: Assistência Técnica */}
          <Card 
            title="Assistência Técnica" 
            icon={<Headphones size={48} />} 
            gradient="linear-gradient(90deg, #B51F52 0%, #85173C 100%)" 
          />

          {/* Card: Instalador */}
          <Card 
            title="Instalador" 
            icon={<Settings size={48} />} 
            gradient="linear-gradient(90deg, #4D148C 0%, #350E61 100%)" 
          />

          {/* Card: Gerenciador */}
          <Card 
            title="Gerenciador" 
            icon={<BarChart3 size={48} />} 
            gradient="linear-gradient(90deg, #58748F 0%, #42576B 100%)" 
          />

        </div>
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