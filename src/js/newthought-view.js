(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    $('.new-thought')
      .on('submit', function addThought() {
        console.log(1);
          window.thoughter.newThought($('.form-control').val())
            .done(function addNewThought () {
                window.location.hash='#recentthoughts';

            })
            .fail(function errorHandler(xhr) {
                console.log('Why are you failing?', xhr);
            })
      })

      /**
       * Lists a new thought to the recent thoughts
       * @param  {Array} thought The thought that the user submits
       */
      function listNewThought (thoughts) {
        thoughts.forEach(thought) {
          $('.thoughts')
              .append(
                  '<li class panel panel-default>'+ thought.content +'</li>'
              )
        }
      };




}());
