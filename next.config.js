/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            fallback: "file-loader",
            publicPath: "/_next/static/fonts/",
            outputPath: "static/fonts/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
