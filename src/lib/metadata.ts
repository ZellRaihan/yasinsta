import { getBaseURL } from '@/lib/utils'

export const siteMetadata = {
  title: 'YASINSTA - Ultimate Instagram Content Downloader for iOS',
  description: 'Download Instagram photos, videos, stories, and reels easily with YASINSTA. The best free iOS shortcut for saving Instagram content.',
  author: 'YASINSTA',
  keywords: [
    'Instagram downloader',
    'iOS shortcut',
    'Instagram stories',
    'Instagram reels',
    'save Instagram photos',
    'download Instagram videos'
  ]
}

export function generateMetadata(path = '') {
  const url = getBaseURL()
  
  return {
    metadataBase: new URL(url),
    title: siteMetadata.title,
    description: siteMetadata.description,
    keywords: siteMetadata.keywords,
    authors: [{ name: siteMetadata.author }],
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: url + path,
      siteName: 'YASINSTA',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'YASINSTA Preview'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      description: siteMetadata.description,
      images: ['/images/twitter-card.jpg']
    }
  }
}