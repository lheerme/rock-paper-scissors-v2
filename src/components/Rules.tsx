import * as Dialog from '@radix-ui/react-dialog'
import normalRules from '../assets/image-rules.svg'
import TBBTRules from '../assets/image-rules-bonus.svg'
import closeIcon from '../assets/icon-close.svg'

interface RulesProps {
  isTBBT: boolean
}

export function Rules({ isTBBT }: RulesProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="py-2 px-10 tracking-[0.188em] font-medium text-white ring-1 ring-white rounded-lg transition-colors hover:text-[#3b4363] hover:bg-white">
        RULES
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden inset-0 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-[400px] w-full sm:h-[425px] bg-white sm:rounded-lg flex flex-col justify-between p-8 animate-fade-in">
          <div className="w-full flex items-center justify-between">
            <p className="text-[#3b4363] text-3xl font-bold tracking-wide">
              RULES
            </p>
            <Dialog.Close className="hover:opacity-75 p-2 transition-opacity cursor-pointer">
              <img src={closeIcon} alt="Close Icon" />
            </Dialog.Close>
          </div>
          <img
            src={isTBBT ? TBBTRules : normalRules}
            alt="Rules"
            className="w-full object-contain my-auto sm:my-0"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
