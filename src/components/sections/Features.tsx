'use client'
import { ImageIcon, Film, Sparkles, Download } from 'lucide-react'

interface Feature {
  icon: any;
  title: string;
  description: string;
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: ImageIcon,
      title: "Photo Download",
      description: "Easily download any photo from Instagram posts."
    },
    {
      icon: Film,
      title: "Video Download",
      description: "Download videos from posts, reels, and IGTV."
    },
    {
      icon: Sparkles,
      title: "Story Download",
      description: "Save Instagram stories with a single tap."
    },
    {
      icon: Download,
      title: "Bulk Download",
      description: "Download multiple posts at once from any profile."
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Powerful Features
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="bg-black bg-opacity-50 p-6 rounded-lg text-center hover:bg-opacity-70 transition-colors duration-300 backdrop-blur-sm border border-purple-500/30 group"
            >
              <feature.icon 
                className="w-12 h-12 mx-auto mb-4 text-pink-500 group-hover:text-purple-400 transition-colors duration-300" 
                strokeWidth={1.5} 
                aria-hidden="true" 
              />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}