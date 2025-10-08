export class StudentRegistrationForm
{
    constructor(page){
         this.page=page
         this.firstName=page.locator('[id="firstName"]')
         this.lastName=page.locator('[id="lastName"]')
         this.email=page.locator('[id="userEmail"]')
         this.genderMale=page.getByText('Male', { exact: true })
         this.genderFemale=page.locator('[for="gender-radio-2"]')
         this.genderOther=page.locator('[for="gender-radio-3"]')
         this.mobileNumber=page.locator('[id="userNumber"]')
         this.dateOfBirth=page.locator('[id="dateOfBirthInput"]')
         this.subjects=page.locator('[class*="subjects-auto-complete__value-container subjects-auto-complete__value-container"]')
         this.hobbiesSports=page.locator('[for="hobbies-checkbox-1"]')
         this.hobbiesReading=page.locator('[for="hobbies-checkbox-2"]')
         this.hobbiesMusic=page.locator('[for="hobbies-checkbox-3"]') 
         this.picture=page.locator('[id="uploadPicture"]')  
         this.currentAddress=page.locator('[id="currentAddress"]')
         this.state=page.locator('[id="stateCity-wrapper"] [class="css-1wa3eu0-placeholder"]').filter({hasText:'Select State'})
         this.city=page.locator('[id="stateCity-wrapper"] [class=" css-1wa3eu0-placeholder"]').filter({hasText:'Select City'})
         this.submit=page.locator('[id="submit"]')
        }
        async addName(firstname,lastname){
            await this.firstName.fill(firstname)
            await this.lastName.fill(lastname)
        }
        async clearValue(){
            await this.firstName.clear()
        }
        async checkValue(){
            await this.genderMale.click()
        }
        async dropdownaction(){
            await this.city.selectOption("1")
        }
        async uploadfiles(){
            await this.picture.setInputFiles("C:/Users/Savi/Desktop/PlayWright/tests/pages/mouseOver.js")
            await this.page.pause()
        }
        async downloadfiles(){
            const [download]= (await Promise.all([page.waitForEvent('download'), page.locator('[id="downloadButton"]').click()]));
 await page.pause();
const downloadPath=path.join(__dirname, 'download1.jpeg');
await download.saveAs(downloadPath)
        }
    }
    


