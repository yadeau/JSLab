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
            testSubject.save("A");
            assert.equal("A", testSubject.getQueue(0));
        })
        it('Should store 1 in queue at index 1.', function(){
            testSubject.save("B");
            assert.equal("B", testSubject.getQueue(1));
        })
        it('Should store 2 in queue at index 2.', function(){
            testSubject.save("C");
            assert.equal("C", testSubject.getQueue(2));
        })
        it('Should store 3 in queue at index 3.', function(){
            testSubject.save("D");
            assert.equal("D", testSubject.getQueue(3));
        })
        it('Should store 4 in queue at index 4.', function(){
            testSubject.save("E");
            assert.equal("E", testSubject.getQueue(4));
        })
        it('Should store 5 in queue at index 4.', function(){
            testSubject.save("F");
            assert.equal("F", testSubject.getQueue(4));
        })
        describe('Undo test', function(){
            it('Should move down the list', function(){
                assert.equal("F", testSubject.undo());
            })
            it('Should return E', function(){
                assert.equal("E", testSubject.undo());
            });
            it('Should return D', function(){
                assert.equal("D", testSubject.undo());
            });
            it('Should return C', function(){
                assert.equal("C", testSubject.undo());
            });
            it('Should return B', function(){
                assert.equal("B", testSubject.undo());
            });
            it('Should return Invalid', function(){
                assert.equal("Invalid use of undo", testSubject.undo());
            });
        });

        describe('Redo test', function(){
            it('Should return B', function(){
                assert.equal("B", testSubject.redo());
            })
            it('Should return C', function(){
                assert.equal("C", testSubject.redo());
            });
            it('Should return D', function(){
                assert.equal("D", testSubject.redo());
            });
            it('Should return E', function(){
                assert.equal("E", testSubject.redo());
            });
            it('Should return F', function(){
                assert.equal("F", testSubject.redo());
            });
            it('should return 5', function(){
                assert.equal("5", testSubject.getPosition());
            });
            it('Should return Invalid', function(){
                assert.equal("Invalid use of redo", testSubject.redo());
            });
        });
    });
});


