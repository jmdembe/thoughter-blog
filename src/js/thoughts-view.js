(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    window.thoughter.buildThoughts = buildThoughts;


    /**
     * [buildThoughts description]
     * @param  {Array} listOfThoughts Passes a list of thoughts through the function
     */
    function buildThoughts (listOfThoughts) {
        if (!Array.isArray(listofThoughts)) {
          return;
        }

        listOfThoughts.forEach(function appendingThoughtsToAList (thought) {
        $('ul.thoughts')
            .append(
              '<li class=panel panel-primary>'+ thought.content+ thought.date +'</li>'
            )
        });

    }
})();
