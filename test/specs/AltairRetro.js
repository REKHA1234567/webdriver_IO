describe("Sales And Inventory", async () => {
    let supname
    let compname
    const ran = Math.floor(Math.random() * 10000);
    
    
    
    xit('Creating Supplier', async () => {
        await browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php")
        await browser.maximizeWindow();
        await browser.$("//h1[.='Welcome to Sales and Inventory!']").getText();
        await expect(browser).toHaveTitleContaining('Sales And Inventory')
        await browser.$("//input[@placeholder='Username']").setValue("unguardable")
        await browser.$("//input[@placeholder='Password']").setValue("admin")
        await browser.$("//button[@name='btnlogin']").click();
        alertTxt = browser.getAlertText();
        console.log(alertTxt);
        await browser.acceptAlert();
        HomePageTxt = await browser.$("//div[.='Sales and Inventory System']").getText();
        console.log("Home Page Launched Successfully");
        console.log(HomePageTxt);
        await browser.pause(1000)
        supplierModel = await browser.$("//span[.='Supplier']");
        supplierModel.click();
        await browser.pause(1000)
        await browser.$("//i[@class='fas fa-fw fa-plus']").click()
        supname = "Supplier" + ran;
        // actualSupName = supname;
        const cName = await browser.$("//input[@name='companyname']");
        cName.setValue(supname);
        await browser.$("//select[@placeholder='Province']").selectByVisibleText('Abra')
        await browser.$("//select[@placeholder='City'][1]").selectByVisibleText("Boliney");
        await browser.$("//h5[.='Add Supplier']/parent::div/following-sibling::div//input[@placeholder='Phone Number']").setValue('8951462015');
        await browser.$("//h5[.='Add Supplier']/parent::div/following-sibling::div//button[@type='submit']").click();
        lastColNo = await browser.$("//div[@id='dataTable_paginate']/descendant::li[last()-1]").getText();
        console.log(lastColNo);
        let lastColInt = Number(lastColNo);
        for (let i = 1; i <= lastColInt; i++) {
            for (let f = 1; f <= 10; f++) {
                let comp = await browser.$(`(//td[@class='sorting_1'])[${f}]`)
                compname = await comp.getText()
                console.log(compname);
                if (compname == supname) {
                    console.log("Supplier Identified "+compname);
                    break;
                }
            }
            await browser.$("//a[.='Next']").click()
            if (compname == supname) {
                console.log("Supplier Identified "+compname);
                break;
            }
        }
        await browser.$("(//span[@class='mr-2 d-none d-lg-inline text-gray-600 small'])[2]").click();
        await browser.pause(2000)
        await browser.$("//a[@data-target='#logoutModal']").click();
        await browser.pause(2000)
        await browser.$("//a[.='Logout'][1]").click();
    })

xit('Creating User Accounts', async () => {
    await browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php")
    await browser.maximizeWindow();
    await browser.$("//h1[.='Welcome to Sales and Inventory!']").getText();
    await expect(browser).toHaveTitleContaining('Sales And Inventory')
    await browser.$("//input[@placeholder='Username']").setValue("unguardable")
    await browser.$("//input[@placeholder='Password']").setValue("admin")
    await browser.$("//button[@name='btnlogin']").click();
    alertTxt = await browser.getAlertText();
    console.log(alertTxt);
    await browser.acceptAlert();
    let HomePageTxt = await browser.$("//div[.='Sales and Inventory System']").getText();
    console.log(HomePageTxt);
    let accountsModel = await browser.$("//span[.='Accounts']");
    accountsModel.click();
    await browser.$("//i[@class='fas fa-fw fa-plus']").click();
    $("//select[@name='empid']").selectByVisibleText('Cesar, Prince Ly - Manager')
    await browser.pause(2000)
    await browser.$("//div[@class='form-group']//input[@name='username' and @placeholder='Username']").setValue("Kiran" + Math.random())
    await browser.$("//div[@class='form-group']//input[@name='password'and @placeholder='Password']").setValue(123456);
    await browser.$("//h5[.='Add User Account']/following::button[@type='submit']").click()
    // let listofUserAcc= await browser.$$("//h4[contains(.,'User')]/../following::tbody//td[2]").getText();
    // console.log(listofUserAcc);
    await browser.pause(1000)
    await browser.$("(//span[@class='mr-2 d-none d-lg-inline text-gray-600 small'])[2]").click();
    await browser.pause(1000)
    await browser.$("//a[@data-target='#logoutModal']").click();
    await browser.pause(1000)
    await browser.$("//a[.='Logout'][1]").click();
})

xit("Admin Transaction", async () => {
    await browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php")
    await browser.maximizeWindow();
    await browser.$("//h1[.='Welcome to Sales and Inventory!']").getText();
    await expect(browser).toHaveTitleContaining('Sales And Inventory')
    await browser.$("//input[@placeholder='Username']").setValue("unguardable")
    await browser.$("//input[@placeholder='Password']").setValue("admin")
    await browser.$("//button[@name='btnlogin']").click();
    let alertTxt = await browser.getAlertText();
    console.log(alertTxt);
    await browser.acceptAlert();
    let HomePageTxt = await browser.$("//div[.='Sales and Inventory System']").getText();
    console.log(HomePageTxt);
    await browser.$("//span[.='POS']").click();
    let catPageTitle = await browser.$("//h4[.='Product category']").getText();
    console.log(catPageTitle);
    await expect(browser.$("//h4[.='Product category']")).toHaveTextContaining('Product category')
    await browser.$("//a[.='CPU']").click();
    await expect(browser.$("//a[.='CPU']")).toHaveTextContaining('CPU');
    await browser.$("//h6[.='Lenovo ideapad 20059']/following-sibling::input[@name='quantity']").setValue("4");
    await browser.$("//h6[.='Lenovo ideapad 20059']/following-sibling::input[@type='submit']").click()
    await browser.pause(3000)
    $("//select[@name='customer']").selectByVisibleText('Dieqcohr Rufino')
    await browser.pause(3000)
    await browser.$("//button[.='SUBMIT']").click();
    await browser.pause(3000)
    let amtTxt = await browser.$("//h3[@class='font-weight-bold py-3 bg-light']").getText();
    console.log(amtTxt);
    await browser.$("//input[@placeholder='ENTER CASH']").setValue(amtTxt)
    await browser.pause(2000)
    await browser.$("//button[.='PROCEED TO PAYMENT']").click()
    await console.log('done till here');
    let paymentSucces = await browser.getAlertText();
    console.log(paymentSucces);
    await browser.acceptAlert();
    await browser.pause(1000)
    await browser.$("(//span[@class='mr-2 d-none d-lg-inline text-gray-600 small'])[2]").click();
    await browser.pause(1000)
    await browser.$("//a[@data-target='#logoutModal']").click();
    await browser.pause(1000)
    await browser.$("//a[.='Logout'][1]").click();
    console.log('done');

})

xit("Creating Customer", async()=>{ await browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php")
await browser.maximizeWindow();
await browser.$("//h1[.='Welcome to Sales and Inventory!']").getText();
await expect(browser).toHaveTitleContaining('Sales And Inventory')
await browser.$("//input[@placeholder='Username']").setValue("unguardable")
await browser.$("//input[@placeholder='Password']").setValue("admin")
await browser.$("//button[@name='btnlogin']").click();
alertTxt = await browser.getAlertText();
console.log(alertTxt);
await browser.acceptAlert();
let HomePageTxt = await browser.$("//div[.='Sales and Inventory System']").getText();
console.log(HomePageTxt);
await browser.$("//a[@href='customer.php']").click();
let customertxt=await browser.$("//h4[@class='m-2 font-weight-bold text-primary']").getText();
console.log(customertxt);
await expect(browser.$("//h4[@class='m-2 font-weight-bold text-primary']")).toHaveTextContaining("Customer");



})















})