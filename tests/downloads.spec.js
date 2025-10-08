import { test } from "@playwright/test";
import { Utils } from "./pages/utils";
import { UploadDownLoad    
 } from "./pages/uploaddownload";
 
 test('Click Action',async({page})=>{
    const utils=new Utils(page)
    const uploaddownload=new UploadDownLoad(page)
    await utils.launchUrl('https://demoqa.com/upload-download')
    await uploaddownload.downloadfiles()

 })