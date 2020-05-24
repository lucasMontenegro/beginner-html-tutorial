describe('/links', () => {
  test.each([
    ['/', /home/i],
    ['/hello-world', /first web page/i],
    ['/lists', /html lists/i]
  ])('should have a link to "%s"', async (location, regexp) => {
    await page.goto(`${APP_HOST}/links`)
    const [anchor] = await page.$x(`//a[@href='${location}']`)
    await expect(anchor).toMatch(regexp)
    await Promise.all([
      anchor.click(),
      page.waitForNavigation()
    ])
    expect(page.url()).toBe(`${APP_HOST}${location}`)
  })
  it('should have a link to "htmldog.com"', async () => {
    await page.goto(`${APP_HOST}/links`)
    const [anchor] = await page.$x("//a[contains(@href, 'htmldog')]")
    await expect(anchor).toMatch(/html dog/i)
    const [htmldog] = await Promise.all([
      browser.waitForTarget(t => t.opener() === page.target()),
      anchor.click()
    ])
    expect(htmldog.url()).toMatch(/htmldog\.com/i)
  })
})
