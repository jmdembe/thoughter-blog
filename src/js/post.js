(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    functon newThought() {
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
                console.log ("post success");
            })
            .fail (function processPostError(xhr) {
                console.log ("Error", xhr);
            })

        })
    }
}());
