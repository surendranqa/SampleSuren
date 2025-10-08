import { test } from "@playwright/test";
import { Utils } from "./pages/utils";
import { StudentRegistrationForm } from "./pages/studentRegistrationForm";
test('Input Values',async({page})=>{
    const utils=new Utils(page)
    const studentRegistrationForm=new StudentRegistrationForm(page)
    await utils.launchUrl('https://demoqa.com/automation-practice-form')
    await studentRegistrationForm.addName('Suren','Seeni')
    await studentRegistrationForm.clearValue()
    await studentRegistrationForm.checkValue()
    await studentRegistrationForm.uploadfiles()
})

