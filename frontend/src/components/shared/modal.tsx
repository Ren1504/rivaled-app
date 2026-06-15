import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon } from "@hugeicons/core-free-icons"
import { Button } from "../ui/button"
import { audioSynth } from "@/lib/audio"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md"
}: ModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        audioSynth.playClick();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl"
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      audioSynth.playClick();
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in-0 duration-200"
    >
      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full ${sizeClasses[size]} rounded-2xl bg-[#0e1227]/95 border border-gold-500/20 text-white shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300`}
      >
        {/* Glowing border accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rivals-gold to-transparent" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
          {title ? (
            <h2 className="text-xl font-bold tracking-wider uppercase text-gold-gradient">
              {title}
            </h2>
          ) : (
            <div />
          )}
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={() => {
              audioSynth.playClick();
              onClose();
            }}
            className="text-muted-foreground hover:text-white hover:bg-white/10 rounded-full"
            aria-label="Close modal"
          >
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2.5} className="size-4" />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-6 overflow-y-auto max-h-[75vh]">
          {children}
        </div>
      </div>
    </div>
  );
}
