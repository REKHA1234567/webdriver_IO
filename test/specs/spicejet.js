describe('spicejet', async () => {
    it('Book a Flight', async () => {
        await browser.url("https://www.spicejet.com/")
        await browser.maximizeWindow();
        await browser.$("//div[@class='css-1dbjc4n r-zso239']//following::div[@data-testid='round-trip-radio-button']").click()
        // await browser.pause(2000)
        let dest = await browser.$("//div[@data-testid='to-testID-destination']");
        // await browser.pause(2000)
        dest.click();
        // await browser.pause(2000)
        await browser.$("//div[.='AMD']").click()
        // await browser.pause(2000)
        // let ret=await browser.$("//div[@class='css-76zvg2 css-bfa6kz r-1862ga2 r-1gkfh8e' and .='Return Date']");
        // ret.click()
        // await browser.pause(2000)
        await browser.$("//div[@data-testid='undefined-month-October-2022']//following::div[@data-testid='undefined-calendar-day-20']").click();
        // await browser.pause(2000)
        await browser.$("//div[@data-testid='undefined-month-December-2022']//following::div[@data-testid='undefined-calendar-day-5']").click();
        await browser.$("//div[@class='css-76zvg2 r-cqee49 r-n6v787 r-1ozqkpa' and .='Armed Forces']").click();
        // await browser.pause(2000)
        await browser.$("//div[@data-testid='home-page-flight-cta']").click();
        await browser.pause(3000)
        await browser.$("//div[@class='css-1dbjc4n r-1tf5bf9 r-1777fci r-1ww30s9']").click()
        await browser.$("//div[@class='css-1dbjc4n r-1awozwy r-z2wwpe r-1loqt21 r-18u37iz r-1777fci r-d9fdf6 r-1w50u8q r-ah5dr5 r-1otgn73']").click()
        await browser.debug()
    })

})