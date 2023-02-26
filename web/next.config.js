/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects(){
		return [{
			source: '/',
			destination: '/blocos',
			permanent: false
		}]
	}
}

module.exports = nextConfig