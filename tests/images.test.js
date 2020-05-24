describe('/images', () => {
  it('should render', async () => {
    await page.goto(`${APP_HOST}/images`)
    const img = await page.$('img')
    // check if image is loaded
    expect(await img.evaluate(e => e.complete && e.naturalWidth !== 0)).toBe(true)
    expect(await img.evaluate(e => e.getAttribute('alt'))).toMatch(/html dog/i)
    expect(await img.isIntersectingViewport()).toBe(true)
  })
})
