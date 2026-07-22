import * as React from "react"
import { audioSynth } from "@/lib/audio"

interface TabOption {
  id: string
  label: string
  icon?: React.ReactNode
}

interface TabsProps {
  options: TabOption[]
  activeTab: string
  onChange: (id: string) => void
  className?: string
}

export function Tabs({
  options,
  activeTab,
  onChange,
  className = ""
}: TabsProps) {
  const handleTabClick = (id: string) => {
    if (id !== activeTab) {
      audioSynth.playClick();
      onChange(id);
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 flex-nowrap overflow-x-auto no-scrollbar max-w-full px-2 py-1">
        {options.map((option) => {
          const isActive = option.id === activeTab;
          return (
            <button
              key={option.id}
              onClick={() => handleTabClick(option.id)}
              className={`relative flex items-center gap-2 px-3.5 sm:px-5 md:px-6 py-2 rounded-xs text-xs sm:text-sm md:text-base font-black tracking-wider uppercase transition-all duration-200 cursor-pointer outline-hidden select-none whitespace-nowrap shrink-0 border
                ${isActive 
                  ? "text-rivals-gold bg-rivals-gold/10 border-rivals-gold/40 shadow-[0_0_15px_rgba(234,179,8,0.25)]" 
                  : "text-muted-foreground border-transparent hover:text-white hover:bg-white/5 hover:border-white/10"
                }
              `}
            >
              {option.icon && <span className="size-4 sm:size-5 flex items-center justify-center">{option.icon}</span>}
              <span>{option.label}</span>
              
              {/* Active Indicator Underline */}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-rivals-gold to-transparent shadow-[0_0_10px_#f0d38d]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
