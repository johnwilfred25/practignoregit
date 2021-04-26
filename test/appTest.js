const assert = require('chai').assert;
//const sayHello =require('../app').sayHello;
//const sayType =require('../app').sayType;
//const addNumber =require('../app').addNumber;
const app = require('../app');

describe('app', function () {
    it('app should return hello', function () {
        let result = app.sayHello();
        assert.equal(result, 'hello');
    })
    it('type of variable', function () {
        let result = app.sayType(); 
        assert.typeOf(result, "string");
    })
    it('no should be above 5', function () {
        let result = app.addNumber(4, 2);
        assert.isAbove(result, 5);
    })
});