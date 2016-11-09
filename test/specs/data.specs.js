(function() {
    'use strict';

    var expect = chai.expect;

    describe('overview', function(){
        it('should know that the namespace exists', function() {
            expect(window.thoughter).to.be.an('object');
        })
    });
}());
