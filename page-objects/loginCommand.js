/**
 * (pages/loginCommand.js)
 *
 * Page object.
 *
 */module.exports = {
    url: function () {
        return `https://console.dev.va.nec-oic.com/#/login`;
    },
    elements: {

        form: {
            selector: '.a-section'
        },
        username: {
            selector: '[aria-label="Username"]',
        },
        password: {
            selector: '[aria-label="Password"]',
        },
        signInButton: {
            selector: '[type="submit"]',
        },
        logout: {
            selector: '[class="q-item__section column q-item__section--main justify-center"]',
        },
        user: {
            selector: '[class="q-btn q-btn-item non-selectable no-outline text-capitalize q-btn--flat q-btn--rectangle q-btn--actionable q-focusable q-hoverable no-border-radius self-stretch q-btn-dropdown q-btn-dropdown--simple"]',
        },
    },
    commands: [{
        /*
         * Test Case-1:
         *
         * check all fields visibility title/username/password/submit.
         * */
        verifyLoginElements: function () {
            return this
                .assert.visible('@username')
                .assert.visible('@password')
               
        },
        /*
         * Test Case-2:
         *
         * login fail check, with invalid username/password.
         * */
        invalidUsernamePassword: function() {
            return this
                .setValue('@username', 'test@test.com')
                .setValue('@password', '1234567890')
                .click('@signInButton');
        },

        /*
         * Test Case-3:
         *
         * login fail check, with invalid username, valid password.
         * */
        invalidUsernameValidPassword: function() {
            return this
                .setValue('@username', 'test@test.com')
                .setValue('@password', 'Password123@')
                .click('@signInButton');
        },

        /*
         * Test Case-4:
         *
         * login fail check, with valid username, invalid password.
         * */
        validUsernameInvalidPassword: function() {
            return this
                .setValue('@username', 'Billy')
                .setValue('@password', '1234567890')
                .click('@signInButton');
        },


        /*
         * Test Case-5:
         *
         * login success.
         * */
        validUsernamePassword: function() {
            return this
                .setValue('@username', 'Billy')
                .setValue('@password', 'Password123@')
                .click('@signInButton');
        },

        /*
         * Test Case-6:
         *
         * login success check, with valid username/password, user profile page check and logout success.
         * */


        logoutSuccess: function() {
            return this
                .click('@user')
                .pause(1000)
                .click('@logout');
        },
    }],
};