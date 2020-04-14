module.exports = {
    tags: ["demo"],
    "Direct Proposal test" : function (browser) {
    browser 
    .maximizeWindow()
    .url("https://hhf.qa.howapp.co.uk/login") // Go to a url
    .waitForElementVisible('body', 1000) // wait till page loads
    .assert.title("Propel Admin ▪ Propel Finance ▪ Personal. Progressive. Partnering.") // Make sure Site title matches
    .assert.visible("input[type=email]") 
    .setValue("input[type=email]", "AAshok@propelfinance.co.uk") // send values
    .assert.visible("input[type=password]")
    .setValue("input[type=password]", "Saisantoo56")
    .saveScreenshot('C://Users//ashok//OneDrive//Documents//Propel-Nightwatch//tests_output//reportsScreenshots//homepageDP1.png')
    .click('button[type=submit]') // click on search box
    .click("#createMenuLink > svg > path") 
    .click("#secondary-sidebar-create > div.secondary-sidebar-content.text-left.mt-20 > div:nth-child(1) > a > div.menu-item-text")
    .click("#app > main > div > div.deal-type-wrapper > div:nth-child(2) > div:nth-child(1) > button")
    .execute('window.scrollTo(0,document.body.scrollHeight);')
    .pause(2000)//Account-manager-deatils
    .click("#direct_proposal_form > div:nth-child(7) > div > div > span > span.selection > span")
    .setValue("body > span > span > span.select2-search.select2-search--dropdown > input","Cla")
    .pause(3000)
    .click(".select2-dropdown.account-manager-select .select2-results__option--highlighted")
    //#select-funder-details
    .click("#direct_proposal_form > div.form-group.introducer > div > div > span")
    .setValue("body > span > span > span.select2-search.select2-search--dropdown > input","le")
    .pause(3000)
    //.click(".select2-results__option .select2-results__option--highlighted")
    .click(".select2-dropdown.introducer-select .select2-results__option--highlighted")
    .pause(3000)// #select2-direct_introducer-s4-results > li > p
    .click("#select2-contactPersonSelect-container > span")
    .click("#select2-contactPersonSelect-results")
    .click(".contact-person-form #contact_name")
    .setValue(".contact-person-form #contact_name","Ashok")
    .click(".contact-person-form #contact_position")
    .setValue(".contact-person-form #contact_position","Manager")
    .click(".contact-person-form #contact_email")
    .setValue(".contact-person-form #contact_email","as@gmail.com")
    .pause(3000)
    .click("#btnSaveDirectContinue")
    .click("#app > main > div > div.direct-deal-wrapper > div:nth-child(2) > div > div.suppliers-wrapper.mt-10 > button")
    //.click(".btn-add-supplier")//#app > main > div > div.direct-deal-wrapper > div:nth-child(2) > div > div.suppliers-wrapper.mt-10 > button
    .click(".business-type:nth-child(2)")
    .click("name=business_type","Limited Company (LTD)")

    }
};