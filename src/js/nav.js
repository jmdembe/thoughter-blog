(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    window.addEventListener('hashchange', function() {
        $('section').hide();
        $(window.location.hash).show();

        if(window.location.hash==='#recentthoughts') {
            window.thoughter.thoughtsList()
              .done(function addContent() {
                  window.thoughter.buildThoughts(); //re-insert data if needed
              });
        }


    });

})();
