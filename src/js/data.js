(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    window.thoughter.thoughtsList = thoughtsList;


    /**
     * function that grabs thoughts from the API
     * @param  {Number} filter
     * @return {Promise}        Promise from ajax call
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

      /**
       * newThought enters a new thought after the user hits submit
       * @param  {String} content This is the new thought
       * @return {Promise}         Ajax promise
       */

      function newThought(content) {
        if (typeof(id)!== 'string') {
            var dfdObj = $.Deferred();
            dfdObj.reject('I need content!')
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
          })

        }
})();
