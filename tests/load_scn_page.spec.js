function ScWebPage() {
    var self = this;

    var EC = protractor.ExpectedConditions;

    self.untilLoaded = function() {
        var deferred = protractor.promise.defer();
        element.all(by.css(".scs-scn-element"))
            .first()
            .getAttribute("class)")
            .then(function(array) {
                console.log(array);
                var acc = array != null && array.indexOf("resolve") == -1;
                console.log(acc);
                if (acc) {
                    deferred.fulfill(acc);
                }
            });
        console.log(deferred);
        console.log(deferred.promise);
        return deferred.promise.value_;
    }

    self.waitForScWebIsLoaded = function() {
        browser.get("http://localhost:8000");
        browser.wait(EC.visibilityOf($(".scs-scn-element"))
            , 10000);
        browser.wait(self.untilLoaded, 10000)
    }

    self.getActiveWindowId = ()=> {
        return element.all(by.css(".sc-window"))
            .filter(element=>element.isPresent()).get(0);
    }
}

function ScnPage(sc_window) {
    var self = this;
    self.getScLinks = function() {
        return sc_window.all(by.css(".scs-scn-element"));
    }
    self.waitForScLinksIsResolved = function() {

    }
}

describe("Webdriver tutorial", function() {

    var scWebPage = new ScWebPage();

    beforeEach(function() {
        scWebPage.waitForScWebIsLoaded();
    })


    it('has the title of the post in the window\'s title', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
        expect(scnPage.getScLinks().first().getText()).toBe("true")
    })
})