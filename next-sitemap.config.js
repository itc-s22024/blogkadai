/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: 'https://cube',
	robotsTxtOptions: {
		additionalSitemaps: ['https://cube/server-sitemap.xml'],
	},
}

module.exports = config
