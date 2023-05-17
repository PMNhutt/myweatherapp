/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_KEY: process.env.API_KEY,
        BASE_API_URL: process.env.BASE_API_URL
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.weatherapi.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
}

module.exports = nextConfig
