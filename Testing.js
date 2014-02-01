/**
 * Created by Justin Y and Zachary V on 1/28/14.
 */

var assert = require("assert");
var initialize = require("./Functions").initialize;

describe('initialize', function(){
    describe('test 1', function(){
        it('should create a paragraph with given text', function(){
            var initialize = new initialize();
            initialize.save("blah");
            assert.equal("blah", queue[0]);
        })
    });
});

