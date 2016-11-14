(function() {
    'use strict';


    $('.new-thought')
      .on('submit', function addThought(eventObj) {
          eventObj.preventDefault();

          console.log('hi');

          window.thoughter.newThought($('.form-control').val())
            .done(function addNewThought () {
                window.location.hash='#recentthoughts';
            })
            .fail(function errorHandler(xhr) {
                console.log('Why are you failing?', xhr);
            })
      })




}());
