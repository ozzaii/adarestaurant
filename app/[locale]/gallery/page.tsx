'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
  category: 'all' | 'terrace' | 'interior' | 'dishes' | 'team'
  width: number
  height: number
}

export default function GalleryPage() {
  const t = useTranslations('gallery')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const images: GalleryImage[] = [
    { src: '/images/terrace-1.jpg', alt: 'Lake view terrace', category: 'terrace', width: 800, height: 600 },
    { src: '/images/interior-1.jpg', alt: 'Restaurant interior', category: 'interior', width: 800, height: 600 },
    { src: '/images/dish-1.jpg', alt: 'Signature dish', category: 'dishes', width: 600, height: 800 },
    { src: '/images/terrace-2.jpg', alt: 'Sunset dining', category: 'terrace', width: 800, height: 600 },
    { src: '/images/team-1.jpg', alt: 'Our chef team', category: 'team', width: 800, height: 600 },
    { src: '/images/dish-2.jpg', alt: 'Black Sea cuisine', category: 'dishes', width: 600, height: 800 },
    { src: '/images/interior-2.jpg', alt: 'Dining area', category: 'interior', width: 800, height: 600 },
    { src: '/images/dish-3.jpg', alt: 'Dessert selection', category: 'dishes', width: 600, height: 800 }
  ]

  const categories = ['all', 'terrace', 'interior', 'dishes', 'team']

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory)

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
              Gallery
            </h1>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-pill transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-ada-brass text-ada-deep-navy'
                    : 'border border-ada-brass/30 text-ada-ivory hover:border-ada-brass'
                }`}
              >
                {t(`filters.${category}`)}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square cursor-pointer overflow-hidden group"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ada-deep-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ada-deep-navy/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="object-contain max-h-[90vh] w-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-ada-deep-navy/80 rounded-full text-ada-ivory hover:bg-ada-brass hover:text-ada-deep-navy transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}