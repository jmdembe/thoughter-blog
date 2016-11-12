(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    window.thoughter.newThought = newThought;

    function newThought() {
        return $.ajax({
            url: 'https://thoughter.herokuapp.com/api/Thoughts',
            method: 'POST',
            dataType: 'json',
            headers: {
                'id': Number,
                'content': String,
                'createTime': String,
            }
            .done (function processPostSuccess(data) {
                console.log ("post success", data);
            })
            .fail (function processPostError(xhr) {
                console.log ("Error", xhr);
            })

        });
    }
}());
