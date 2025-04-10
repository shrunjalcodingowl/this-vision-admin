module.exports = {
  /* config options here */
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboards/dashboard2",
        permanent: true,
      },
    ];
  },
};
