module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false'
  },
  server: {
    command: 'npx serve -l tcp://127.0.0.1:3000'
  }
}
