'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function LocationPage() {
  const t = useTranslations('location')

  const openingHours = [
    { day: 'Monday', hours: '07:00 - 01:00' },
    { day: 'Tuesday', hours: '07:00 - 01:00' },
    { day: 'Wednesday', hours: '07:00 - 01:00' },
    { day: 'Thursday', hours: '07:00 - 01:00' },
    { day: 'Friday', hours: '07:00 - 01:00' },
    { day: 'Saturday', hours: '07:00 - 01:00' },
    { day: 'Sunday', hours: '07:00 - 01:00' }
  ]

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

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl text-ada-brass mb-6">
                  {t('hours.title')}
                </h2>
                <div className="space-y-3">
                  {openingHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-ada-brass/10"
                    >
                      <span className="text-ada-ivory/80">{item.day}</span>
                      <span className="text-ada-brass font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-ada-ivory/60 text-sm mt-4 italic">
                  * {t('hours.seasonal')}
                </p>
              </div>

              <div className="p-6 border border-ada-brass/30 rounded-lg">
                <h3 className="font-display text-xl text-ada-brass mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-ada-brass mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-ada-ivory/80 text-sm">Yenimahalle, Fevzi Çakmak Cd. No:15/A</p>
                      <p className="text-ada-ivory/80 text-sm">Uzungöl, Çaykara/Trabzon 61940</p>
                      <p className="text-ada-ivory/80 text-sm">Türkiye</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-ada-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+904626566255" className="text-ada-ivory/80 hover:text-ada-brass transition-colors text-sm">
                      +90 462 656 62 55
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="h-[400px] lg:h-full min-h-[400px] relative rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.5047714892676!2d40.62589431541569!3d40.970670779303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40643c4c4c4c4c4c%3A0x4c4c4c4c4c4c4c4c!2sAda%20Restaurant!5e0!3m2!1sen!2str!4v1625151515151!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 bg-ada-pine/20 rounded-lg text-center"
          >
            <p className="text-ada-ivory/80 text-sm">
              Located on the shores of Uzungöl lake, just a short walk from the main promenade.
              Parking available nearby. Prayer room facilities to be confirmed upon arrival.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}