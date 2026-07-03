import * as React from "react"
import { heroes } from "../../data/marvelRivalsData"
import type { Hero } from "../../data/marvelRivalsData"
import { heroQuotes } from "../../data/marvelRivalsQuotes"
import type { HeroQuote } from "../../data/marvelRivalsQuotes"
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
import {
  RefreshIcon,
  SparklesIcon,
  HelpIcon
} from "../../components/shared/icons"

interface QuoteGameProps {
  updateStats: (mode: string, won: boolean, guesses: number) => void
  isActive: boolean
}

// Seeded daily picker
function getDailyQuoteTarget(): HeroQuote {
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  
  let seed = (y * 367 + m * 31 + d) ^ 0x7b8c9d0e;
  seed = seed ^ (seed >> 16);
  seed = Math.imul(seed, 0x85ebca6b);
  seed = seed ^ (seed >> 13);
  seed = Math.imul(seed, 0xc2b2ae35);
  seed = seed ^ (seed >> 16);
  
  const index = Math.abs(seed) % heroQuotes.length;
  return heroQuotes[index];
}

// Random picker for unlimited
function getUnlimitedQuoteTarget(): HeroQuote {
  const index = Math.floor(Math.random() * heroQuotes.length);
  return heroQuotes[index];
}

const MAX_GUESSES = 6;

