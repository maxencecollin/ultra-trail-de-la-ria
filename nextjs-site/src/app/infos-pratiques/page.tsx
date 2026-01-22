'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import { reglementSections, type ReglementSection } from '@/data/reglement'

const icons: Record<string, React.ReactNode> = {
  clipboard: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  backpack: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  leaf: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  anchor: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 4a4 4 0 100 8 4 4 0 000-8zm0 8v4m-4-4H4m16 0h-4" />
    </svg>
  ),
}

export default function InfosPratiques() {
  const [activeSection, setActiveSection] = useState<string>('inscription')

  return (
    <main className="min-h-screen bg-ocean-900">
      <PageHeader
        title="Infos Pratiques"
        subtitle="Tout ce que vous devez savoir pour preparer votre course"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {reglementSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                ${activeSection === section.id
                  ? 'bg-sable-500 text-white'
                  : 'bg-ocean-800 text-ocean-300 hover:bg-ocean-700 hover:text-white'
                }
              `}
            >
              {icons[section.icon]}
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-ocean-800 rounded-xl p-6">
              <h3 className="font-display font-bold text-white mb-4">Reglement</h3>
              <nav className="space-y-2">
                {reglementSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`
                      w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                      ${activeSection === section.id
                        ? 'bg-ocean-700 text-white'
                        : 'text-ocean-400 hover:text-white hover:bg-ocean-700/50'
                      }
                    `}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {reglementSections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeSection === section.id ? 1 : 0,
                  y: activeSection === section.id ? 0 : 20,
                  display: activeSection === section.id ? 'block' : 'none',
                }}
                transition={{ duration: 0.3 }}
              >
                <ReglementSectionContent section={section} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

function ReglementSectionContent({ section }: { section: ReglementSection }) {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-xl bg-sable-500/20 flex items-center justify-center text-sable-400">
          {icons[section.icon]}
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
          {section.title}
        </h2>
      </div>

      {/* Content Items */}
      {section.content.map((item, index) => (
        <div
          key={index}
          className={`
            bg-ocean-800 rounded-xl p-6
            ${item.important ? 'border-l-4 border-sable-500' : ''}
          `}
        >
          {item.title && (
            <h3 className="font-semibold text-white text-lg mb-3">{item.title}</h3>
          )}
          <p className="text-ocean-300 leading-relaxed">{item.text}</p>
          {item.list && (
            <ul className="mt-4 space-y-2">
              {item.list.map((listItem, listIndex) => (
                <li key={listIndex} className="flex items-start gap-3 text-ocean-200">
                  <svg
                    className="w-5 h-5 text-pinede-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{listItem}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
