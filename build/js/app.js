(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    window.thoughter.thoughtsList = thoughtsList;
    window.thoughter.newThought = newThought;


    /**
     * function that grabs thoughts from the API
     * @param  {Number} filter
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

(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    window.addEventListener('hashchange', function() {
        $('section').hide();
        $(window.location.hash).show();

        if(window.location.hash==='#recentthoughts') {
            window.thoughter.thoughtsList()
              .done(function addContent(data) {
                window.thoughter.buildThoughts(data); //re-insert data if needed
              });
        }


    });
})();

(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    $('.new-thought')
      .on('submit', function addThought() {
          window.thoughter.newThought($('.form-control').val())
            .done(function addNewThought () {
                window.location.hash='#recentthoughts';
            })
            .fail(function errorHandler(xhr) {
                console.log('Why are you failing?', xhr);
            });
      });
}());

(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    window.thoughter.buildThoughts = buildThoughts;

    /**
     * [buildThoughts description]
     * @param  {Array} listOfThoughts Passes a list of thoughts through the function
     */
    function buildThoughts (listOfThoughts) {
        if (!Array.isArray(listOfThoughts)) {
          return;
        }

        listOfThoughts.forEach(function appendingThoughtsToAList (thought) {
        $('ul.thoughts')
            .html('')
            .append(
              '<li class=panel panel-primary>'+ thought.content+ thought.date +'</li>'
            );
        });

    }
})();
