import {test, expect} from '@playwright/test'

test('login functionality', async({page}) =>{

    await page.goto('https://google.com')

    await page.locator('xpath=//*[@id="ti6dpd"]').fill('Playwright')

    await page.locator('xpath=(//input[@class="gNO89b"])[2]').click()




})