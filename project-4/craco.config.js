const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#49008B",
              "@layout-header-background": "#62BDB4",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
