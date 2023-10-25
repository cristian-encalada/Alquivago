/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['imagenes.gallito.com', 'cdn2.infocasas.com.uy', 'http2.mlstatic.com']
  }
};
