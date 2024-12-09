'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useSections } from '@/hooks/useSections'

export default function TableOfContents() {
  const { sections, activeSection } = useSections()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-12 bg-gradient-to-br from-purple-900/30 to-black/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Explore YASINSTA
        </h2>
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={`group flex items-center justify-between py-4 px-6 rounded-lg border transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'bg-purple-700/70 border-purple-500'
                  : 'bg-purple-800/50 hover:bg-purple-700/60 border-transparent'
              }`}
            >
              <div className="flex flex-col">
                <span className="text-lg font-medium text-white group-hover:text-pink-300 transition-colors duration-300">
                  {item.title}
                </span>
                {item.subtitle && (
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.subtitle}
                  </span>
                )}
              </div>
              <ArrowRight className="w-5 h-5 text-purple-300 group-hover:text-pink-300 transform group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}