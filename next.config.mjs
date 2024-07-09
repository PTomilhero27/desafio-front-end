// next.config.mjs
import packageConfig from './next-i18next.config.js';
const { i18n } = packageConfig.i18n;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  i18n,
};

export default nextConfig;
