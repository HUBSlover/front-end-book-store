/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL
	},
	images: {
		domains: [
			'loremflickr.com',
			'www.aptronixindia.com',
			's1-goods.ozstatic.by',
			's4-goods.ozstatic.by',
			's3-goods.ozstatic.by',
			's2-goods.ozstatic.by'
		]
	}
}

export default nextConfig
