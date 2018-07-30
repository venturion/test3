const path = require('path')
//apenas testando
module.exports = function (moduleOptions) {
  const options = moduleOptions

  let vm = this

  vm.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'modules/test3/plugin.js',
    options: {
      // Nuxt will replace `options.ua` with `123` when copying plugin to project
      ua: 123,
      // conditional parts with dev will be stripped from plugin code on production builds
      debug: vm.options.dev
    }
  })

  // Routes
  vm.addTemplate({
    src: path.resolve(__dirname, './routes/index.js'),
    fileName: 'modules/test3/routes/index.js',
    options
  })

  vm.addTemplate({
    src: path.resolve(__dirname, './components/test3Component.vue'),
    fileName: 'modules/test3/components/test3Component.vue',
    options
  })

  vm.nuxt.hook('ready', async nuxt => {
    // console.log('app ready..')
  })

  // vm.nuxt.hook('generate:done', async nuxt => {})
}
