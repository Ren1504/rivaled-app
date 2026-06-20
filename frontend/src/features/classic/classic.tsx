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
  SparklesIcon,
  ShieldIcon,
  UserIcon
} from "../../components/shared/icons"

interface ClassicGameProps {
  onWin: (guesses: number) => void
  onLose: () => void
  updateStats: (mode: string, won: boolean, guesses: number) => void
}

// Deterministic hash function to get daily hero based on date (randomized, not alphabetical)
function getDailyHero(): Hero {
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth() + 1;
  const d = today.getDate();

  // Deterministic seed mixing
  let seed = y * 367 + m * 31 + d;
  seed = seed ^ (seed >> 16);
  seed = Math.imul(seed, 0x85ebca6b);
  seed = seed ^ (seed >> 13);
  seed = Math.imul(seed, 0xc2b2ae35);
  seed = seed ^ (seed >> 16);

  const index = Math.abs(seed) % heroes.length;
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
  const [dailyState, setDailyState] = useLocalStorage<any>("rivaled_daily_state", {
    date: "",
    guesses: [],
    gameOver: false,
    won: false,
    targetName: ""
  });

  // Unlimited state persistence
  const [unlimitedState, setUnlimitedState] = useLocalStorage<any>("rivaled_unlimited_state", {
    guesses: [],
    gameOver: false,
    won: false,
    targetName: ""
  });

  // Load State on mount / mode toggle
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
      // Load Unlimited State
      if (unlimitedState.targetName && heroes.some(h => h.name === unlimitedState.targetName)) {
        const target = heroes.find(h => h.name === unlimitedState.targetName)!;
        setTargetHero(target);
        setGuesses(unlimitedState.guesses.map((name: string) => heroes.find(h => h.name === name)!));
        setGameOver(unlimitedState.gameOver);
        setWonState(unlimitedState.won);
      } else {
        // Start new unlimited practice game
        startUnlimited();
      }
    }
    setComboboxKey(prev => prev + 1);
  }, [isDaily]);

  const [timeLeft, setTimeLeft] = React.useState<string>("");

  React.useEffect(() => {
    if (!isDaily || !gameOver) return;

    const updateTimer = () => {
      const now = new Date();
      const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const msRemaining = nextMidnight.getTime() - now.getTime();

      const hours = Math.floor((msRemaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((msRemaining / (1000 * 60)) % 60);
      const seconds = Math.floor((msRemaining / 1000) % 60);

      setTimeLeft(
        [
          String(hours).padStart(2, '0'),
          String(minutes).padStart(2, '0'),
          String(seconds).padStart(2, '0')
        ].join(':')
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [isDaily, gameOver]);

  const startUnlimited = () => {
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];
    setTargetHero(randomHero);
    setGuesses([]);
    setGameOver(false);
    setWonState(false);
    setComboboxKey(prev => prev + 1);
    setUnlimitedState({
      guesses: [],
      gameOver: false,
      won: false,
      targetName: randomHero.name
    });
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

    // Persist state
    if (isDaily) {
      setDailyState({
        date: new Date().toDateString(),
        guesses: newGuesses.map(g => g.name),
        gameOver: isGameOver,
        won: isMatch,
        targetName: targetHero.name
      });
    } else {
      setUnlimitedState({
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
      .replace(/\s*&\s*/g, "-and-")
      .replace(/\s+/g, "-")
      .replace(/[.']/g, "");
    return `/hero-icons/${formattedName}_avatar.png`;
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
      <ArrowUpIcon className="inline size-6 text-white animate-bounce-subtle ml-1" />
    ) : (
      <ArrowDownIcon className="inline size-6 text-white animate-bounce-subtle ml-1" />
    );
  };


  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-6">

      {/* Daily vs Unlimited Select Toggle */}
      <div className="flex bg-[#111632] border border-white/5 rounded-xs p-1 mb-8 shadow-inner">
        <button
          onClick={() => {
            audioSynth.playClick();
            setIsDaily(true);
          }}
          className={`px-5 py-1.5 rounded-xs text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${isDaily
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
          className={`px-5 py-1.5 rounded-xs text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${!isDaily
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

      {/* Autocomplete Input Search */}
      {!gameOver ? (
        <div className="w-full max-w-lg flex flex-col items-center mb-10 z-30">
          {/* Guess Tracker */}
          <div className="w-full flex justify-between items-center mb-3 text-xs font-bold text-white/50 uppercase tracking-widest">
            <span>Guesses Made: {guesses.length} / 8</span>
            <div className="w-32 h-1.5 bg-[#111632] border border-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-rivals-gold transition-all duration-300"
                style={{ width: `${(guesses.length / 8) * 100}%` }}
              />
            </div>
          </div>

          <div className="w-full flex items-center gap-3 mb-6">
            <div className="flex-1">
              <Combobox key={comboboxKey} items={autocompleteList}>
                <ComboboxInput
                  placeholder="Type hero name..."
                  className="h-14 w-full rounded-xs border border-rivals-gold/20 bg-[#0e1227] text-white text-xl px-5 focus-visible:border-rivals-gold focus-visible:ring-1 focus-visible:ring-rivals-gold"
                />
                <ComboboxContent className="mt-1 max-h-[380px] overflow-hidden rounded-xs border border-white/10 bg-[#0e1227] shadow-2xl backdrop-blur-md">
                  <ComboboxEmpty className="p-3 text-sm text-gray-400 text-center">
                    No hero matches search.
                  </ComboboxEmpty>
                  <ComboboxList className="max-h-[360px] overflow-y-auto">
                    {(item) => (
                      <ComboboxItem
                        key={item}
                        value={item}
                        className="flex items-center justify-between px-5 py-4 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/[0.03]"
                        onClick={() => handleGuess(item)}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={getHeroImage(item)}
                            alt={item}
                            className="w-12 h-12 rounded-xs border border-white/10 object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://placehold.co/100x100/171b35/ffffff?text=${item[0]}`;
                            }}
                          />
                          <span className="text-white text-lg font-bold tracking-wide">{item}</span>
                        </div>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-xs uppercase tracking-wider">
                          {(() => {
                            const role = heroes.find(h => h.name === item)?.role;
                            if (role === "Vanguard") {
                              return <img src="/vanguard.png" alt="Vanguard" className="size-4 object-contain inline" />;
                            }
                            if (role === "Duelist") {
                              return <img src="/duelist.png" alt="Duelist" className="size-4 object-contain inline" />;
                            }
                            if (role === "Strategist") {
                              return <img src="/strategist.png" alt="Strategist" className="size-4 object-contain inline" />;
                            }
                            return null;
                          })()}
                          {heroes.find(h => h.name === item)?.role}
                        </span>
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>

            {/* Reset Practice Session Option */}
            {!isDaily && guesses.length > 0 && (
              <Button
                onClick={() => {
                  if (confirm("Reset practice session and start a new game?")) {
                    startUnlimited();
                  }
                }}
                variant="outline"
                className="border-rivals-crimson/30 hover:border-rivals-crimson text-rivals-crimson hover:bg-rivals-crimson/10 rounded-xs h-14 w-14 p-0 flex items-center justify-center cursor-pointer shadow-lg"
                title="Reset Practice Session"
              >
                <RefreshIcon className="size-5" />
              </Button>
            )}
          </div>

          {/* Clues progress box below searchbar */}
          <div className="w-full bg-[#111632]/85 border border-white/5 rounded-xs p-5 text-center shadow-2xl backdrop-blur-md">
            <h4 className="text-xs font-black uppercase text-gold-gradient tracking-widest mb-4">
              Clue Milestones
            </h4>
            <div className="flex justify-around items-start gap-4">
              {/* Clue 1: Difficulty */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${guesses.length >= 4
                  ? "bg-rivals-gold/20 border-rivals-gold text-rivals-gold shadow-[0_0_12px_rgba(212,175,55,0.3)] animate-pulse-subtle"
                  : "bg-[#0c0f24] border-white/10 text-white/20"
                  }`}>
                  <StarIcon className="size-8" />
                </div>
                <span className="text-sm font-extrabold text-white mt-2.5">Difficulty</span>
                <span className="text-xs font-bold text-muted-foreground mt-1.5 min-h-[18px] flex items-center justify-center">
                  {guesses.length >= 4 ? (
                    <div className="flex items-center justify-center gap-0.5 mt-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`size-4 ${i < targetHero.difficulty ? "text-rivals-gold" : "text-white/10"}`}
                          fill={i < targetHero.difficulty ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  ) : (
                    `In ${4 - guesses.length} ${4 - guesses.length === 1 ? "try" : "tries"}`
                  )}
                </span>
              </div>

              {/* Clue 2: Role */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${guesses.length >= 6
                  ? "bg-rivals-gold/20 border-rivals-gold text-rivals-gold shadow-[0_0_12px_rgba(212,175,55,0.3)] animate-pulse-subtle"
                  : "bg-[#0c0f24] border-white/10 text-white/20"
                  }`}>
                  {guesses.length >= 6 ? (
                    (() => {
                      const role = targetHero.role;
                      if (role === "Vanguard") return <img src="/vanguard.png" alt="Vanguard" className="size-8 object-contain" />;
                      if (role === "Duelist") return <img src="/duelist.png" alt="Duelist" className="size-8 object-contain" />;
                      if (role === "Strategist") return <img src="/strategist.png" alt="Strategist" className="size-8 object-contain" />;
                      return <ShieldIcon className="size-8" />;
                    })()
                  ) : (
                    <ShieldIcon className="size-8" />
                  )}
                </div>
                <span className="text-sm font-extrabold text-white mt-2.5">Role Clue</span>
                <span className="text-xs font-bold text-muted-foreground mt-1.5 min-h-[18px]">
                  {guesses.length >= 6 ? (
                    <span className="text-rivals-gold font-extrabold">{targetHero.role}</span>
                  ) : (
                    `In ${6 - guesses.length} ${6 - guesses.length === 1 ? "try" : "tries"}`
                  )}
                </span>
              </div>

              {/* Clue 3: First Letter */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${guesses.length >= 7
                  ? "bg-rivals-gold/20 border-rivals-gold text-rivals-gold shadow-[0_0_12px_rgba(212,175,55,0.3)] animate-pulse-subtle"
                  : "bg-[#0c0f24] border-white/10 text-white/20"
                  }`}>
                  <UserIcon className="size-8" />
                </div>
                <span className="text-sm font-extrabold text-white mt-2.5">First Letter</span>
                <span className="text-xs font-bold text-muted-foreground mt-1.5 min-h-[18px]">
                  {guesses.length >= 7 ? (
                    <span className="text-rivals-gold font-extrabold">Starts with '{targetHero.name[0]}'</span>
                  ) : (
                    `In ${7 - guesses.length} ${7 - guesses.length === 1 ? "try" : "tries"}`
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md flex flex-col items-center bg-[#0e1227]/90 border border-gold-500/20 rounded-xs p-6 mb-8 text-center animate-in fade-in-50 duration-500">
          {wonState ? (
            <>
              <p className="text-sm font-bold text-rivals-gold uppercase tracking-widest mb-1">Victory!</p>
              <h3 className="text-3xl font-black text-white uppercase tracking-wider">You Got It!</h3>
              <p className="text-sm text-muted-foreground mt-2">
                The target hero was <span className="text-white font-bold">{targetHero.name}</span>!
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-bold text-rivals-crimson uppercase tracking-widest mb-1">Defeat</p>
              <h3 className="text-3xl font-black text-white uppercase tracking-wider">Out of Guesses</h3>
              <p className="text-sm text-muted-foreground mt-2">
                The target hero was <span className="text-white font-bold">{targetHero.name}</span>.
              </p>
            </>
          )}

          <div className="mt-5 flex gap-4">
            <img
              src={getHeroImage(targetHero.name)}
              alt={targetHero.name}
              className="w-28 h-28 rounded-xs border-2 border-rivals-gold shadow-lg object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/150x150/171b35/ffffff?text=${targetHero.name[0]}`;
              }}
            />
          </div>

          {!isDaily && (
            <Button
              onClick={startUnlimited}
              variant="outline"
              className="mt-6 border-rivals-gold text-rivals-gold hover:bg-rivals-gold hover:text-rivals-obsidian rounded-xs cursor-pointer h-11 px-6 text-sm"
            >
              <RefreshIcon className="mr-2 size-4" />
              Play Again
            </Button>
          )}
        </div>
      )}

      {isDaily && gameOver && (
        <div className="text-center mb-8 bg-gradient-to-r from-rivals-gold/5 via-rivals-gold/10 to-rivals-gold/5 border border-rivals-gold/20 rounded-xs py-3.5 px-6 max-w-md w-full animate-in fade-in-50 duration-500">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-rivals-gold animate-pulse" />
            The next daily challenge will be on
            <span className="text-rivals-gold font-mono font-black text-sm tracking-normal">{timeLeft}</span>
          </p>
        </div>
      )}

      {/* Columns Headers */}
      {guesses.length > 0 && (
        <div className="w-full overflow-x-auto pb-4 no-scrollbar">
          <div className="min-w-[700px] flex flex-col gap-2.5">
            {/* Headers row */}
            <div className="grid grid-cols-6 gap-2 px-1 text-center font-black text-base tracking-wider uppercase text-muted-foreground">
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
                  className="flex flex-col items-center justify-center p-1.5 overflow-hidden rounded-xs border border-white/5 bg-[#171b35]/40 text-center h-28 duration-500 animate-card-reveal"
                  style={{ animationDelay: '0ms' }}
                >
                  <img
                    src={getHeroImage(guess.name)}
                    alt={guess.name}
                    className="w-20 h-20 object-cover rounded-xs border border-white/10 mb-1"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/150x150/171b35/ffffff?text=${guess.name[0]}`;
                    }}
                  />
                  <span className="text-xs font-black truncate w-full text-white leading-none">{guess.name}</span>
                </div>

                {/* 2. Primary Attack Card */}
                <div
                  className={`flex flex-col items-center justify-center p-2 rounded-xs border text-center h-28 duration-500 animate-card-reveal ${getCellColor(guess.primaryAttack, targetHero.primaryAttack)}`}
                  style={{ animationDelay: '150ms' }}
                >
                  <span className="text-lg font-black">{guess.primaryAttack}</span>
                </div>

                {/* 3. Has Passive Card */}
                <div
                  className={`flex flex-col items-center justify-center p-2 rounded-xs border text-center h-28 duration-500 animate-card-reveal ${getCellColor(guess.hasPassive, targetHero.hasPassive)}`}
                  style={{ animationDelay: '300ms' }}
                >
                  <span className="text-lg font-black">{guess.hasPassive ? "Yes" : "No"}</span>
                </div>

                {/* 4. Team-Up Anchor Card */}
                <div
                  className={`flex flex-col items-center justify-center p-2 rounded-xs border text-center h-28 duration-500 animate-card-reveal ${getCellColor(guess.isTeamUpAnchor, targetHero.isTeamUpAnchor)}`}
                  style={{ animationDelay: '450ms' }}
                >
                  <span className="text-lg font-black">{guess.isTeamUpAnchor ? "Yes" : "No"}</span>
                </div>

                {/* 5. MCU Debut Card */}
                <div
                  className={`flex flex-col items-center justify-center p-2 rounded-xs border text-center h-28 duration-500 animate-card-reveal ${getCellColor(guess.mcuDebutYear, targetHero.mcuDebutYear, true)}`}
                  style={{ animationDelay: '600ms' }}
                >
                  <span className="text-lg font-black">
                    {guess.mcuDebutYear ?? "N/A"}
                    {getArrowIcon(guess.mcuDebutYear, targetHero.mcuDebutYear)}
                  </span>
                </div>

                {/* 6. Comic Debut Card */}
                <div
                  className={`flex flex-col items-center justify-center p-2 rounded-xs border text-center h-28 duration-500 animate-card-reveal ${getCellColor(guess.comicDebutYear, targetHero.comicDebutYear, true)}`}
                  style={{ animationDelay: '750ms' }}
                >
                  <span className="text-lg font-black">
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
