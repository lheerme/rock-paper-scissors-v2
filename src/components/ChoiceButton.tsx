import iconRock from '../assets/icon-rock.svg'
import iconPaper from '../assets/icon-paper.svg'
import iconScissors from '../assets/icon-scissors.svg'
import iconLizard from '../assets/icon-lizard.svg'
import iconSpock from '../assets/icon-spock.svg'
import { twMerge } from 'tailwind-merge'

interface ChoiceButtonProps {
  choice: string | null
  handleChoice?: (arg0: string) => void
  isWinnerDisplay?: boolean
  isDelayed?: boolean
  winner?: 'player' | 'house' | 'draw' | null
  isTBBT?: boolean
  className?: string
}

const icons: { [index: string]: string } = {
  rock: iconRock,
  paper: iconPaper,
  scissors: iconScissors,
  lizard: iconLizard,
  spock: iconSpock,
}

export function ChoiceButton({
  choice,
  handleChoice,
  isWinnerDisplay,
  isDelayed,
  winner,
  isTBBT,
  className,
}: ChoiceButtonProps) {
  if (!choice) return

  if (isWinnerDisplay)
    return (
      <div className="flex items-center justify-center size-32 mobile:size-52 lg:size-72 relative">
        <div
          className={twMerge(
            'size-[77%] rounded-full animate-pulse bg-[#00000020] absolute hidden',
            isDelayed && 'block'
          )}
        />
        <div
          className={twMerge(
            'bg-gradient-to-t size-full rounded-full animate-fade-in transition-all flex items-center justify-center',
            choice === 'rock' &&
              'from-[#dc2e4e] to-[#dd405d] drop-shadow-[#a01837_0px_8px_0px]',
            choice === 'paper' &&
              'from-[#4865f4] to-[#5671f5] drop-shadow-[#2a45c0_0px_8px_0px]',
            choice === 'scissors' &&
              'from-[#ec9e0e] to-[#eca922] drop-shadow-[#c76c1b_0px_8px_0px]',
            choice === 'lizard' &&
              'from-[#834fe3] to-[#8c5de5] drop-shadow-[#5f38a5_0px_8px_0px]',
            choice === 'spock' &&
              'from-[#40b9ce] to-[#52bed1] drop-shadow-[#2c8eab_0px_8px_0px]',
            isDelayed &&
              (winner === 'player' || winner === 'draw') &&
              'animate-fade-in-delay-2',
            isDelayed && winner === 'house' && 'animate-fade-in-delay-winner',
            !isDelayed && winner === 'player' && 'animate-fade-in-winner',
            className
          )}
        >
          <div className="bg-white size-[77%] pt-2 rounded-full m-auto flex items-center justify-center shadow-[#00000030_0px_8px_inset]">
            <img
              src={icons[choice]}
              alt={`${choice} icon`}
              className={twMerge(
                'size-1/2 object-contain select-none',
                choice === 'spock' && 'ml-3'
              )}
            />
          </div>
        </div>
      </div>
    )

  if (!isWinnerDisplay && handleChoice)
    return (
      <button
        onClick={() => handleChoice(choice)}
        className={twMerge(
          'bg-gradient-to-t size-32 mobile:size-36 lg:size-48 rounded-full hover:opacity-85 transition-all',
          choice === 'rock' &&
            'from-[#dc2e4e] to-[#dd405d] drop-shadow-[#a01837_0px_7px_0px]',
          choice === 'paper' &&
            'from-[#4865f4] to-[#5671f5] drop-shadow-[#2a45c0_0px_7px_0px]',
          choice === 'scissors' &&
            'from-[#ec9e0e] to-[#eca922] drop-shadow-[#c76c1b_0px_7px_0px]',
          choice === 'lizard' &&
            'from-[#834fe3] to-[#8c5de5] drop-shadow-[#5f38a5_0px_7px_0px]',
          choice === 'spock' &&
            'from-[#40b9ce] to-[#52bed1] drop-shadow-[#2c8eab_0px_7px_0px]',
          isTBBT && 'size-24 mobile:size-28 lg:size-[140px]'
        )}
      >
        <div className="bg-white size-[77%] pt-2 rounded-full m-auto flex items-center justify-center shadow-[#00000030_0px_8px_inset]">
          <img
            src={icons[choice]}
            alt={`${choice} icon`}
            className={twMerge(
              'size-1/2 object-contain select-none',
              choice === 'spock' && 'ml-2'
            )}
          />
        </div>
      </button>
    )
}
