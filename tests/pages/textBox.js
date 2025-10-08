export class Textbox{
    constructor(page){
        this.page=this.page
        this.fullName=page.locator('[id="userName"]')
        this.email=page.locator('[id="userEmail"]')
        this.currentAddress=page.locator('[id="currentAddress"]')
        this.permanentAddress=page.locator('[id="permanentAddress"]')
        this.submit=page.locator('[id="submit"]')

    }
}