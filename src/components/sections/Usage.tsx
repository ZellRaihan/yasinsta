'use client'
import { Smartphone, Share2, Download, Settings } from 'lucide-react'

export default function Usage() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          How To Use YASINSTA
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex items-start gap-6 p-6 rounded-xl bg-purple-900/20 border border-purple-500/20">
            <div className="flex-shrink-0">
              <Settings className="w-10 h-10 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">1. Install Shortcuts App</h3>
              <p className="text-gray-300 mb-4">
                Make sure you have the Shortcuts app installed on your iOS device. It's free and available on the App Store.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Open App Store on your iOS device</li>
                <li>Search for "Shortcuts" app</li>
                <li>Download and install the official Apple Shortcuts app</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 rounded-xl bg-purple-900/20 border border-purple-500/20">
            <div className="flex-shrink-0">
              <Download className="w-10 h-10 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2. Get YASINSTA Shortcut</h3>
              <p className="text-gray-300 mb-4">
                Add YASINSTA to your shortcuts library in just a few taps.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Click the "Get Shortcut" button above</li>
                <li>Tap "Add Shortcut" when prompted</li>
                <li>Allow any required permissions</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 rounded-xl bg-purple-900/20 border border-purple-500/20">
            <div className="flex-shrink-0">
              <Smartphone className="w-10 h-10 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">3. Find Content to Download</h3>
              <p className="text-gray-300 mb-4">
                Navigate to the content you want to save in the Instagram app.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Open Instagram and find your desired content</li>
                <li>Works with posts, reels, stories, and IGTV</li>
                <li>Content must be from a public account or one you follow</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 rounded-xl bg-purple-900/20 border border-purple-500/20">
            <div className="flex-shrink-0">
              <Share2 className="w-10 h-10 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">4. Download Using YASINSTA</h3>
              <p className="text-gray-300 mb-4">
                Use the share menu to quickly download your content.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Tap the share button on the content</li>
                <li>Select YASINSTA from your shortcuts</li>
                <li>Your content will be saved to your Photos app</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}