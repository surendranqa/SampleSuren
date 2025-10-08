export class RegistrationPage{
    constructor(page){
        this.page=page
        this.firstName=page.locator('[name="firstname"]')
        this.surName=page.locator('[name="lastname"]')
        this.dateOfBirth=page.locator('[name="birthday_day"]')
        this.dateOfBirth=page.locator('[name="birthday_month"]')
        this.dateOfBirth=page.locator('[name="birthday_year"]')
        this.gender=page.locator('[data-name="gender_wrapper"] [name="sex"][value="1"]')
        this.gender=page.locator('[name="sex"][value="2"]')
        this.gender=page.locator('')
        this.mobileEmail=page.locator('[name="reg_email__"]')
        this.newPassword=page.locator('[name="reg_passwd__"]')
        this.signUp=page.locator('[name="websubmit"]')

    }

}