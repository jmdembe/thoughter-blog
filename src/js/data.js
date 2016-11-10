(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    // var thoughtsList = window.thoughter.thoughtsList;
    window.thoughter.thoughtsList = thoughtsList;

    /**
     * Purpose: Retrieve a list of all thoughts from the server.
     * @return {Promise}  The Ajax call promise
     */
    function thoughtsList() {
        return $.ajax({
            url: 'https://thoughter.herokuapp.com/api/Thoughts',
            method: 'GET',
            dataType: 'json',
        })
        .done(function processThoughts(data){

        });
    }



}());
