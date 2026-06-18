import * as React from "react"
import { heroes } from "../../data/marvelRivalsData"
import type { Hero, Role } from "../../data/marvelRivalsData"
import { heroExtraData } from "../../data/marvelRivalsExtraData"
import type { HeroExtra } from "../../data/marvelRivalsExtraData"
import { heroAbilitiesData } from "../../data/marvelRivalsAbilities"
import type { HeroAbility } from "../../data/marvelRivalsAbilities"
import { Modal } from "../../components/shared/modal"
import { Card } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { audioSynth } from "../../lib/audio"

import {
  ShieldIcon,
  StarIcon,
  SearchIcon,
  CalendarIcon,
  BookOpenIcon,
  GlobeIcon,
  UserIcon,
  SettingsIcon
} from "../../components/shared/icons"

// ---------- Abilities Helpers ----------

/** Resolve the hero name key in heroAbilitiesData (handles mixed-case keys). */
function getAbilitiesForHero(heroName: string): HeroAbility[] {
  const upperKey = heroName.toUpperCase();
  if (heroAbilitiesData[upperKey]) return heroAbilitiesData[upperKey];
  if (heroAbilitiesData[heroName]) return heroAbilitiesData[heroName];
  const found = Object.keys(heroAbilitiesData).find(
    k => k.toLowerCase() === heroName.toLowerCase()
  );
  return found ? heroAbilitiesData[found] : [];
}

/** Render the keybind badge: mouse icon for clicks, key label otherwise. */
function KeybindBadge({ button }: { button: string }) {
  const lower = button.toLowerCase();
  if (lower === "left click") {
    return (
      <img
        src="https://www.marvelrivals.com/pc/gw/20241128194803/img/sbzj_5901af42.png"
        alt="Left Click"
        className="h-5 object-contain"
      />
    );
  }
  if (lower === "right click") {
    return (
      <img
        src="https://www.marvelrivals.com/pc/gw/20241128194803/img/sbyj_ec1b2d5e.png"
        alt="Right Click"
        className="h-5 object-contain"
      />
    );
  }
  return (
    <span className="text-xs font-black text-rivals-gold tracking-wider uppercase">
      {button}
    </span>
  );
}

