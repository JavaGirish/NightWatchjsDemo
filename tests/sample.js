module.exports = {
'demo Test' : function(browser) {

    browser.url('https://admin-demo.nopcommerce.com/')
    .waitForElementVisible('#Email')
    .clearValue('#Email')
    .clearValue('#Password')
    .assert.containsText(".page-title", "Admin area demo");

    }

    }