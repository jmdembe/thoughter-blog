(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    var newThoughts = window.thoughter.newThoughts;

    /**
     * Function retrieves a list of all thoughts
     * @return {Object} [description]
     */
    function thoughtsList() {
        return $.ajax({
            url: 'https://thoughter.herokuapp.com/api/Thoughts',
            method: 'GET',
            dataType: 'json'
        })
        .done(function processThoughts(data){

        });
    }



}());
