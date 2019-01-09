const assert = require("assert");
describe(`My suite`, () => {
    describe(`Just a test`, () => {
        it(`should return true`, () => {
            assert.equal(5, 5);
        })
    })

})