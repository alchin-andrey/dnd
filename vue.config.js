const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // base: '/dnd/',
  publicPath: process.env.NODE_ENV === 'production' ? '/dnd/' : '/',
  transpileDependencies: true
})

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/my-project/' : '/'
// }
