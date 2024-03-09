import { ChoiceButton } from './ChoiceButton'

interface ChoiceSelectionProps {
  isTBBT: boolean
  handleChoice: (arg0: string) => void
}

export function ChoiceSelection({
  isTBBT,
  handleChoice,
}: ChoiceSelectionProps) {
  if (isTBBT)
    return (
      <div className="w-full max-w-[320px] mobile:max-w-[390px] lg:max-w-[484px] max-h-[422px] bg-pentagon bg-no-repeat bg-[center_70%] lg:bg-center bg-[length:70%] lg:bg-auto flex flex-col items-center my-auto animate-fade-in">
        <ChoiceButton choice="scissors" handleChoice={handleChoice} isTBBT />
        <div className="w-full flex items-center justify-between px-4 -mt-6">
          <ChoiceButton choice="spock" handleChoice={handleChoice} isTBBT />
          <ChoiceButton choice="paper" handleChoice={handleChoice} isTBBT />
        </div>
        <div className="w-full flex items-center justify-center gap-5 lg:gap-16 mt-5 lg:mt-8">
          <ChoiceButton choice="lizard" handleChoice={handleChoice} isTBBT />
          <ChoiceButton choice="rock" handleChoice={handleChoice} isTBBT />
        </div>
      </div>
    )

  if (!isTBBT)
    return (
      <div className="max-w-[320px] mobile:max-w-[390px] lg:max-w-xl max-h-[422px] bg-triangle bg-no-repeat bg-[center_70%] lg:bg-center bg-[length:70%] lg:bg-auto flex flex-wrap justify-center gap-x-10 lg:gap-x-20 gap-y-5 lg:gap-y-10 my-auto animate-fade-in">
        <ChoiceButton choice="paper" handleChoice={handleChoice} />
        <ChoiceButton choice="scissors" handleChoice={handleChoice} />
        <ChoiceButton choice="rock" handleChoice={handleChoice} />
      </div>
    )
}
