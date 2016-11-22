(function() {
    'use strict';

    var expect = chai.expect;

    describe('Posting a new thought', function() {
      it('Should connect with the server to post a new thought', function () {

        var result = window.thoughter.newThought();
        expect(result).to.be.an('object');
        expect(result.done).to.be.a('function');
        expect(result.fail).to.be.a('function');

        result
          .done(function() {
            
          });
        });
      });
})();
