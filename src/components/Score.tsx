import normalLogo from '../assets/logo.svg'
import TBBTLogo from '../assets/logo-bonus.svg'
import { twMerge } from 'tailwind-merge'

interface ScoreProps {
  isTBBT: boolean
  score: number
}

export function Score({ isTBBT, score }: ScoreProps) {
  return (
    <div className="flex items-center justify-between px-6 py-3 lg:py-4 w-full max-w-2xl h-28 lg:h-[162px] ring-[3px] ring-[#606e85] rounded-xl select-none">
      <img
        src={normalLogo}
        alt="Rock, Paper, Scissors Logo"
        className={twMerge(
          'h-full py-2 animate-fade-in hidden',
          !isTBBT && 'block'
        )}
      />
      <img
        src={TBBTLogo}
        alt="Rock, Paper, Scissors, Lizard, Spock Logo"
        className={twMerge(
          'h-full py-2 animate-fade-in hidden',
          isTBBT && 'block'
        )}
      />
      <div className="w-28 lg:w-36 self-stretch bg-white rounded-md flex flex-col items-center justify-center">
        <span className="text-[#2a46c0] leading-3 font-semibold tracking-[0.125em]">
          SCORE
        </span>
        <span className="text-[#3b4363] text-5xl lg:text-7xl font-bold">
          {score}
        </span>
      </div>
    </div>
  )
}
