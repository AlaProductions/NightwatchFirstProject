module.exports = {
    tags: ["demo"],
    "Propel demo test" : function (browser) {
         browser 
         .url("https://hhf.qa.howapp.co.uk/login") // Go to a url
         .waitForElementVisible('body', 1000) // wait till page loads
         .assert.title("Propel Admin ▪ Propel Finance ▪ Personal. Progressive. Partnering.") // Make sure Site title matches
         .assert.visible("input[type=email]") 
         .setValue("input[type=email]", "AAshok@propelfinance.co.uk") // send values
         .assert.visible("input[type=password]")
         .setValue("input[type=password]", "Saisantoo56")
         .click('button[type=submit]') // click on search box
         .click("#createMenuLink > svg > path") 
         .click("#secondary-sidebar-create > div.secondary-sidebar-content.text-left.mt-20 > div:nth-child(1) > a > div.menu-item-text")
         
         .click("#app > main > div > div.deal-type-wrapper > div:nth-child(2) > div.col-md-4.offset-md-1 > button")
         .click("body > span > span > span.select2-search.select2-search--dropdown > input")
         .pause(2000) 
         .click("#participants_form > div.form-group.vendor > div > div > span > span.selection > span")
         //.assert.containsText("body > span > span > span.select2-search.select2-search--dropdown > input", "Gavs Plan shop")
         //.assert.visible("body > span > span > span.select2-search.select2-search--dropdown > input", "Gavs Plan shop")
         .setValue("body > span > span > span.select2-search.select2-search--dropdown > input","Gav's Plan shop")
         .pause(10000)              
         .waitForElementVisible("#select2-vendor-97-results > li[value='Gav's Plan shop']")
         .click("#select2-vendor-97-results > li[value='Gav's Plan shop']")
         //.expect.element("body > span > span > span.select2-search.select2-search--dropdown > input").to.have("Gavin Dowding")
         .setValue("//*[@id='select2-sales-person-container']/span","Gavin Dowding")
         .setValue("#select2-sales-admin-person-container","Dave Justice")
         .pause(2000)
         .end();
       }
 };