(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    $('.new-thought')
      .on('submit', function addThought() {
          window.thoughter.newThought($('.form-control').val())
            .done(function addNewThought (data) {
                window.location.hash='#recentthoughts';
                console.log('did done work');
                window.thoughter.buildThoughts(data);
            })
            .fail(function errorHandler(xhr) {
                console.log('Why are you failing?', xhr);
            })
      })






}());
