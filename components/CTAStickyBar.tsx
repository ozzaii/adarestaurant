'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export default function CTAStickyBar() {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations('reservations')

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 z-40 glass-dark border-t border-ada-brass/20 lg:hidden"
    >
      <div className="flex items-center justify-around py-3 px-4">
        <a
          href="tel:+904626566255"
          className="flex items-center gap-2 text-ada-ivory hover:text-ada-brass transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm font-medium">{t('call')}</span>
        </a>

        <div className="w-px h-8 bg-ada-brass/20" />

        <a
          href="https://wa.me/905323948166"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-ada-ivory hover:text-ada-brass transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.292c-.379.937-1.877 1.719-2.584 1.833-.187.03-.42.054-.687.054-.562 0-1.427-.116-2.572-.506-3.146-1.07-5.522-4.632-5.69-4.841-.164-.207-1.349-1.76-1.349-3.375 0-1.614.823-2.402 1.139-2.737.279-.294.766-.442 1.225-.442.148 0 .281.007.402.013.35.014.525.033.755.586.29.693.988 2.375 1.073 2.547.086.173.144.374.03.604-.114.233-.172.375-.343.576-.172.202-.361.45-.516.604-.143.144-.296.301-.124.587.172.288.764 1.26 1.64 2.041 1.128 1.006 2.034 1.328 2.351 1.473.315.144.502.115.688-.086.188-.202.804-.937.018-1.166-.316-.23-1.88-.93-2.176-1.034z"/>
          </svg>
          <span className="text-sm font-medium">{t('whatsapp')}</span>
        </a>
      </div>
    </motion.div>
  )
}