module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "//your_url" : "/",

  outputDir: "dist",

  assetsDir: "static",

  filenameHashing: true,

  // When building in multi-pages mode, the webpack config will contain different plugins
  // (there will be multiple instances of html-webpack-plugin and preload-webpack-plugin).
  // Make sure to run vue inspect if you are trying to modify the options for those plugins.
  // pages: {
  //   index: {
  //     // entry for the pages
  //     entry: "src/pages/index/index.js",
  //     // the source template
  //     template: "src/pages/index/index.html",
  //     // output as dist/index.html
  //     filename: "index.html",
  //     // when using title option,
  //     // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: "首页",
  //     // chunks to include on this pages, by default includes
  //     // extracted common chunks and vendor chunks.
  //     chunks: ["chunk-vendors", "chunk-common", "index"]
  //   }
  //   // when using the entry-only string format,
  //   // template is inferred to be `public/subpage.html`
  //   // and falls back to `public/index.html` if not found.
  //   // Output filename is inferred to be `subpage.html`.
  //   // subpage: ''
  // },

  lintOnSave: true,

  runtimeCompiler: false,

  transpileDependencies: [],

  // 生产环境 sourceMap
  productionSourceMap: false,

  // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
  // corsUseCredentials: false,
  // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  // configureWebpack: config => {},

  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: config => {
    config.optimization.splitChunks({
      cacheGroups: {}
    })

    config.module
      .rule("eslint")
      .exclude.add("/Users/maybexia/Downloads/FE/community_built-in/src/lib")
      .end()
  },

  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,

    extract: true,

    sourceMap: false,

    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },

      postcss: {
        // options here will be passed to postcss-loader
      }
    }
  },

  // All options for webpack-dev-server are supported
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    open: true,

    host: "127.0.0.1",

    port: 3009,

    https: false,

    hotOnly: false,

    proxy: null

    // before: app => {}
  },

  parallel: require("os").cpus().length > 1,

  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  pluginOptions: {}
}
