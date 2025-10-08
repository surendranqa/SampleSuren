export class Utils{
    constructor(page){
        this.page=page
    }
    async launchUrl(url){
       // await this.page.pause()
        await this.page.goto(url)


    }
}