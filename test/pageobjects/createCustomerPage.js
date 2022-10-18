class createCustomer{
    
    get clickOnCustomer()
    {
        return $("//a[@href='customer.php']");
    }
    get addCustomer()
    {
        return $("//i[@class='fas fa-fw fa-plus']")
    }
    async addCustomers()
    {
        await browser.waitUntil(()=>this.clickOnCustomer.isClickable(),{
            timeout:2000,timeoutMsg:"Customer module is not clickable"
        })
        await browser.waitUntil(()=>this.addCustomer.isClickable(),{
            timeout:2000,timeoutMsg:"Add customer icon is not clickbale"
        })
        await  this.clickOnCustomer.click();
        await this.addCustomer.click();
    }
    get firstName()
    {
        return $("//div[@class='modal-content']//descendant::input[@placeholder='First Name']")
    }
    get lastName()
    {
          return $("//div[@class='modal-content']//descendant::input[@placeholder='Last Name']")
    }
    get phoneNumber()
    {
        return $("//div[@class='modal-content']//descendant::input[@placeholder='Phone Number']")
    }
    get clickOnSave()
    {
        return $("//button[@type='submit' and @class='btn btn-success']")
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
   async fillAllDetails(fname,lname,phoneNo)
   {
    await browser.waitUntil(()=>this.firstName.isDisplayed(),{
        timeout:3000,timeoutMsg:"Firstname text field is not clickbale"
    })
    await browser.waitUntil(()=>this.lastName.isClickable(),{
        timeout:2000,timeoutMsg:"Lastname text field is not clickbale"
    })
    await browser.waitUntil(()=>this.phoneNumber.isClickable(),{
        timeout:2000,timeoutMsg:"PhoneNumber text field is not clickbale"
    })
    await browser.waitUntil(()=>this.clickOnSave.isClickable(),
    {
        timeout:2000,timeoutMsg:"save button is clickable"
    })
       await this.firstName.setValue(fname)
       await this.lastName.setValue(lname)
       await this.phoneNumber.setValue(phoneNo)
       await this.clickOnSave.click()
   }
    






}
module.exports= new createCustomer();