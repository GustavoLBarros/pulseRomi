import { type ReactNode } from 'react';

interface CardProps {
  title: string;
  icon: ReactNode;
  gradient: string;
}

export function Card({ title, icon, gradient }: CardProps) {
  return (
    <div className="w-full max-w-[26rem] h-40 flex flex-col rounded-lg no-underline shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_15px_rgba(0,0,0,0.2)] overflow-hidden cursor-pointer">
      <div className={`flex-1 flex items-center justify-center ${gradient}`}>
        <div className="w-15 h-15 flex items-center justify-center text-white fill-white">
          {icon}
        </div>
      </div>
      <div className="p-4 text-center bg-white">
        <h5 className="text-[18px] font-bold text-[#051620] m-0">
          {title}
        </h5>
      </div>
    </div>
  );
}