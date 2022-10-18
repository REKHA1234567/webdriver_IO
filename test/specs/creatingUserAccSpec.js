const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync("./test/specs/TestData/createUserAccountData.json"))

var userAccount= require('../pageobjects/creatingUserAccountsPage')
var cPage=require('../pageobjects/CommonPage')
const ran = Math.floor(Math.random() * 10000);

describe ('Sales and Inventory', async()=>{
credentials.forEach(({username,password,useraccID,userpassword})=>{
 it('Creating_User_Acc', async()=>{
    await cPage.openApplication();
        let logintxt=await cPage.loginPageText.getText();
        console.log(logintxt);
        await expect(cPage.loginPageText).toHaveTextContaining('Welcome to Sales and Inventory!')
        await cPage.Login(username,password);
        let alertTxt =await browser.getAlertText();
        expect(await browser.getAlertText()).toHaveTextContaining("Prince Ly Welcome!")
        await console.log(alertTxt);
        await browser.acceptAlert();
        HomePageTxt = await cPage.homePageTxt.getText();
        console.log(HomePageTxt);
        await userAccount.clickOnAccounts.click();
        await userAccount.addAccounts.click();
        let userAccName=useraccID+ran;
        await userAccount.fillallData(1,userAccName,userpassword)
        
        for (let f = 1;f <1000; f++)
         {
            let us=userAccount.dynamicxpath(f);
           let Unames = await (await us).getText();
          await console.log(Unames);
            if (Unames == userAccName) {
                console.log("USer is Identified "+Unames);
                break;
            }
        }
        await cPage.logoutSession();

 })
})

})