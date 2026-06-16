import * as React from "react"
import { heroes } from "../../data/marvelRivalsData"
import type { Hero } from "../../data/marvelRivalsData"
import { heroSplashData } from "../../data/splashData"
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
  StarIcon
} from "../../components/shared/icons"

interface SplashGameProps {
  updateStats: (mode: string, won: boolean, guesses: number) => void
}

interface FocalPoint {
  x: number
  y: number
}

interface TargetInfo {
  heroName: string
  skinFilename: string // e.g. "Queen In Black.png"
  focalPoint: FocalPoint
}

// Deterministic seed mixer to pick the daily target hero, skin, and focal coordinates
function getDailySplashTarget(): TargetInfo {
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  const seed = y * 367 + m * 31 + d;
  
  // Mix seed for hero selection
  let seed1 = seed ^ (seed >> 16);
  seed1 = Math.imul(seed1, 0x85ebca6b);
  seed1 = seed1 ^ (seed1 >> 13);
  seed1 = Math.imul(seed1, 0xc2b2ae35);
  seed1 = seed1 ^ (seed1 >> 16);
  
  const heroNames = Object.keys(heroSplashData);
  const heroIndex = Math.abs(seed1) % heroNames.length;
  const heroName = heroNames[heroIndex];
  
  // Mix seed for skin selection
  let seed2 = seed ^ 0x55555555;
  seed2 = seed2 ^ (seed2 >> 16);
  seed2 = Math.imul(seed2, 0x3d4da5a3);
  seed2 = seed2 ^ (seed2 >> 13);
  seed2 = Math.imul(seed2, 0x1a8b9d6f);
  seed2 = seed2 ^ (seed2 >> 16);
  
  const skins = heroSplashData[heroName];
  const skinIndex = Math.abs(seed2) % skins.length;
  const skinFilename = skins[skinIndex];
  
  // Mix seed for focal point coordinates (between 20 and 80 to prevent cropping off screen)
  let seed3 = seed ^ 0xaaaaaaaa;
  seed3 = seed3 ^ (seed3 >> 16);
  seed3 = Math.imul(seed3, 0x7febca6b);
  const focalX = 20 + (Math.abs(seed3) % 61);
  
  let seed4 = seed ^ 0xf0f0f0f0;
  seed4 = seed4 ^ (seed4 >> 16);
  seed4 = Math.imul(seed4, 0x4fbc2a35);
  const focalY = 20 + (Math.abs(seed4) % 61);
  
  return {
    heroName,
    skinFilename,
    focalPoint: { x: focalX, y: focalY }
  };
}

// Generate random target info for unlimited practice session
function getUnlimitedSplashTarget(): TargetInfo {
  const heroNames = Object.keys(heroSplashData);
  const heroName = heroNames[Math.floor(Math.random() * heroNames.length)];
  const skins = heroSplashData[heroName];
  const skinFilename = skins[Math.floor(Math.random() * skins.length)];
  
  const focalX = 20 + Math.floor(Math.random() * 61);
  const focalY = 20 + Math.floor(Math.random() * 61);
  
  return {
    heroName,
    skinFilename,
    focalPoint: { x: focalX, y: focalY }
  };
}

