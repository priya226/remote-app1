const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "app1", 
          filename: "remoteEntry.js",
          exposes: {
            // Expose your component
            "./App": "./src/App", // Adjust the path based on your folder structure
          },
          remotes: {
            app2: "app2@http://localhost:3002/remoteEntry.js",
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: '^18.3.1' },
            "react-dom": { singleton: true, eager: true, requiredVersion: '^18.3.1' },
          },
          
        })
      );

      return webpackConfig;
    },
  },
};
