'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { locales } from '@/i18n'
import { clsx } from 'clsx'

export default function LangSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((lng) => (
        <button
          key={lng}
          onClick={() => switchLocale(lng)}
          className={clsx(
            'px-3 py-1 text-sm font-body uppercase transition-colors',
            locale === lng
              ? 'text-ada-brass'
              : 'text-ada-ivory/70 hover:text-ada-ivory'
          )}
          dir={lng === 'ar' ? 'rtl' : 'ltr'}
        >
          {lng === 'ar' ? 'ع' : lng}
        </button>
      ))}
    </div>
  )
}