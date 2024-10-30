const config = {
  plugins: [
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-pxtorem")({ rootValue: 16, propList: ["*"] }),
    require("postcss-utilities"),
  ],
};

module.exports = config;
