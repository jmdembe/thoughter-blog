(function() {
    'use strict';

    var expect = chai.expect;

    describe('overview', function() {
        it('Should expect the namespace exists', function (){
            expect(window.thoughter).to.be.an('object');
        });
    });
}());