export function QuoteGame({ updateStats }: QuoteGameProps) {
  const [isDaily, setIsDaily] = React.useState<boolean>(true);
  const [target, setTarget] = React.useState<HeroQuote>(getDailyQuoteTarget);
  const [guesses, setGuesses] = React.useState<Hero[]>([]);
  const [gameOver, setGameOver] = React.useState<boolean>(false);
  const [wonState, setWonState] = React.useState<boolean>(false);
  
  const [comboboxKey, setComboboxKey] = React.useState<number>(0);

  // Daily Mode Persistence
  const [dailyState, setDailyState] = useLocalStorage<any>("rivaled_quote_daily_state", {
    date: "",
    guesses: [],
    gameOver: false,
    won: false,
    target: null
  });

  // Unlimited Mode Persistence
  const [unlimitedState, setUnlimitedState] = useLocalStorage<any>("rivaled_quote_unlimited_state", {
    guesses: [],
    gameOver: false,
    won: false,
    target: null
  });

  // Sync state with modes
  React.useEffect(() => {
    if (isDaily) {
      const todayStr = new Date().toDateString();
      const dailyTarget = getDailyQuoteTarget();

      if (
        dailyState.date === todayStr && 
        dailyState.target && 
        dailyState.target.quote === dailyTarget.quote
      ) {
        setTarget(dailyState.target);
        setGuesses(dailyState.guesses.map((name: string) => heroes.find(h => h.name === name)!));
        setGameOver(dailyState.gameOver);
        setWonState(dailyState.won);
      } else {
        setTarget(dailyTarget);
        setGuesses([]);
        setGameOver(false);
        setWonState(false);
        setDailyState({
          date: todayStr,
          guesses: [],
          gameOver: false,
          won: false,
          target: dailyTarget
        });
      }
    } else {
      if (unlimitedState.target && heroQuotes.some(q => q.quote === unlimitedState.target.quote)) {
        setTarget(unlimitedState.target);
        setGuesses(unlimitedState.guesses.map((name: string) => heroes.find(h => h.name === name)!));
        setGameOver(unlimitedState.gameOver);
        setWonState(unlimitedState.won);
      } else {
        startUnlimited();
      }
    }
    setComboboxKey(prev => prev + 1);
  }, [isDaily]);

  // Countdown timer for next daily challenge
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
    const randomTarget = getUnlimitedQuoteTarget();
    setTarget(randomTarget);
    setGuesses([]);
    setGameOver(false);
    setWonState(false);
    setComboboxKey(prev => prev + 1);
    setUnlimitedState({
      guesses: [],
      gameOver: false,
      won: false,
      target: randomTarget
    });
  };

  const handleHeroGuess = (heroName: string) => {
    if (gameOver) return;

    const guessedHero = heroes.find(h => h.name.toLowerCase() === heroName.toLowerCase());
    if (!guessedHero) return;

    if (guesses.some(g => g.name === guessedHero.name)) return;

    audioSynth.playClick();
    const newGuesses = [...guesses, guessedHero];
    setGuesses(newGuesses);
    setComboboxKey(prev => prev + 1);

    const isMatch = guessedHero.name.toLowerCase() === target.character.toLowerCase();
    const isGameOver = isMatch || newGuesses.length >= MAX_GUESSES;

    if (isMatch) {
      setWonState(true);
      setGameOver(true);
      audioSynth.playSuccess();
      updateStats("quote", true, newGuesses.length);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameOver(true);
      audioSynth.playFailure();
      updateStats("quote", false, newGuesses.length);
    } else {
      audioSynth.playClick();
    }

    const updatedState = {
      guesses: newGuesses.map(g => g.name),
      gameOver: isGameOver,
      won: isMatch,
      target
    };

    if (isDaily) {
      setDailyState({
        ...dailyState,
        ...updatedState,
        date: new Date().toDateString()
      });
    } else {
      setUnlimitedState(updatedState);
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

  // Autocomplete: exclude already guessed heroes
  const autocompleteList = heroes
      .filter(h => !guesses.some(g => g.name === h.name))
      .map(h => h.name);

  // Clue conditions
  const showPartnerClue = guesses.length >= 3 && !wonState;

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-6">
      
      {/* Mode Select Tabs */}
      <div className="flex bg-[#111632] border border-white/5 rounded-xs p-1 mb-8 shadow-inner">
        <button
          onClick={() => {
            audioSynth.playClick();
            setIsDaily(true);
          }}
          className={`px-5 py-1.5 rounded-xs text-sm font-bold tracking-wider uppercase cursor-pointer ${
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
          className={`px-5 py-1.5 rounded-xs text-sm font-bold tracking-wider uppercase cursor-pointer ${
            !isDaily
              ? "bg-rivals-gold text-rivals-obsidian shadow-lg"
              : "text-muted-foreground hover:text-white"
          }`}
        >
          Unlimited Practice
        </button>
      </div>

      {/* Title / Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black uppercase text-gold-gradient tracking-widest flex items-center justify-center gap-2">
          <SparklesIcon className="size-6 text-rivals-gold animate-pulse" />
          Quote Mode
          <SparklesIcon className="size-6 text-rivals-gold animate-pulse" />
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5 max-w-md mx-auto">
          Identify the hero by their in-game chatter or character interaction quotes. Max of {MAX_GUESSES} attempts.
        </p>
      </div>

      {/* Quote Card (Italicized Blockquote Card) */}
      <div className="w-full max-w-2xl bg-[#0e1227]/90 border border-white/5 shadow-2xl rounded-xs p-6 md:p-8 text-center relative mb-8 flex flex-col items-center justify-center min-h-[160px] animate-in fade-in duration-300">
        
        {/* Quote Label */}
        <div className="absolute -top-3 left-6 bg-[#161a35] border border-white/10 text-rivals-gold text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-xs">
          Quote Clue
        </div>

        {/* Double Quotes Overlays */}
        <span className="absolute top-4 left-6 text-7xl font-serif text-white/5 select-none pointer-events-none">“</span>
        
        <p className="text-lg md:text-xl font-bold italic text-white/95 leading-relaxed z-10 max-w-xl">
          "{target.quote}"
        </p>

        <span className="absolute bottom-1 right-12 text-7xl font-serif text-white/5 select-none pointer-events-none">”</span>

        {/* Quote Mode Type Badge */}
        <div className="mt-5 text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-rivals-gold" />
          Type: <strong className="text-white font-extrabold">{target.type}</strong>
        </div>
      </div>

      {/* Progressive Hints */}
      {showPartnerClue && (
        <div className="w-full max-w-lg flex flex-col gap-3 mb-6 animate-in zoom-in-95 duration-300">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xs p-4 text-center">
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center justify-center gap-2">
              <HelpIcon className="size-4 animate-bounce-subtle" />
              Hint: Context Partner / Trigger
            </p>
            <p className="text-sm font-black text-white mt-1.5 uppercase tracking-wide">
              {target.type === 'interaction' ? (
                <>Interaction Partner: <strong className="text-rivals-gold font-black">{target.clue}</strong></>
              ) : (
                <>Trigger Condition: <strong className="text-rivals-gold font-black">{target.clue}</strong></>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Input Form */}
      {!gameOver ? (
        <div className="w-full max-w-lg flex flex-col items-center mb-10 z-30">
          {/* Progress Bar */}
          <div className="w-full flex justify-between items-center mb-3 text-xs font-bold text-white/50 uppercase tracking-widest">
            <span>Guesses: {guesses.length} / {MAX_GUESSES}</span>
            <div className="w-40 h-1.5 bg-[#111632] border border-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-rivals-gold transition-all duration-300" 
                style={{ width: `${(guesses.length / MAX_GUESSES) * 100}%` }}
              />
            </div>
          </div>

          <div className="w-full flex items-center gap-3">
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
                        onClick={() => handleHeroGuess(item)}
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
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>

            {/* Reset Practice Option */}
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
        </div>
      ) : (
        <div className="w-full max-w-lg flex flex-col items-center bg-[#0e1227]/90 border border-gold-500/20 rounded-xs p-6 mb-8 text-center animate-in fade-in-50 duration-500">
          {wonState ? (
            <>
              <p className="text-sm font-bold text-rivals-gold uppercase tracking-widest mb-1">Victory!</p>
              <h3 className="text-3xl font-black text-white uppercase tracking-wider">Correct Hero!</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-4">
                The target hero was <span className="text-white font-bold">{target.character}</span>.
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-bold text-rivals-crimson uppercase tracking-widest mb-1">Defeat</p>
              <h3 className="text-3xl font-black text-white uppercase tracking-wider">Out of Guesses</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-4">
                The target hero was <span className="text-white font-bold">{target.character}</span>.
              </p>
            </>
          )}

          <div className="mb-4">
            <img
              src={getHeroImage(target.character)}
              alt={target.character}
              className="w-24 h-24 rounded-xs border-2 border-rivals-gold shadow-lg object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/150x150/171b35/ffffff?text=${target.character[0]}`;
              }}
            />
          </div>

          <p className="text-xs text-muted-foreground max-w-xs mt-2 italic">
            {target.type === 'interaction' ? (
              <>Trigger: Spoken to <strong className="text-white">{target.clue}</strong></>
            ) : (
              <>Trigger Condition: <strong className="text-white">{target.clue}</strong></>
            )}
          </p>

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
        <div className="text-center mb-8 bg-gradient-to-r from-rivals-gold/5 via-rivals-gold/10 to-rivals-gold/5 border border-rivals-gold/20 rounded-xs py-4 sm:py-5 px-6 sm:px-8 max-w-lg w-full animate-in fade-in-50 duration-500">
          <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rivals-gold animate-pulse" />
              The next daily challenge will be on
            </span>
            <span className="text-rivals-gold font-mono font-black text-base sm:text-xl md:text-2xl tracking-wide">{timeLeft}</span>
          </p>
        </div>
      )}

      {/* Guess History Logs */}
      {guesses.length > 0 && (
        <div className="w-full max-w-lg flex flex-col gap-2">
          <div className="text-xs font-black uppercase text-muted-foreground tracking-widest mb-1 px-1">
            Guess History
          </div>
          {guesses.map((guess, idx) => {
            const isTarget = guess.name.toLowerCase() === target.character.toLowerCase();
            return (
              <div
                key={guess.name}
                className={`flex items-center justify-between border rounded-xs p-3 duration-500 animate-in fade-in-50 duration-300 ${
                  isTarget
                    ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                    : "bg-rivals-crimson/10 border-rivals-crimson/25 text-rivals-crimson"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold opacity-60 w-5">#{idx + 1}</span>
                  <img
                    src={getHeroImage(guess.name)}
                    alt={guess.name}
                    className="w-10 h-10 rounded-xs border border-white/10 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/50x50/171b35/ffffff?text=${guess.name[0]}`;
                    }}
                  />
                  <span className="font-bold text-white text-base tracking-wide">{guess.name}</span>
                </div>
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-xs bg-white/5 border border-white/10">
                  {isTarget ? "Correct" : "Incorrect"}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
