describe('/hello-world', () => {
  it('should render', async () => {
    await page.goto(`${APP_HOST}/hello-world`)
    await expect(page).toMatch(/first web page/i)
    expect(await page.title()).toMatch(/first web page/i)
  })
})
