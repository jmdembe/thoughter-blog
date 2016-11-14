(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    /**
     * [buildThoughts description]
     * @param  {Array} listOfThoughts [description]
     * @return {[type]}                [description]
     */
    window.thoughter.buildThoughts = function buildThoughts (listOfThoughts) {

        listOfThoughts.forEach(function appendingThoughtsToAList (thought) {
            $('ul.thoughts')
              .append('<li>'+ thought.content+ '</li>')
        });

    }
})();