/** The abilities panel shown in the right column of the hero dossier. */
function HeroDossierAbilities({ heroName }: { heroName: string }) {
  const abilities = getAbilitiesForHero(heroName);

  // Deduplicate by slug+button (some heroes have multi-form duplicate entries)
  const seen = new Set<string>();
  const unique = abilities.filter(a => {
    const key = `${a.slug}__${a.button}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return (
    <div className="md:col-span-8 flex flex-col gap-3">
      <h4 className="text-xs font-bold text-rivals-gold uppercase tracking-widest border-b border-white/5 pb-2">
        Combat Abilities
        <span className="ml-2 text-white/30 font-normal normal-case tracking-normal">
          ({unique.length} abilities)
        </span>
      </h4>

      {unique.length === 0 ? (
        <p className="text-sm text-muted-foreground italic">
          No ability data available for this hero yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-2.5 max-h-[520px] overflow-y-auto pr-1">
          {unique.map((ability) => (
            <div
              key={`${ability.slug}__${ability.button}`}
              className="group flex items-center gap-4 bg-[#111632]/70 border border-white/5 hover:border-rivals-gold/25 rounded-xs p-3 transition-all duration-200 hover:bg-[#111632]"
            >
              {/* Ability Icon — white bg so black icons stay visible */}
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xs flex items-center justify-center shadow-inner overflow-hidden border border-white/20">
                <img
                  src={ability.localImgUrl ?? ability.originalImgUrl}
                  alt={ability.name}
                  className="w-9 h-9 object-contain"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (img.src !== ability.originalImgUrl) {
                      img.src = ability.originalImgUrl;
                    }
                  }}
                />
              </div>

              {/* Ability Name */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white group-hover:text-rivals-gold transition-colors truncate capitalize">
                  {ability.name}
                </p>
              </div>

              {/* Keybind Badge */}
              <div className="flex-shrink-0 min-w-[48px] flex items-center justify-center px-2 py-1.5 bg-[#0e1227] border border-white/10 rounded-xs shadow-sm">
                <KeybindBadge button={ability.button} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- Main Gallery Component ----------

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
      .replace(/\s*&\s*/g, "-and-")
      .replace(/\s+/g, "-")
      .replace(/[.']/g, "");
    return `/hero-icons/${formattedName}_avatar.png`;
  };

  const getRoleIcon = (role: Role) => {
    switch (role) {
      case "Vanguard":
        return <img src="/vanguard.png" alt="Vanguard" className="size-4 object-contain inline mr-1" />;
      case "Duelist":
        return <img src="/duelist.png" alt="Duelist" className="size-4 object-contain inline mr-1" />;
      case "Strategist":
        return <img src="/strategist.png" alt="Strategist" className="size-4 object-contain inline mr-1" />;
      default:
        return <StarIcon className="size-4 text-rivals-gold mr-1 inline" />;
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
      <div className="bg-[#0e1227]/90 border border-white/5 rounded-xs p-6 mb-8 flex flex-col gap-4 shadow-xl">
        <h3 className="text-base font-bold text-rivals-gold uppercase tracking-widest">Filter Hero Database</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Search input */}
          <div className="relative md:col-span-1">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
              <SearchIcon className="size-4.5" />
            </span>
            <Input
              type="text"
              placeholder="Search hero..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-10 bg-[#111632] border-white/10 rounded-xs text-white placeholder-muted-foreground focus-visible:border-rivals-gold text-base"
            />
          </div>

          {/* Role Filter */}
          <div>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full h-10 bg-[#111632] border border-white/10 text-white rounded-xs px-3 text-base focus:outline-hidden focus:border-rivals-gold cursor-pointer"
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
              className="w-full h-10 bg-[#111632] border border-white/10 text-white rounded-xs px-3 text-base focus:outline-hidden focus:border-rivals-gold cursor-pointer"
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
              className="w-full h-10 bg-[#111632] border border-white/10 text-white rounded-xs px-3 text-base focus:outline-hidden focus:border-rivals-gold cursor-pointer"
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
        <p className="text-xs text-muted-foreground text-right font-medium">
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
              className="group bg-[#0e1227]/90 border border-white/5 hover:border-rivals-gold/40 rounded-xs overflow-hidden cursor-pointer shadow-md hover:shadow-rivals-gold/10 transition-all duration-300 transform hover:-translate-y-1 aspect-[3/4]"
            >
              <div className="relative w-full h-full bg-[#111632]/50">
                <img
                  src={getHeroImage(hero.name)}
                  alt={hero.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 border-b-3 border-rivals-gold"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/150x150/171b35/ffffff?text=${hero.name[0]}`;
                  }}
                />
                
                {/* Black Gradient Overlay at the bottom for text */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col justify-end pb-3 pt-6 px-2 text-center pointer-events-none">
                  <h4 className="font-black text-sm text-white group-hover:text-rivals-gold transition-colors truncate tracking-wide">
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

                {/* Role label on top left of image */}
                <div className="absolute top-2 left-2 bg-white border border-white/20 rounded-xs px-2 py-0.5 flex items-center gap-1 shadow-md">
                  {getRoleIcon(hero.role)}
                  <span className="text-xs font-extrabold text-slate-900 uppercase">{hero.role}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="bg-[#0e1227]/50 border border-white/5 rounded-xs p-16 text-center shadow-lg">
          <p className="text-muted-foreground text-base">No heroes match your filters.</p>
          <Button
            onClick={() => {
              audioSynth.playClick();
              setSearchTerm("");
              setSelectedRole("All");
              setSelectedAttack("All");
              setSelectedDifficulty("All");
            }}
            variant="link"
            className="mt-2 text-rivals-gold hover:underline text-base font-bold"
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
            
            {/* Left Column: Portrait + Info */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="relative w-36 h-36 md:w-full md:aspect-square rounded-xs border border-rivals-gold/30 shadow-xl overflow-hidden bg-[#111632]">
                <img
                  src={getHeroImage(activeHero.name)}
                  alt={activeHero.name}
                  className="w-full h-full object-cover border-b-3 border-rivals-gold"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/200x200/171b35/ffffff?text=${activeHero.name[0]}`;
                  }}
                />
              </div>
              
              <h2 className="text-2xl font-black uppercase text-gold-gradient tracking-wider text-center mt-4 mb-1">
                {activeHero.name}
              </h2>
              
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-white/20 rounded-xs mt-1">
                {getRoleIcon(activeHero.role)}
                <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">{activeHero.role}</span>
              </div>

              {/* Difficulty */}
              <div className="flex flex-col items-center mt-4 w-full">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Difficulty</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`size-4 ${i < activeHero.difficulty ? "text-rivals-gold" : "text-white/10"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Compact info rows */}
              <div className="w-full mt-4 flex flex-col gap-2 text-xs">
                <div className="flex items-center justify-between px-2 py-1.5 bg-[#111632]/60 rounded-xs border border-white/5">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <SettingsIcon className="size-3.5 text-rivals-gold/60" /> Attack
                  </span>
                  <span className="font-bold text-white">{activeHero.primaryAttack}</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 bg-[#111632]/60 rounded-xs border border-white/5">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <GlobeIcon className="size-3.5 text-rivals-gold/60" /> Species
                  </span>
                  <span className="font-bold text-white">{activeExtra?.species ?? "N/A"}</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 bg-[#111632]/60 rounded-xs border border-white/5">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <UserIcon className="size-3.5 text-rivals-gold/60" /> Gender
                  </span>
                  <span className="font-bold text-white">{activeExtra?.gender ?? "N/A"}</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 bg-[#111632]/60 rounded-xs border border-white/5">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <CalendarIcon className="size-3.5 text-rivals-gold/60" /> MCU Debut
                  </span>
                  <span className="font-bold text-white">{activeHero.mcuDebutYear ?? "N/A"}</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 bg-[#111632]/60 rounded-xs border border-white/5">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <BookOpenIcon className="size-3.5 text-rivals-gold/60" /> Comic Debut
                  </span>
                  <span className="font-bold text-white">{activeHero.comicDebutYear}</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 bg-[#111632]/60 rounded-xs border border-white/5">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <ShieldIcon className="size-3.5 text-rivals-gold/60" /> Team-Up
                  </span>
                  <span className="font-bold text-white">{activeHero.isTeamUpAnchor ? "Anchor" : "—"}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Full Abilities from heroAbilitiesData */}
            <HeroDossierAbilities heroName={activeHero.name} />
          </div>
        </Modal>
      )}

    </div>
  );
}
