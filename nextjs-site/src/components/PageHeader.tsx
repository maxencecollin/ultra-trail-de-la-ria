'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-ocean-900/80" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-800 to-ocean-900" />
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-ocean-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
