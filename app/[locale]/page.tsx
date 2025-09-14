'use client'

import Hero from '@/components/Hero'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Button from '@/components/Button'
import Image from 'next/image'
import CTAStickyBar from '@/components/CTAStickyBar'

export default function HomePage() {
  const t = useTranslations('home')

  const highlights = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('highlights.title1'),
      body: t('highlights.body1')
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: t('highlights.title2'),
      body: t('highlights.body2')
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: t('highlights.title3'),
      body: t('highlights.body3')
    }
  ]

  const signatureDishes = [
    { name: 'Kuymak', description: 'Traditional Black Sea cheese fondue', image: '/images/kuymak.jpg' },
    { name: 'Grilled Trout', description: 'Fresh from local waters', image: '/images/trout.jpg' },
    { name: 'Kabsa', description: 'Aromatic Middle Eastern rice', image: '/images/kabsa.jpg' },
    { name: 'Künefe', description: 'Sweet cheese pastry with syrup', image: '/images/kunefe.jpg' }
  ]

  return (
    <>
      <Hero />

      <section className="py-22 lg:py-30 bg-ada-deep-navy">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-ada-brass">
                  {item.icon}
                </div>
                <h3 className="font-display text-h2-mobile lg:text-2xl text-ada-ivory mb-4">
                  {item.title}
                </h3>
                <p className="text-ada-ivory/80 text-body-mobile lg:text-body-desktop">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 lg:py-30 bg-ada-pine/20 relative noise-overlay">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-h2-mobile lg:text-h2-desktop text-ada-brass mb-4">
              {t('signature.title')}
            </h2>
            <div className="w-24 h-px bg-ada-brass/30 mx-auto" />
          </motion.div>

          <div className="overflow-x-auto snap-x-mandatory scrollbar-hide -mx-6 px-6">
            <div className="flex gap-6 pb-4">
              {signatureDishes.map((dish, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex-none w-72 snap-start"
                >
                  <div className="group cursor-pointer magnetic-hover">
                    <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-ada-deep-navy/60 to-transparent z-10" />
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-display text-xl text-ada-ivory mb-2">{dish.name}</h3>
                    <p className="text-ada-ivory/70 text-sm">{dish.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Button href="/menu" variant="primary" size="lg">
              {t('signature.viewAll')}
            </Button>
          </div>
        </div>
      </section>

      <CTAStickyBar />
    </>
  )
}