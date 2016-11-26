(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    window.thoughter.thoughtsList = thoughtsList;
    window.thoughter.newThought = newThought;


    /**
     * function that grabs thoughts from the API
     * @return {Promise}        Promise from ajax call
     */

    function thoughtsList() {
      return $.ajax({
          url: 'https://thoughter.herokuapp.com/api/Thoughts?filter={"limit":10, "order":"createTime DESC"}',
          method: 'GET',
          dataType: 'json',

      })

      .fail(function processErrorThoughts(xhr) {
          console.log('The submission did not go through', xhr);
           $('ul')
            .append('<li>The submission did not go through</li>');
        });
      }

      /**
       * newThought enters a new thought after the user hits submit
       * @param  {String} content This is the new thought
       * @return {Promise}         Ajax promise
       */

      function newThought(content) {
        if (typeof(content)!== 'string') {
            var dfdObj = $.Deferred();
            dfdObj.reject('I need content!');
            return dfdObj.promise();
        }
        return $.ajax({
            url: 'https://thoughter.herokuapp.com/api/Thoughts',
              method: 'POST',
              dataType: 'json',
              data:JSON.stringify({'content': content}),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          .done (function newThoughtSuccess(data) {
              console.log(data);
          })
          .fail (function newThoughtError(xhr) {
              console.log('Try again', xhr);
          });

        }
})();
