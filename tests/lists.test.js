describe('/lists', () => {
  it('should render', async () => {
    await page.goto(`${APP_HOST}/lists`)
    await expect(page).toMatch(/html lists/i)
    await expect(page).toMatchElement('ol', { visible: true, text: /.+/ })
    await expect(page).toMatchElement('ol ul', { visible: true, text: /.+/ })
    await expect(page).toMatchElement('li', { visible: true, text: /.+/ })
  })
})
