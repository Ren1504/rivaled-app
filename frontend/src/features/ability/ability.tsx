import * as React from "react"
import { heroes } from "../../data/marvelRivalsData"
import type { Hero } from "../../data/marvelRivalsData"
import { heroAbilitiesData } from "../../data/marvelRivalsAbilities"
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

interface AbilityGameProps {
  updateStats: (mode: string, won: boolean, guesses: number) => void
  isActive: boolean
}

interface AbilityTarget {
  heroName: string
  abilityName: string
  abilitySlug: string
  button: string
  localImgUrl: string
}

// Deterministic daily picker seeded by date
function getDailyAbilityTarget(): AbilityTarget {
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  const seed = (y * 367 + m * 31 + d) ^ 0x5a6b7c8d;
  
  // Mix seed for hero selection
  let seed1 = seed ^ (seed >> 16);
  seed1 = Math.imul(seed1, 0x85ebca6b);
  seed1 = seed1 ^ (seed1 >> 13);
  seed1 = Math.imul(seed1, 0xc2b2ae35);
  seed1 = seed1 ^ (seed1 >> 16);
  
  const heroIndex = Math.abs(seed1) % heroes.length;
  const targetHero = heroes[heroIndex];
  const heroKey = targetHero.name.toUpperCase();
  
  const abilities = heroAbilitiesData[heroKey] || [];
  
  // Mix seed for ability selection
  let seed2 = seed ^ 0x55555555;
  seed2 = seed2 ^ (seed2 >> 16);
  seed2 = Math.imul(seed2, 0x3d4da5a3);
  seed2 = seed2 ^ (seed2 >> 13);
  seed2 = Math.imul(seed2, 0x1a8b9d6f);
  seed2 = seed2 ^ (seed2 >> 16);
  
  if (abilities.length === 0) {
    // Fallback in case of missing data
    return {
      heroName: "Hulk",
      abilityName: "Radioactive Lockdown",
      abilitySlug: "radioactive-lockdown",
      button: "E",
      localImgUrl: "/ability_images/hulk/radioactive-lockdown.png"
    };
  }
  
  const abilityIndex = Math.abs(seed2) % abilities.length;
  const ability = abilities[abilityIndex];
  
  return {
    heroName: targetHero.name,
    abilityName: ability.name,
    abilitySlug: ability.slug,
    button: ability.button,
    localImgUrl: ability.localImgUrl || ""
  };
}

// Random picker for practice mode
function getUnlimitedAbilityTarget(): AbilityTarget {
  const heroesWithAbilities = heroes.filter(h => {
    const list = heroAbilitiesData[h.name.toUpperCase()];
    return list && list.length > 0;
  });
  
  if (heroesWithAbilities.length === 0) {
    return {
      heroName: "Hulk",
      abilityName: "Radioactive Lockdown",
      abilitySlug: "radioactive-lockdown",
      button: "E",
      localImgUrl: "/ability_images/hulk/radioactive-lockdown.png"
    };
  }
  
  const targetHero = heroesWithAbilities[Math.floor(Math.random() * heroesWithAbilities.length)];
  const abilities = heroAbilitiesData[targetHero.name.toUpperCase()];
  const ability = abilities[Math.floor(Math.random() * abilities.length)];
  
  return {
    heroName: targetHero.name,
    abilityName: ability.name,
    abilitySlug: ability.slug,
    button: ability.button,
    localImgUrl: ability.localImgUrl || ""
  };
}

const STANDARD_KEYBINDS = ['Left Click', 'Right Click', 'Q', 'E', 'SHIFT', 'F', 'Space', 'Passive'];

