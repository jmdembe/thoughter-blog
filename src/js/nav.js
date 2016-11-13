(function() {
    'use strict';
    console.log("Page load");
    window.thoughter = window.thoughter || {};

    window.addEventListener('hashchange', function(event) {
        $('section').hide();
        console.log('this works!', window.location.hash);
        $(window.location.hash).show();
    });

    $('form')
      .on ('submit', function postThought (event) {
          event.preventDefault();
          window.thoughter.newThought($('.form-control').val());
      })
})();
