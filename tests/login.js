/**
 * (test/loginTest.js)
 *
 * 
 *
 */
 module.exports = {
     '@tags': ['google'],
     '@disabled': true,
    // tags: ['login'],
    before: (browser) => console.log('Test is starting...'),
    beforeEach: (browser) => console.log('Vantage login page testing...'),
    after: (browser) => console.log('Test is finished...'),

    'Test Case-1: Go to login page, check elements': (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .verifyLoginElements()
            .end();
    },
    'Test Case-2: Login fail, invalid username/pass': (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .invalidUsernamePassword()
            .assert.urlContains('login?session_expired=true')
            .end();
    },
    'Test Case-3: Login fail, invalid username and valid pass': (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .invalidUsernameValidPassword()
            .assert.urlContains('login?session_expired=true')
            .end();
    },
    'Test Case-4: Login fail, valid username and invalid pass': (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .validUsernameInvalidPassword()
            .assert.urlContains('login?session_expired=true')
            .end();
    },
    'Test Case-5: Login success, valid email/pass': (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .validUsernamePassword()
            .assert.urlContains('home')
            .end();
    },
    'Test Case-6: Logout success': (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .validUsernamePassword()
            .assert.urlContains('home')
            .logoutSuccess()
            .end();
    },
};