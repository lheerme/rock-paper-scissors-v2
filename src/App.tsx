import { useState } from 'react'
import { SwitchMode } from './components/SwitchMode'
import { Rules } from './components/Rules'
import { Score } from './components/Score'
import { Result } from './components/Result'
import { ChoiceSelection } from './components/ChoiceSelection'

interface Winner {
  winner: 'player' | 'house' | 'draw' | null
  message: string
}

function App() {
  const [isTBBT, setIsTBBT] = useState(() => {
    const modeOnStorage = localStorage.getItem('mode') || ''
    if (modeOnStorage) return JSON.parse(modeOnStorage)

    return false
  })
  const [playerChoice, setPlayerChoice] = useState<string | null>(null)
  const [houseChoice, setHouseChoice] = useState<string | null>(null)
  const [winner, setWinner] = useState<Winner>({ winner: null, message: '' })
  const [score, setScore] = useState(() => {
    const scoreOnStorage = localStorage.getItem('score')

    if (scoreOnStorage) return Number(scoreOnStorage)

    return 0
  })
  const choiceOptions = ['rock', 'paper', 'scissors']
  const TBBTChoiceOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  function handleWin(message: string) {
    setWinner({ winner: 'player', message: message })
    setTimeout(() => {
      setScore((current) => {
        localStorage.setItem('score', JSON.stringify(current + 1))
        return current + 1
      })
    }, 3500)
  }

  function handleLoss(message: string) {
    setWinner({ winner: 'house', message: message })
    setTimeout(() => {
      setScore((current) => {
        if (current <= 0) {
          localStorage.setItem('score', JSON.stringify(current))
          return 0
        } else {
          localStorage.setItem('score', JSON.stringify(current - 1))
          return current - 1
        }
      })
    }, 3500)
  }

  function setResult(player: string, house: string) {
    switch (player) {
      case 'rock':
        if (house === 'rock')
          setWinner({ winner: 'draw', message: 'Same choices' })
        if (house === 'paper') handleLoss('Paper covers rock')
        if (house === 'scissors') handleWin('Rock crushes scissors')
        if (house === 'lizard') handleWin('Rock crushes lizard')
        if (house === 'spock') handleLoss('Spock vaporizes rock')
        break
      case 'paper':
        if (house === 'rock') handleWin('Paper covers rock')
        if (house === 'paper')
          setWinner({ winner: 'draw', message: 'Same choices' })
        if (house === 'scissors') handleLoss('Scissors cuts paper')
        if (house === 'lizard') handleLoss('Lizard eats paper')
        if (house === 'spock') handleWin('Paper disproves Spock')
        break
      case 'scissors':
        if (house === 'rock') handleLoss('Rock crushes scissors')
        if (house === 'paper') handleWin('Scissors cuts paper')
        if (house === 'scissors')
          setWinner({ winner: 'draw', message: 'Same choices' })
        if (house === 'lizard') handleWin('Scissors decapitate lizard')
        if (house === 'spock') handleLoss('Spock smashes scissors')
        break
      case 'lizard':
        if (house === 'rock') handleLoss('Rock crushes lizard')
        if (house === 'paper') handleWin('Lizard eats paper')
        if (house === 'scissors') handleLoss('Scissors decapitate lizard')
        if (house === 'lizard')
          setWinner({ winner: 'draw', message: 'Same choices' })
        if (house === 'spock') handleWin('Lizard poisons Spock')
        break
      case 'spock':
        if (house === 'rock') handleWin('Spock vaporizes rock')
        if (house === 'paper') handleLoss('Paper disproves Spock')
        if (house === 'scissors') handleWin('Spock smashes scissors')
        if (house === 'lizard') handleLoss('Lizard poisons Spock')
        if (house === 'spock')
          setWinner({ winner: 'draw', message: 'Same choices' })
        break
      default:
        return
    }
  }

  function handleChoice(choice: string) {
    setPlayerChoice(choice)
    const randomHouseChoice =
      isTBBT === true
        ? TBBTChoiceOptions[
            Math.floor(Math.random() * TBBTChoiceOptions.length)
          ]
        : choiceOptions[Math.floor(Math.random() * choiceOptions.length)]
    setHouseChoice(randomHouseChoice)

    setResult(choice, randomHouseChoice)
  }

  function handlePlayAgain() {
    setPlayerChoice(null)
    setHouseChoice(null)
    setWinner({ winner: null, message: '' })
  }

  return (
    <div className="relative">
      <div className="w-full max-w-5xl min-h-dvh m-auto flex gap-10 flex-col items-center p-4 pb-1 relative">
        {/* SCORE */}
        <Score isTBBT={isTBBT} score={score} />
        {/* GAME */}
        {!playerChoice && (
          <ChoiceSelection isTBBT={isTBBT} handleChoice={handleChoice} />
        )}

        {/* RESULT */}
        <Result
          playerChoice={playerChoice}
          houseChoice={houseChoice}
          winner={winner}
          handlePlayAgain={handlePlayAgain}
        />
        <footer className="w-screen flex-col mt-auto px-3 pb-1">
          <div className="w-full flex items-center justify-between">
            <SwitchMode isTBBT={isTBBT} setIsTBBT={setIsTBBT} />
            <p className="hidden mobile:block text-white font-medium text-center mt-auto text-xs lg:text-sm">
              © 2024 -{' '}
              <a
                href="https://github.com/lheerme"
                target="_blank"
                className="underline"
              >
                Guilherme Souza
              </a>
              . Todos os direitos reservados.
            </p>
            <Rules isTBBT={isTBBT} />
          </div>
          <p className="mobile:hidden text-white font-medium text-center mt-auto pt-2 text-xs lg:text-sm">
            © 2024 -{' '}
            <a
              href="https://github.com/lheerme"
              target="_blank"
              className="underline"
            >
              Guilherme Souza
            </a>
            . Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
