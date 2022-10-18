describe("Practice", async()=>{
let cPage= require("../pageobjects/CommonPage")
let customerPage= require("../pageobjects/createCustomerPage")

it("login-smoke", async()=>{
  await cPage.openApplication();
  await cPage.Login("unguardable","admin")
  await browser.debug();


})
})