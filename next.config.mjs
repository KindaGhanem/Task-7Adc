/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/<Task-7Adc>/' : '',
  };
  
  export default nextConfig;
  