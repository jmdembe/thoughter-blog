(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    var thoughtsList = window.thoughter.thoughtsList;

    function thoughtsList(message) {
        return $.ajax({
            url: 'https://thoughter.herokuapp.com/api/Thoughts',
            method: 'GET',
            data: {
                'id': Number,
                'content': String,
                'createTime': String,
            }
        });
    }



}());
