'use client'
import { useState, useEffect } from 'react'

export function useSections() {
  const [sections, setSections] = useState<{ title: string; href: string; subtitle?: string }[]>([])
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const findSections = () => {
      const allSections = document.querySelectorAll('section[id]')
      return Array.from(allSections).map(section => ({
        title: section.querySelector('h2')?.textContent || section.id,
        subtitle: section.getAttribute('data-subtitle') || undefined,
        href: `#${section.id}`
      }))
    }

    // Initial sections setup
    setSections(findSections())

    // Set up intersection observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        threshold: 0.5,
        rootMargin: '-100px 0px -100px 0px'
      }
    )

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return { sections, activeSection }
}