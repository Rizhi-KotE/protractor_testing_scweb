var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
});
exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },

    chromeOnly: true,

    framework: 'jasmine',

    specs: ['tests/*spec.js'],
    exclude: ['tests/example*'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 20000
    },

    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: function() {
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(reporter);
    },

    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};
