(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    window.thoughter.newThought = newThought;

    function newThought(content) {
      $.ajax({
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
}());
