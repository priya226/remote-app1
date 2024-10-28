const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: [
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
          react: { singleton: true },
          "react-dom": { singleton: true },
        },
        
      })
      ],
  },
};

