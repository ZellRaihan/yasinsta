import { MetadataRoute } from 'next'
import { getBaseURL } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseURL()

  const routes = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/contact'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}