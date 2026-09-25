import {test} from '@playwright/test'
import { LoginPage } from '../../pages/loginPage.ts'

test('My login test wit TS', async({page})=>{

    const loginPage= new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user','secret_sauce');
    await loginPage.verifyLoginSuccess();



})