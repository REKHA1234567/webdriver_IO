class commonPage{


    get userName()
    {
        return $("//input[@placeholder='Username']");
    }
    get passWord()
    {
       return $("//input[@placeholder='Password']")
    }
    get ClickSubmit()
    {
        return $("//button[@name='btnlogin']");
    }

    async Login(un,pw){
        await browser.waitUntil(()=>this.userName.isClickable(),{
            timeout:2000,timeoutMsg:"username fiels is not clickable"
        })
        await browser.waitUntil(()=>this.passWord.isClickable(),{
            timeout:2000,timeoutMsg:"passwordis not clickable"
        })
        await browser.waitUntil(()=>this.ClickSubmit.isClickable(),{
            timeout:2000,timeoutMsg:"not clicked"
        })
        await this.userName.setValue(un)
        await this.passWord.setValue(pw)
        await this.ClickSubmit.click();
    }

async openApplication()
{
    await browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php");
    await browser.maximizeWindow();
}
get loginPageText()
{
    return $("//h1[.='Welcome to Sales and Inventory!']");
}
// async LoginWithCredentials(un,pw)
// {
//     await this.userName.setValue(un)
//         await this.passWord.setValue(pw)
//         await this.ClickSubmit.click();
      
// }
get homePageTxt()
{
    return $("//div[.='Sales and Inventory System']");
}

get clickOnProfile()
{
    // return $("//a[@id='userDropdown']")
    return $("//a[@id='userDropdown']");
}
get clickonLogout()
{
    return $("//div[@aria-labelledby='userDropdown']//a[normalize-space()='Logout']");
}
get confirmLogout()
{
    return $("//h5[.='Ready to Leave?']/ancestor::div[@class='modal-content']/following::a[.='Logout']");
}
async logoutSession()
{

//  await browser.waitUntil(()=>this.clickOnProfile.isDisplayed(),{
//     timeout:3000,timeoutMsg:"profile is not clickable"
//  })
//  await this.clickOnProfile.scrollIntoView()
//  await this.clickOnProfile.click();
//  await browser.waitUntil(()=>this.clickonLogout.isDisplayed(),{
//     timeout:2000,timeoutMsg:"Logout is not clicked"
//  })
//  await this.clickonLogout.click();
//  await browser.waitUntil(()=>this.confirmLogout.isDisplayed(),{
//     timeout:2000,timeoutMsg:"Logout is not clicked"
//  })
//  await this.clickOnProfile.click();

    await browser.$("(//span[@class='mr-2 d-none d-lg-inline text-gray-600 small'])[2]").click();
    await browser.pause(1000)   
    await browser.$("//a[@data-target='#logoutModal']").click();
    await browser.pause(1000)   
    await browser.$("//a[.='Logout'][1]").click();
}

// async clickOnProfile(){
//     await browser.waitUntil(()=>this.clickOnProfile.isClickable(),{
//         timeout:2000,timeoutMsg:"profile is not clickable"
//      })
//      await this.clickOnProfile.click();
// }
// async clickOnLogout()
// {
//     await browser.waitUntil(()=>this.clickonLogout.isClickable(),{
//         timeout:2000,timeoutMsg:"Logout is not clicked"
//      })
//      await this.clickonLogout.click();
// }
// async confirmLogout()
// {
//     await browser.waitUntil(()=>this.confirmLogout.isClickable(),{
//         timeout:2000,timeoutMsg:"Logout is not clicked"
//      })
//      await this.clickOnProfile.click();
// }
// async logoutSession()
// {
//     this.clickOnProfile;
//     this.clickonLogout;
//     this.confirmLogout;
// }

}

module.exports=new commonPage();