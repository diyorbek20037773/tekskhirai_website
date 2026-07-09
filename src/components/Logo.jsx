import { Check } from 'lucide-react'

export default function Logo({ withText = true }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-600 shadow-lg shadow-primary-600/30">
        <Check className="h-5 w-5 text-white" strokeWidth={3} />
      </span>
      {withText && (
        <span className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
          Tekshir<span className="text-primary-600 dark:text-primary-400">AI</span>
        </span>
      )}
    </a>
  )
}
