module.exports = {
  experimental: {
    outputFileTracingIncludes: {
      '/api/**/*': ['./models/**', './node_modules/onnxruntime-node/**'],
    },
    serverComponentsExternalPackages: ['onnxruntime-node'],
  },
};
