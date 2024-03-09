import { ChoiceButton } from './ChoiceButton'

interface Winner {
  winner: 'player' | 'house' | 'draw' | null
  message: string
}

interface ResultProps {
  playerChoice: string | null
  houseChoice: string | null
  winner: Winner
  handlePlayAgain: () => void
}

export function Result({
  playerChoice,
  houseChoice,
  winner,
  handlePlayAgain,
}: ResultProps) {
  if (playerChoice) {
    return (
      <div className="flex items-center justify-around lg:justify-center flex-wrap lg:flex-nowrap gap-8 my-auto w-full max-w-[950px]">
        {/* PLAYER PICK */}
        <div className="flex flex-col-reverse mobile:flex-col items-center gap-6 mobile:gap-12">
          <p className="tracking-wide mobile:tracking-[0.188em] text-base mobile:text-xl font-semibold text-white">
            YOU PICKED
          </p>
          <ChoiceButton
            choice={playerChoice}
            isWinnerDisplay
            winner={winner.winner}
          />
        </div>
        {/* RESULT */}
        <div className="flex flex-col items-center w-full lg:pt-16 animate-fade-in-delay-4 lg:animate-scale-in overflow-hidden order-1 lg:order-none">
          <p className="text-lg font-medium tracking-wide text-white uppercase">
            {winner.message}
          </p>
          <p className="tracking-wide text-white font-bold text-[58px] whitespace-nowrap mb-4">
            {winner.winner === 'player' ? 'YOU WIN' : null}
            {winner.winner === 'house' ? 'YOU LOSE' : null}
            {winner.winner === 'draw' ? 'DRAW' : null}
          </p>
          <button
            onClick={handlePlayAgain}
            className="bg-white text-[#3b4363] w-full max-w-[220px] py-3 tracking-[0.125em] rounded-lg font-semibold
          hover:text-[#dc2e4e] transition-colors"
          >
            PLAY AGAIN
          </button>
        </div>
        {/* HOUSE PICK */}
        <div className="flex flex-col-reverse mobile:flex-col items-center gap-6 mobile:gap-12">
          <p className="tracking-wide mobile:tracking-[0.188em] text-base mobile:text-xl font-semibold text-white">
            THE HOUSE PICKED
          </p>
          <ChoiceButton
            choice={houseChoice}
            isWinnerDisplay
            isDelayed
            winner={winner.winner}
          />
        </div>
      </div>
    )
  } else return null
}
