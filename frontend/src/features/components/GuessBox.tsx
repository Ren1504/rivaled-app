import {Card,CardDescription} from '@/components/ui/card'
import { heroes } from "../../data/marvelRivalsData"

const GuessBox = () => {
  return (
<div className='flex flex-row'>
{heroes.filter((_, index) => index === 0).map((hero) => (
  <div className='flex flex-row gap-4' key={hero.name}>
    <Card className='w-25 h-25'>
      <CardDescription>{hero.name}</CardDescription>
    </Card>

    <Card className='w-25 h-25 bg-red-500 rounded-none'>
      <CardDescription>{hero.name}</CardDescription>
    </Card>

    <Card className='w-25 h-25'>
      <CardDescription>{hero.name}</CardDescription>
    </Card>

    <Card className='w-25 h-25'>
      <CardDescription>{hero.mcuDebutYear}</CardDescription>
    </Card>

    <Card className='w-25 h-25'>
      <CardDescription>{hero.name}</CardDescription>
    </Card>
  </div>
))}
    
</div>
  )
}

export default GuessBox