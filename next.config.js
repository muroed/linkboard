/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	compiler: {
		styledComponents: {
			pure: true,
			displayName: true,
		},
	},
	images: {
		remotePatterns: [
			{
				hostname: 'api.qrserver.com',
				protocol: 'https',
			}
		]
	},
};

module.exports = nextConfig;
