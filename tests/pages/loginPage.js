export class LoginPage
{
    constructor(page){
        this.page=page
        this.createNewAccount=page.locator('[data-testid="open-registration-form-button"]')
    }

}
