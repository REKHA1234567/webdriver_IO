const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync("./test/specs/TestData/createCustomerData.json"))
describe("Sales and Inventory", async () => {
    var Transaction = require("../pageobjects/adminTransactionPage")
    var cPage = require("../pageobjects/CommonPage")
    const ran = Math.floor(Math.random() * 10000);


    credentials.forEach(({username,password,customerName})=>{
        it("Admin_Transactions", async () => {
            await cPage.openApplication();
            let logintxt = await cPage.loginPageText.getText();
            console.log(logintxt);
            await expect(cPage.loginPageText).toHaveTextContaining('Welcome to Sales and Inventory!')
            await cPage.Login(username, password);
            let alertTxt = await browser.getAlertText();
            // await expect(alertTxt).toHaveTextContaining("Prince Ly Welcome!")
            await console.log(alertTxt);
            await browser.acceptAlert();
            HomePageTxt = await cPage.homePageTxt.getText();
            console.log(HomePageTxt);
            await Transaction.clickOnPOS.click();
            await Transaction.clickOnProductCategory();
            await Transaction.quantity.setValue("4")
            await Transaction.add.click();
            await browser.pause(1000)
            await Transaction.selectcustomer(customerName)
            await browser.debug()
            await Transaction.submitclick();
            await browser.pause(2000)
            await Transaction.paymentActivities();
            await browser.pause(2000)
            await cPage.logoutSession();
            await cPage.LoginWithCredentials(username, password);
            await browser.pause(2000)
            await browser.acceptAlert();
            HomePageTxt = await cPage.homePageTxt.getText();
            console.log(HomePageTxt);
            //Varification
            await browser.pause(2000)
            await Transaction.TransactionTab.click();
            await browser.pause(2000)
            let lastCol = await Transaction.LastColNo.getText();
            let lastcolInt = Number(lastCol);
            for (let i = 1; i <= lastcolInt; i++) {
                for (let f = 1; f <= 10; f++) {
                    let customer = Transaction.dynamicxpath(f)
                    custname = await customer.getText()
                    console.log(custname);
                    if (custname == 'Dieqcohr Rufino') {
                        console.log("Customer is Identified " + custname);
                        break;
                    }
                }
                await Transaction.clickOnNext.click()
                if (custname == 'Dieqcohr Rufino') {
                    console.log("Customer is Identified " + custname);
                    break;
                }
            }
            await cPage.logoutSession();
        })
    })

})