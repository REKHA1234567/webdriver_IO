const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync("./test/specs/TestData/createSupplierData.json"))

var supplier = require("../pageobjects/creatingSupplierPage")
var cPage = require("../pageobjects/CommonPage")
const ran = Math.floor(Math.random() * 10000);

describe("Sales And Inventory", async () => {

    credentials.forEach(({ username, password, suppliername,phoneno }) => {
        it('Creating Supplier', async () => {
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
            await supplier.clickOnSupplierModel.click();
            await supplier.clickOnAddSupplier.click();
            let supname = suppliername + ran;
            await supplier.sendDatatoAddSupplier(supname,phoneno)
            await supplier.clickOnSubmit.click();
            let lastCol = await supplier.LastColNo.getText();
            let lastcolInt = Number(lastCol);

             let firstPageVarify= await browser.$(`//table[@id='dataTable']//td[.='${supname}']`).getText();
             if(supname==firstPageVarify){
                await cPage.logoutSession();
            }
            else{
            for (let i = 1; i <= lastcolInt; i++) {
                for (let f = 1; f <= 10; f++) {
                    let comp = await supplier.dynamicxpath(f)
                    compname = await comp.getText()
                    console.log(compname);
                    if (compname == supname) {
                        console.log("Supplier Identified " + compname);
                        break;
                    }
                }
                await supplier.clickOnNext.click()
                if (compname == supname) {
                    console.log("Supplier Identified " + compname);
                    break;
                }
            }
            await cPage.logoutSession();
        }




        })







    })


})