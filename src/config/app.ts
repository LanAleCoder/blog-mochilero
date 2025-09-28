export const APP_CONFIG = {
  baseUrl: 'https://guatemala-mochilero.vercel.app',
  domain: 'guatemala-mochilero.vercel.app',
  siteName: 'Guatemala Mochilero',
  title: 'Guía de Transporte en Guatemala - Guatemala Mochilero',
  description: 'Tu guía completa de transporte en Guatemala. Descubre las mejores rutas, horarios y consejos para viajar por Guatemala de manera económica y segura.',
  searchPlaceholder: '{search_term_string}'
} as const

export const URLS = {
  home: () => APP_CONFIG.baseUrl,
  search: (query?: string) => query
    ? `${APP_CONFIG.baseUrl}/search?q=${query}`
    : `${APP_CONFIG.baseUrl}/search?q=${APP_CONFIG.searchPlaceholder}`,
  blog: (articleId?: string) => articleId
    ? `${APP_CONFIG.baseUrl}/blog/${articleId}`
    : `${APP_CONFIG.baseUrl}/blog`,
  ogImage: () => `${APP_CONFIG.baseUrl}/og-image.jpg`,
  twitterImage: () => `${APP_CONFIG.baseUrl}/twitter-image.jpg`,
  logo: () => `${APP_CONFIG.baseUrl}/logo.png`,
  canonical: (path: string = '') => `${APP_CONFIG.baseUrl}${path}`,
  alternate: (lang: 'es' | 'en', path: string = '') =>
    lang === 'es' ? `${APP_CONFIG.baseUrl}${path}` : `${APP_CONFIG.baseUrl}/en${path}`
} as const