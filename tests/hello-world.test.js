describe('/hello-world', () => {
  it('should render', async () => {
    await page.goto(`${APP_HOST}/hello-world`)
    await expect(page).toMatch(/first web page/i)
    expect(await page.title()).toMatch(/first web page/i)
    await expect(page).toMatchElement('p', { visible: true, text: /.+/ })
    await expect(page).toMatchElement('h1', { visible: true, text: /.+/ })
    await expect(page).toMatchElement('h2', { visible: true, text: /.+/ })
    await expect(page).toMatchElement('em', { visible: true, text: /.+/ })
    await expect(page).toMatchElement('strong', { visible: true, text: /.+/ })
  })
})
