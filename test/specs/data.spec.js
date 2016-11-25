(function() {
    'use strict';

    var expect = chai.expect;

    describe('thought data module', function() {
      it('Should expect the namespace exists', function (){
          expect(window.thoughter).to.be.an('object');
      });

      describe('getting list of thoughts', function() {

        it('should obtain list from the server from thoughtsList', function() {

          var result = window.thoughter.thoughtsList();
          expect(result).to.be.an('object');
          expect(result.done).to.be.a('function');
          expect(result.fail).to.be.a('function');

          result
            .done(function handleSuccess(data) {
              doneCallback();
              expect(data).to.be.an.instanceof(Array);
            });
        });
        it('should post a new thought upon submission', function() {

        });
      });
  });
}());
