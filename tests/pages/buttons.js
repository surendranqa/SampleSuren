export class Buttons{
    constructor(page)
    {
        this.page=page
        this.doubleClickMe=page.locator('[id="doubleClickBtn"]')
        this.rightClickMe=page.locator('[id="rightClickBtn"]')
        this.clickMe=page.getByRole('button', { name: 'Click Me', exact: true })
    }
    async singleClick(){
        await this.clickMe.click()
        
    }
    async doubleClick(){
        await this.doubleClickMe.dblclick()

    }
    async rightClick(){
        await this.rightClickMe.click({button:'right'})
    }
}