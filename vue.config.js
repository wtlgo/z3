const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: (config) =>
        config.module
            .rule("splinecode")
            .test(/.splinecode/)
            .use("file-loader")
            .loader("file-loader"),
});
