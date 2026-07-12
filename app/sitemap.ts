import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ishanfoundation.lk'
  
  const routes = [
    '',
    '/about',
    '/framework',
    '/leadership',
    '/ecosystem',
    '/programmes',
    '/research',
    '/partnerships',
    '/vision',
    '/support',
    '/arogya',
    '/avalokana',
    '/samanvaya',
    '/sri-vrindavan',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 
              ['/about', '/ecosystem', '/contact'].includes(route) ? 0.9 : 
              0.8,
  }))
}
