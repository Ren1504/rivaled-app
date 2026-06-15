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
    <div className={`flex items-center justify-center border-b border-white/10 ${className}`}>
      <div className="flex gap-2 sm:gap-6">
        {options.map((option) => {
          const isActive = option.id === activeTab;
          return (
            <button
              key={option.id}
              onClick={() => handleTabClick(option.id)}
              className={`relative flex items-center gap-2 px-3 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer outline-hidden select-none
                ${isActive 
                  ? "text-rivals-gold" 
                  : "text-muted-foreground hover:text-white"
                }
              `}
            >
              {option.icon && <span className="size-4 flex items-center justify-center">{option.icon}</span>}
              <span>{option.label}</span>
              
              {/* Active Indicator Underline */}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-rivals-gold to-transparent shadow-[0_0_8px_#f0d38d]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
