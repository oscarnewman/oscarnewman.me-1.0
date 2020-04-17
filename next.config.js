const path = require('path')

const prod = process.env.NODE_ENV === 'production'

const env = {}

module.exports = {
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname + '/src')
    return config
  },
  target: 'serverless',
  env,
}
