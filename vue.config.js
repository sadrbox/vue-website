module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      scss: {
        prependData: ` 
          @import "~@/assets/scss/_variable.scss";
          @import "~@/assets/scss/_reset.scss";
          @import "~@/assets/scss/main.scss";
          @import "~@/assets/scss/layout.scss";
          @import "~@/assets/scss/tmp.scss";
          `,
      },
    },
  },
};
