(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    window.thoughter.thoughtsList = thoughtsList;

    /**
     * Purpose: Retrieve a list of all thoughts from the server.
     * @return {Promise}  The Ajax call promise
     */
    function thoughtsList() {
        return $.ajax({
            url: 'https://thoughter.herokuapp.com/api/Thoughts?filter={"limit":10}',
            method: 'GET',
            dataType: 'json',
        })
        .done(function processThoughts(data){
            console.log("Information obtained", data);
        })
        .fail(function processErrorThoughts(xhr) {
            console.log('The submission did not go through', xhr);
            $('ul')
              .append('<li>The submission did not go through</li>')
        })
      }

})();
