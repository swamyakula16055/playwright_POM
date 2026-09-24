exports.LoginPage =class LoginPage{

constructor(page){
    this.page= page
    this.userName_textbox= page.getByRole('textbox', { name: 'Username' })
    this.passwod_textbox=page.getByRole('textbox', { name: 'Password' })
    this.login_button=page.getByRole('button', { name: 'Login' })
    this.logout=page.getByRole('link', { name: 'Logout' })

}

async goToLoginPage(){
    await this.page.goto('https://the-internet.herokuapp.com/login');
}

async userName_function(userName){
    await this.userName_textbox.fill(userName)
}

async password_function(password){
    await this.passwod_textbox.fill(password)

}

async login_function(){
    await this.login_button.click()
}

}