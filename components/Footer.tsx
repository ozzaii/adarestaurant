import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-ada-deep-navy border-t border-ada-brass/20 mt-30">
      <div className="max-w-container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl text-ada-brass mb-4">Ada Restaurant</h3>
            <p className="text-ada-ivory/80 text-sm">
              {t('address')}
            </p>
          </div>

          <div>
            <h4 className="text-ada-brass font-body text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="tel:+904626566255"
                className="flex items-center gap-2 text-ada-ivory/80 hover:text-ada-brass transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">{t('phone')}: +90 462 656 62 55</span>
              </a>
              <a
                href="https://wa.me/905323948166"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ada-ivory/80 hover:text-ada-brass transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.292c-.379.937-1.877 1.719-2.584 1.833-.187.03-.42.054-.687.054-.562 0-1.427-.116-2.572-.506-3.146-1.07-5.522-4.632-5.69-4.841-.164-.207-1.349-1.76-1.349-3.375 0-1.614.823-2.402 1.139-2.737.279-.294.766-.442 1.225-.442.148 0 .281.007.402.013.35.014.525.033.755.586.29.693.988 2.375 1.073 2.547.086.173.144.374.03.604-.114.233-.172.375-.343.576-.172.202-.361.45-.516.604-.143.144-.296.301-.124.587.172.288.764 1.26 1.64 2.041 1.128 1.006 2.034 1.328 2.351 1.473.315.144.502.115.688-.086.188-.202.804-.937.018-1.166-.316-.23-1.88-.93-2.176-1.034z"/>
                </svg>
                <span className="text-sm">{t('whatsapp')}: +90 532 394 81 66</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-ada-brass font-body text-sm uppercase tracking-wider mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ada_restaurant_uzungol/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ada-ivory/80 hover:text-ada-brass transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/UzungolAda/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ada-ivory/80 hover:text-ada-brass transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-ada-brass/10 text-center">
          <p className="text-ada-ivory/60 text-sm">
            {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}