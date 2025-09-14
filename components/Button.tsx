'use client'

import { motion } from 'framer-motion'
import { ReactNode, MouseEvent, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  disabled?: boolean
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
  disabled = false
}: ButtonProps) {
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLElement>(null)

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'border border-ada-brass bg-transparent text-ada-ivory hover:bg-ada-brass hover:text-ada-deep-navy',
    secondary: 'border border-ada-sea-mist bg-transparent text-ada-ivory hover:bg-ada-sea-mist hover:text-ada-deep-navy',
    ghost: 'text-ada-ivory hover:text-ada-brass'
  }

  const baseClasses = clsx(
    'rounded-pill font-body transition-all duration-[var(--duration-base)] inline-block',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ada-brass focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    sizeClasses[size],
    variantClasses[variant],
    className
  )

  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef.current || disabled) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const maxOffset = 8
    const distance = Math.sqrt(x * x + y * y)
    const factor = Math.min(distance / 100, 1)

    setMagneticOffset({
      x: (x / distance) * maxOffset * factor,
      y: (y / distance) * maxOffset * factor
    })
  }

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0 })
  }

  const MotionComponent = motion[href ? (external ? 'a' : Link) : 'button'] as any

  return (
    <MotionComponent
      ref={buttonRef}
      href={href}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      animate={{
        x: magneticOffset.x,
        y: magneticOffset.y
      }}
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 25
      }}
      whileTap={!disabled ? { scale: 0.99 } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </MotionComponent>
  )
}