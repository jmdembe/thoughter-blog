(function() {
    'use strict';

    window.thoughter = window.thoughter || {};

    window.thoughter.buildThoughts = buildThoughts;

    function buildThoughts (listOfThoughts) {
        listOfThoughts.forEach(function appendingThoughtsToAList (thought) {
        $('ul.thoughts')
            .append('<li>'+ thought.content+'</li>')
        });

    }
})();
