export default {
    experimental: {
      esmExternals: false, // Fix compatibility with CommonJS
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false, path: false }; // Fix file system issues
      return config;
    },
  };
  