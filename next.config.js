/** @type {import('next').NextConfig} */

const { parsed: env } = require('dotenv').config();
const nextConfig = {
    env,
    compiler: {
        styledComponents: true,
      },
}

module.exports = nextConfig
