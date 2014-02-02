/**
 * Created by Justin Y and Zachary V on 1/28/14.
 */

var assert = require("assert");
var initialize = require('./Functions').initialize;
var testSubject = initialize();

describe('initialize', function(){
    describe('Adding test', function(){
        // These break if we have anything besides what numbers are there
        it('Should store 0 in queue at index 0.', function(){
            testSubject.save("0");
            assert.equal("0", testSubject.getQueue(0));
        })
        it('Should store 1 in queue at index 1.', function(){
            testSubject.save("1");
            assert.equal("1", testSubject.getQueue(1));
        })
        it('Should store 2 in queue at index 2.', function(){
            testSubject.save("2");
            assert.equal("2", testSubject.getQueue(2));
        })
        it('Should store 3 in queue at index 3.', function(){
            testSubject.save("3");
            assert.equal("3", testSubject.getQueue(3));
        })
        it('Should store 4 in queue at index 4.', function(){
            testSubject.save("4");
            assert.equal("4", testSubject.getQueue(4));
        })
        it('Should store 5 in queue at index 4.', function(){
            testSubject.save("5");
            assert.equal("5", testSubject.getQueue(4));
        })
        it('Should store 1 in queue at index 0.', function(){
            assert.equal("1", testSubject.getQueue(0));
        })
        describe('Undo test', function(){
            it('Should move down the list', function(){
                assert.equal("4", testSubject.undo());
            })
        });
    });
});


