/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    //  deployment
      // REACT_APP_URI: '',
  
    //  local
      REACT_APP_URI: 'http://localhost:8081/',
  
      //  AWS
      // REACT_APP_URI: 'https://172.20.36.39:8081/',
  
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    images: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      unoptimized: true,
    },
}

module.exports = nextConfig

