'use client'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} YASINSTA. All rights reserved.
        </p>
        
        <p className="mt-2 text-xs text-gray-600">
          YASINSTA is not affiliated with, endorsed by, or sponsored by Instagram.
        </p>
        
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link 
                href="/privacy-policy" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link 
                href="/terms-of-service" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}