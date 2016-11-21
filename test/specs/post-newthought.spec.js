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
            it('should indicate that the function is completed', function(asyncComplete){
                expect(asyncComplete).to.be.a('function');
            })

            it('should use an array to append thoughts as a list item', function (complete){
              var testArray = function buildThoughts ("listOfThoughts");

            })
            it('Should append items to page upon page load', function(asyncComplete) {
                expect(asyncComplete).to.be.a('function');
            })

            }
            asyncComplete();
          })
          .fail(function() {
            asyncComplete();
          })
        })
      })
})();
