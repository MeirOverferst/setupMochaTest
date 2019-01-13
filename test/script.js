const assert = require("assert");
const factory = require("../scripts/index.js");

describe(`This is the test suite for wednesday`, () => {
    describe(`This convert a function`, () => {
        it(`should return the number came out of the string`, () => {
            const actualResult = factory.convert(`7`);
            const expectedResult = 7;

            assert.equal(actualResult, expectedResult);
        })
    })

    describe(`Reversing the string function`, () => {
        it(`Should return the string in reverse mode`, () => {
            const actualResult = factory.reverse(`jake`);
            const expectedResult = `ekaj`;

            assert.strictEqual(actualResult, expectedResult);

        })

        it(`should return false in case of  not string `, () => {

            const actualResult = factory.reverse(5);
            const expectedResult = false;

            assert.strictEqual(actualResult, expectedResult);

        })
    })
    describe(`Return info about a person`, () => {
        is(`Should return the person object`, () => {
            const actualResult = factory.returnInfo({ firstName: 'Kostas', lastName: 'Jake', age: 28 });
            const expectedResult = { firstName: 'Kostas', lastName: 'Jake', age: 28 };

            assert.equal(actualResult, expectedResult);

        })

    })
})