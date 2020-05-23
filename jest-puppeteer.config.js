module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false'
  },
  server: {
    command: 'npm start',
    host: '127.0.0.1',
    port: 5000
  }
}
