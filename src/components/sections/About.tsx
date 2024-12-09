'use client'
import { Shield, Zap, Heart } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your privacy and security are our top priorities. YASINSTA works locally on your device without storing any of your data."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Download your favorite Instagram content in seconds with our optimized shortcut system."
    },
    {
      icon: Heart,
      title: "User-Friendly",
      description: "Simple, intuitive interface makes downloading content as easy as a single tap."
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-purple-900/20 via-black to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            About YASINSTA
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            YASINSTA is your ultimate companion for saving and managing Instagram content on iOS. Born from the need for a simple, efficient way to download Instagram media, YASINSTA has evolved into a powerful tool trusted by thousands of users worldwide.
          </p>
          <p className="text-gray-400">
            Built with user experience in mind, YASINSTA leverages the power of iOS Shortcuts to provide seamless integration with Instagram, making content downloading effortless and efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
            >
              <item.icon className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}