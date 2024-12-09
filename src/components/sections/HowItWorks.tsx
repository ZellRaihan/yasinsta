'use client'
import { Plus, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Step {
  number: number;
  title: string;
  description: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: 1,
      title: "Install Shortcuts App",
      description: "Ensure you have the Shortcuts app installed on your iOS device."
    },
    {
      number: 2,
      title: "Add YASINSTA Shortcut",
      description: "Click the 'Add Shortcut' button and add YASINSTA to your library."
    },
    {
      number: 3,
      title: "Open Instagram",
      description: "Navigate to the content you want to download in the Instagram app."
    },
    {
      number: 4,
      title: "Run YASINSTA",
      description: "Use the share menu to run the YASINSTA shortcut and download your content."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-gray-900 to-purple-900 p-8 rounded-lg shadow-lg mb-12 border border-purple-500/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Get YASINSTA Shortcut</h3>
              <p className="text-purple-200 mb-4">
                Add the YASINSTA shortcut directly to your iOS Shortcuts app with just one click.
              </p>
              <Link
                href="https://www.icloud.com/shortcuts/your-shortcut-link-here"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-pink-600 hover:to-purple-600 transition-colors duration-300 transform hover:scale-105"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add to Shortcuts
              </Link>
            </div>
            <div className="flex-1 bg-black bg-opacity-30 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-pink-300 mb-4">How to Install</h4>
              <ol className="list-decimal list-inside text-gray-200 space-y-2">
                <li>Click the "Add to Shortcuts" button</li>
                <li>Tap "Add Shortcut" in the Shortcuts app</li>
                <li>Allow any necessary permissions</li>
                <li>Find YASINSTA in your Shortcuts library</li>
              </ol>
              <Link
                href="#"
                className="inline-flex items-center mt-4 text-purple-300 hover:text-purple-100 transition-colors duration-300"
              >
                <span className="mr-2">View detailed instructions</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
          How It Works
        </h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <li 
              key={step.number} 
              className="relative bg-black bg-opacity-30 p-8 rounded-lg group hover:bg-opacity-40 transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="absolute -left-3 -top-3 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:from-pink-600 group-hover:to-purple-600 transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-4 text-pink-300">{step.title}</h3>
              <p className="text-gray-200 text-sm">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}