export function AbilityGame({ updateStats, isActive: _isActive }: AbilityGameProps) {
  const [isDaily, setIsDaily] = React.useState<boolean>(true);
  const [target, setTarget] = React.useState<AbilityTarget>(getDailyAbilityTarget);
  const [guesses, setGuesses] = React.useState<Hero[]>([]);
  const [gameOver, setGameOver] = React.useState<boolean>(false);
  const [wonState, setWonState] = React.useState<boolean>(false);
  const [bonusWon, setBonusWon] = React.useState<boolean>(false);
  const [bonusGuesses, setBonusGuesses] = React.useState<string[]>([]);
  
  const [comboboxKey, setComboboxKey] = React.useState<number>(0);

  // Persistence for Daily Mode
  const [dailyState, setDailyState] = useLocalStorage<any>("rivaled_ability_daily_state", {
    date: "",
    guesses: [],
    gameOver: false,
    won: false,
    target: null,
    bonusWon: false,
    bonusGuesses: []
  });

  // Persistence for Unlimited Mode
  const [unlimitedState, setUnlimitedState] = useLocalStorage<any>("rivaled_ability_unlimited_state", {
    guesses: [],
    gameOver: false,
    won: false,
    target: null,
    bonusWon: false,
    bonusGuesses: []
  });

  // Sync state with mode toggles
  React.useEffect(() => {
    if (isDaily) {
      const todayStr = new Date().toDateString();
      const dailyTarget = getDailyAbilityTarget();

      if (
        dailyState.date === todayStr && 
        dailyState.target && 
        dailyState.target.abilityName === dailyTarget.abilityName
      ) {
        setTarget(dailyState.target);
        setGuesses(dailyState.guesses.map((name: string) => heroes.find(h => h.name === name)!));
        setGameOver(dailyState.gameOver);
        setWonState(dailyState.won);
        setBonusWon(dailyState.bonusWon || false);
        setBonusGuesses(dailyState.bonusGuesses || []);
      } else {
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
      if (unlimitedState.target && heroAbilitiesData[unlimitedState.target.heroName.toUpperCase()]) {
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
  }, [isDaily]);

  const startUnlimited = () => {
    const randomTarget = getUnlimitedAbilityTarget();
    setTarget(randomTarget);
    setGuesses([]);
    setGameOver(false);
    setWonState(false);
    setBonusWon(false);
    setBonusGuesses([]);
    setComboboxKey(prev => prev + 1);
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
    const maxGuesses = 10;
    const isGameOver = isMatch || newGuesses.length >= maxGuesses;

    if (isMatch) {
      setWonState(true);
      setGameOver(true);
      audioSynth.playSuccess();
      updateStats("ability", true, newGuesses.length);
    } else if (newGuesses.length >= maxGuesses) {
      setGameOver(true);
      audioSynth.playFailure();
      updateStats("ability", false, newGuesses.length);
    } else {
      audioSynth.playClick();
    }

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

  const handleBonusGuess = (keybind: string) => {
    if (bonusGuesses.length > 0) return; // Prevent multiple guesses

    const isCorrect = keybind.toLowerCase() === target.button.toLowerCase();
    const newBonusGuesses = [keybind];
    setBonusGuesses(newBonusGuesses);

    if (isCorrect) {
      setBonusWon(true);
      audioSynth.playSuccess();
    } else {
      audioSynth.playFailure();
    }

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

  // Autocomplete: filter out already guessed heroes
  const autocompleteList = heroes
    .filter(h => !guesses.some(g => g.name === h.name))
    .map(h => h.name);

  // Dynamic keys array ensuring target keybind is included
  const displayButtons = React.useMemo(() => {
    const list = [...STANDARD_KEYBINDS];
    const targetKey = target.button;
    if (!list.some(b => b.toLowerCase() === targetKey.toLowerCase())) {
      list.push(targetKey);
    }
    return list;
  }, [target.button]);

  const getHeroImage = (name: string) => {
    const formattedName = name
      .toLowerCase()
      .replace(/\s*&\s*/g, "-and-")
      .replace(/\s+/g, "-")
      .replace(/[.']/g, "");
    return `/hero-icons/${formattedName}_avatar.png`;
  };

  const showHint = guesses.length >= 6 && !wonState;
  const maxAttempts = 10;

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-6">
      
      {/* Mode Select Tabs */}
      <div className="flex bg-[#111632] border border-white/5 rounded-xs p-1 mb-8 shadow-inner">
        <button
          onClick={() => {
            audioSynth.playClick();
            setIsDaily(true);
          }}
          className={`px-5 py-1.5 rounded-xs text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
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
          className={`px-5 py-1.5 rounded-xs text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
            !isDaily
              ? "bg-rivals-gold text-rivals-obsidian shadow-lg"
              : "text-muted-foreground hover:text-white"
          }`}
        >
          Unlimited Practice
        </button>
      </div>

      {/* Title / Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black uppercase text-gold-gradient tracking-widest flex items-center justify-center gap-2">
          <SparklesIcon className="size-6 text-rivals-gold animate-pulse" />
          Ability Mode
          <SparklesIcon className="size-6 text-rivals-gold animate-pulse" />
        </h2>
        <p className="text-xs text-muted-foreground mt-1.5 max-w-md mx-auto">
          Guess the hero associated with this ability icon. Max of {maxAttempts} tries. The name of the ability is revealed as a hint after 6 wrong guesses.
        </p>
      </div>

      {/* Redacted Clue Panel */}
      <div className="relative w-40 h-40 overflow-hidden rounded-xs border-2 border-rivals-gold/25 bg-white shadow-2xl mb-8 flex flex-col items-center justify-center p-3 animate-in fade-in duration-300">
        <img
          src={target.localImgUrl}
          alt="Ability Clue Icon"
          className="w-24 h-24 object-contain transition-all hover:scale-105 duration-300 filter drop-shadow-[0_0_8px_rgba(0,0,0,0.15)]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/150x150/ffffff/000000?text=?`;
          }}
        />
        <div className="absolute top-2 right-2 bg-black/45 text-white/90 text-[10px] px-1.5 py-0.5 rounded-xs font-bold uppercase tracking-wider">
          Clue
        </div>
      </div>

      {/* Clue Hint Reveal */}
      {showHint && (
        <div className="w-full max-w-lg bg-amber-500/10 border border-amber-500/30 rounded-xs p-4 mb-6 text-center animate-in zoom-in-95 duration-300">
          <p className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <StarIcon className="size-4 animate-spin-slow" />
            Rivaled Hint: Ability Name Revealed
            <StarIcon className="size-4 animate-spin-slow" />
          </p>
          <p className="text-sm font-black text-white mt-1.5 uppercase tracking-wide">
            "{target.abilityName}"
          </p>
        </div>
      )}

      {/* Guess Input Form */}
      {!gameOver ? (
        <div className="w-full max-w-lg flex flex-col items-center mb-10 z-30">
          {/* Tracker Progress Bar */}
          <div className="w-full flex justify-between items-center mb-3 text-xs font-bold text-white/50 uppercase tracking-widest">
            <span>Guesses: {guesses.length} / {maxAttempts}</span>
            <div className="w-40 h-1.5 bg-[#111632] border border-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-rivals-gold transition-all duration-300" 
                style={{ width: `${(guesses.length / maxAttempts) * 100}%` }}
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
                The target hero was <span className="text-white font-bold">{target.heroName}</span>, and the ability was <strong className="text-white font-extrabold">"{target.abilityName}"</strong>.
              </p>

              {/* Bonus Section for Keybind Guess */}
              <div className="w-full border-t border-white/5 pt-6 mt-4 text-center">
                <h4 className="text-md font-extrabold text-white uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
                  <StarIcon className="size-4 text-rivals-gold animate-bounce-subtle" />
                  Bonus Round: Guess the Keybind/Button!
                  <StarIcon className="size-4 text-rivals-gold animate-bounce-subtle" />
                </h4>
                
                {bonusGuesses.length > 0 ? (
                  bonusWon ? (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xs p-3 mt-3 mb-1 animate-in zoom-in-95 duration-300">
                      <p className="text-sm font-black text-emerald-400 uppercase tracking-widest">Bonus Completed!</p>
                    </div>
                  ) : (
                    <div className="bg-rivals-crimson/10 border border-rivals-crimson/25 rounded-xs p-3 mt-3 mb-1 animate-in zoom-in-95 duration-300">
                      <p className="text-sm font-black text-rivals-crimson uppercase tracking-widest">Bonus Failed!</p>
                    </div>
                  )
                ) : (
                  <p className="text-xs text-muted-foreground mb-1">
                    Select which control button triggers this ability (You only have 1 chance!):
                  </p>
                )}

                <div className="w-full flex flex-col items-center mt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
                    {displayButtons.map((btn) => {
                      const isLeftClick = btn.toLowerCase() === "left click";
                      const isRightClick = btn.toLowerCase() === "right click";
                      const isCorrect = btn.toLowerCase() === target.button.toLowerCase();
                      const isGuessed = bonusGuesses.some(bg => bg.toLowerCase() === btn.toLowerCase());

                      let btnClass = "";
                      if (bonusGuesses.length > 0) {
                        if (isCorrect) {
                          btnClass = "bg-emerald-500/20 border-emerald-500 text-emerald-400 cursor-not-allowed";
                        } else if (isGuessed) {
                          btnClass = "bg-rivals-crimson/20 border-rivals-crimson text-rivals-crimson line-through cursor-not-allowed";
                        } else {
                          btnClass = "bg-[#111632]/50 border-white/5 text-white/30 opacity-30 cursor-not-allowed";
                        }
                      } else {
                        btnClass = "bg-[#111632] border-white/10 hover:border-rivals-gold text-white hover:bg-white/5 cursor-pointer";
                      }

                      return (
                        <button
                          key={btn}
                          disabled={bonusGuesses.length > 0}
                          onClick={() => handleBonusGuess(btn)}
                          className={`py-3 px-2 rounded-xs border text-xs font-black tracking-wider uppercase transition-all duration-200 shadow-md flex items-center justify-center gap-2 ${btnClass}`}
                        >
                          {isLeftClick ? (
                            <img
                              src="https://www.marvelrivals.com/pc/gw/20241128194803/img/sbzj_5901af42.png"
                              alt="Left Click"
                              className={`h-6 object-contain transition-all ${
                                bonusGuesses.length > 0
                                  ? isCorrect
                                    ? "brightness-125"
                                    : "opacity-25 grayscale"
                                  : ""
                              }`}
                            />
                          ) : isRightClick ? (
                            <img
                              src="https://www.marvelrivals.com/pc/gw/20241128194803/img/sbyj_ec1b2d5e.png"
                              alt="Right Click"
                              className={`h-6 object-contain transition-all ${
                                bonusGuesses.length > 0
                                  ? isCorrect
                                    ? "brightness-125"
                                    : "opacity-25 grayscale"
                                  : ""
                              }`}
                            />
                          ) : (
                            btn
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm font-bold text-rivals-crimson uppercase tracking-widest mb-1">Defeat</p>
              <h3 className="text-3xl font-black text-white uppercase tracking-wider">Out of Guesses</h3>
              <p className="text-sm text-muted-foreground mt-2">
                The target hero was <span className="text-white font-bold">{target.heroName}</span>, and the ability was <strong className="text-white">"{target.abilityName}"</strong> (Key: {target.button}).
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

      {/* Guess History Logs */}
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
