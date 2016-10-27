var ScWebPage = require("./page_object/ScWebPage")
var ScnPage = require("./page_object/ScnEditorPage")

describe("SCn test", function() {
    console.log(ScWebPage);

    var scWebPage = new ScWebPage();

    beforeEach(function() {
        browser.get("http://localhost:8000");
        scWebPage.waitForScWebIsLoaded();
    });


    it('Start page should has all resolved links', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
        var elements = scnPage.getScLinks();
        expect(elements.count()).not.toBeLessThan(2);
        elements.each(function(element) {
            expect(element).not.toContain("...")
        })
    });

    it('Scn page should resolved after switching to scg and back', function() {
        scWebPage.changeLanguige("scg");
        scWebPage.changeLanguige("scn");
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
        var elements = scnPage.getScLinks();
        console.log(elements)
        expect(elements.count()).not.toBeLessThan(2)
        elements.each(function(element) {
            expect(element).not.toContain("...")
        })
    });

    /*
    * при переходе из редактора на статью, она имеет двойное вхождение элементов*/
    it('Scn page should resolved after switching to scg and back, scn editor and back', function() {
        scWebPage.changeLanguige("scg");
        scWebPage.changeLanguige("scn");
        scWebPage.activateEditor();
        scWebPage.deactivateEditor();
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
        var elements = scnPage.getScLinks();
        console.log(elements)
        expect(elements.count()).not.toBeLessThan(2)
        elements.each(function(element) {
            expect(element).not.toContain("...")
        })
    });
});