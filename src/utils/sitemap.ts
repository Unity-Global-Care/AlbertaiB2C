import { articles } from '@/data/articles'

export interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

const baseUrl = 'https://albertai-dev.web.app'

export const staticPages: SitemapUrl[] = [
  {
    loc: `${baseUrl}/`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    loc: `${baseUrl}/how-it-works`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    loc: `${baseUrl}/aging-in-place-score`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.9
  },
  {
    loc: `${baseUrl}/resources`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    loc: `${baseUrl}/about`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    loc: `${baseUrl}/support`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  }
]

export function getArticleUrls(): SitemapUrl[] {
  return articles.map(article => ({
    loc: `${baseUrl}/resources/${article.slug}`,
    lastmod: article.date,
    changefreq: 'monthly' as const,
    priority: 0.8
  }))
}

export function getAllUrls(): SitemapUrl[] {
  return [...staticPages, ...getArticleUrls()]
}

