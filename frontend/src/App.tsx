import * as React from "react"
import { useLocalStorage } from "./hooks/useLocalStorage"
import { audioSynth } from "./lib/audio"
import { Tabs } from "./components/shared/tabs"
import { Modal } from "./components/shared/modal"
import { Button } from "./components/ui/button"

// Game modes
import { ClassicGame } from "./features/classic/classic"
import { SplashGame } from "./features/splash/splash"
import { AbilityGame } from "./features/ability/ability"
import { QuoteGame } from "./features/quote/quote"
import { StatsTracker } from "./features/stats/stats"

// Inline custom icons
import {
  TrophyIcon,
  SettingsIcon,
  VolumeUpIcon,
  VolumeMuteIcon,
  SunIcon,
  MoonIcon,
  HelpIcon,
  StarIcon,
  BookOpenIcon,
  QuoteIcon
} from "./components/shared/icons"

const INITIAL_STATS = {
  classic: { gamesPlayed: 0, gamesWon: 0, currentStreak: 0, maxStreak: 0, guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 } },
  splash: { gamesPlayed: 0, gamesWon: 0, currentStreak: 0, maxStreak: 0, guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0 } },
  ability: { gamesPlayed: 0, gamesWon: 0, currentStreak: 0, maxStreak: 0, guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 } },
  quote: { gamesPlayed: 0, gamesWon: 0, currentStreak: 0, maxStreak: 0, guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 } }
};

