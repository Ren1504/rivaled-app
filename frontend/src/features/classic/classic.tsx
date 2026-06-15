import * as React from "react"
import { heroes } from "../../data/marvelRivalsData"
import type { Hero } from "../../data/marvelRivalsData"
import { audioSynth } from "../../lib/audio"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { Button } from "../../components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../../components/ui/combobox"

// Use custom inline icons to ensure successful compilation
import {
  StarIcon,
  RefreshIcon,
  SparklesIcon
} from "../../components/shared/icons"

interface ClassicGameProps {
  onWin: (guesses: number) => void
  onLose: () => void
  updateStats: (mode: string, won: boolean, guesses: number) => void
}

// Simple hash function to get daily hero based on date
function getDailyHero(): Hero {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const index = seed % heroes.length;
  return heroes[index];
}

// Define arrows inline
const ArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

export function ClassicGame({ onWin, onLose, updateStats }: ClassicGameProps) {
  const [isDaily, setIsDaily] = React.useState<boolean>(true);
  const [targetHero, setTargetHero] = React.useState<Hero>(getDailyHero);
  const [guesses, setGuesses] = React.useState<Hero[]>([]);
  const [gameOver, setGameOver] = React.useState<boolean>(false);
  const [wonState, setWonState] = React.useState<boolean>(false);
  
  // Track unique keys to force re-render combobox when clean
  const [comboboxKey, setComboboxKey] = React.useState<number>(0);

  // Daily state persistence
  const [dailyState, setDailyState] = useLocalStorage<any>("lodle_daily_state", {
    date: "",
    guesses: [],
    gameOver: false,
    won: false,
    targetName: ""
  });

  // Load Daily State on mount / mode toggle
  React.useEffect(() => {
    if (isDaily) {
      const todayStr = new Date().toDateString();
      const dailyHero = getDailyHero();
      
      if (dailyState.date === todayStr && dailyState.targetName === dailyHero.name) {
        // Restore today's progress
        setTargetHero(dailyHero);
        setGuesses(dailyState.guesses.map((name: string) => heroes.find(h => h.name === name)!));
        setGameOver(dailyState.gameOver);
        setWonState(dailyState.won);
      } else {
        // Reset daily state for a new day
        setTargetHero(dailyHero);
        setGuesses([]);
        setGameOver(false);
        setWonState(false);
        setDailyState({
          date: todayStr,
          guesses: [],
          gameOver: false,
          won: false,
          targetName: dailyHero.name
        });
      }
    } else {
      // For Unlimited: pick random hero
      startUnlimited();
    }
  }, [isDaily]);

  const startUnlimited = () => {
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];
    setTargetHero(randomHero);
    setGuesses([]);
    setGameOver(false);
    setWonState(false);
    setComboboxKey(prev => prev + 1);
  };

  const handleGuess = (heroName: string) => {
    if (gameOver) return;
    
    const guessedHero = heroes.find(h => h.name.toLowerCase() === heroName.toLowerCase());
    if (!guessedHero) return;
    
    // Avoid duplicate guesses
    if (guesses.some(g => g.name === guessedHero.name)) {
      return;
    }

    audioSynth.playClick();
    const newGuesses = [...guesses, guessedHero];
    setGuesses(newGuesses);
    setComboboxKey(prev => prev + 1); // Reset combobox input value visually

    const isMatch = guessedHero.name === targetHero.name;
    const maxGuesses = 8;
    const isGameOver = isMatch || newGuesses.length >= maxGuesses;

    // Trigger sounds for attributes
    if (isMatch) {
      setWonState(true);
      setGameOver(true);
      audioSynth.playSuccess();
      onWin(newGuesses.length);
      updateStats("classic", true, newGuesses.length);
    } else if (newGuesses.length >= maxGuesses) {
      setGameOver(true);
      audioSynth.playFailure();
      onLose();
      updateStats("classic", false, newGuesses.length);
    } else {
      // Play a small beep to indicate guess analyzed
      audioSynth.playClick();
    }

    // Persist daily state if daily mode
    if (isDaily) {
      setDailyState({
        date: new Date().toDateString(),
        guesses: newGuesses.map(g => g.name),
        gameOver: isGameOver,
        won: isMatch,
        targetName: targetHero.name
      });
    }
  };

  const getHeroImage = (name: string) => {
    const formattedName = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[.&]/g, "");
    return `https://rivalskins.com/wp-content/uploads/marvel-assets/assets/hero-icons-avatars/${formattedName}_avatar.png`;
  };

  // Autocomplete data: exclude already guessed heroes
  const autocompleteList = heroes
    .filter(h => !guesses.some(g => g.name === h.name))
    .map(h => h.name);

  // Checks and Colors for Grid Columns
  const getCellColor = (guessValue: any, targetValue: any, isYear = false) => {
    if (guessValue === targetValue) {
      return "bg-[#10b981] border-[#10b981]/50 text-white animate-pulse-subtle"; // Green Match
    }
    
    if (isYear && guessValue && targetValue) {
      const diff = Math.abs(guessValue - targetValue);
      if (diff <= 10) {
        return "bg-amber-500 border-amber-500/50 text-white"; // Near match (Orange)
      }
    }
    
    return "bg-[#1e293b] border-white/10 text-white/80"; // No Match
  };

  const getArrowIcon = (guessValue: number | null, targetValue: number | null) => {
    if (!guessValue || !targetValue || guessValue === targetValue) return null;
    return targetValue > guessValue ? (
      <ArrowUpIcon className="inline size-3.5 text-white animate-bounce-subtle ml-1" />
    ) : (
      <ArrowDownIcon className="inline size-3.5 text-white animate-bounce-subtle ml-1" />
    );
  };


  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-6">
      
      {/* Daily vs Unlimited Select Toggle */}
      <div className="flex bg-[#111632] border border-white/5 rounded-full p-1 mb-8 shadow-inner">
        <button
          onClick={() => {
            audioSynth.playClick();
            setIsDaily(true);
          }}
          className={`px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
            isDaily 
              ? "bg-rivals-gold text-rivals-obsidian shadow-lg" 
              : "text-muted-foreground hover:text-white"
          }`}
        >
          Daily Challenge
        </button>
        <button
          onClick={() => {
            audioSynth.playClick();
            setIsDaily(false);
          }}
          className={`px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
            !isDaily 
              ? "bg-rivals-gold text-rivals-obsidian shadow-lg" 
              : "text-muted-foreground hover:text-white"
          }`}
        >
          Unlimited Practice
        </button>
      </div>

      {/* Game Rules / Header Info */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black uppercase text-gold-gradient tracking-widest flex items-center justify-center gap-2">
          <SparklesIcon className="size-6 text-rivals-gold animate-pulse" />
          Classic Mode
          <SparklesIcon className="size-6 text-rivals-gold animate-pulse" />
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5 max-w-md mx-auto">
          Guess the secret Marvel Rivals Hero. The cells will change color to show how close your guess was to the target hero.
        </p>
      </div>

      {/* Difficulty Hint reveal after 6 incorrect guesses */}
      {guesses.length >= 6 && !wonState && (
        <div className="w-full max-w-2xl bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6 text-center animate-in zoom-in-95 duration-300">
          <p className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <StarIcon className="size-4 animate-spin-slow" />
            Loldle Hint: Target Hero Difficulty
            <StarIcon className="size-4 animate-spin-slow" />
          </p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`size-5 ${
                  i < targetHero.difficulty ? "text-rivals-gold animate-bounce-subtle" : "text-white/10"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
            <span className="text-xs font-semibold text-white ml-2">({targetHero.difficulty}/5 difficulty rating)</span>
          </div>
        </div>
      )}

      {/* Autocomplete Input Search */}
      {!gameOver ? (
        <div className="w-full max-w-md flex items-center gap-3 mb-10 z-30">
          <div className="flex-1">
            <Combobox key={comboboxKey} items={autocompleteList}>
              <ComboboxInput
                placeholder="Type hero name..."
                className="h-12 w-full rounded-lg border border-rivals-gold/20 bg-[#0e1227] text-white text-md px-4 focus-visible:border-rivals-gold focus-visible:ring-1 focus-visible:ring-rivals-gold"
              />
              <ComboboxContent className="mt-1 max-h-60 overflow-hidden rounded-lg border border-white/10 bg-[#0e1227] shadow-2xl backdrop-blur-md">
                <ComboboxEmpty className="p-3 text-sm text-gray-400 text-center">
                  No hero matches search.
                </ComboboxEmpty>
                <ComboboxList className="max-h-52 overflow-y-auto">
                  {(item) => (
                    <ComboboxItem
                      key={item}
                      value={item}
                      className="flex items-center justify-between px-4 py-2.5 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/[0.03]"
                      onClick={() => handleGuess(item)}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={getHeroImage(item)}
                          alt={item}
                          className="w-8 h-8 rounded-full border border-white/10 object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://placehold.co/100x100/171b35/ffffff?text=${item[0]}`;
                          }}
                        />
                        <span className="text-white text-sm font-medium">{item}</span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-white/5 px-2 py-0.5 rounded-full">
                        {heroes.find(h => h.name === item)?.role}
                      </span>
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md flex flex-col items-center bg-[#0e1227]/90 border border-gold-500/20 rounded-2xl p-6 mb-8 text-center animate-in fade-in-50 duration-500">
          {wonState ? (
            <>
              <p className="text-xs font-bold text-rivals-gold uppercase tracking-widest mb-1">Victory!</p>
              <h3 className="text-2xl font-black text-white uppercase tracking-wider">You Got It!</h3>
              <p className="text-xs text-muted-foreground mt-2">
                The target hero was <span className="text-white font-bold">{targetHero.name}</span>!
              </p>
            </>
          ) : (
            <>
              <p className="text-xs font-bold text-rivals-crimson uppercase tracking-widest mb-1">Defeat</p>
              <h3 className="text-2xl font-black text-white uppercase tracking-wider">Out of Guesses</h3>
              <p className="text-xs text-muted-foreground mt-2">
                The target hero was <span className="text-white font-bold">{targetHero.name}</span>.
              </p>
            </>
          )}

          <div className="mt-5 flex gap-4">
            <img
              src={getHeroImage(targetHero.name)}
              alt={targetHero.name}
              className="w-20 h-20 rounded-2xl border-2 border-rivals-gold shadow-lg object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/150x150/171b35/ffffff?text=${targetHero.name[0]}`;
              }}
            />
          </div>

          {!isDaily && (
            <Button
              onClick={startUnlimited}
              variant="outline"
              className="mt-6 border-rivals-gold text-rivals-gold hover:bg-rivals-gold hover:text-rivals-obsidian rounded-xl cursor-pointer"
            >
              <RefreshIcon className="mr-2 size-4" />
              Play Again
            </Button>
          )}
        </div>
      )}

      {/* Columns Headers */}
      {guesses.length > 0 && (
        <div className="w-full overflow-x-auto pb-4 no-scrollbar">
          <div className="min-w-[700px] flex flex-col gap-2.5">
            {/* Headers row */}
            <div className="grid grid-cols-6 gap-2 px-1 text-center font-black text-xs tracking-wider uppercase text-muted-foreground">
              <div>Hero</div>
              <div>Attack Type</div>
              <div>Has Passive</div>
              <div>Team-Up Anchor</div>
              <div>MCU Debut</div>
              <div>Comic Debut</div>
            </div>

            {/* Guesses Cards Grid */}
            {guesses.map((guess) => (
              <div
                key={guess.name}
                className="grid grid-cols-6 gap-2"
              >
                {/* 1. Hero Card */}
                <div 
                  className="flex flex-col items-center justify-center p-2 rounded-xl border border-white/5 bg-[#171b35]/40 text-center h-24 duration-500 animate-card-reveal"
                  style={{ animationDelay: '0ms' }}
                >
                  <img
                    src={getHeroImage(guess.name)}
                    alt={guess.name}
                    className="w-11 h-11 rounded-full border border-white/10 mb-1 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/100x100/171b35/ffffff?text=${guess.name[0]}`;
                    }}
                  />
                  <span className="text-xs font-black truncate w-full text-white">{guess.name}</span>
                </div>

                {/* 2. Primary Attack Card */}
                <div 
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center h-24 duration-500 animate-card-reveal ${getCellColor(guess.primaryAttack, targetHero.primaryAttack)}`}
                  style={{ animationDelay: '150ms' }}
                >
                  <span className="text-sm font-black">{guess.primaryAttack}</span>
                </div>

                {/* 3. Has Passive Card */}
                <div 
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center h-24 duration-500 animate-card-reveal ${getCellColor(guess.hasPassive, targetHero.hasPassive)}`}
                  style={{ animationDelay: '300ms' }}
                >
                  <span className="text-sm font-black">{guess.hasPassive ? "Yes" : "No"}</span>
                </div>

                {/* 4. Team-Up Anchor Card */}
                <div 
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center h-24 duration-500 animate-card-reveal ${getCellColor(guess.isTeamUpAnchor, targetHero.isTeamUpAnchor)}`}
                  style={{ animationDelay: '450ms' }}
                >
                  <span className="text-sm font-black">{guess.isTeamUpAnchor ? "Yes" : "No"}</span>
                </div>

                {/* 5. MCU Debut Card */}
                <div 
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center h-24 duration-500 animate-card-reveal ${getCellColor(guess.mcuDebutYear, targetHero.mcuDebutYear, true)}`}
                  style={{ animationDelay: '600ms' }}
                >
                  <span className="text-sm font-black">
                    {guess.mcuDebutYear ?? "N/A"}
                    {getArrowIcon(guess.mcuDebutYear, targetHero.mcuDebutYear)}
                  </span>
                </div>

                {/* 6. Comic Debut Card */}
                <div 
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center h-24 duration-500 animate-card-reveal ${getCellColor(guess.comicDebutYear, targetHero.comicDebutYear, true)}`}
                  style={{ animationDelay: '750ms' }}
                >
                  <span className="text-sm font-black">
                    {guess.comicDebutYear}
                    {getArrowIcon(guess.comicDebutYear, targetHero.comicDebutYear)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
