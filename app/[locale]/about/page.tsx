'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function AboutPage() {
  const t = useTranslations('about')

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: t('values.value1'),
      description: 'We source the finest ingredients from local farmers and markets'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('values.value2'),
      description: 'Traditional recipes passed down through generations'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: t('values.value3'),
      description: 'Every guest is family at Ada Restaurant'
    }
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
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-22">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-ada-ivory/80 text-lead-mobile lg:text-lead-desktop mb-6 drop-cap">
                {t('body')}
              </p>
              <p className="text-ada-ivory/70 text-body-mobile lg:text-body-desktop">
                Our journey began with a simple vision: to create a space where the beauty of Uzungöl meets
                exceptional cuisine. Today, we continue to honor that vision with every dish we serve and
                every guest we welcome.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/team.jpg"
                alt="Ada Restaurant team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ada-deep-navy/40 to-transparent" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-h2-mobile lg:text-h2-desktop text-ada-brass mb-4">
              {t('values.title')}
            </h2>
            <div className="w-24 h-px bg-ada-brass/30 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-ada-brass">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl text-ada-ivory mb-3">
                  {value.title}
                </h3>
                <p className="text-ada-ivory/70 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-22 p-8 bg-ada-pine/20 rounded-lg text-center noise-overlay relative"
          >
            <h3 className="font-display text-2xl text-ada-brass mb-4">
              Visit Us Today
            </h3>
            <p className="text-ada-ivory/80 text-body-mobile lg:text-body-desktop max-w-2xl mx-auto">
              Experience the warmth of Turkish hospitality and the flavors of the Black Sea
              in our lakefront setting. We look forward to welcoming you to Ada Restaurant.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}