'use client'
import { Download, Shield, Zap, Video, Image, Share2 } from 'lucide-react'

export default function FeaturesDetail() {
  const features = [
    {
      icon: Download,
      title: "High-Quality Downloads",
      description: "Download Instagram content in the highest available quality. Get your photos in full resolution and videos in HD quality.",
    },
    {
      icon: Video,
      title: "Reels & Stories",
      description: "Save Instagram Reels and Stories directly to your device. Never miss out on your favorite creator's temporary content.",
    },
    {
      icon: Image,
      title: "Photo Collections",
      description: "Download entire photo albums and carousels with a single tap. Preserve full collections without downloading individually.",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Experience lightning-fast downloads with our optimized processing system. Get your content in seconds.",
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description: "Your privacy is our priority. No data collection, no account required, and no tracking. Just pure functionality.",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Quickly share downloaded content with friends or save to your favorite cloud storage service.",
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Why Choose YASINSTA?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}