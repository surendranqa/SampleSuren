import { test } from "@playwright/test";
import { Utils } from "./pages/utils";
import { Buttons } from "./pages/buttons";

test('Click Action',async({page})=>{
    const utils=new Utils(page)
    const buttons=new Buttons(page)
    await utils.launchUrl('https://demoqa.com/buttons')
    await buttons.singleClick()
    await buttons.doubleClick()
    await buttons.rightClick()
    
})
    
