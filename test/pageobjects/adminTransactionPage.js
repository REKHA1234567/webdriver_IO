class adminTransactionPage{
    get clickOnPOS()
    {
        return $("//span[.='POS']")
    }
    get posPageTxt()
    {
        return ("//h4[.='Product category']");
    }
    async clickOnProductCategory()
    {
         await browser.$("//a[.='CPU']").click();
    }
    get quantity()
    {
       return $("//h6[.='Lenovo ideapad 20059']/following-sibling::input[@name='quantity']")
    }
    get add()
    {
       return $("//h6[.='Lenovo ideapad 20059']/following-sibling::input[@type='submit']")
    }
    get TransactionTab()
    {
        return $("//span[.='Transaction']");
    }
    get LastColNo()
    {
    return $("//div[@id='dataTable_paginate']/descendant::li[last()-1]")
    }
    get clickOnNext()
    {
   return $("//a[.='Next']")
    }
    async dynamicxpath(f)
    {
    // await this.dXpath(f);
     return await browser.$(`(//td[@class='sorting_1'])[${f}]`)
    }
    // async selectandClickonProduct(value)
    // {
    //     await this.quantity.setValue(value);
    //     await this.add.click()
    // }
    async selectcustomer(n)
    {
        await $("//select[@name='customer']").selectByVisibleText('${n}');

    }
    // async selectcustomerdd(customerName)
    // {
    //     await this.selectcustomer.selectByVisibleText(customerName)
    // }

    
    async submitclick()
    {
        await browser.$("//button[.='SUBMIT']").click();
    }
    async paymentActivities()
    {
        let amtTxt = await browser.$("//h3[@class='font-weight-bold py-3 bg-light']").getText();
        console.log(amtTxt);
        await browser.$("//input[@placeholder='ENTER CASH']").setValue(amtTxt)
        await browser.$("//button[.='PROCEED TO PAYMENT']").click()
        await browser.pause(2000)
        let paymentSucces = await browser.getAlertText();
        console.log(paymentSucces);
    
        await browser.acceptAlert();
    }
}
module.exports=new adminTransactionPage();