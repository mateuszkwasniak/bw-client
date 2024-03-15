//ta konfiguracja umozliwia hot-reload przy froncie odpalonym z Dockera...

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, _) => ({
    ...config,
    watchOptions: {
      ...config.watchOptions,
      poll: 800,
      aggregateTimeout: 300,
    },
  }),
};

export default nextConfig;
