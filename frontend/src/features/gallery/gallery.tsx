import * as React from "react"
import { heroes } from "../../data/marvelRivalsData"
import type { Hero, Role } from "../../data/marvelRivalsData"
import { heroExtraData } from "../../data/marvelRivalsExtraData"
import type { HeroExtra } from "../../data/marvelRivalsExtraData"
import { Modal } from "../../components/shared/modal"
import { Card } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { audioSynth } from "../../lib/audio"

// Custom inline SVG icons
import {
  ShieldIcon,
  SwordIcon,
  HelpIcon,
  StarIcon,
  SearchIcon,
  CalendarIcon,
  BookOpenIcon,
  GlobeIcon,
  UserIcon,
  SettingsIcon
} from "../../components/shared/icons"

export function HeroGallery() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [selectedRole, setSelectedRole] = React.useState<string>("All");
  const [selectedAttack, setSelectedAttack] = React.useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<string>("All");
  
  // Selected hero for modal detail view
  const [activeHero, setActiveHero] = React.useState<Hero | null>(null);

  const getHeroImage = (name: string) => {
    const formattedName = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[.&]/g, "");
    return `https://rivalskins.com/wp-content/uploads/marvel-assets/assets/hero-icons-avatars/${formattedName}_avatar.png`;
  };

  const getRoleIcon = (role: Role) => {
    switch (role) {
      case "Vanguard":
        return <ShieldIcon className="size-4 text-role-vanguard mr-1 inline" />;
      case "Duelist":
        return <SwordIcon className="size-4 text-role-duelist mr-1 inline" />;
      case "Strategist":
        return <HelpIcon className="size-4 text-role-strategist mr-1 inline" />;
      default:
        return <StarIcon className="size-4 text-role-versatile mr-1 inline" />;
    }
  };

  // Filter logic
  const filteredHeroes = heroes.filter(hero => {
    const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "All" || hero.role === selectedRole;
    const matchesAttack = selectedAttack === "All" || hero.primaryAttack === selectedAttack;
    const matchesDiff = selectedDifficulty === "All" || hero.difficulty.toString() === selectedDifficulty;
    
    return matchesSearch && matchesRole && matchesAttack && matchesDiff;
  });

  const handleHeroClick = (hero: Hero) => {
    audioSynth.playClick();
    setActiveHero(hero);
  };

  const activeExtra: HeroExtra | null = activeHero ? heroExtraData[activeHero.name] : null;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      
      {/* Search & Filter Bar */}
      <div className="bg-[#0e1227]/90 border border-white/5 rounded-2xl p-6 mb-8 flex flex-col gap-4 shadow-xl">
        <h3 className="text-sm font-bold text-rivals-gold uppercase tracking-widest">Filter Hero Database</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Search input */}
          <div className="relative md:col-span-1">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
              <SearchIcon className="size-4" />
            </span>
            <Input
              type="text"
              placeholder="Search hero..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-10 bg-[#111632] border-white/10 rounded-xl text-white placeholder-muted-foreground focus-visible:border-rivals-gold text-sm"
            />
          </div>

          {/* Role Filter */}
          <div>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full h-10 bg-[#111632] border border-white/10 text-white rounded-xl px-3 text-sm focus:outline-hidden focus:border-rivals-gold cursor-pointer"
            >
              <option value="All">All Roles</option>
              <option value="Vanguard">Vanguard (Tank)</option>
              <option value="Duelist">Duelist (DPS)</option>
              <option value="Strategist">Strategist (Support)</option>
              <option value="Versatile">Versatile</option>
            </select>
          </div>

          {/* Primary Attack Filter */}
          <div>
            <select
              value={selectedAttack}
              onChange={(e) => setSelectedAttack(e.target.value)}
              className="w-full h-10 bg-[#111632] border border-white/10 text-white rounded-xl px-3 text-sm focus:outline-hidden focus:border-rivals-gold cursor-pointer"
            >
              <option value="All">All Attack Types</option>
              <option value="Hitscan">Hitscan</option>
              <option value="Projectile">Projectile</option>
              <option value="Melee">Melee</option>
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full h-10 bg-[#111632] border border-white/10 text-white rounded-xl px-3 text-sm focus:outline-hidden focus:border-rivals-gold cursor-pointer"
            >
              <option value="All">All Difficulties</option>
              <option value="0">0 Stars (Very Easy)</option>
              <option value="1">1 Star (Easy)</option>
              <option value="2">2 Stars (Medium)</option>
              <option value="3">3 Stars (Hard)</option>
              <option value="4">4 Stars (Expert)</option>
              <option value="5">5 Stars (Master)</option>
            </select>
          </div>
        </div>

        {/* Total Results */}
        <p className="text-xs text-muted-foreground text-right">
          Showing {filteredHeroes.length} of {heroes.length} heroes
        </p>
      </div>

      {/* Heroes Grid */}
      {filteredHeroes.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredHeroes.map((hero) => (
            <Card
              key={hero.name}
              onClick={() => handleHeroClick(hero)}
              className="group bg-[#0e1227]/90 border border-white/5 hover:border-rivals-gold/40 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-rivals-gold/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#111632]/50">
                <img
                  src={getHeroImage(hero.name)}
                  alt={hero.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/150x150/171b35/ffffff?text=${hero.name[0]}`;
                  }}
                />
                
                {/* Role label on top left of image */}
                <div className="absolute top-2 left-2 bg-[#060814]/80 backdrop-blur-xs border border-white/10 rounded-full px-2 py-0.5 flex items-center gap-1 shadow-md">
                  {getRoleIcon(hero.role)}
                  <span className="text-[9px] font-bold text-white uppercase">{hero.role}</span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-3 text-center border-t border-white/5 bg-[#0e1227]">
                <h4 className="font-bold text-sm text-white group-hover:text-rivals-gold transition-colors truncate">
                  {hero.name}
                </h4>
                
                {/* Star rating preview */}
                <div className="flex items-center justify-center gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`size-3 ${i < hero.difficulty ? "text-rivals-gold" : "text-white/10"}`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="bg-[#0e1227]/50 border border-white/5 rounded-2xl p-16 text-center shadow-lg">
          <p className="text-muted-foreground text-sm">No heroes match your filters.</p>
          <Button
            onClick={() => {
              audioSynth.playClick();
              setSearchTerm("");
              setSelectedRole("All");
              setSelectedAttack("All");
              setSelectedDifficulty("All");
            }}
            variant="link"
            className="mt-2 text-rivals-gold hover:underline"
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Dossier Detail Modal */}
      {activeHero && (
        <Modal
          isOpen={!!activeHero}
          onClose={() => setActiveHero(null)}
          title="Hero Dossier"
          size="lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Column: Picture & Quick Stats */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="relative w-36 h-36 md:w-full md:aspect-square rounded-2xl border border-rivals-gold/30 shadow-xl overflow-hidden bg-[#111632]">
                <img
                  src={getHeroImage(activeHero.name)}
                  alt={activeHero.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/200x200/171b35/ffffff?text=${activeHero.name[0]}`;
                  }}
                />
              </div>
              
              <h2 className="text-2xl font-black uppercase text-gold-gradient tracking-wider text-center mt-4 mb-1">
                {activeHero.name}
              </h2>
              
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mt-1">
                {getRoleIcon(activeHero.role)}
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{activeHero.role}</span>
              </div>

              {/* Difficulty indicators */}
              <div className="flex flex-col items-center mt-4 w-full">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Difficulty</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`size-4 ${i < activeHero.difficulty ? "text-rivals-gold" : "text-white/10"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Lore & Skills Details */}
            <div className="md:col-span-8 flex flex-col gap-6">
              
              {/* Profile Details Sheet */}
              <div className="bg-[#111632]/50 border border-white/5 rounded-xl p-4">
                <h4 className="text-xs font-bold text-rivals-gold uppercase tracking-widest border-b border-white/5 pb-2 mb-3">
                  Specifications
                </h4>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                  <div className="flex items-center gap-2">
                    <SettingsIcon className="size-4 text-rivals-gold/70" />
                    <span className="text-muted-foreground">Attack:</span>
                    <span className="font-bold text-white">{activeHero.primaryAttack}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarIcon className="size-4 text-rivals-gold/70" />
                    <span className="text-muted-foreground">MCU Debut:</span>
                    <span className="font-bold text-white">{activeHero.mcuDebutYear ?? "Never (Comic Only)"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <BookOpenIcon className="size-4 text-rivals-gold/70" />
                    <span className="text-muted-foreground">Comic Debut:</span>
                    <span className="font-bold text-white">{activeHero.comicDebutYear}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <GlobeIcon className="size-4 text-rivals-gold/70" />
                    <span className="text-muted-foreground">Species:</span>
                    <span className="font-bold text-white">{activeExtra?.species ?? "N/A"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <UserIcon className="size-4 text-rivals-gold/70" />
                    <span className="text-muted-foreground">Gender:</span>
                    <span className="font-bold text-white">{activeExtra?.gender ?? "N/A"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <StarIcon className="size-4 text-rivals-gold/70" />
                    <span className="text-muted-foreground">Passive Skill:</span>
                    <span className="font-bold text-white">{activeHero.hasPassive ? "Yes" : "No"}</span>
                  </div>

                  <div className="flex items-center gap-2 col-span-2">
                    <ShieldIcon className="size-4 text-rivals-gold/70" />
                    <span className="text-muted-foreground">Team-Up Anchor:</span>
                    <span className="font-bold text-white">
                      {activeHero.isTeamUpAnchor ? "Yes (Crucial squad-link hero)" : "No"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Abilities & Skill Cards */}
              <div>
                <h4 className="text-xs font-bold text-rivals-gold uppercase tracking-widest border-b border-white/5 pb-2 mb-3">
                  Combat Abilities
                </h4>
                <div className="flex flex-col gap-2.5 max-h-56 overflow-y-auto pr-1">
                  {activeExtra?.abilities.map((ability) => (
                    <div
                      key={ability.name}
                      className="bg-[#111632]/80 border border-white/5 rounded-xl p-3 flex flex-col gap-1 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{ability.name}</span>
                        {ability.key && (
                          <span className="text-[9px] font-bold bg-white/10 text-rivals-gold border border-rivals-gold/20 px-2 py-0.5 rounded-md uppercase">
                            {ability.key}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">
                        {ability.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audio Quotes */}
              <div>
                <h4 className="text-xs font-bold text-rivals-gold uppercase tracking-widest border-b border-white/5 pb-2 mb-3">
                  Voice Quotes
                </h4>
                <div className="flex flex-col gap-2">
                  {activeExtra?.quotes.map((q, idx) => (
                    <blockquote
                      key={idx}
                      className="text-xs italic text-white/80 bg-[#111632]/20 border-l-2 border-rivals-gold pl-3 py-1.5 rounded-r-md leading-relaxed"
                    >
                      "{q}"
                    </blockquote>
                  ))}
                </div>
              </div>

              {/* Skins Custom list */}
              {activeExtra && activeExtra.skins.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-rivals-gold uppercase tracking-widest border-b border-white/5 pb-2 mb-3">
                    Unlockable Skins
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeExtra.skins.map((skin) => (
                      <span
                        key={skin}
                        className="text-[10px] font-semibold bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/90 shadow-sm"
                      >
                        {skin}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </Modal>
      )}

    </div>
  );
}