export function SplashGame({ updateStats }: SplashGameProps) {
  const [isDaily, setIsDaily] = React.useState<boolean>(true);
  const [target, setTarget] = React.useState<TargetInfo>(getDailySplashTarget);
  const [guesses, setGuesses] = React.useState<Hero[]>([]);
  const [gameOver, setGameOver] = React.useState<boolean>(false);
  const [wonState, setWonState] = React.useState<boolean>(false);
  const [bonusWon, setBonusWon] = React.useState<boolean>(false);
  const [bonusGuesses, setBonusGuesses] = React.useState<string[]>([]);
  
  // Force reset autocomplete input
  const [comboboxKey, setComboboxKey] = React.useState<number>(0);
  const [bonusKey, setBonusKey] = React.useState<number>(0);

  // Persistence for Daily Mode
  const [dailyState, setDailyState] = useLocalStorage<any>("rivaled_splash_daily_state", {
    date: "",
    guesses: [],
    gameOver: false,
    won: false,
    target: null,
    bonusWon: false,
    bonusGuesses: []
  });

  // Persistence for Unlimited Mode
  const [unlimitedState, setUnlimitedState] = useLocalStorage<any>("rivaled_splash_unlimited_state", {
    guesses: [],
    gameOver: false,
    won: false,
    target: null,
    bonusWon: false,
    bonusGuesses: []
  });

  // Sync state with Daily vs Practice toggle
  React.useEffect(() => {
    if (isDaily) {
      const todayStr = new Date().toDateString();
      const dailyTarget = getDailySplashTarget();

      if (dailyState.date === todayStr && dailyState.target && dailyState.target.heroName === dailyTarget.heroName && dailyState.target.skinFilename === dailyTarget.skinFilename) {
        setTarget(dailyState.target);
        setGuesses(dailyState.guesses.map((name: string) => heroes.find(h => h.name === name)!));
        setGameOver(dailyState.gameOver);
        setWonState(dailyState.won);
        setBonusWon(dailyState.bonusWon || false);
        setBonusGuesses(dailyState.bonusGuesses || []);
      } else {
        // Clear state for a new day
        setTarget(dailyTarget);
        setGuesses([]);
        setGameOver(false);
        setWonState(false);
        setBonusWon(false);
        setBonusGuesses([]);
        setDailyState({
          date: todayStr,
          guesses: [],
          gameOver: false,
          won: false,
          target: dailyTarget,
          bonusWon: false,
          bonusGuesses: []
        });
      }
    } else {
      // Load Unlimited State
      if (unlimitedState.target && heroSplashData[unlimitedState.target.heroName]) {
        setTarget(unlimitedState.target);
        setGuesses(unlimitedState.guesses.map((name: string) => heroes.find(h => h.name === name)!));
        setGameOver(unlimitedState.gameOver);
        setWonState(unlimitedState.won);
        setBonusWon(unlimitedState.bonusWon || false);
        setBonusGuesses(unlimitedState.bonusGuesses || []);
      } else {
        startUnlimited();
      }
    }
    setComboboxKey(prev => prev + 1);
    setBonusKey(prev => prev + 1);
  }, [isDaily]);

  const startUnlimited = () => {
    const randomTarget = getUnlimitedSplashTarget();
    setTarget(randomTarget);
    setGuesses([]);
    setGameOver(false);
    setWonState(false);
    setBonusWon(false);
    setBonusGuesses([]);
    setComboboxKey(prev => prev + 1);
    setBonusKey(prev => prev + 1);
    setUnlimitedState({
      guesses: [],
      gameOver: false,
      won: false,
      target: randomTarget,
      bonusWon: false,
      bonusGuesses: []
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

    const isMatch = guessedHero.name.toLowerCase() === target.heroName.toLowerCase();
    const maxGuesses = 15;
    const isGameOver = isMatch || newGuesses.length >= maxGuesses;

    if (isMatch) {
      setWonState(true);
      setGameOver(true);
      audioSynth.playSuccess();
      updateStats("splash", true, newGuesses.length);
    } else if (newGuesses.length >= maxGuesses) {
      setGameOver(true);
      audioSynth.playFailure();
      updateStats("splash", false, newGuesses.length);
    } else {
      audioSynth.playClick();
    }

    // Save state
    const updatedState = {
      guesses: newGuesses.map(g => g.name),
      gameOver: isGameOver,
      won: isMatch,
      target,
      bonusWon: false,
      bonusGuesses: []
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

  const handleSkinGuess = (skinName: string) => {
    if (bonusWon) return;

    // strip extension for comparison
    const targetCleanName = target.skinFilename.replace(/\.(png|webp)$/i, '');
    const isCorrect = skinName.toLowerCase() === targetCleanName.toLowerCase();

    const newBonusGuesses = [...bonusGuesses, skinName];
    setBonusGuesses(newBonusGuesses);
    setBonusKey(prev => prev + 1);

    if (isCorrect) {
      setBonusWon(true);
      audioSynth.playSuccess();
    } else {
      audioSynth.playFailure();
    }

    // Persist
    if (isDaily) {
      setDailyState({
        ...dailyState,
        bonusWon: isCorrect,
        bonusGuesses: newBonusGuesses
      });
    } else {
      setUnlimitedState({
        ...unlimitedState,
        bonusWon: isCorrect,
        bonusGuesses: newBonusGuesses
      });
    }
  };

  // Autocomplete data: list of heroes, excluding already guessed heroes
  const autocompleteList = heroes
    .filter(h => !guesses.some(g => g.name === h.name))
    .map(h => h.name);

  // Bonus list of skins for the target hero (excluding extension and already guessed)
  const targetSkins = heroSplashData[target.heroName] || [];
  const bonusAutocompleteList = targetSkins
    .map(s => s.replace(/\.(png|webp)$/i, ''))
    .filter(s => !bonusGuesses.includes(s));

  const getHeroImage = (name: string) => {
    const formattedName = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[.&]/g, "");
    return `https://rivalskins.com/wp-content/uploads/marvel-assets/assets/hero-icons-avatars/${formattedName}_avatar.png`;
  };

  // Target image path inside the public/mvp_last_frames folder
  const imageUrl = `/mvp_last_frames/${encodeURIComponent(target.heroName)}/${encodeURIComponent(target.skinFilename)}`;

  // Math formula to decrease zoom: starts at 4.0x zoom, steps down slightly on each wrong guess, but never hits 1.0x until game over.
  // We use Math.max(1.3, ...) so it stays zoomed in at least 1.3x during all 15 tries.
  const currentScale = gameOver ? 1.0 : Math.max(1.3, 4.0 - (guesses.length * 0.18));
  const currentOrigin = gameOver ? "center" : `${target.focalPoint.x}% ${target.focalPoint.y}%`;

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
          Splash Mode
          <SparklesIcon className="size-6 text-rivals-gold animate-pulse" />
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5 max-w-md mx-auto">
          Guess the secret hero from the cropped splash art rendering. You have up to 15 tries. The image zooms out slightly with each incorrect guess!
        </p>
      </div>

      {/* Zoomed Splash Art frame */}
      <div className="relative w-full aspect-video max-w-xl overflow-hidden rounded-xs border-2 border-rivals-gold/20 bg-[#0e1227]/90 shadow-2xl mb-8 flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Splash Art Clue"
          className="w-full h-full object-cover transition-all duration-700 ease-out"
          style={{
            transform: `scale(${currentScale})`,
            transformOrigin: currentOrigin
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/800x450/171b35/ffffff?text=${encodeURIComponent(target.heroName)}`;
          }}
        />
        
        {/* Help icon showing the random focal coordinates in developmental test if required */}
        <div className="absolute top-3 right-3 bg-black/50 text-white/50 text-[10px] px-2 py-1 rounded-xs uppercase tracking-wider backdrop-blur-sm pointer-events-none">
          Try {guesses.length + 1} / 15
        </div>
      </div>

      {/* Guess input row */}
      {!gameOver ? (
        <div className="w-full max-w-lg flex flex-col items-center mb-10 z-30">
          {/* Guess Tracker Progress Bar */}
          <div className="w-full flex justify-between items-center mb-3 text-xs font-bold text-white/50 uppercase tracking-widest">
            <span>Guesses: {guesses.length} / 15</span>
            <div className="w-40 h-1.5 bg-[#111632] border border-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-rivals-gold transition-all duration-300" 
                style={{ width: `${(guesses.length / 15) * 100}%` }}
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
              <h3 className="text-3xl font-black text-white uppercase tracking-wider">Target Hero Unveiled</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-4">
                The target hero was <span className="text-white font-bold">{target.heroName}</span>!
              </p>

              {/* Bonus Section for Skinline Guess */}
              <div className="w-full border-t border-white/5 pt-6 mt-4 text-center">
                <h4 className="text-md font-extrabold text-white uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
                  <StarIcon className="size-4 text-rivals-gold animate-bounce-subtle" />
                  Bonus Round: Guess the Skinline!
                  <StarIcon className="size-4 text-rivals-gold animate-bounce-subtle" />
                </h4>
                
                {bonusWon ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xs p-4 mt-3 animate-in zoom-in-95 duration-300">
                    <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Bonus Completed!</p>
                    <p className="text-xs text-white/90 mt-1">
                      You guessed it! The skin is <strong className="text-white font-black">{target.skinFilename.replace(/\.(png|webp)$/i, '')}</strong>!
                    </p>
                  </div>
                ) : (
                  <div className="w-full flex flex-col items-center mt-4 z-20">
                    {bonusGuesses.length > 0 && (
                      <div className="w-full mb-3 flex flex-wrap gap-2 justify-center">
                        {bonusGuesses.map((bg, idx) => (
                          <span key={idx} className="bg-rivals-crimson/15 border border-rivals-crimson/30 text-rivals-crimson text-xs font-bold px-3 py-1 rounded-xs uppercase tracking-wider animate-in fade-in duration-300">
                            {bg}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="w-full">
                      <Combobox key={bonusKey} items={bonusAutocompleteList}>
                        <ComboboxInput
                          placeholder="Type skinline name..."
                          className="h-12 w-full rounded-xs border border-rivals-gold/20 bg-[#0e1227] text-white text-base px-4 focus-visible:border-rivals-gold focus-visible:ring-1 focus-visible:ring-rivals-gold"
                        />
                        <ComboboxContent className="mt-1 max-h-[200px] overflow-hidden rounded-xs border border-white/10 bg-[#0e1227] shadow-2xl backdrop-blur-md">
                          <ComboboxEmpty className="p-3 text-xs text-gray-400 text-center">
                            No skin matches search.
                          </ComboboxEmpty>
                          <ComboboxList className="max-h-[180px] overflow-y-auto">
                            {(item) => (
                              <ComboboxItem
                                key={item}
                                value={item}
                                className="flex items-center px-4 py-3 hover:bg-white/5 cursor-pointer text-white text-sm font-bold transition-colors border-b border-white/[0.03]"
                                onClick={() => handleSkinGuess(item)}
                              >
                                {item}
                              </ComboboxItem>
                            )}
                          </ComboboxList>
                        </ComboboxContent>
                      </Combobox>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <p className="text-sm font-bold text-rivals-crimson uppercase tracking-widest mb-1">Defeat</p>
              <h3 className="text-3xl font-black text-white uppercase tracking-wider">Out of Guesses</h3>
              <p className="text-sm text-muted-foreground mt-2">
                The target hero was <span className="text-white font-bold">{target.heroName}</span> and the skin was <span className="text-white font-bold">{target.skinFilename.replace(/\.(png|webp)$/i, '')}</span>.
              </p>
            </>
          )}

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

      {/* Guesses Cards Grid */}
      {guesses.length > 0 && (
        <div className="w-full max-w-lg flex flex-col gap-2">
          <div className="text-xs font-black uppercase text-muted-foreground tracking-widest mb-1 px-1">
            Guess History
          </div>
          {guesses.map((guess, idx) => {
            const isTarget = guess.name.toLowerCase() === target.heroName.toLowerCase();
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
