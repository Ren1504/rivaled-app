import * as React from "react"

interface TooltipProps {
  content: string | React.ReactNode
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
}

export function Tooltip({
  content,
  children,
  position = "top"
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-[#171b35] border-x-transparent border-b-transparent",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-[#171b35] border-x-transparent border-t-transparent",
    left: "left-full top-1/2 -translate-y-1/2 border-l-[#171b35] border-y-transparent border-r-transparent",
    right: "right-full top-1/2 -translate-y-1/2 border-r-[#171b35] border-y-transparent border-l-transparent"
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={`absolute z-45 w-max max-w-xs px-3 py-1.5 text-xs text-[#f3f4f6] bg-[#171b35] border border-gold-500/20 rounded-md shadow-lg pointer-events-none animate-in fade-in-0 zoom-in-95 duration-150 ${positionClasses[position]}`}
        >
          {content}
          <div
            className={`absolute border-4 ${arrowClasses[position]}`}
          />
        </div>
      )}
    </div>
  );
}
