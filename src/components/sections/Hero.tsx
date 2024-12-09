'use client'
import { Download, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-[2px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-0.5 transform hover:rotate-6 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50">
            <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center overflow-hidden">
              <Instagram className="w-16 h-16 text-white animate-pulse" aria-label="Instagram icon" />
            </div>
          </div>

          <h1 className="text-7xl font-black mb-6 leading-tight tracking-tight">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text animate-text">
              YASINSTA
            </span>
          </h1>

          <p className="text-3xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            The <span className="font-semibold text-pink-400">Ultimate</span> Instagram Content Downloader for iOS
          </p>

          <p className="text-xl text-purple-400 mb-10 tracking-wide font-semibold">
            Version 1.0.0
          </p>

          <Link
            href="#download"
            className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <Download className="w-6 h-6 mr-3" aria-hidden="true" />
            Get Shortcut
          </Link>
        </div>
      </div>
    </section>
  )
}