(function() {
    'use strict';

    window.thoughter = window.thoughter || {};
    // window.thoughter.newThought = newThought;

    var content = $('.form-control').val();

    window.addEventListener('submit', function(event){
      event.preventDefault();
      $.ajax({
          url: 'https://thoughter.herokuapp.com/api/Thoughts',
          method: 'POST',
          data: {
              "id": Number,
              "content": content,
              "createTime": String,

          }
          // .done(function processPostSuccess(data) {
          //    console.log ("post success", data);
          // })
          // .fail(function processPostError(xhr) {
          //    console.log ("Error", xhr);
          // })
      });
      console.log("submit button");
    });

}());
