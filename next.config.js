/**
 * @type {import('next').NextConfig}
 * */
const conf = {
  output: "standalone",
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: "/test/bad",
          destination: "/Bad",
        },
        {
          source: "/test/home",
          destination: "/Home",
        },
      ],
    };
  },
};

module.exports = conf;
