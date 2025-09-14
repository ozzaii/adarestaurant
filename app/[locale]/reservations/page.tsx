'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Button from '@/components/Button'

export default function ReservationsPage() {
  const t = useTranslations('reservations')

  return (
    <div className="pt-20 min-h-screen bg-ada-deep-navy">
      <section className="py-18 lg:py-22">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-h1-mobile lg:text-h1-desktop text-ada-brass mb-6">
              {t('heading')}
            </h1>
            <p className="text-ada-ivory/80 text-lead-mobile lg:text-lead-desktop max-w-3xl mx-auto">
              {t('body')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <motion.a
              href="tel:+904626566255"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="group p-8 border border-ada-brass/30 rounded-lg hover:border-ada-brass transition-all text-center magnetic-hover"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-ada-brass">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-ada-ivory mb-2">{t('call')}</h3>
              <p className="text-ada-brass text-lg">+90 462 656 62 55</p>
              <p className="text-ada-ivory/60 text-sm mt-2">Direct line for immediate booking</p>
            </motion.a>

            <motion.a
              href="https://wa.me/905323948166"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="group p-8 border border-ada-brass/30 rounded-lg hover:border-ada-brass transition-all text-center magnetic-hover"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-ada-brass">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.292c-.379.937-1.877 1.719-2.584 1.833-.187.03-.42.054-.687.054-.562 0-1.427-.116-2.572-.506-3.146-1.07-5.522-4.632-5.69-4.841-.164-.207-1.349-1.76-1.349-3.375 0-1.614.823-2.402 1.139-2.737.279-.294.766-.442 1.225-.442.148 0 .281.007.402.013.35.014.525.033.755.586.29.693.988 2.375 1.073 2.547.086.173.144.374.03.604-.114.233-.172.375-.343.576-.172.202-.361.45-.516.604-.143.144-.296.301-.124.587.172.288.764 1.26 1.64 2.041 1.128 1.006 2.034 1.328 2.351 1.473.315.144.502.115.688-.086.188-.202.804-.937.018-1.166-.316-.23-1.88-.93-2.176-1.034z"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl text-ada-ivory mb-2">{t('whatsapp')}</h3>
              <p className="text-ada-brass text-lg">+90 532 394 81 66</p>
              <p className="text-ada-ivory/60 text-sm mt-2">Message us anytime</p>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto p-8 border border-ada-brass/30 rounded-lg bg-ada-pine/10"
          >
            <h3 className="font-display text-2xl text-ada-brass mb-6 text-center">
              {t('policies.title')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-ada-brass mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-ada-ivory/80 text-sm">
                  {t('policies.groupBookings')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-ada-brass mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-ada-ivory/80 text-sm">
                  {t('policies.noShow')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-ada-brass mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-ada-ivory/80 text-sm">
                  {t('policies.specialRequests')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}