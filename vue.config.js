const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // base: '/dnd/',
  // publicPath: process.env.NODE_ENV === 'production' ? '/dnd/' : '/',
  publicPath: '/',
  // publicPath: '/dnd/',
  transpileDependencies: true
})
