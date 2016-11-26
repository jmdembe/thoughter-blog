(function() {
    'use strict';

    var expect = chai.expect;

    describe('thought data module', function() {
      it('Should know that the namespace exists', function (){
          expect(window.thoughter).to.be.an('object');
      });

      describe('getting list of thoughts', function() {

        it('should obtain list from the server from thoughtsList using an ajax call', function(doneCallback) {
          var result = window.thoughter.thoughtsList();
          expect(result).to.be.an('object');
          expect(result.done).to.be.a('function');
          expect(result.fail).to.be.a('function');

          result
            .done(function handleSuccess(data) {
              expect(data).to.be.an('array');
              doneCallback();
            })
            .fail(function handleFail() {
              doneCallback('thoughtsList was unable to get a list of thoughts from the server');
            });
        });
      });
      describe('posting new thoughts', function (doneCallback) {
        it('should post a new thought on submission', function () {
          var outcome = window.thoughter.newThought('test');
          expect(outcome).to.be.an('object');
          expect(outcome.done).to.be.a('function');
          expect(outcome.fail).to.be.a('function');

          outcome
            .done(function handleSuccess(data) {
              expect(data).to.be.an('object');
              expect(data.items).to.be.an('array');
              doneCallback();
            })
            .fail(function handleFail() {
              doneCallback('error');
          });
      });
    });
  });
}());
