(function() {
    'use strict';
    console.log("Page load");
    window.thoughter = window.thoughter || {};

    window.thoughter.messageList = messageList;

    window.addEventListener('hashchange', function(event) {
        $('section').hide()
        console.log('this works!', window.location.hash);
        $(window.location.hash).show()
    })

})();
