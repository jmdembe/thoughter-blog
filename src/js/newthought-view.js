(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    $('.new-thought')
      .on('submit', function addThought() {
          window.thoughter.newThought($('.form-control').val())
            .done(function addNewThought () {
                window.location.hash='#recentthoughts';
            })
            .fail(function errorHandler(xhr) {
                console.log('Why are you failing?', xhr);
            });
      })
}());
