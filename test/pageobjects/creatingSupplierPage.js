class creatingSupplierPage{
 get clickOnSupplierModel()
 {
    return $("//span[.='Supplier']");
 }
 get clickOnAddSupplier()
 {
    return $("//i[@class='fas fa-fw fa-plus']");
 }
 get addCompany()
 {
    return $("//input[@name='companyname']");
 }
 get addProvince()
 {
    return $("//select[@placeholder='Province']");
 }
get addCity()
{
    return $("//select[@placeholder='City'][1]");
}
get addPhoneNo()
{
   return $("//h5[.='Add Supplier']/parent::div/following-sibling::div//input[@placeholder='Phone Number']");
}
get clickOnSubmit()
{
   return $("//h5[.='Add Supplier']/parent::div/following-sibling::div//button[@type='submit']")
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
async firstpagevarification(firstname)
{
   return await browser.$(`//table[@id='dataTable']//td[.='${firstName}']`);
}

async sendDatatoAddSupplier(company,phoneNo)
{
    await this.addCompany.setValue(company)
    await this.addProvince.selectByIndex(1)
    await this.addCity.selectByIndex(1)
    await this.addPhoneNo.setValue(phoneNo)
}

}
module.exports=new creatingSupplierPage()