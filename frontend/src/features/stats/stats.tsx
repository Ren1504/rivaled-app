import * as React from "react"
import { audioSynth } from "../../lib/audio"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"

const TrophyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a7.7 7.7 0 0 1 7.54 8H4.46A7.7 7.7 0 0 1 12 2Z" />
  </svg>
);

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const DeleteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

interface StatsTrackerProps {
  stats: any
  onReset: () => void
}

export function StatsTracker({ stats, onReset }: StatsTrackerProps) {
  const modeStats = stats.classic || {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 }
  };

  const winRate = modeStats.gamesPlayed > 0 
    ? Math.round((modeStats.gamesWon / modeStats.gamesPlayed) * 100) 
    : 0;

  // Render SVG circular progress bar
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (winRate / 100) * circumference;

  const handleClear = () => {
    if (confirm("Are you sure you want to reset all your stats? This cannot be undone.")) {
      audioSynth.playClick();
      onReset();
    }
  };

  // Find max distribution value for scale calculations
  const maxGuessCount = Math.max(
    ...Object.values(modeStats.guessDistribution).map(v => Number(v)),
    1
  );

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Main Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Win Rate Ring Chart */}
        <Card className="md:col-span-4 bg-[#111632]/80 border border-white/5 rounded-xs p-5 flex flex-col items-center justify-center shadow-lg">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Win Rate</span>
          
          <div className="relative flex items-center justify-center w-24 h-24">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r={radius}
                className="stroke-white/5"
                strokeWidth="7"
                fill="transparent"
              />
              <circle
                cx="48"
                cy="48"
                r={radius}
                className="stroke-rivals-gold transition-all duration-1000 ease-out"
                strokeWidth="7"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-xl font-black text-white">{winRate}%</span>
              <span className="text-[8px] font-bold text-muted-foreground uppercase">Won</span>
            </div>
          </div>

          <div className="flex gap-6 mt-4 text-center">
            <div>
              <p className="text-sm font-bold text-white">{modeStats.gamesPlayed}</p>
              <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Played</p>
            </div>
            <div className="h-6 w-px bg-white/10 self-center" />
            <div>
              <p className="text-sm font-bold text-white">{modeStats.gamesWon}</p>
              <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Won</p>
            </div>
          </div>
        </Card>

        {/* Streaks counters */}
        <div className="md:col-span-8 grid grid-cols-2 gap-4">
          <Card className="bg-[#111632]/80 border border-white/5 rounded-xs p-5 flex flex-col items-center justify-center shadow-lg">
            <TrophyIcon className="size-6 text-rivals-gold mb-2 animate-bounce-subtle" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Current Streak</span>
            <span className="text-3xl font-black text-white">{modeStats.currentStreak}</span>
            <span className="text-[9px] font-semibold text-muted-foreground mt-1">consecutive wins</span>
          </Card>

          <Card className="bg-[#111632]/80 border border-white/5 rounded-xs p-5 flex flex-col items-center justify-center shadow-lg">
            <StarIcon className="size-6 text-rivals-gold mb-2" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Max Streak</span>
            <span className="text-3xl font-black text-white">{modeStats.maxStreak}</span>
            <span className="text-[9px] font-semibold text-muted-foreground mt-1">all-time record</span>
          </Card>
        </div>

      </div>

      {/* Guess Distribution Histogram */}
      <Card className="bg-[#111632]/50 border border-white/5 rounded-xs p-5 shadow-lg">
        <h4 className="text-xs font-bold text-rivals-gold uppercase tracking-widest border-b border-white/5 pb-2 mb-4">
          Guess Distribution
        </h4>
        
        <div className="flex flex-col gap-2.5">
          {Object.keys(modeStats.guessDistribution).map(guessNum => {
            const count = Number(modeStats.guessDistribution[Number(guessNum)] || 0);
            const percentage = maxGuessCount > 0 ? (count / maxGuessCount) * 100 : 0;
            
            return (
              <div key={guessNum} className="flex items-center gap-3 text-xs">
                <span className="font-bold text-muted-foreground w-4 text-center">{guessNum}</span>
                <div className="flex-1 bg-white/5 rounded-xs h-5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-rivals-gold-dark to-rivals-gold h-full rounded-xs flex items-center justify-end pr-2.5 transition-all duration-1000 min-w-[20px]"
                    style={{ width: `${Math.max(percentage, 5)}%` }}
                  >
                    {count > 0 && <span className="text-[9px] font-black text-rivals-obsidian">{count}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Stats Clean button */}
      <div className="flex justify-end mt-2">
        <Button
          onClick={handleClear}
          variant="outline"
          size="sm"
          className="border-rivals-crimson/30 hover:border-rivals-crimson text-rivals-crimson hover:bg-rivals-crimson/10 rounded-xs cursor-pointer"
        >
          <DeleteIcon className="mr-1.5 size-3.5" />
          Reset All Statistics
        </Button>
      </div>

    </div>
  );
}
