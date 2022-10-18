describe("Sales And Inventory", async () => 
{
    xit('Creating Supplier', async () => 
    {
        await browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php")
        await browser.maximizeWindow();
        await browser.$("//h1[.='Welcome to Sales and Inventory!']").getText();
        await expect(browser).toHaveTitleContaining('Sales And Inventory')
        await browser.$("//input[@placeholder='Username']").setValue("unguardable")
        await browser.$("//input[@placeholder='Password']").setValue("admin")
        await browser.$("//button[@name='btnlogin']").click();
        alertTxt =browser.getAlertText();
        console.log(alertTxt);
        await browser.acceptAlert();
        HomePageTxt = await browser.$("//div[.='Sales and Inventory System']").getText(); 
        console.log("Home Page Launched Successfully");
        console.log(HomePageTxt);
        await browser.pause(1000)
        supplierModel = await browser.$("//span[.='Supplier']");
        supplierModel.click();
        compList= await browser.$$("//div[@class='col-sm-12']/table/thead/tr/th[1]/following::td");
        for(values of compList)
        {
            console.log(values);
            break;
        }
    })})