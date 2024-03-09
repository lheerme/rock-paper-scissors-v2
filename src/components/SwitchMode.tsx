import * as Switch from '@radix-ui/react-switch'
import clsx from 'clsx'

interface SwitchModeProps {
  isTBBT: boolean
  setIsTBBT: (arg0: boolean) => void
}

export function SwitchMode({ isTBBT, setIsTBBT }: SwitchModeProps) {
  function handleChange() {
    if (isTBBT) {
      setIsTBBT(false)
      localStorage.setItem('mode', JSON.stringify(false))
    } else {
      setIsTBBT(true)
      localStorage.setItem('mode', JSON.stringify(true))
    }
  }

  return (
    <div className="flex flex-col items-center gap-2 w-fit">
      <p className="tracking-widest text-white text-sm font-semibold">
        TBBT MODE
      </p>
      <Switch.Root
        checked={isTBBT}
        onCheckedChange={handleChange}
        className={clsx(
          'group',
          'data-[state=checked]:bg-[#606e85]',
          'data-[state=unchecked]:bg-[#3b4363]',
          'relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 focus-visible:ring-opacity-75'
        )}
      >
        <Switch.Thumb
          className={clsx(
            'group-data-[state=checked]:translate-x-5',
            'group-radix-state-unchecked:translate-x-0',
            'pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch.Root>
    </div>
  )
}
