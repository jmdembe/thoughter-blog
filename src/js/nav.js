(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    window.addEventListener('hashchange', function(event) {
        $('section').hide();
        $(window.location.hash).show();

        if(window.location.hash==='#recentthoughts') {
            window.thoughter.thoughtsList()
              .done(function addContent(data) {
                  window.thoughter.buildThoughts(data);
              })
        }

        if(window.location.hash==='#newthoughts') {
            window.thoughter.newThought($('.form-control').val());
              .done(function addNewThought (content) {
                
              })
        }

    });

})();
