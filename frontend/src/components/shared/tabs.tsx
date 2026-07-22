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
      <div className="flex items-center justify-center gap-1.5 sm:gap-4 md:gap-8 flex-nowrap overflow-x-auto no-scrollbar max-w-full px-2">
        {options.map((option) => {
          const isActive = option.id === activeTab;
          return (
            <button
              key={option.id}
              onClick={() => handleTabClick(option.id)}
              className={`relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer outline-hidden select-none whitespace-nowrap shrink-0
                ${isActive 
                  ? "text-rivals-gold" 
                  : "text-muted-foreground hover:text-white"
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