function App() {
  const [activeTab, setActiveTab] = React.useState<string>("classic");
  const [isMuted, setIsMuted] = React.useState<boolean>(audioSynth.getMute());
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("rivaled_theme", "dark");

  // Modals state
  const [isStatsOpen, setIsStatsOpen] = React.useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = React.useState<boolean>(false);

  // Global Statistics state
  const [stats, setStats] = useLocalStorage<any>("rivaled_game_stats_v3", INITIAL_STATS);

  // Sync theme to DOM element
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    audioSynth.playClick();
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMute = () => {
    const newMute = !isMuted;
    setIsMuted(newMute);
    audioSynth.setMute(newMute);
    audioSynth.playClick();
  };

  const handleResetStats = () => {
    setStats(INITIAL_STATS);
    // Also reset daily status value in localStorage
    localStorage.removeItem("rivaled_daily_state");
    setIsSettingsOpen(false);
  };

  const updateStats = (mode: string, won: boolean, guesses: number) => {
    setStats((prevStats: any) => {
      const copy = { ...prevStats };
      if (!copy[mode]) {
        const dist = mode === "splash"
          ? { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0 }
          : mode === "ability"
            ? { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 }
            : mode === "quote"
              ? { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
              : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 };
        copy[mode] = { gamesPlayed: 0, gamesWon: 0, currentStreak: 0, maxStreak: 0, guessDistribution: dist };
      }

      const mStats = copy[mode];
      mStats.gamesPlayed += 1;

      if (won) {
        mStats.gamesWon += 1;
        mStats.currentStreak += 1;
        mStats.maxStreak = Math.max(mStats.maxStreak, mStats.currentStreak);

        // Add guess bucket
        if (!mStats.guessDistribution[guesses]) {
          mStats.guessDistribution[guesses] = 0;
        }
        mStats.guessDistribution[guesses] += 1;
      } else {
        mStats.currentStreak = 0;
      }

      return copy;
    });
  };

  const handleWin = () => {
    // Left empty for compile hook
  };

  const handleLose = () => {
    // Left empty for compile hook
  };

  const tabOptions = [
    { id: "classic", label: "Classic Mode", icon: <StarIcon className="size-5" /> },
    { id: "splash", label: "Splash Mode", icon: <HelpIcon className="size-5" /> },
    { id: "ability", label: "Ability Mode", icon: <BookOpenIcon className="size-5" /> },
    { id: "quote", label: "Quote Mode", icon: <QuoteIcon className="size-5" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-foreground transition-colors duration-300">

      {/* Top Brand & Header Section */}
      <header className="w-full bg-transparent relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col items-center relative">

          {/* Action Controls (Top Right) */}
          <div className="absolute top-4 right-4 sm:right-6 flex items-center gap-1 sm:gap-1.5 z-20">
            {/* Help Instructions */}
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => {
                audioSynth.playClick();
                setIsInstructionsOpen(true);
              }}
              className="text-muted-foreground hover:text-white rounded-xs cursor-pointer p-1"
              title="How to Play"
            >
              <HelpIcon className="size-4 sm:size-5" />
            </Button>

            {/* Statistics Toggle */}
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => {
                audioSynth.playClick();
                setIsStatsOpen(true);
              }}
              className="text-muted-foreground hover:text-white rounded-xs cursor-pointer p-1"
              title="Stats"
            >
              <TrophyIcon className="size-4 sm:size-5" />
            </Button>

            {/* Settings Toggle */}
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => {
                audioSynth.playClick();
                setIsSettingsOpen(true);
              }}
              className="text-muted-foreground hover:text-white rounded-xs cursor-pointer p-1"
              title="Settings"
            >
              <SettingsIcon className="size-4 sm:size-5" />
            </Button>
          </div>

          {/* Centered Brand Identity (RIVALED Logo + Tagline) */}
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="/rivaled_logo.png"
              alt="RIVALED"
              className="h-20 sm:h-26 md:h-32 lg:h-40 max-w-full w-auto object-contain drop-shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all duration-300 transform hover:scale-105"
              draggable={false}
            />
            <span className="text-xs sm:text-sm md:text-base font-black text-muted-foreground uppercase tracking-widest block mt-2 sm:mt-2.5 leading-none">
              Marvel Rivals Guessing Game
            </span>
          </div>

        </div>
      </header>

      {/* Game Mode Menu Bar (Square Corners: rounded-none) */}
      <div className="w-full max-w-3xl sm:max-w-4xl mx-auto px-4 my-2 relative z-30">
        <nav className="bg-[#080c1d]/90 backdrop-blur-md border border-rivals-gold/25 rounded-none shadow-2xl shadow-black/60 px-3 sm:px-6 py-1.5 flex items-center justify-center transition-all duration-300">
          <Tabs
            options={tabOptions}
            activeTab={activeTab}
            onChange={setActiveTab}
            className="w-full"
          />
        </nav>
      </div>

      {/* Primary Content Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
        <div className={activeTab === "classic" ? "w-full" : "hidden"}>
          <ClassicGame
            onWin={handleWin}
            onLose={handleLose}
            updateStats={updateStats}
          />
        </div>
        <div className={activeTab === "splash" ? "w-full" : "hidden"}>
          <SplashGame
            updateStats={updateStats}
            isActive={activeTab === "splash"}
          />
        </div>
        <div className={activeTab === "ability" ? "w-full" : "hidden"}>
          <AbilityGame
            updateStats={updateStats}
            isActive={activeTab === "ability"}
          />
        </div>
        <div className={activeTab === "quote" ? "w-full" : "hidden"}>
          <QuoteGame
            updateStats={updateStats}
            isActive={activeTab === "quote"}
          />
        </div>
      </main>

      {/* Global Footer */}
      <footer className="w-full border-t border-white/5 py-4 text-center text-xs text-muted-foreground mt-8">
        <p>© 2026 Rivaled. Inspired by LoLdle.net and Marvel Rivals. Fan-made project.</p>
      </footer>

      {/* MODAL: How to Play Instructions */}
      <Modal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
        title="How to Play Rivaled"
        size="md"
      >
        <div className="flex flex-col gap-5 text-sm text-white/90 leading-relaxed max-h-[450px] overflow-y-auto pr-1">
          <div>
            <h4 className="font-bold text-rivals-gold uppercase tracking-wider mb-2">Classic Guessing Game</h4>
            <p className="text-xs text-muted-foreground mb-3">
              Guess the secret hero. With each guess, columns update showing matching traits:
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground flex flex-col gap-1.5">
              <li><strong className="text-white">Green:</strong> Exact match for that character trait.</li>
              <li><strong className="text-white">Orange:</strong> Near match (e.g. debut year is within 10 years of target).</li>
              <li><strong className="text-white">Red:</strong> Incorrect trait.</li>
              <li><strong className="text-white">Arrows (↑/↓):</strong> Indicates if the target debut year is higher or lower than your guess.</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3">
              The target hero's difficulty rating (out of 5 stars) will be revealed as a special hint after 6 incorrect attempts.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4">
            <h4 className="font-bold text-rivals-gold uppercase tracking-wider mb-2">Splash Guessing Game</h4>
            <p className="text-xs text-muted-foreground">
              Guess the hero from a cropped section of their splash art. The image zooms out slightly on each wrong attempt. You have up to 15 attempts.
            </p>
          </div>

          <div className="border-t border-white/5 pt-4">
            <h4 className="font-bold text-rivals-gold uppercase tracking-wider mb-2">Ability Guessing Game</h4>
            <p className="text-xs text-muted-foreground">
              Identify the hero purely from one of their ability icon images. You have a maximum of 10 attempts.
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground flex flex-col gap-1.5 mt-2">
              <li><strong className="text-white">Hint:</strong> After 6 wrong guesses, the name of the ability is revealed.</li>
              <li><strong className="text-white">Bonus Round:</strong> Once you guess the hero correctly, you can try to guess which keybind triggers that ability!</li>
            </ul>
          </div>

          <div className="border-t border-white/5 pt-4">
            <h4 className="font-bold text-rivals-gold uppercase tracking-wider mb-2">Quote Guessing Game</h4>
            <p className="text-xs text-muted-foreground">
              Identify the hero based on in-game chatter or character interaction quotes. You have a maximum of 6 attempts.
            </p>
            <ul className="list-disc pl-5 text-xs text-muted-foreground flex flex-col gap-1.5 mt-2">
              <li><strong className="text-white">Hint:</strong> After 3 wrong guesses, the interaction partner or chatter trigger condition is revealed.</li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* MODAL: Statistics */}
      <Modal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        title="Player Statistics"
        size="md"
      >
        <StatsTracker stats={stats} onReset={handleResetStats} />
      </Modal>

      {/* MODAL: Settings */}
      <Modal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        title="Settings & Adjustments"
        size="sm"
      >
        <div className="flex flex-col gap-5">
          {/* Sound Synthesizer */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">Audio Sound FX</span>
              <span className="text-xs text-muted-foreground">Synthesized game sounds for feedback</span>
            </div>
            <Button
              onClick={toggleMute}
              variant="outline"
              size="lg"
              className="border-white/10 text-white rounded-xs cursor-pointer"
            >
              {isMuted ? (
                <>
                  <VolumeMuteIcon className="mr-1.5 size-5 text-rivals-crimson" />
                  Muted
                </>
              ) : (
                <>
                  <VolumeUpIcon className="mr-1.5 size-5 text-rivals-gold" />
                  Enabled
                </>
              )}
            </Button>
          </div>

          {/* Theme Switcher */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">Color Theme</span>
              <span className="text-xs text-muted-foreground">Toggle light/dark screen styling</span>
            </div>
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="lg"
              className="border-white/10 text-white rounded-xs cursor-pointer"
            >
              {theme === "dark" ? (
                <>
                  <MoonIcon className="mr-1.5 size-5 text-rivals-gold" />
                  Dark Mode
                </>
              ) : (
                <>
                  <SunIcon className="mr-1.5 size-5 text-yellow-400" />
                  Light Mode
                </>
              )}
            </Button>
          </div>

          {/* Stats cleaner */}
          <div className="flex items-center justify-between pb-1">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-rivals-crimson">Reset Progress</span>
              <span className="text-xs text-muted-foreground">Clear game histories & statistics</span>
            </div>
            <Button
              onClick={handleResetStats}
              variant="destructive"
              size="lg"
              className="rounded-xs cursor-pointer"
            >
              Reset All
            </Button>
          </div>
        </div>
      </Modal>

    </div>
  );
}

export default App;