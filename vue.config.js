module.exports = {
  outputDir: './docs/dist',
  publicPath: '/datetime-docs/',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },

  transpileDependencies: ['vuetify'],
};
