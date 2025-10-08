import path from "path";
export class UploadDownLoad{
    constructor(page){
        this.page=page
        this.download=page.locator('[id="downloadButton"]')
        this.chooseFile=page.locator('[id="uploadFile"]')
    }
    async downloadfiles(){
            const [download]= (await Promise.all([this.page.waitForEvent('download'), this.page.locator('[id="downloadButton"]').click()]));
 //await page.pause();
const downloadPath=path.join(__dirname, 'download1.jpeg');
await download.saveAs(downloadPath)
        }
}