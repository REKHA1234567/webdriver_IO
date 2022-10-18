const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync("./test/specs/TestData/createCustomerData.json"))
let custName;
var customerPage = require("../pageobjects/createCustomerPage")
var cPage = require("../pageobjects/CommonPage")
describe("Sales And Inventory", async () => {


    const ran = Math.floor(Math.random() * 10000);
    credentials.forEach(({ username, password, firstname, lastname, phoneno }) => {
        it('Creating Customer', async () => {
            await cPage.openApplication();
            let logintxt = await cPage.loginPageText.getText();
            console.log(logintxt);
            await expect(cPage.loginPageText).toHaveTextContaining('Welcome to Sales and Inventory!')
            await cPage.Login(username, password);
            let alertTxt = await browser.getAlertText();
            await console.log(alertTxt);
            expect(await browser.getAlertText()).toHaveTextContaining("Prince Ly Welcome!")
            await browser.acceptAlert();
            HomePageTxt = await cPage.homePageTxt.getText();
            console.log(HomePageTxt);
            //  await customerPage.addCustomers();
            await customerPage.clickOnCustomer.click()
            await customerPage.addCustomer.click();
            let firstName = firstname + ran;
            let lastName = lastname + ran;
            await customerPage.fillAllDetails(firstName, lastName, phoneno)

            let lastCol = await customerPage.LastColNo.getText();
            let lastcolInt = Number(lastCol);
           let firstpagefirnstname=await browser.$(`//table[@id='dataTable']//td[.='${firstName}']`).getText()

            if(firstName==firstpagefirnstname){
                await cPage.logoutSession();
            }
            else{
                for (let i = 1; i <= lastcolInt; i++) {
                    for (let newCustnames = 1; newCustnames <= 10; newCustnames++) {
                        let customerName = await customerPage.dynamicxpath(newCustnames)
                        custName = await customerName.getText()
                        console.log(custName);
                        if (custName == firstName) {
                            console.log("Customer Identified " + custName);
                            break;
                        }
                    }
                    await customerPage.clickOnNext.click()
                    if (custName == firstName) {
                        console.log("Customer Identified " + custName);
                        break;
                    }
                }
                await cPage.logoutSession();
            }
            

        })

    })
})