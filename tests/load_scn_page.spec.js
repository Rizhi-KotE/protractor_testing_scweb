describe("Webdriver tutorial", function() {

    var EC = protractor.ExpectedConditions;

    beforeEach(function() {
        browser.get("http://localhost:8000");
        browser.wait(EC.visibilityOf($(".scs-scn-element"))
            , 10000);
        browser.wait(function() {
            var attr = browser.findElement(by.css(".scs-scn-element")).getAttribute("class");
            attr.then(string => {
                console.log(string);
                console.log(string != null && string.indexOf("resolve") == -1);
                attr.resolve(string != null && string.indexOf("resolve") == -1)
            });
            return attr;
        }, 10000)
    })


    it('has the title of the post in the window\'s title', function() {
        var sc_window = by.css(".scs-window")
        expect(browser.findElement(by.css(".scs-scn-element")).getText()).toBe("true")
    })
})