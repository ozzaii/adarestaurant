'use client'

import { motion } from 'framer-motion'
import Button from './Button'
import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface HeroProps {
  imageSrc?: string
  videoSrc?: string
}

export default function Hero({ imageSrc = '/images/hero-lake.jpg', videoSrc }: HeroProps) {
  const t = useTranslations('home.hero')
  const locale = useLocale()
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const rate = scrolled * -0.3
      setParallaxY(Math.max(-8, Math.min(8, rate)))
    }

    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 12, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.18,
        ease: [0.2, 0, 0, 1]
      }
    }
  }

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 noise-overlay"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={imageSrc}
            alt="Ada Restaurant lakefront view"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ada-deep-navy/60 via-transparent to-ada-deep-navy/80" />
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-display text-h1-mobile lg:text-h1-desktop text-ada-ivory mb-6"
        >
          {t('heading')}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body text-lead-mobile lg:text-lead-desktop text-ada-ivory/90 mb-10 max-w-2xl mx-auto"
        >
          {t('subheading')}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            href={`/${locale}/reservations`}
            variant="primary"
            size="lg"
          >
            {t('primaryCTA')}
          </Button>
          <Button
            href={`/${locale}/menu`}
            variant="secondary"
            size="lg"
          >
            {t('secondaryCTA')}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >
        <svg className="w-6 h-6 text-ada-ivory/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}