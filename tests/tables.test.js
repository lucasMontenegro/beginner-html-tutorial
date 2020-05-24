describe('/tables', () => {
  it('should render', async () => {
    await page.goto(`${APP_HOST}/tables`)
    const cell = await expect(page)
      .toMatchElement('table > tbody > tr > td', { text: /row.+cell/i })
    expect(await cell.isIntersectingViewport()).toBe(true)
  })
})
