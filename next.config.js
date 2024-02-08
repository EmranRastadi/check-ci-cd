/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  env: {
    back_api: "localhost:5000/api/v1",
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secretssss",
    // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/staticsssscsdcsdcsc",
  },
};

module.exports = nextConfig;
