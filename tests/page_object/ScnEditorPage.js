function ScnPage(sc_window) {
    var self = this;
    self.getScLinks = function() {
        return sc_window.all(by.css(".scs-scn-element"));
    }

    self.waitForScLinksIsResolved = function() {

    }
}

module.exports = ScnPage