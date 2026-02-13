/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.slatemate.in',
  generateRobotsTxt: true,
  exclude: ['/admin', '/login', '/api/*', '/dashboard/*', '/_*'],
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/product': { priority: 0.9, changefreq: 'weekly' },
      '/about': { priority: 0.8, changefreq: 'weekly' },
      '/features': { priority: 0.9, changefreq: 'weekly' },
      '/pricing': { priority: 0.9, changefreq: 'weekly' },
      '/faq': { priority: 0.7, changefreq: 'weekly' },
      '/careers': { priority: 0.6, changefreq: 'monthly' },
      '/pilot-program': { priority: 0.8, changefreq: 'weekly' },
      '/schedule-demo': { priority: 0.7, changefreq: 'weekly' },
      '/privacy': { priority: 0.4, changefreq: 'monthly' },
      '/terms': { priority: 0.4, changefreq: 'monthly' }
    }

    const pageConfig = customConfig[path] || {}

    return {
      loc: path,
      changefreq: pageConfig.changefreq || config.changefreq,
      priority: pageConfig.priority || config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'en-IN',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'en',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'x-default',
        }
      ],
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/', '/dashboard/', '/_next/', '/login']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin', '/api/', '/dashboard/', '/login']
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin', '/api/', '/dashboard/', '/login']
      }
    ],
    additionalSitemaps: [
      `https://www.slatemate.in/sitemap.xml`,
    ],
  },
  additionalPaths: async (config) => {
    // Add any dynamic paths here
    return []
  }
};
