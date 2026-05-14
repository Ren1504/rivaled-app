import { heroes } from "../../data/marvelRivalsData"
import { useState } from "react"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../../../@/components/ui/combobox"

import { Button } from "../../../@/components/ui/button"

function SearchBar() {

 const [heroName,setheroName] = useState('')

  const data = Object.values(heroes).map(hero => hero.name)

  const getHeroImage = (name: string) => {
    const formattedName = name
      .toLowerCase()
      .replace(/\s+/g, "-")

    return `https://rivalskins.com/wp-content/uploads/marvel-assets/assets/hero-icons-avatars/${formattedName}_avatar.png`
  }

  return (
    
    <div className="flex items-center">
      <div className="w-[376px]">

        <Combobox items={data}>

          {/* Input */}
          <ComboboxInput
            placeholder="Search Hero..."
            className="h-14 rounded-sm border border-cyan-500/40 bg-[#141b2d] text-white text-lg px-5"
          />

          {/* Dropdown */}
          <ComboboxContent
            className="mt-1 rounded-none border border-gray-700 bg-[#1a2233] shadow-2xl"
          >

            <ComboboxEmpty className="p-4 text-gray-400">
              No hero found.
            </ComboboxEmpty>

            <ComboboxList className="max-h-[375px] overflow-y-auto">

              {(item) => (

                <ComboboxItem
                  key={item}
                  value={item}
                  className="flex items-center gap-5 px-5 py-3 rounded-none hover:bg-[#2a3347] cursor-pointer transition-colors"
                  onClick={() => setheroName(item)}
                >

                  <img
                    src={getHeroImage(item)}
                    alt={item}
                    className="w-10 h-10 object-cover"
                  />

                  <span className="text-white text-lg font-medium">
                    {item}
                  </span>

                </ComboboxItem>

              )}

            </ComboboxList>

          </ComboboxContent>

        </Combobox>
      </div>
      <Button onClick={()=>console.log(heroName)} variant="outline" className="mx-5">→</Button>
    </div>

      

  )
}

export default SearchBar