(function() {
    'use strict';

    var expect = chai.expect;

    describe('Adding thoughts to page', function() {
      it('Should add thoughts to the page', function () {

        afterEach(function() {
          $('#fixtures').html(fixtures);
        });
      });

      xit('Should not add thoughts if there are no thoughts to add', function() {
        window.thoughter.buildThoughts([]); //currently undefined as I wrote a function
        var result= $('ul.list li');
        expect(buildThoughts.length).to.equal(0);
      });
    });
})();
