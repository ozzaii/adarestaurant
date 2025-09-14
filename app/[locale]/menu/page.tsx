'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface MenuItem {
  name: string
  description?: string
  price?: string
  image?: string
  allergens?: string[]
}

interface MenuSection {
  id: string
  name: string
  items: MenuItem[]
}

export default function MenuPage() {
  const t = useTranslations('menu')
  const [activeTab, setActiveTab] = useState('blackSea')

  const menuSections: MenuSection[] = [
    {
      id: 'blackSea',
      name: t('sections.blackSea'),
      items: [
        { name: 'Kuymak (Muhlama)', description: 'Melted cheese with cornmeal', price: '₺120' },
        { name: 'Trabzon Pide', description: 'Traditional Black Sea flatbread', price: '₺90' },
        { name: 'Grilled Local Trout', description: 'Fresh from Uzungöl waters', price: '₺180' },
        { name: 'Cornbread', description: 'Traditional Black Sea bread', price: '₺30' }
      ]
    },
    {
      id: 'grills',
      name: t('sections.grills'),
      items: [
        { name: 'Mixed Grill Platter', description: 'For 2 people', price: '₺450' },
        { name: 'Lamb Chops', description: 'Grilled to perfection', price: '₺280' },
        { name: 'Chicken Shish', description: 'Marinated & grilled', price: '₺160' },
        { name: 'Beef Skewers', description: 'Premium cuts', price: '₺220' }
      ]
    },
    {
      id: 'middleEastern',
      name: t('sections.middleEastern'),
      items: [
        { name: 'Kabsa', description: 'Aromatic rice with lamb', price: '₺190' },
        { name: 'Freekeh', description: 'Roasted green wheat', price: '₺150' },
        { name: 'Shakshouka', description: 'Eggs in spiced tomato sauce', price: '₺95' },
        { name: 'Mixed Mezze', description: 'Hummus, mutabbal, tabbouleh', price: '₺120' }
      ]
    },
    {
      id: 'sharing',
      name: t('sections.sharing'),
      items: [
        { name: 'Seasonal Salads', description: 'Fresh local vegetables', price: '₺75' },
        { name: 'Mezze Assortment', description: '6 varieties', price: '₺140' },
        { name: 'Fresh Bread Basket', description: 'Daily baked', price: '₺35' }
      ]
    },
    {
      id: 'desserts',
      name: t('sections.desserts'),
      items: [
        { name: 'Künefe', description: 'Sweet cheese pastry', price: '₺95' },
        { name: 'Baklava Selection', description: '4 pieces', price: '₺85' },
        { name: 'Sütlaç', description: 'Rice pudding', price: '₺60' },
        { name: 'Turkish Tea', description: 'Traditional service', price: '₺20' }
      ]
    }
  ]

  const currentSection = menuSections.find(s => s.id === activeTab) || menuSections[0]

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
              Our Menu
            </h1>
            <p className="text-ada-ivory/80 text-lead-mobile lg:text-lead-desktop max-w-3xl mx-auto drop-cap">
              {t('intro')}
            </p>
          </motion.div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
              {menuSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`px-4 lg:px-6 py-2 lg:py-3 rounded-pill transition-all duration-200 ${
                    activeTab === section.id
                      ? 'bg-ada-brass text-ada-deep-navy'
                      : 'border border-ada-brass/30 text-ada-ivory hover:border-ada-brass'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {currentSection.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 border border-ada-brass/20 rounded-lg hover:border-ada-brass/40 transition-all magnetic-hover"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-ada-ivory">
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="text-ada-brass font-medium">
                      {item.price}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-ada-ivory/70 text-sm">
                    {item.description}
                  </p>
                )}
                {item.allergens && (
                  <div className="flex gap-2 mt-3">
                    {item.allergens.map((allergen) => (
                      <span
                        key={allergen}
                        className="px-2 py-1 text-xs bg-ada-brass/10 text-ada-brass rounded"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 p-6 bg-ada-pine/20 rounded-lg text-center">
            <p className="text-ada-ivory/80 text-sm">
              {t('allergens')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}