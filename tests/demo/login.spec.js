import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

test('test', async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.goToLoginPage()
    await Login.userName_function('tomsmith')
    await Login.password_function('SuperSecretPassword!')
    await Login.login_function()

});