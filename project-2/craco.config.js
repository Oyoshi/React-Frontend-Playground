const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#07C5B8",
              "layout-body-background": "#FFFFFF",
              "@btn-border-radius-base": "16px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
