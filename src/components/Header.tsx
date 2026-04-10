import { useState } from "react";
import { LogoRomi } from "./LogoRomi";

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-[999] flex h-16 w-full items-center bg-romi-gradient justify-between shadow-[3px_0_8px_#00000090] px-4 text-white">
      <div className="flex items-center">
        <LogoRomi className="ml-6"/> 
      </div>

      <div className="flex items-center h-full">
        <span className="text-xs text-white/20 hover:text-white transition-colors cursor-default mr-4 select-none" title="V4.4.10">
          V4.4.10
        </span>

        <div className="relative inline-flex items-center mr-4 group">
          <select 
            aria-label="Selecionar idioma" 
            className="h-8 appearance-none rounded-md border border-transparent bg-transparent pl-2 pr-6 font-medium outline-none transition-colors text-white/85 hover:bg-white/5 hover:text-white cursor-pointer"
          >
            <option value="de-DE" className="text-gray-900">Deutsch (DE)</option>
            <option value="en-US" className="text-gray-900">English (US)</option>
            <option value="es-ES" className="text-gray-900">Español (ES)</option>
            <option value="pt-BR" className="text-gray-900" selected>Português (BR)</option>
          </select>
          <span aria-hidden="true" className="pointer-events-none absolute right-1.5 text-[9px] text-white/55">▼</span>
        </div>

        <div className="flex items-center mr-4">
          <button type="button" className="bg-none border-0 p-1 transition-opacity duration-300 opacity-100 cursor-pointer hover:opacity-80">
            <svg height="24" viewBox="0 -960 960 960" width="24" className="h-7 w-auto fill-white -mx-1">
              <path d="M200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z" />
            </svg>
          </button>
        </div>

        <div className="relative h-full flex items-center">
          <div 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={`text-white font-bold flex flex-row items-center gap-3 cursor-pointer px-6 border-l border-white/20 select-none transition-colors ${isProfileOpen ? 'bg-white/10' : 'hover:bg-white/5'}`}
          >
            <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center shrink-0 text-[#005892]">
              GB
            </div>
            <span className="hidden sm:flex whitespace-nowrap text-sm md:text-base">
              Gustavo Barros
            </span>
          </div>

          {isProfileOpen && (
            <div className="absolute top-full right-0 w-48 bg-white rounded-b-md shadow-xl py-1 z-[1000]">
              <ul className="list-none m-0 p-0">
                <li 
                  className="font-bold my-1 py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors" 
                  style={{ color: 'rgb(0, 103, 166)' }}
                  onClick={() => console.log("Logout")}
                >
                  <div className="w-5 h-5 flex items-center justify-center [&_path]:fill-current">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h240q17 0 28.5 11.5T480-160q0 17-11.5 28.5T440-120H200Zm487-320H400q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h287l-75-75q-11-11-11-27t11-28q11-12 28-12.5t29 11.5l143 143q12 12 12 28t-12 28L669-309q-12 12-28.5 11.5T612-310q-11-12-10.5-28.5T613-366l74-74Z" />
                    </svg>
                  </div>
                  <span className="whitespace-nowrap">Sair</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}