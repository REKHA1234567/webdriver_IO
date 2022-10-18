class creatingUserAccounts{

get clickOnAccounts()
{
    return $("//span[.='Accounts']");
}
get addAccounts()
{
    return $("//i[@class='fas fa-fw fa-plus']")
}
get managerDropDown()
{
    return $("//select[@name='empid']")
}
get userName()
{
    return $("//div[@class='form-group']//input[@name='username' and @placeholder='Username']");
}
get passWord()
{
    return $("//div[@class='form-group']//input[@name='password'and @placeholder='Password']");
}
get submitButton()
{
  return $("//h5[.='Add User Account']/following::button[@type='submit']")
}
get clickOnProfile()
{
    return $("(//span[@class='mr-2 d-none d-lg-inline text-gray-600 small'])[2]");
}
get clickOnLogout()
{
    return $("//a[@data-target='#logoutModal']")
}
get confirmLogout()
{
    return $("//a[.='Logout'][1]");
}
async dynamicxpath(f)
{
 return await browser.$(`((//div[@class='card shadow mb-4'])[2]//td[2])[${f}]`)
}
async fillallData(index,uName,pWord)
{
    await this.managerDropDown.selectByIndex(index)
    await this.userName.setValue(uName)
    await this.passWord.setValue(pWord)
    await this.submitButton.click()
}
















}
module.exports = new creatingUserAccounts();