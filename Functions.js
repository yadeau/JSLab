
function initialize() {
    var queue = [];
    var position = 0;
    return {
        save: function (input) {
            if(queue.length == 5) {
                queue.shift();
            }
            queue.push(input);
            position++;
        },
        undo: function () {
            if(position != 0) {
                position--;
                var toReturn = queue[position];
                return toReturn;
            }
            return "Invalid use of undo"
        },
        redo: function () {
            if(position != 5) {
                position++;
                var toReturn = queue[position];
                return toReturn;
            }
            return "Invalid use of redo"
        },
        getQueue: function (input) {
            return queue[input];
        }
    }
}

module.exports.initialize = initialize;